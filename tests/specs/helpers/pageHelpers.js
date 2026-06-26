// @ts-check
/**
 * 共用 helpers：滾動全頁、驗證主要區塊呈現、檢查無 console error、版面破損偵測
 */
const { expect } = require('@playwright/test');

/**
 * 平滑捲動整個頁面到底，再回到頂部 — 用於錄影時清楚展示所有內容
 * @param {import('@playwright/test').Page} page
 */
async function scrollThroughPage(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      const distance = 300;
      const delay = 120;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        if (
          window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 2
        ) {
          clearInterval(timer);
          resolve(null);
        }
      }, delay);
    });
  });
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(800);
}

/**
 * 驗證所有主要區塊都存在且可見
 * @param {import('@playwright/test').Page} page
 * @param {string[]} sectionIds
 */
async function assertSectionsRendered(page, sectionIds) {
  for (const sel of sectionIds) {
    const el = page.locator(sel);
    await expect(el, `Section ${sel} 應存在於頁面`).toHaveCount(1);
    await expect(el, `Section ${sel} 應為可見`).toBeVisible();
    // 寬高至少有實際 layout，避免版面破損
    const box = await el.boundingBox();
    expect(box, `Section ${sel} 應有 bounding box`).not.toBeNull();
    if (box) {
      expect(box.width, `Section ${sel} 寬度需 > 0`).toBeGreaterThan(0);
      expect(box.height, `Section ${sel} 高度需 > 0`).toBeGreaterThan(0);
    }
  }
}

/**
 * 偵測明顯版面破損：水平捲軸異常溢出、圖片載入失敗
 * @param {import('@playwright/test').Page} page
 */
async function assertNoLayoutBreakage(page) {
  // 1. 不應有水平捲軸 (允許 1px 容差)
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollW: doc.scrollWidth,
      clientW: doc.clientWidth,
    };
  });
  expect(
    overflow.scrollW - overflow.clientW,
    '頁面不應出現水平溢出'
  ).toBeLessThanOrEqual(2);

  // 2. 圖片不應載入失敗
  const brokenImages = await page.evaluate(() => {
    return Array.from(document.images)
      .filter((img) => img.complete && img.naturalWidth === 0)
      .map((img) => img.currentSrc || img.src);
  });
  expect(brokenImages, '不應有破圖').toEqual([]);
}

/**
 * 透過下拉選單切換語系
 * @param {import('@playwright/test').Page} page
 * @param {string} menuLabel - 例如 'English'
 */
async function switchLanguageViaMenu(page, menuLabel) {
  const langToggle = page.locator('details.lang > summary.lang__btn');
  await expect(langToggle, '應存在語系切換按鈕').toBeVisible();
  await langToggle.click();

  const target = page.locator(`.lang__menu a`, { hasText: menuLabel });
  await expect(target, `語系選單中應有「${menuLabel}」`).toBeVisible();
  await Promise.all([
    page.waitForLoadState('domcontentloaded'),
    target.click(),
  ]);
}

/**
 * 蒐集 console 錯誤
 * @param {import('@playwright/test').Page} page
 * @returns {string[]}
 */
function attachConsoleErrorCollector(page) {
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(String(err)));
  return errors;
}

module.exports = {
  scrollThroughPage,
  assertSectionsRendered,
  assertNoLayoutBreakage,
  switchLanguageViaMenu,
  attachConsoleErrorCollector,
};
