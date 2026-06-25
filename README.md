# JSM.solutions — Opsgenie 遷移指南

協助 Opsgenie 用戶平穩遷移至 **Jira Service Management** 或 **Compass** 的單頁式網站。由鈦坦科技（Titansoft）製作，Atlassian 黃金級合作夥伴。

🔗 線上網址：<https://jsm.solutions>

## 內容來源

網站內容整理自《2506 Opsgenie migration》簡報，涵蓋：

- Opsgenie 的兩條遷移路徑（JSM / Compass）
- 關鍵功能比較
- 四步驟遷移流程
- 重要時程（停售 2025/6/4、終止支援 2027/4/5）
- 18 題常見問題（時程、技術流程、帳務費用）

## 技術

純靜態網站，無建置步驟，零相依套件：

```
.
├── index.html              # 頁面結構與內容
├── assets/
│   ├── css/style.css       # 樣式（Atlassian 風格設計系統）
│   └── js/main.js          # 互動：導覽、捲動動畫、FAQ
├── CNAME                   # 自訂網域 jsm.solutions
├── .nojekyll               # 停用 GitHub Pages 的 Jekyll 處理
└── .github/workflows/
    └── deploy.yml          # 推送 main 即自動部署
```

## 本機預覽

直接用瀏覽器開啟 `index.html`，或啟動簡易伺服器：

```bash
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

## 部署

推送到 `main` 分支後，GitHub Actions 會自動部署到 GitHub Pages。

### 首次設定

1. 在 GitHub 建立 repository 並推送本專案
2. 進入 **Settings → Pages**，將 **Source** 設為 **GitHub Actions**
3. **自訂網域**：在網域 DNS 設定加入指向 GitHub Pages 的紀錄
   - `A` 紀錄指向 `185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`
   - 或 `CNAME` 指向 `<你的帳號>.github.io`
   - GitHub 會讀取 `CNAME` 檔自動套用 `jsm.solutions`
4. 勾選 **Enforce HTTPS**

之後每次 `git push` 到 `main` 即自動重新部署。

## 聯絡

sales@titansoft.com.sg
