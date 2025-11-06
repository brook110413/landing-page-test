import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright 配置檔案
 * 文檔: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /* 測試執行設定 */
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  /* Reporter 設定 */
  reporter: 'html',

  /* 共用設定 */
  use: {
    /* 基礎 URL */
    baseURL: 'http://localhost:5173',

    /* 截圖設定 */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  /* 配置不同瀏覽器 */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* 啟動開發伺服器 */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
