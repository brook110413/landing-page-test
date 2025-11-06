import { test, expect } from '@playwright/test';

test.describe('Landing Page 測試', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('應該顯示正確的頁面標題', async ({ page }) => {
    await expect(page).toHaveTitle(/landing-page-test/);
  });

  test('應該顯示導覽列', async ({ page }) => {
    // 檢查 Logo
    const logo = page.getByTestId('logo');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText('MyProduct');

    // 檢查導覽連結
    await expect(page.getByTestId('nav-features')).toBeVisible();
    await expect(page.getByTestId('nav-pricing')).toBeVisible();
    await expect(page.getByTestId('nav-contact')).toBeVisible();
  });

  test('應該顯示 Hero 區塊內容', async ({ page }) => {
    const heroTitle = page.getByTestId('hero-title');
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toHaveText('打造你的夢想產品');

    const heroSubtitle = page.getByTestId('hero-subtitle');
    await expect(heroSubtitle).toBeVisible();
    await expect(heroSubtitle).toContainText('簡單、快速、高效');

    const ctaButton = page.getByTestId('cta-button');
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveText('立即開始');
  });

  test('導覽連結應該可以點擊並跳轉到對應區塊', async ({ page }) => {
    // 點擊功能連結
    await page.getByTestId('nav-features').click();

    // 等待並確認跳轉到 features 區塊
    await expect(page.locator('#features')).toBeInViewport();
  });
});
