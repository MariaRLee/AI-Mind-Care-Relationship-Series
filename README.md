# AI-Mind Care｜夫妻關係練習室 V1.2

本版重新整理首頁，依照目前測試需求，只公開：

- AI-Mind Care｜夫妻關係練習室
- 第一季
- EP01｜你根本不在乎我
- EP02｜你為什麼一直滑手機？

## V1.2 明確修改

1. 完全移除「安裝到手機」按鈕與 PWA / Service Worker。
2. 首頁主標題明顯縮小，桌機不再用超大字佔滿畫面。
3. `♡ AI-Mind Care / 關係練習室` 品牌區明顯放大。
4. 完整顯示四段關係練習說明。
5. 不顯示其他季度、其他關係類型、EP03 之後內容。
6. 加入 `overflow-x: hidden` 與較保守的響應式寬度，避免橫向移動畫面。
7. 目前沒有搜尋、隨機選集、安裝、追蹤或分析功能。

## 部署

直接把 `index.html` 與 `styles.css` 上傳到 GitHub Pages 專案根目錄即可。

若 GitHub Pages 看起來仍是舊版，請確認：
- 已刪除舊版 `app.js` / `sw.js` / `manifest.webmanifest`（本版不需要）
- GitHub 已重新部署
- 瀏覽器強制重新整理（Ctrl+F5 / Cmd+Shift+R）

© 2026 Hylove Business Inc / AI-Mind Care. All rights reserved.
