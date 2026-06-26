// @ts-check
/**
 * ERP-437 — 多國語系「切換」驗證（單一錄影檔涵蓋全流程）
 *
 * 從繁體中文首頁出發，依序透過右上角語系下拉切換到 EN → JA → KO → VI → zh-TW，
 * 並在每次切換後驗證：
 *   - URL 路徑正確
 *   - <html lang> 正確
 *   - Hero / 內容含本地化關鍵字
 *   - 主要區塊呈現完整、無版面破損
 *   - 對應國旗在語系按鈕上顯示
 *
 * 由於 playwright.config.js 設定了 video: 'on'，此測試會產生「全程操作瀏覽的錄影」，
 * 可從 test-results/<spec>/video.webm 取得，直接上傳至 Jira ERP-437 comment。
 */
const { test, expect } = require('@playwright/test');
const path = require('path');
const {
  switchLanguageViaMenu,
  scrollThroughPage,
  assertSectionsRendered,
  assertNoLayoutBreakage,
  attachConsoleErrorCollector,
} = require('./helpers/pageHelpers');
const { LOCALES, REQUIRED_SECTIONS } = require('./fixtures/locales');

const SCREENSHOT_DIR = path.join(__dirname, '..', 'artifacts', 'screenshots');

test.describe('多語系切換流程（全程錄影）', () => {
  test('依序切換 zh-TW → en → ja → ko → vi → zh-TW，截圖並驗證', async ({ page }, testInfo) => {
    const consoleErrors = attachConsoleErrorCollector(page);

    // 起始於繁中首頁
    await page.goto('/', { waitUntil: 'networkidle' });
    await verifyLocale(page, LOCALES[0], testInfo);

    // 依序切換到其他語系
    const order = ['en', 'ja', 'ko', 'vi', 'zh-TW'];
    for (const key of order) {
      const target = LOCALES.find((l) => l.key === key);
      if (!target) throw new Error(`Unknown locale: ${key}`);

      await switchLanguageViaMenu(page, target.menuLabel);
      await page.waitForLoadState('networkidle');

      // URL 驗證
      const url = new URL(page.url());
      expect(url.pathname, `切換到 ${key} 後 URL 應為 ${target.path}`).toBe(target.path);

      await verifyLocale(page, target, testInfo);
    }

    expect(consoleErrors, `console 不應有錯誤：\n${consoleErrors.join('\n')}`).toEqual([]);
  });
});

/**
 * 單一語系頁面的完整驗證 + 截圖
 * @param {import('@playwright/test').Page} page
 * @param {ReturnType<typeof Object>} locale
 * @param {import('@playwright/test').TestInfo} testInfo
 */
async function verifyLocale(page, locale, testInfo) {
  // <html lang>
  await expect.poll(async () => page.getAttribute('html', 'lang')).toBe(locale.htmlLang);

  // 語系按鈕國旗
  const flagSrc = await page.locator('summary.lang__btn img.lang__flag').getAttribute('src');
  expect(flagSrc, `${locale.key}：按鈕應顯示 ${locale.flag}`).toContain(locale.flag);

  // 區塊呈現
  await assertSectionsRendered(page, REQUIRED_SECTIONS);

  // 內容關鍵字
  const bodyText = (await page.locator('body').innerText()).toLowerCase();
  const ok =
    locale.heroIncludes.some((kw) => bodyText.includes(kw.toLowerCase())) ||
    locale.navIncludes.some((kw) => bodyText.includes(kw.toLowerCase()));
  expect(ok, `${locale.key}：內容應包含本地化關鍵字`).toBe(true);

  // 全頁滾動 + 截圖
  await scrollThroughPage(page);
  await assertNoLayoutBreakage(page);

  const shotPath = path.join(SCREENSHOT_DIR, `switch-${locale.key}.png`);
  await page.screenshot({ path: shotPath, fullPage: true });
  await testInfo.attach(`switch-${locale.key}`, {
    path: shotPath,
    contentType: 'image/png',
  });
}
