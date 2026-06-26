// @ts-check
/**
 * ERP-437 — 多國語系載入驗證
 * 對每個語系 (zh-TW / en / ja / ko / vi) 進行：
 *   1. 直接開啟對應 URL，驗證 <html lang> 正確
 *   2. 主要區塊全部呈現、無版面破損
 *   3. Hero / Nav 區塊含預期的本地化關鍵字
 *   4. 全頁滾動截圖 (整頁) 儲存至 artifacts/screenshots/<lang>.png
 *   5. console 不應有錯誤
 */
const { test, expect } = require('@playwright/test');
const path = require('path');
const {
  scrollThroughPage,
  assertSectionsRendered,
  assertNoLayoutBreakage,
  attachConsoleErrorCollector,
} = require('./helpers/pageHelpers');
const { LOCALES, REQUIRED_SECTIONS } = require('./fixtures/locales');

const SCREENSHOT_DIR = path.join(__dirname, '..', 'artifacts', 'screenshots');

for (const locale of LOCALES) {
  test.describe(`語系：${locale.key}`, () => {
    test(`[${locale.key}] 頁面正常載入、內容呈現、無版面破損`, async ({ page }, testInfo) => {
      const consoleErrors = attachConsoleErrorCollector(page);

      // 1. 載入頁面
      await page.goto(locale.path, { waitUntil: 'networkidle' });

      // 2. <html lang> 正確
      const htmlLang = await page.getAttribute('html', 'lang');
      expect(htmlLang, `<html lang> 應為 ${locale.htmlLang}`).toBe(locale.htmlLang);

      // 3. 主要區塊呈現
      await assertSectionsRendered(page, REQUIRED_SECTIONS);

      // 4. Nav / Hero 含本地化文字片段 (至少其中一個出現)
      const bodyText = (await page.locator('body').innerText()).toLowerCase();
      const heroOk = locale.heroIncludes.some((kw) =>
        bodyText.includes(kw.toLowerCase())
      );
      expect(heroOk, `Hero 應含關鍵字之一：${locale.heroIncludes.join(' / ')}`).toBe(true);

      const navOk = locale.navIncludes.some((kw) =>
        bodyText.includes(kw.toLowerCase())
      );
      expect(navOk, `Nav 應含關鍵字之一：${locale.navIncludes.join(' / ')}`).toBe(true);

      // 5. 語系切換器顯示對應國旗
      const flagSrc = await page.locator('summary.lang__btn img.lang__flag').getAttribute('src');
      expect(flagSrc, `語系按鈕應顯示 ${locale.flag}`).toContain(locale.flag);

      // 6. 滾動全頁、截圖
      await scrollThroughPage(page);
      await assertNoLayoutBreakage(page);

      const shotPath = path.join(SCREENSHOT_DIR, `${locale.key}.png`);
      await page.screenshot({ path: shotPath, fullPage: true });
      await testInfo.attach(`screenshot-${locale.key}`, {
        path: shotPath,
        contentType: 'image/png',
      });

      // 7. 無 console error
      expect(consoleErrors, `console 不應有錯誤：${consoleErrors.join('\n')}`).toEqual([]);
    });
  });
}
