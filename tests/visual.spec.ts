import { test, expect } from "@chromatic-com/playwright";

test.describe("視覺回歸測試", () => {
  test("首頁完整截圖", async ({ page }) => {
    await page.goto("/");

    // 等待頁面完全載入
    await page.waitForLoadState("networkidle");

    // 截取完整頁面
    await expect(page).toHaveScreenshot("landing-page-full.png", {
      fullPage: true,
    });
  });

  test("Hero 區塊截圖", async ({ page }) => {
    await page.goto("/");

    const hero = page.locator(".hero");
    await expect(hero).toHaveScreenshot("hero-section.png");
  });

  test("功能卡片截圖", async ({ page }) => {
    await page.goto("/");

    const featuresGrid = page.locator(".features-grid");
    await expect(featuresGrid).toHaveScreenshot("features-grid.png");
  });

  test("電子報表單截圖", async ({ page }) => {
    await page.goto("/");

    const newsletter = page.locator(".newsletter");
    await expect(newsletter).toHaveScreenshot("newsletter-section.png");
  });

  test("電子報提交後截圖", async ({ page }) => {
    await page.goto("/");

    // 填寫並提交表單
    await page.getByTestId("email-input").fill("test@example.com");
    await page.getByTestId("submit-button").click();

    // 等待成功訊息出現
    await page.getByTestId("success-message").waitFor();

    // 截取成功狀態
    const newsletter = page.locator(".newsletter");
    await expect(newsletter).toHaveScreenshot("newsletter-success.png");
  });

  test("行動版視圖截圖", async ({ page }) => {
    // 設定為行動裝置尺寸
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("mobile-view.png", {
      fullPage: true,
    });
  });

  test("平板視圖截圖", async ({ page }) => {
    // 設定為平板尺寸
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("tablet-view.png", {
      fullPage: true,
    });
  });
});
