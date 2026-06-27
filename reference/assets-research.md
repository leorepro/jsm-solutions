# Atlassian Assets 研究紀錄

> 整理日期：2026-06-28
> 用途：作為 jsm.solutions 新增「Assets 介紹頁」的內容素材庫。
> 資料來源：
> 1. [Manage objects 操作文件（15 篇）](https://support.atlassian.com/assets/docs/manage-objects/)
> 2. [Asset and configuration management 產品行銷頁](https://www.atlassian.com/software/jira/service-management/features/asset-and-configuration-management)
> 3. [YouTube：Asset management features in JSM](https://www.youtube.com/watch?v=KN-JiAj8bNQ)（Atlassian 官方，2021-09-21，約 2 分 50 秒）
> 4. [Assets Cloud get started 入門指南](https://www.atlassian.com/software/jira/service-management/product-guide/tips-and-tricks/assets-cloud-get-started)

---

## 1. Assets 是什麼

Assets 是 **Jira Service Management（JSM）付費方案內建的資產與設定管理（ITAM / CMDB）模組**。它讓團隊追蹤資產、設定項（CI）與資源，看清應用程式、服務、基礎架構之間的相依關係，藉此**加速事件解決、降低變更風險、把資產資料集中成單一可信來源**。

定位差異化：資產資訊直接內建在 Jira 裡，不需另一套獨立 CMDB 工具，資產與工單／事件天然連動。

> 金句：「Effective service configuration management depends on accurate asset information.」（有效的服務設定管理，取決於準確的資產資訊。）

---

## 2. 核心資料模型（四層 + 參照）

階層由大到小：**Object Schema → Object Type → Object → Attribute**，再以橫向的 **Reference（參照）** 串起彼此。

| 層級 | 名稱 | 比喻 | 說明 / 例子 |
|------|------|------|------|
| 1 | **Object Schema（物件結構）** | 一整個資料庫 / 檔案櫃 | 最高層容器，就是實際的 CMDB；權限以 schema 為界。例：「IT 資產」schema、「HR 資料」schema |
| 2 | **Object Type（物件類型）** | 資料夾 / 分類 | 把相似物件分組。例：伺服器、筆電、軟體、廠商、地點 |
| 3 | **Object（物件）** | 一張卡片 | 個別且唯一的實例。例：「Leo 的 MacBook Pro #A1234」、一份合約、一輛車 |
| 4 | **Attribute（屬性）** | 卡片上的欄位 | 物件的單項資訊：型號、序號、擁有者、狀態、地點 |

- 每個 object type 必含 4 個必填屬性：**Name、Key、Created Date、Last Updated Date**。
- **同一物件類型內物件不可同名**；不同類型可同名。
- **Reference（參照）= 卡片之間的連線**：物件透過「含參照的屬性」連到其他物件，分 outbound / inbound。
  - 價值：資料不必重複。**「辦公室從蒙特婁搬到多倫多，只要改『蒙特婁』這個物件，不必逐台筆電修改。」**
  - 參照鏈構成設定關係圖（Service Map），可預判變更的下游影響。

---

## 3. 物件生命週期與 15 項操作

### A. 建立
- **Create an object**：在物件類型下新增設定項（可連續建立）。
- **Enable quick creation of referenced objects**：填參照屬性時，一步同時建立並參照另一物件，免中斷流程。（需管理員權限，schema settings → General 啟用）
- **Validate object attributes in quick creation**：快速建立時強制屬性驗證，把關資料品質。

### B. 編輯
- **Edit an object**：修改標籤、屬性、參照。
- **Edit multiple objects（批次編輯）**：List view → Bulk actions → Edit objects；每屬性可選 Keep / Change / Remove / Add。**無法復原**。

### C. 複製
- **Clone an object**：以既有物件為範本快速建立相似資產（輸入新名稱）。

### D. 刪除
- **Delete an object** / **Delete multiple objects**：**永久、不可復原**；批次刪除會一併移除參照連結（影響關係圖，需謹慎）。

### E. 搜尋與查詢
- **Search for objects and object types**：頂部全域搜尋（上限 20 物件 / 10 類型，更完整需進 schema 內）。
- **AQL（Assets Query Language）**：專用查詢語言，Advanced AQL 分頁可做複雜條件查詢。只看得到有權限的 schema。

### F. 匯出
- **Export objects**：匯出 CSV。可選分隔符號、編碼，及兩種格式：
  - **Data consistent**：保留原始格式（參照存 Key、使用者存 account ID、日期存 unix timestamp），適合遷移/還原。
  - **User friendly**：可讀標籤與日期，適合 Power BI / 試算表報表。

### G. 實體資產追蹤
- **Print QR codes**：為物件產生 QR code 貼到實體資產，用 Jira Cloud 行動 App 掃描即開對應數位紀錄。可選尺寸、存 PDF。

### H. 與 Jira 工作流連動
- **Attach Assets objects to Jira work items**：透過 Assets 自訂欄位把物件連到工作項；行動 App 可用名稱搜尋或掃 QR code 帶入。資產與工單雙向可追溯。

### I. 協作與稽核
- **Add / edit / delete comments**：直接在物件上留言協作（Activity → Comments）。
- **View changes made to an object**：物件變更歷程（Activity → History），唯讀稽核軌跡，供合規與責任追蹤。

---

## 4. 資料匯入 / 上手方式

四種主要把資料灌進 Assets 的方式：
1. **Assets Discovery**：免費無代理（agentless）網路掃描器，自動找出 IP 連網裝置，揪出「影子 IT」。
2. **Importers**：與外部來源排程同步（30+ 整合 adapter，如 SQL、Lansweeper 等）。
3. **CSV Import**：匯入試算表。
4. **JSON Import**：匯入結構化資料。

建議流程（5 階段）：規劃 schema → 建立 object type 與結構 → 定義 attribute 並匯入資料 → 連結 JSM 工作項與自動化 → 維運與衡量（稽核、報表、Confluence macro 顯示資產清單）。

> 心態金句：「100% accuracy at all times should be the goal but in reality, that may not be possible.」（先求有、逐步成長，降低導入門檻。）

---

## 5. 自動化情境（影片 demo：員工換故障筆電）

1. JSM 自動查出受影響筆電 → 狀態改「damaged」。
2. 從服務目錄提供替換清單 → 提交請求 → 自動路由給主管審批。
3. Agent 用 **graph 圖形視覺化**看請求者所有硬體與位置 → 用型號 + 地點篩選庫存 → 履行請求。
4. 自動化把新機擁有者設為該員工、狀態改「in service」，舊機標「broken」。

其他自動化觸發：保固到期、折舊排程、軟體授權合規派發、維持庫存準確。

---

## 6. 行銷頁可用賣點（彙整）

| 賣點 | 一句話訴求 |
|------|-----------|
| **資產資訊直接在 Jira 裡** | 不需另一套 CMDB，資產與工單天然連動（適合主標語） |
| **管理任何有價值的東西** | 從筆電、商業服務、員工，甚至鋼琴與魚——不被綁死在 IT 硬體 |
| **看清相依關係** | Service Map / Graph 視覺化，預判變更的下游衝擊，降低變更風險 |
| **工單即時帶資產脈絡** | 事件一進來就有脈絡，加速根因分析與解決 |
| **單一可信來源** | 改一個物件，全部連動更新，免重複維護 |
| **QR Code 實體盤點** | 列印 QR、手機掃碼即開紀錄、直接掛到工單 |
| **變更稽核軌跡** | 完整修改歷史，滿足 ITIL 變更管理與合規 |
| **AQL 強大搜尋 + 批次操作** | 企業級資料規模下精準查找、批次編輯/刪除/匯出/列印 |
| **多來源快速上手** | Discovery（揪 shadow IT）/ CSV / JSON / 30+ adapter |
| **自動化省力** | 保固、折舊、授權合規、庫存準確自動維護 |
| **趨勢與洞察** | 找出常見故障點、熱門服務，持續服務改善 |
| **商業成果** | 更好的規劃、財務稽核、合規檢查 |

**完整資產生命週期**：盤點（account）→ 部署（deploy）→ 維護（maintain）→ 升級（upgrade）→ 汰除（dispose）。

---

## 7. 注意事項 / 限制

- Assets 屬 JSM **付費方案**功能（Standard 起，進階能力在 Premium / Enterprise）。
- 批次編輯、刪除、留言刪除皆**不可復原**。
- 全域搜尋有筆數上限（20 / 10），大量查詢需進 schema 內或用 AQL。
- 行動端新增物件目前僅 Jira Cloud 行動 App。

---

## 8. 官方行銷頁逐區塊藍本（asset-and-configuration-management）

> 作為 `assets.html` 的官方文案與區塊順序參考。

1. **Hero**：標題「Asset and Configuration Management」；副標「Assets offers visibility into dependencies so you can manage assets and configuration items (CIs), quickly troubleshoot incidents, and minimize the risk of changes.」CTA：Try it now
2. **核心訊息**：「The place for your important data」— 不同於傳統資料庫，Assets 提供彈性開放的資料結構，把關鍵資源連到請求/事件/變更。
3. **三大價值塊**：
   - **Track what matters**：從硬體、軟體、CI 到人、鋼琴與魚（真的），用彈性資料庫整合所有企業資產；預建範本快速上手。
   - **Connect assets to work**：把 Assets 物件連到工單、事件、變更請求；橫跨 IT/HR/設施提升可視性與效率。
   - **Make better decisions**：對資產完整可視與掌控以降低風險、改善營運；新增彈性報表與儀表板。
4. **資料整合**：「Bring complete, current, and correct data to Assets」— Assets Data Manager 簡化多來源資料的整合、調和與分析。
5. **6 能力格**：Automation（自動從 Jira 工作項更新）、Queries（稽核/成本/問題診斷）、Templates（預建 schema 範本）、Discovery（偵測 IP 資產與相依）、Integrations（30+ adapter）、Reporting（資產健康/合規/財務洞察）。
6. **客戶見證**：「Assets is very important to keep predictability and planning of software licenses and costs.」— Damir Prusac, VP of Engineering, Infobip。
7. **資源**：Demo（How to manage inventory in Assets）、Whitepaper（Asset and Configuration Management Handbook for ITSM）、eBook（The Asset Evolution）。
8. **最終 CTA**：「Smart decisions start with quality asset data」— Try it free。

---

## 9. ACM Handbook（168 頁白皮書）重點

**核心論點**：傳統 CMDB 大量失敗是因「一開始範圍鋪太大」。Assets 以 ITIL 4「從現況出發、聚焦價值、小步快跑」精神，從一兩個真實問題起步，把 CMDB 從 DevOps 的「阻礙」翻轉為「推手」。

**Content vs Context（全書最核心對照，適合做圖卡）**：
| | ITAM 資產管理 | 服務組態管理 |
|---|---|---|
| 關注 | **內容（content）**：我們擁有什麼 | **脈絡（context）**：彼此如何關聯 |
| 問題 | 有哪些重要資產？採購、財務 | 關係與相依，理解「影響範圍」 |
> 金句：「ITAM is about content… service configuration management is about context.」

**ITAM 生命週期**：Plan → Acquire/Develop → Deploy → Maintain → Retire（循環）。

**ITIL 4 七大指導原則**（IT 版敏捷宣言）：從現況出發、聚焦價值、小步迭代收回饋、保持簡單實用、最佳化與自動化、協作並提升能見度、整體性思考。

**服務地圖範例**：網站與行動 App 都相依「支付平台」→ 對支付平台的變更自動標示兩者為「受影響服務」。

**第三方數據（行銷背書）**：
- **75% 的 CMDB 專案失敗、僅 25% 能獲得價值**（Gartner, 2020）。
- 電腦硬體佔 IT 預算約 **30%**（ITAM Review）。
- Gartner：到 2026 年 I&O 主管將在「用不到的功能」多花 **20 億美元**（2021 為 10 億）。
- **67% 組織有 CMDB，其中 91% 認為它對營運至關重要**（Forrester, 2022）。

**真實案例**：NYSE 因健全的服務組態管理把近 90 分鐘當機損害降到最低；Qualys 在 ProxyNotShell 零日漏洞公布後「數小時內」辨識受影響資產。

**金句**：「Decision making requires data. Effective decision making requires reliable data.」／「It's definitely time to leave those spreadsheets behind.」（告別試算表）

**導入路徑**：建立商業論證 → 釐清資料需求 → 實作；強調「從小而聚焦開始，數月內可建好有價值的系統」。

---

## 10. The Asset Evolution（eBook）重點

**核心**：資產管理不該再是被動盤點清冊，而應成為驅動商業成果、資安韌性與成長的策略平台——「from a necessary overhead into a strategic advantage（從必要成本到策略優勢）」。

**三大轉變（Key Shifts，適合做三欄區塊）**：
1. **孤島 → 連結**：統一平台、全企業可視；超越傳統 CMDB 範式。
2. **手動 → 自動（被動 → 主動）**：「Manual asset management is the enemy of accuracy（手動是準確性的敵人）」；用 AI/ML 做預測與異常偵測。
3. **文件 → 資安防線**：「Your assets are only as secure as your knowledge of them（你的資產只跟你對它們的了解一樣安全）」；從定期稽核到持續驗證。

**數據**：
- **76% 組織曾因資產管理不當而發生資安漏洞**（最有衝擊力的鉤子）。
- **73% 把自動化與即時準確性列為關鍵優先**。
- ITAM 市場 **2030 年估達 28.5 億美元**。
- Assets Data Manager 內建 **20+ 開箱即用連接器**。

**5 步轉型路線圖**：Evaluate（評估現況）→ Design（策略路線圖）→ Build（資料基礎/單一真實來源）→ Connect（打破孤島整合生態）→ Optimize（持續優化主動監控）。

**信任背書**：NASA、Audi、Deutsche Bank、Dropbox、Kiva；30 萬+ 企業。

---

## 11. 真實資產清單範例（CSV，可做頁面 demo 表格）

來源 Activity Handbook CSV，欄位：Name / Asset Tag / Serial Number / Status / Manufacturer / Vendor / Model / PO / Invoice / Price / Purchase Date / Refresh Date / Assigned User。樣本：

| Name | Status | Manufacturer | Model | Price | Assigned User |
|------|--------|--------------|-------|-------|---------------|
| AT-B022103 | In use | Apple | MacBook Pro 13" | $1,399 | Jennifer Fish |
| AT-B042101 | In use | Apple | MacBook Pro 13" | $1,399 | Blythe Smithson |
| ATM-B042103 | In use | Apple | MacBook Pro M2 | $1,259 | Jeremy Coolman |
| AT-B022101 | Disposed | Apple | MacBook Pro 13" | $1,399 | — |
| ATM-B111102 | In stock | Lenovo | ThinkPad E15 Gen 3 | — | — |

> 用途：在「資料模型」或「Assets 實際長相」區塊放一個擬真物件清單表（含狀態色標 In use/In stock/Disposed），讓讀者一眼看懂 object 與 attribute。
