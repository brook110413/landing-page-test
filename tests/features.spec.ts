import { test, expect } from '@playwright/test';

test.describe('功能區塊測試', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('應該顯示功能區塊標題', async ({ page }) => {
    const featuresTitle = page.getByTestId('features-title');
    await expect(featuresTitle).toBeVisible();
    await expect(featuresTitle).toHaveText('核心功能');
  });

  test('應該顯示三個功能卡片', async ({ page }) => {
    const feature1 = page.getByTestId('feature-1');
    const feature2 = page.getByTestId('feature-2');
    const feature3 = page.getByTestId('feature-3');

    await expect(feature1).toBeVisible();
    await expect(feature2).toBeVisible();
    await expect(feature3).toBeVisible();
  });

  test('功能卡片應該包含正確的內容', async ({ page }) => {
    // 第一個功能卡片
    const feature1 = page.getByTestId('feature-1');
    await expect(feature1.locator('h3')).toHaveText('快速部署');
    await expect(feature1.locator('p')).toContainText('5分鐘內完成設定');

    // 第二個功能卡片
    const feature2 = page.getByTestId('feature-2');
    await expect(feature2.locator('h3')).toHaveText('安全可靠');
    await expect(feature2.locator('p')).toContainText('企業級安全保護');

    // 第三個功能卡片
    const feature3 = page.getByTestId('feature-3');
    await expect(feature3.locator('h3')).toHaveText('數據分析');
    await expect(feature3.locator('p')).toContainText('即時數據追蹤');
  });

  test('功能卡片應該有 hover 效果', async ({ page }) => {
    const feature1 = page.getByTestId('feature-1');

    // 取得 hover 前的位置
    const boxBefore = await feature1.boundingBox();

    // Hover 到卡片上
    await feature1.hover();

    // 等待動畫完成
    await page.waitForTimeout(500);

    // 取得 hover 後的位置 (應該向上移動)
    const boxAfter = await feature1.boundingBox();

    // 確認卡片位置有變化 (Y 軸應該變小，表示向上移動)
    expect(boxAfter!.y).toBeLessThan(boxBefore!.y);
  });
});
