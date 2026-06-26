# ERP-437 — 多國語系切換驗證測試

對應 Jira 工單：[ERP-437](https://titansoftjira.atlassian.net/browse/ERP-437)

本目錄包含 **Playwright** 自動化測試，用於驗證 `jsm.solutions` 首頁的 5 種語系
（**zh-TW / en / ja / ko / vi**）載入、切換與版面正確性，並產出截圖與全程錄影
供上傳至 Jira 工單 comment。

## 目錄結構

```
tests/
├── package.json
├── playwright.config.js          # Playwright 設定（含 video: 'on'）
├── specs/
│   ├── fixtures/
│   │   └── locales.js            # 5 語系資料、必驗證區塊清單
│   ├── helpers/
│   │   └── pageHelpers.js        # 共用 helpers：滾動、區塊驗證、語系切換
│   ├── i18n-locales.spec.js      # 各語系獨立驗證 (5 個測試 = 5 張截圖)
│   └── i18n-switcher.spec.js     # 連續切換流程 (產出全程操作錄影)
├── scripts/
│   └── collect-artifacts.js      # 集中截圖/錄影到 artifacts/upload/
└── artifacts/                    # 測試產出 (git ignored)
    ├── screenshots/
    └── upload/                   # 上傳至 Jira 用
```

## 安裝

```bash
cd tests
npm install
# postinstall 會自動執行 playwright install chromium
```

## 執行

```bash
# 一鍵跑完所有測試 (內建 webServer，會自動啟動 http-server :8000)
npm test

# 想看瀏覽器操作可使用 headed 模式
npm run test:headed

# 開啟 HTML 報告
npm run report
```

## 產出物 (對應 ERP-437 驗收條件 AC)

| 檔案                                              | 說明                              |
| ------------------------------------------------- | --------------------------------- |
| `artifacts/screenshots/zh-TW.png` … `vi.png`      | 各語系獨立載入的全頁截圖 (共 5 張) |
| `artifacts/screenshots/switch-<lang>.png`         | 切換流程中每個語系的截圖           |
| `test-results/**/video.webm`                      | 全程操作瀏覽錄影                   |
| `playwright-report/index.html`                    | HTML 報告（含失敗 trace）          |

### 集中上傳檔案

```bash
node scripts/collect-artifacts.js
# → 所有截圖 + 錄影會被複製到 tests/artifacts/upload/
```

接著將 `tests/artifacts/upload/` 內檔案上傳到 ERP-437 工單 comment 即可。

## 測試覆蓋範圍

每個語系都會驗證：

1. ✅ `<html lang>` 屬性與該語系一致 (`zh-Hant` / `en` / `ja` / `ko` / `vi`)
2. ✅ URL 路徑正確 (`/`, `/en/`, `/ja/`, `/ko/`, `/vi/`)
3. ✅ 語系按鈕顯示對應國旗 (tw / gb / jp / kr / vn)
4. ✅ 所有 16 個主要區塊存在且可見、有非零的 bounding box
5. ✅ 頁面內容含預期的本地化關鍵字
6. ✅ 不出現水平溢出 (版面破損偵測)
7. ✅ 圖片載入成功 (無破圖)
8. ✅ console 無 error / pageerror

「切換流程」測試會從繁中出發依序點選 `English → 日本語 → 한국어 → Tiếng Việt → 繁體中文`，
每一步驗證以上條件，整段過程錄影。

## CI / 環境變數

| 變數        | 預設                    | 說明                   |
| ----------- | ----------------------- | ---------------------- |
| `BASE_URL`  | `http://localhost:8000` | 可指向已部署的測試環境 |
