// @ts-check
/**
 * Playwright config for ERP-437 多國語系切換驗證
 * - 啟動本機 http-server (port 8000) 提供靜態網站
 * - 啟用全程錄影 (video=on) 與失敗截圖 (screenshot=only-on-failure)
 * - artifacts 會輸出到 test-results/，可直接上傳到 Jira 工單 comment
 */
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './specs',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  retries: 0,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results/report.json' }],
  ],
  outputDir: 'test-results',
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:8000',
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: {
      mode: 'on',
      size: { width: 1440, height: 900 },
    },
  },
  projects: [
    {
      name: 'chromium-desktop',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npx http-server .. -p 8000 -s -c-1',
    url: 'http://localhost:8000',
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
