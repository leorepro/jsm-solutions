/* ===================================================================
   JSM.solutions / interactions
   =================================================================== */
(function () {
  'use strict';

  /* ---------- Year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Countdown to Opsgenie end of support (2027-04-05) ---------- */
  (function () {
    var target = new Date(2027, 3, 5); // 月份 0-indexed：3 = 4 月
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var days = Math.ceil((target - today) / 86400000);
    var text = days > 0 ? days.toLocaleString('zh-Hant') : '0';

    // 可能有多處顯示倒數天數（Hero、時間軸下方）
    ['countdownDays', 'countdownDays2'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = text;
    });

    if (days <= 0) {
      // 已過終止支援日：Hero 倒數改為提示文字
      var cdNum = document.getElementById('countdownDays');
      if (cdNum) cdNum.style.display = 'none';
      var unit = document.getElementById('countdownUnit');
      if (unit) unit.style.display = 'none';
      var label = document.getElementById('countdownLabel');
      if (label) label.textContent = 'Opsgenie 已終止支援';
    }
  })();

  /* ---------- i18n：依 <html lang> 載入對應語言資料
     （中文為內建預設；其他語言由各頁的 assets/js/i18n/<lang>.js 提供 window.I18N_DATA） ---------- */
  var LANG = document.documentElement.lang || 'zh-Hant';
  var I18N = window.I18N_DATA || {};

  /* ---------- Industries (tabbed) ---------- */
  var ZH_INDUSTRIES = {
    tech: {
      name: '科技與電信業', en: 'Technology & Telecom',
      intro: '科技與電信業身處競爭激烈、變化飛快的市場，「速度」就是致勝關鍵。團隊得在維運複雜基礎設施的同時，提供卓越客戶服務——任何一次中斷或回應延遲，都可能直接衝擊客戶體驗與營收。',
      products: [
        'AI 驅動的工作流程、自動化規則與 SLA，減少人工、加快回應',
        '事件管理結合 AI 摘要，快速理解事件並啟動回應',
        '變更管理帶入研發脈絡，有信心地部署、降低上線風險',
        '集中式資產與組態管理，掌握複雜基礎設施全貌',
        '永遠在線的 AI 虛擬服務專員，自動處理密碼重設等常見請求'
      ],
      scenarios: [
        '網路／服務中斷時觸發事件流程，AI 摘要快速掌握、依 SLA 排序復原',
        '打造可客製的服務台與「消除重複任務」的價值流',
        '把變更與事件對應到正確的設備與組態，安心高頻發布',
        '全通路客服自動化，常見請求免人工處理'
      ],
      stat: 'Twitter 客服 email 量降低 80%（email 支援佔比 95%→15%）',
      clients: 'Twitter、Canva、Nextiva、Liberty Latin America'
    },
    finance: {
      name: '金融服務業', en: 'Financial Services',
      intro: '金融服務業在高度監管環境下處理大量敏感客戶資料與交易，任何服務中斷或資料外洩都可能造成法規裁罰與信任損失。如何在符合法規稽核的同時維持高可用性與效率，是核心的服務管理挑戰。',
      products: [
        '變更與組態管理結合稽核可視化，為每次變更留下可追溯軌跡',
        '具備 EBA、BaFin 等金融法規合規認證，可自訂工作流程與 SLA',
        '資產管理文件化、追蹤擁有權並降低成本',
        'SLA 結合 AI 分流的優先佇列，確保關鍵金融請求即時處理',
        'AI 自動化重複流程，強化溝通清晰度與利害關係人對齊'
      ],
      scenarios: [
        '以全通路與 AI 虛擬專員集中接收原本散落 email 的合規請求',
        '統一管理金融交易相關的請求、事件與變更',
        '客服、理財顧問與合規團隊在同一平台協作',
        '建置易自訂的自助服務入口，內外部使用者自助提交與追蹤'
      ],
      stat: '全球 50,000+ 企業採用 Jira Service Management',
      clients: 'National Bank of Canada、EQ Bank、Kushki、Clip'
    },
    retail: {
      name: '零售與電商', en: 'Retail & E-commerce',
      intro: '零售與電商面對旺季尖峰流量、線上加門市的全通路客服一致性，以及顧客資料保護等多重挑戰。JSM 以 AI 驅動的服務體驗，協助團隊在規模化的同時提升滿意度、加速問題解決。',
      products: [
        '跨線上與門市的全通路 AI 虛擬服務專員支援',
        '資產與庫存管理，追蹤庫存與設備生命週期',
        'AI 自動化工作流程，自動生成請求類型、規則與專案設定',
        'SLA 結合 AI 智慧分流的優先佇列',
        '具 AIOps 能力的事件管理，加速營運排障'
      ],
      scenarios: [
        '跨通路（網站、App、門市）統一客服，AI 結合知識庫自動回覆',
        '密碼重設等高頻請求自動處理，釋放人力',
        '即時掌握庫存、銷售與顧客行為數據，加速決策',
        '雙 11／黑五尖峰以 AIOps 快速偵測並解決系統故障',
        '門市 POS／終端設備故障的派工與生命週期管理'
      ],
      stat: 'The Very Group 上線以來平均滿意度 4.9 / 5',
      clients: 'The Very Group（Gartner ITSM 領導者、Forrester ESM 領導者）'
    },
    manufacturing: {
      name: '製造業', en: 'Manufacturing',
      intro: '製造業面對產線停機的高昂成本、設備預防性維護需求，以及跨團隊的庫存與資產管理。企業需要一套互通的系統來標準化作業，並串接 R&D、支援與維運團隊。',
      products: [
        '資產管理，追蹤資產／產品／服務的擁有權與生命週期',
        '事件回應（AIOps），串接 R&D、支援與維運團隊',
        '組態管理，提供基礎設施與服務相依關係的可視性',
        '全通路 AI 虛擬服務專員的請求管理',
        'AI 自動化結合 AI 分流優先佇列，確保 SLA 達成'
      ],
      scenarios: [
        '透過預防性維護，避免設備故障與產線停機',
        '追蹤並管理資產、產品或服務的庫存',
        '以留言、@提及與檔案共享進行跨團隊協作',
        '在同一系統管理請求（request）、事件（incident）與變更（change）',
        '產線設備故障的事件回應，定位相依資產、協調跨團隊復原'
      ],
      stat: '超過 50,000 家企業使用 Jira Service Management',
      clients: 'QAD、Lucid Motors、Saint-Gobain'
    }
  };
  var INDUSTRIES = (LANG !== 'zh-Hant' && I18N[LANG] && I18N[LANG].industries) || ZH_INDUSTRIES;

  // 介面標籤（依語言；中文為預設，其他語言由各 i18n/<lang>.js 的 ui 物件提供）
  var ZH_UI = { indProducts: '適用產品內容', indScenarios: '應用場景', indClients: '代表客戶：' };
  var UI = (LANG !== 'zh-Hant' && I18N[LANG] && I18N[LANG].ui) || ZH_UI;

  var indPanel = document.getElementById('indPanel');
  var indTabs = document.querySelectorAll('.ind-tab');

  function renderIndustry(key) {
    if (!indPanel) return;
    var d = INDUSTRIES[key];
    if (!d) return;
    indPanel.innerHTML = '' +
      '<p class="ind-intro">' + d.intro + '</p>' +
      '<div class="ind-cols">' +
        '<div class="ind-col">' +
          '<h3><span class="ind-col__ic">🧩</span>' + UI.indProducts + '</h3>' +
          '<ul class="ind-list ind-list--prod">' +
            d.products.map(function (p) { return '<li>' + p + '</li>'; }).join('') +
          '</ul>' +
        '</div>' +
        '<div class="ind-col">' +
          '<h3><span class="ind-col__ic">🎯</span>' + UI.indScenarios + '</h3>' +
          '<ul class="ind-list ind-list--use">' +
            d.scenarios.map(function (s) { return '<li>' + s + '</li>'; }).join('') +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="ind-proof">' +
        '<span class="ind-proof__stat">' + d.stat + '</span>' +
        '<span class="ind-proof__clients"><strong>' + UI.indClients + '</strong>' + d.clients + '</span>' +
      '</div>';
  }

  indTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      indTabs.forEach(function (t) { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      renderIndustry(tab.getAttribute('data-ind'));
    });
  });

  renderIndustry('tech');

  /* ---------- Nav: scrolled state + mobile toggle ---------- */
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');

  // Use an IntersectionObserver sentinel instead of a scroll listener
  // (avoids per-frame scroll handlers; see taste-skill motion rules).
  var sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:8px;pointer-events:none;';
  document.body.prepend(sentinel);

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      nav.classList.toggle('is-scrolled', !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(sentinel);
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-menu-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-menu-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- FAQ data ---------- */
  var ZH_FAQ = {
    schedule: [
      {
        q: 'Opsgenie 發生了什麼事？何時影響用戶？',
        a: '<p>自 2018 年起，Atlassian 一直致力於將 Opsgenie 的功能整合進平台與各項產品中，幫助 Dev 與 IT 團隊協作更順暢。</p>' +
           '<ul>' +
           '<li><strong>✅ 停售日期：<span class="hl">2025 年 6 月 4 日</span> 起</strong>　Opsgenie 將無法再新購（含直購、經銷、升降版本等）。已訂閱者仍可續約，僅限至支援終止前。</li>' +
           '<li><strong>⛔ 終止支援：<span class="hl">2027 年 4 月 5 日</span> 起</strong>　屆時 Opsgenie 將無法再登入與使用，所有未遷移資料也會被刪除。</li>' +
           '</ul>' +
           '<p>這表示所有現有用戶必須於 2027 年 4 月前完成遷移。距離終止支援已不到一年半，<span class="hl">應立即啟動檢驗與規劃</span>，轉換至 Jira Service Management 或 Compass。</p>'
      },
      {
        q: '遷移需要多久？會不會影響使用？',
        a: '<p>大多數遷移只需要幾分鐘，過程中 <span class="hl">不會有服務中斷或停機</span>。這是因為 Opsgenie 與 Jira Service Management / Compass 共用相同的後端架構。</p>' +
           '<p>你可以選定一個遷移日期，系統會在該日自動完成資料同步。整個遷移過程快速、穩定，不會影響通知傳送或使用者操作。</p>'
      },
      {
        q: '遷移後，我可以同時使用 Opsgenie 和新平台嗎？',
        a: '<p>可以。Atlassian 設計了一段最多可達 <span class="hl">120 天的並行使用期</span>。</p>' +
           '<p>這段期間內，Opsgenie 和 Jira Service Management（或 Compass）會同時運作，讓你有足夠時間完成驗證、測試及使用者訓練。</p>' +
           '<p>在並行期間任何時候都可以關閉 Opsgenie，但若超過 120 天未手動關閉，系統會自動終止 Opsgenie 的使用。</p>'
      },
      {
        q: '遷移有哪些重要時程需要注意？',
        a: '<p>請務必留意以下兩個重要日期：</p>' +
           '<ul>' +
           '<li><strong>2025 年 6 月 4 日</strong>：Opsgenie 停止新購、升級、降級與新增站點。此日後僅能續約與加購使用者數量。</li>' +
           '<li><strong>2027 年 4 月 5 日</strong>：Opsgenie 停止支援，無法再登入或存取資料，並刪除所有未遷移的帳號資料。</li>' +
           '</ul>' +
           '<p>現已進入倒數階段，<span class="hl">應立即啟動遷移檢驗</span>，留足時間完成驗證與轉換。</p>'
      }
    ],
    tech: [
      {
        q: 'Opsgenie 用戶可以選擇遷移到哪裡？',
        a: '<p>您可以選擇遷移至以下任一平台：</p>' +
           '<ul>' +
           '<li><strong>Jira Service Management（JSM）</strong>：具備完整告警與事件管理功能</li>' +
           '<li><strong>Compass</strong>：提供 alerting 與 on-call 管理功能</li>' +
           '</ul>' +
           '<p>系統會由 <strong>Opsgenie 擁有者（Owner）</strong> 根據實際使用狀況推薦最適合的遷移路徑，對大多數用戶而言，整個流程是高度自動化的。（操作位置與步驟見下方「我該如何開始遷移？」）</p>'
      },
      {
        q: 'Opsgenie、Jira Service Management 與 Compass 有什麼差異？',
        a: '<p>三者皆具備警示與輪值排班，但在事件、變更、問題管理上差異明顯：</p>' +
           '<div class="faq-table-wrap"><table class="faq-table">' +
             '<thead><tr><th>功能</th><th>Opsgenie</th><th>JSM</th><th>Compass</th></tr></thead>' +
             '<tbody>' +
               '<tr><td>警示與輪值排班</td><td class="yes">✓</td><td class="yes">✓</td><td class="yes">✓</td></tr>' +
               '<tr><td>事件管理 (incident)</td><td class="yes">✓</td><td class="yes">✓</td><td class="no">✕</td></tr>' +
               '<tr><td>變更管理 (change)</td><td class="no">✕</td><td class="yes">✓</td><td class="no">✕</td></tr>' +
               '<tr><td>問題管理 (problem)</td><td class="no">✕</td><td class="yes">✓</td><td class="no">✕</td></tr>' +
             '</tbody>' +
           '</table></div>' +
           '<p>詳細功能比較請參考 Atlassian 官方文件：Feature changes and deprecations in Jira Service Management / Compass。</p>'
      },
      {
        q: '我的 Opsgenie 和 JSM 在不同組織，能遷移嗎？',
        a: '<p>目前遷移工具僅支援同一組織的遷移。如果 Opsgenie 和 JSM 不在同一個站點，建議告知鈦坦團隊以便聯繫 Atlassian 支援，協助進行帳號搬移。</p>' +
           '<p>搬移完成後，就可以透過遷移工具完成後續自動遷移設定。</p>'
      },
      {
        q: '我該如何開始遷移？',
        a: '<p>請由擁有 Opsgenie 擁有者權限的管理員，前往 <code>Settings &gt; Migrate Opsgenie</code>，系統會引導你：</p>' +
           '<ul>' +
           '<li>選擇遷移平台（JSM 或 Compass）</li>' +
           '<li>預覽費用與方案</li>' +
           '<li>確認帳單與計畫後，選擇執行日期</li>' +
           '</ul>' +
           '<p>⚠️ 若您的站台有特殊情況，可能無法立即排定遷移時間，請聯繫我們，將協助與原廠確認。</p>'
      },
      {
        q: '從 Opsgenie 遷移到 JSM 或 Compass 需要多久？',
        a: '<ul>' +
           '<li>一旦擁有者啟動遷移，系統會自動同步大部分設定與資料。</li>' +
           '<li>需先完成以下條件：指定遷移產品與方案、帳單管理員核准新的費用。</li>' +
           '<li>系統會依您選擇的日期執行資料遷移。</li>' +
           '</ul>' +
           '<p>⚠️ 某些情況下仍需手動操作，屆時會提供指引文件協助完成。</p>'
      },
      {
        q: 'JSM 是否能滿足我們的 alerting 與 on-call 功能需求？',
        a: '<p>Jira Service Management 支援：</p>' +
           '<ul>' +
           '<li>從 Email、Webhook、自訂 API 等來源收集告警</li>' +
           '<li>自動通知（推播、Email、簡訊、語音）並可升級通知</li>' +
           '<li>詳細稽核紀錄，記錄通知發送與回應時間</li>' +
           '</ul>' +
           '<p>這些功能與原先在 Opsgenie 使用的 alerting 與 on-call 能力等效，甚至更完整。</p>'
      },
      {
        q: '我可以自選遷移日期嗎？',
        a: '<p>可以。</p>' +
           '<p>當你完成方案確認與費用核准後，系統會讓你指定遷移日期，屆時會自動同步大多數設定與資料。</p>'
      },
      {
        q: '遷移是全自動的嗎？需要我做什麼？',
        a: '<p>大部分設定與資料會自動搬移，但你仍需由「Opsgenie 擁有者」與「站台管理員」角色：</p>' +
           '<ul>' +
           '<li>指定要遷移到的產品與方案</li>' +
           '<li>請帳務管理員確認費用與帳期</li>' +
           '<li>設定遷移執行日期</li>' +
           '</ul>' +
           '<p>部分特殊設定仍需人工處理，平台會提供說明文件。</p>'
      },
      {
        q: '遷移後有哪些設定需要手動處理？',
        a: '<p>大多數設定會自動搬移，但以下項目需手動補齊：</p>' +
           '<ul>' +
           '<li>某些整合（如非原生整合）</li>' +
           '<li>通知規則</li>' +
           '<li>電話與聯絡人資訊</li>' +
           '</ul>' +
           '<p>系統會提供清單與進度追蹤，協助你完成設定。</p>'
      },
      {
        q: '我可以在遷移前試用 Jira Service Management 或 Compass 嗎？',
        a: '<ul>' +
           '<li>在啟動遷移前，您可先開始試用 Atlassian 推薦的遷移產品。</li>' +
           '<li>請至 <code>Settings &gt; Migrate Opsgenie</code> 查看推薦目標。</li>' +
           '<li>啟動遷移後，也可開啟臨時試用帳號進行過渡。</li>' +
           '</ul>' +
           '<p>📌 若要試用 Enterprise 版本，歡迎直接<a href="https://tsgojira.atlassian.net/servicedesk/customer/portal/4/group/8/create/43" target="_blank" rel="noopener">與鈦坦科技聯繫</a>，由我們協助你提出申請。</p>'
      },
      {
        q: '我是 Jira Service Management Data Center 客戶，該怎麼辦？',
        a: '<p>Opsgenie 是雲端服務，<strong>沒有 Data Center 版本</strong>。</p>' +
           '<p>若你目前使用 Jira Service Management Data Center，請於 2027 年 4 月前完成以下其中一種遷移方案：</p>' +
           '<ul>' +
           '<li>先將 JSM Data Center 遷移至 Cloud，再將 Opsgenie 遷移進 Cloud JSM</li>' +
           '<li>將 Opsgenie 遷移至全新 Compass 站台</li>' +
           '<li>將 Opsgenie 遷移至全新 JSM Cloud 站台</li>' +
           '</ul>' +
           '<p>你可以在 <code>Settings &gt; Migrate Opsgenie</code> 查看推薦遷移路徑與詳細步驟。</p>'
      }
    ],
    billing: [
      {
        q: '遷移後的價格會是多少？',
        a: '<p>你可以在 <code>Settings &gt; Migrate Opsgenie</code> 中：</p>' +
           '<ul>' +
           '<li>查看推薦平台與對應方案的費用</li>' +
           '<li>比較不同版本功能差異</li>' +
           '<li>依據需求選擇最適合的方案</li>' +
           '</ul>' +
           '<p>若因遷移導致費用上升，部分用戶可享限時優惠。</p>'
      },
      {
        q: '遷移後我的原始合約怎麼辦？',
        a: '<ul>' +
           '<li>合約會持續有效直到訂閱結束或 2027 年 4 月 5 日</li>' +
           '<li>自 2025 年 6 月 4 日 起，無法升降級、改版或新增站點</li>' +
           '<li>仍可購買額外席次直到終止支援為止</li>' +
           '</ul>'
      },
      {
        q: '如果我在訂閱期內遷移，剩餘費用會怎麼處理？',
        a: '<p><strong>年約客戶：</strong></p>' +
           '<ul>' +
           '<li>若 <strong>Opsgenie 與目標產品不在同一站台</strong>，並且剩餘訂閱天數 &gt; 30 天：<br>→ 系統會自動將剩餘時間轉為新產品的使用期限</li>' +
           '<li>若 <strong>目標產品與 Opsgenie 在同一站台</strong>：<br>→ 鈦坦科技會協助聯繫 Atlassian 支援或業務代表討論退費事宜</li>' +
           '</ul>' +
           '<p><strong>月付客戶：</strong>按月計費，<span class="hl">不存在「剩餘月份退款」的問題</span>。你可以隨時取消 Opsgenie，取消後會在當月結算週期結束時停止收費。</p>'
      }
    ]
  };
  var FAQ = (LANG !== 'zh-Hant' && I18N[LANG] && I18N[LANG].faq) || ZH_FAQ;

  /* ---------- Render FAQ ---------- */
  var list = document.getElementById('faqList');
  var tabs = document.querySelectorAll('.faq-tab');

  function render(cat) {
    if (!list) return;
    var items = FAQ[cat] || [];
    list.innerHTML = items.map(function (item, i) {
      return '' +
        '<div class="faq-item">' +
          '<button class="faq-q" aria-expanded="false">' +
            '<span class="faq-q__no">Q' + (i + 1) + '</span>' +
            '<span class="faq-q__text">' + item.q + '</span>' +
            '<span class="faq-q__ic" aria-hidden="true"></span>' +
          '</button>' +
          '<div class="faq-a"><div class="faq-a__inner">' + item.a + '</div></div>' +
        '</div>';
    }).join('');
    bindAccordion();
  }

  function bindAccordion() {
    list.querySelectorAll('.faq-item').forEach(function (item) {
      var btn = item.querySelector('.faq-q');
      var ans = item.querySelector('.faq-a');
      btn.addEventListener('click', function () {
        var open = item.classList.contains('is-open');
        // close siblings (one-open accordion)
        list.querySelectorAll('.faq-item.is-open').forEach(function (o) {
          if (o !== item) {
            o.classList.remove('is-open');
            o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
            o.querySelector('.faq-a').style.maxHeight = null;
          }
        });
        if (open) {
          item.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          ans.style.maxHeight = null;
        } else {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          ans.style.maxHeight = ans.scrollHeight + 'px';
        }
      });
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      render(tab.getAttribute('data-cat'));
    });
  });

  // initial
  render('schedule');

  /* ---------- Lightbox：點擊功能截圖放大 ---------- */
  (function () {
    var imgs = document.querySelectorAll('.feature-card__img img');
    if (!imgs.length) return;

    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('aria-hidden', 'true');
    box.innerHTML = '<button class="lightbox__close" aria-label="關閉放大檢視">&times;</button><img class="lightbox__img" alt="" />';
    document.body.appendChild(box);
    var boxImg = box.querySelector('.lightbox__img');

    function open(src, alt) {
      boxImg.src = src; boxImg.alt = alt || '';
      box.classList.add('is-open'); box.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      box.classList.remove('is-open'); box.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    imgs.forEach(function (img) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () { open(img.currentSrc || img.src, img.alt); });
    });
    box.addEventListener('click', function (e) {
      if (e.target === box || e.target.classList.contains('lightbox__close')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && box.classList.contains('is-open')) close();
    });
  })();

  /* ---------- Plans：點擊欄位標題切換重點比較的版本 ---------- */
  (function () {
    var table = document.querySelector('.plans-table');
    var cols = document.querySelectorAll('.plans-table .plans-col');
    if (!table || !cols.length) return;
    function select(plan) {
      table.classList.remove('sel-0', 'sel-1', 'sel-2');
      table.classList.add('sel-' + plan);
      cols.forEach(function (c) { c.setAttribute('aria-pressed', c.getAttribute('data-plan') === plan ? 'true' : 'false'); });
    }
    cols.forEach(function (c) {
      c.addEventListener('click', function () { select(c.getAttribute('data-plan')); });
      c.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(c.getAttribute('data-plan')); }
      });
    });
  })();

  /* ---------- GA4 自訂事件追蹤（分析訪客點擊與關注議題） ---------- */
  (function () {
    function track(name, params) {
      if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
    }
    var LANG = document.documentElement.lang || 'zh-Hant';
    function sectionOf(el) {
      var s = el.closest('section[id]');
      if (s) return s.id;
      if (el.closest('.nav, header')) return 'nav';
      if (el.closest('.footer')) return 'footer';
      return 'page';
    }

    // 點擊事件（事件委派）
    document.addEventListener('click', function (e) {
      var t = e.target, a, el;
      if ((a = t.closest('.nav__links a'))) { track('nav_click', { link_text: a.textContent.trim(), section: a.getAttribute('href'), lang: LANG }); return; }
      if ((a = t.closest('.footer__nav a'))) { track('footer_nav_click', { link_text: a.textContent.trim(), href: a.getAttribute('href'), lang: LANG }); return; }
      if ((a = t.closest('.lang__menu a'))) { track('language_switch', { to: a.getAttribute('href'), label: a.textContent.trim(), from: LANG }); return; }
      if ((el = t.closest('.appbadge'))) { track('app_badge_click', { store: el.getAttribute('aria-label') || '', lang: LANG }); return; }
      if ((el = t.closest('.btn--primary, .nav__cta, .contact__line, .cta-band a'))) { track('cta_click', { cta_text: (el.textContent || '').trim().slice(0, 40), section: sectionOf(el), lang: LANG }); return; }
      if ((el = t.closest('.faq-tab'))) { track('faq_tab', { category: el.getAttribute('data-cat'), lang: LANG }); return; }
      if ((el = t.closest('.faq-q'))) { var q = el.querySelector('.faq-q__text'); track('faq_open', { question: q ? q.textContent.trim().slice(0, 80) : '', lang: LANG }); return; }
      if ((el = t.closest('.ind-tab'))) { track('industry_select', { industry: el.getAttribute('data-ind'), label: el.textContent.trim(), lang: LANG }); return; }
      if ((el = t.closest('.plans-col'))) { track('plan_focus', { plan: el.getAttribute('data-plan'), label: el.textContent.trim().slice(0, 24), lang: LANG }); return; }
      if ((el = t.closest('.feature-card__img img'))) { track('feature_zoom', { feature: el.alt || '', lang: LANG }); return; }
      if ((a = t.closest('a[target="_blank"]'))) { track('outbound_click', { url: a.href, text: (a.textContent || '').trim().slice(0, 40), section: sectionOf(a), lang: LANG }); return; }
    });

    // 區塊曝光（訪客關注的議題）：每個 section 首次進入視窗各觸發一次
    if ('IntersectionObserver' in window) {
      var seen = {};
      var so = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && !seen[en.target.id]) {
            seen[en.target.id] = true;
            var h = en.target.querySelector('h2');
            track('section_view', { section: en.target.id, title: h ? h.textContent.trim() : '', lang: LANG });
          }
        });
      }, { threshold: 0.5 });
      document.querySelectorAll('section[id]').forEach(function (s) { so.observe(s); });
    }
  })();
})();
