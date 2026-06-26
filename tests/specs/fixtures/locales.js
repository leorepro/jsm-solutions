// @ts-check
/**
 * 5 種語系設定
 * - path:        對應的 URL 路徑
 * - htmlLang:    預期的 <html lang="">
 * - menuLabel:   語系選單中該語系的可見文字 (用於驗證切換點擊目標存在)
 * - hero:        Hero 區塊應包含的關鍵字 (用於驗證內容已本地化)
 * - sectionHints: 主要區塊內預期出現的至少一段本地化文字片段
 */
module.exports = {
  LOCALES: [
    {
      key: 'zh-TW',
      path: '/',
      htmlLang: 'zh-Hant',
      menuLabel: '繁體中文',
      flag: 'tw.svg',
      heroIncludes: ['遷移', 'Opsgenie'],
      navIncludes: ['為什麼遷移', '常見問題'],
    },
    {
      key: 'en',
      path: '/en/',
      htmlLang: 'en',
      menuLabel: 'English',
      flag: 'gb.svg',
      heroIncludes: ['Opsgenie'],
      navIncludes: ['FAQ'],
    },
    {
      key: 'ja',
      path: '/ja/',
      htmlLang: 'ja',
      menuLabel: '日本語',
      flag: 'jp.svg',
      heroIncludes: ['Opsgenie'],
      navIncludes: ['FAQ', 'よくある'],
    },
    {
      key: 'ko',
      path: '/ko/',
      htmlLang: 'ko',
      menuLabel: '한국어',
      flag: 'kr.svg',
      heroIncludes: ['Opsgenie'],
      navIncludes: ['FAQ', '자주'],
    },
    {
      key: 'vi',
      path: '/vi/',
      htmlLang: 'vi',
      menuLabel: 'Tiếng Việt',
      flag: 'vn.svg',
      heroIncludes: ['Opsgenie'],
      navIncludes: ['FAQ', 'Câu hỏi'],
    },
  ],

  // 主要應出現的版面區塊 (五語系共用，由 HTML 結構決定)
  REQUIRED_SECTIONS: [
    '#top',
    '#why',
    '#collection',
    '#framework',
    '#paths',
    '#compare',
    '#solutions',
    '#industries',
    '#teams',
    '#features',
    '#plans',
    '#mobile',
    '#steps',
    '#timeline',
    '#faq',
    '#contact',
  ],
};
