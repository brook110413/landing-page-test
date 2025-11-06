# Landing Page 測試專案

這是一個使用 **Vite + React + TypeScript** 建立的簡易 Landing Page，包含完整的 **Playwright E2E 測試**。

## 專案特色

- ⚡ **Vite** - 極速開發體驗
- ⚛️ **React 19** - 最新版本的 React
- 📘 **TypeScript** - 型別安全
- 🎭 **Playwright** - 端到端測試
- 📸 **視覺回歸測試** - 自動截圖比對
- 🎨 **響應式設計** - 支援桌面、平板、手機

## 專案結構

```
landing-page-test/
├── src/
│   ├── App.tsx          # 主要 Landing Page 組件
│   ├── App.css          # 樣式檔案
│   └── main.tsx         # 應用程式入口
├── tests/
│   ├── landing-page.spec.ts  # 基本頁面測試
│   ├── features.spec.ts      # 功能區塊測試
│   ├── newsletter.spec.ts    # 電子報訂閱測試
│   └── visual.spec.ts        # 視覺回歸測試
├── playwright.config.ts      # Playwright 配置
└── package.json
```

## 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

訪問 [http://localhost:5173](http://localhost:5173) 查看頁面。

### 3. 執行測試

```bash
# 執行所有測試
npm test

# 使用 UI 模式執行測試
npm run test:ui

# 以有頭模式執行測試（可見瀏覽器）
npm run test:headed

# 除錯模式
npm run test:debug

# 查看測試報告
npm run test:report

# 更新視覺快照
npm run test:update-snapshots
```

## 測試涵蓋範圍

### 1. **基本頁面測試** (`landing-page.spec.ts`)
- ✅ 頁面標題
- ✅ 導覽列元素
- ✅ Hero 區塊內容
- ✅ 導覽連結功能

### 2. **功能區塊測試** (`features.spec.ts`)
- ✅ 功能標題顯示
- ✅ 三個功能卡片
- ✅ 卡片內容正確性
- ✅ Hover 互動效果

### 3. **電子報訂閱測試** (`newsletter.spec.ts`)
- ✅ 表單顯示
- ✅ Email 輸入驗證
- ✅ 提交功能
- ✅ 成功訊息顯示
- ✅ 空值驗證

### 4. **視覺回歸測試** (`visual.spec.ts`)
- ✅ 完整頁面截圖
- ✅ Hero 區塊截圖
- ✅ 功能卡片截圖
- ✅ 電子報表單截圖
- ✅ 行動版視圖
- ✅ 平板視圖

## Landing Page 內容

### 區塊說明

1. **導覽列 (Navbar)**
   - Logo: MyProduct
   - 導覽連結: 功能、價格、聯絡

2. **Hero 區塊**
   - 主標題: "打造你的夢想產品"
   - 副標題: 描述產品特色
   - CTA 按鈕: "立即開始"

3. **功能區塊 (Features)**
   - ⚡ 快速部署
   - 🔒 安全可靠
   - 📊 數據分析

4. **電子報訂閱 (Newsletter)**
   - Email 輸入框
   - 訂閱按鈕
   - 提交成功訊息

5. **頁尾 (Footer)**
   - 版權資訊

## 技術細節

### Playwright 配置重點

- **測試目錄**: `./tests`
- **基礎 URL**: `http://localhost:5173`
- **瀏覽器**: Chromium
- **自動啟動開發伺服器**: 是
- **失敗時截圖**: 是
- **重試次數**: CI 環境 2 次

### 視覺測試說明

首次執行視覺測試時，Playwright 會建立基準截圖：

```bash
npm run test:update-snapshots
```

後續測試會比對新截圖與基準截圖，如有差異會標記為失敗。

## 下一步

### 整合 Chromatic

如果要整合 Chromatic 進行視覺測試：

1. 安裝 Chromatic
```bash
npm install --save-dev chromatic
```

2. 建立 Storybook stories
3. 在 CI/CD 中執行 Chromatic

### 整合 Figma

可以在 Storybook stories 中加入 Figma 設計稿連結：

```typescript
export const Primary = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xxx?node-id=123',
    },
  },
};
```

## 建置部署

```bash
# 建置生產版本
npm run build

# 預覽建置結果
npm run preview
```

## 授權

MIT

---

**建立時間**: 2024
**技術棧**: Vite + React + TypeScript + Playwright
