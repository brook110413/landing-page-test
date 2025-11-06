import { test, expect } from "@chromatic-com/playwright";

test.describe("電子報訂閱測試", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("應該顯示電子報訂閱區塊", async ({ page }) => {
    const newsletterTitle = page.getByTestId("newsletter-title");
    await expect(newsletterTitle).toBeVisible();
    await expect(newsletterTitle).toHaveText("訂閱最新消息");

    const newsletterForm = page.getByTestId("newsletter-form");
    await expect(newsletterForm).toBeVisible();
  });

  test("應該包含 email 輸入框和提交按鈕", async ({ page }) => {
    const emailInput = page.getByTestId("email-input");
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute("type", "email");
    await expect(emailInput).toHaveAttribute("placeholder", "輸入你的 Email");

    const submitButton = page.getByTestId("submit-button");
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toHaveText("訂閱");
  });

  test("應該能夠輸入 email 並提交", async ({ page }) => {
    const emailInput = page.getByTestId("email-input");
    const submitButton = page.getByTestId("submit-button");

    // 輸入 email
    await emailInput.fill("test@example.com");
    await expect(emailInput).toHaveValue("test@example.com");

    // 點擊提交
    await submitButton.click();

    // 確認顯示成功訊息
    const successMessage = page.getByTestId("success-message");
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText("訂閱成功");
  });

  test("空 email 不應該提交", async ({ page }) => {
    const submitButton = page.getByTestId("submit-button");
    const newsletterForm = page.getByTestId("newsletter-form");

    // 嘗試直接提交空表單
    await submitButton.click();

    // 表單應該還在（因為 HTML5 validation 會阻止提交）
    await expect(newsletterForm).toBeVisible();

    // 成功訊息不應該出現
    const successMessage = page.getByTestId("success-message");
    await expect(successMessage).not.toBeVisible();
  });

  test("提交後表單應該消失", async ({ page }) => {
    const emailInput = page.getByTestId("email-input");
    const submitButton = page.getByTestId("submit-button");

    // 填寫並提交
    await emailInput.fill("test@example.com");
    await submitButton.click();

    // 表單應該消失
    const newsletterForm = page.getByTestId("newsletter-form");
    await expect(newsletterForm).not.toBeVisible();

    // 成功訊息應該顯示
    const successMessage = page.getByTestId("success-message");
    await expect(successMessage).toBeVisible();
  });
});
