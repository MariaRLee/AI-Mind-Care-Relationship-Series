# AI-Mind Care｜關係練習室 V1.3

這一版針對 V1.0 Service Worker 快取造成「上傳新版仍看到舊介面」的問題做清理。

## 請把這些檔案直接放到 GitHub Pages repository 根目錄

- `index.html`
- `styles.css`
- `sw.js`

`sw.js` 必須一起上傳，因為它使用與 V1.0 相同的檔名，會取代舊 Service Worker、清除舊快取，之後自行解除註冊。

## V1.3 可見內容

- 無「安裝到手機」功能或按鈕
- 放大 `♡ AI-Mind Care / 關係練習室`
- 縮小首頁主標題，避免桌面版過大
- 防止水平捲動
- 目前只顯示：夫妻關係｜第一季｜EP01、EP02
- 完整顯示四段關係練習說明
- 其他季度、集數與其他關係系列保留到後續版本

## 若 GitHub Pages 第一次仍出現舊畫面

先開一次：

`https://mariarlee.github.io/AI-Mind-Care-Relationship-Series/?v=1.3`

這個帶版本參數的網址可以避開舊 Service Worker 曾快取的原始首頁 URL。新頁面載入後會清除舊 Service Worker 與 Cache。

© 2026 Hylove Business Inc / AI-Mind Care. All rights reserved.
