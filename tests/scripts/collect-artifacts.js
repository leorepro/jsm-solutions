#!/usr/bin/env node
// @ts-check
/**
 * 將 Playwright 測試產出的截圖與錄影集中到 tests/artifacts/upload/
 * 供 ERP-437 工單上傳使用。
 *
 * 使用方式：
 *   node scripts/collect-artifacts.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SCREENSHOT_SRC = path.join(ROOT, 'artifacts', 'screenshots');
const TEST_RESULTS = path.join(ROOT, 'test-results');
const UPLOAD_DIR = path.join(ROOT, 'artifacts', 'upload');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copy(src, dst) {
  ensureDir(path.dirname(dst));
  fs.copyFileSync(src, dst);
  console.log(`✔ ${path.relative(ROOT, src)}  →  ${path.relative(ROOT, dst)}`);
}

function walk(dir, cb) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

function main() {
  ensureDir(UPLOAD_DIR);

  // 1. 截圖
  walk(SCREENSHOT_SRC, (file) => {
    if (file.endsWith('.png')) {
      copy(file, path.join(UPLOAD_DIR, path.basename(file)));
    }
  });

  // 2. 錄影 (Playwright 預設輸出 .webm)
  walk(TEST_RESULTS, (file) => {
    if (file.endsWith('.webm')) {
      const rel = path.relative(TEST_RESULTS, file);
      const flat = rel.replace(/[\\/]/g, '__');
      copy(file, path.join(UPLOAD_DIR, `video__${flat}`));
    }
  });

  console.log(`\n所有上傳檔已輸出至：${path.relative(process.cwd(), UPLOAD_DIR)}`);
  console.log('請至 Jira ERP-437 工單 comment 上傳此資料夾內容。');
}

main();
