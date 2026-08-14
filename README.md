# AI-Mind Care｜關係練習室 V1.0

一個不依賴外部框架的響應式靜態網站，可放在：

- GitHub Pages
- Gitee Pages / 中國境內靜態主機
- 一般虛擬主機
- Netlify / Cloudflare Pages / Vercel 等靜態網站服務
- 公司既有網站子目錄

## 目前內容

### AI-Mind Care｜夫妻關係練習室
- 4 季
- 每季 12 集
- 共 48 個短片題目

### 其他關係系列
- AI-Mind Care｜親子關係練習室：12 集
- AI-Mind Care｜家庭關係練習室：12 集
- AI-Mind Care｜朋友關係練習室：12 集
- AI-Mind Care｜職場關係練習室：12 集

目前總計：5 個關係系列、8 季、96 個短片題目。

## 特色

- 電腦、平板、手機自動響應
- 不使用 Bootstrap、React、Google Fonts 或外部 CDN
- 支援中文繁體介面
- 系列分類切換
- 搜尋短片題目
- 季度展開 / 收合
- 每集詳情視窗
- 隨機選一集
- 可加入影片網址
- PWA 基礎結構，可在支援的瀏覽器安裝到手機桌面
- Service Worker 基礎離線快取
- V1.0 不含外部分析、追蹤或伺服器資料庫

## 檔案

- `index.html`：主頁
- `styles.css`：所有版面與手機響應設計
- `app.js`：所有系列、季度、短片題目與互動邏輯
- `manifest.webmanifest`：PWA 資訊
- `sw.js`：離線快取
- `icon.svg`：PWA / 網頁圖示

## 如何修改系列或短片名稱

打開 `app.js`，最上方的：

```js
const relationshipSeries = [
  ...
];
```

所有系列、季度與短片題目都集中在這裡。

## 如何加入影片網址

目前 episodes 是純文字：

```js
episodes: [
  "你根本不在乎我",
  "你為什麼一直滑手機？"
]
```

要讓某一集出現「觀看短片」按鈕，可把該集改成物件：

```js
episodes: [
  {
    title: "你根本不在乎我",
    videoUrl: "https://你的影片網址",
    status: "可觀看"
  },
  "你為什麼一直滑手機？"
]
```

可連到 YouTube、Facebook、Instagram、公司網站或任何公開影片網址。

## 如何加入短片封面

V1.0 先保留簡潔結構，沒有把封面寫死在卡片中。

後續可把 episode 擴充為：

```js
{
  title: "你根本不在乎我",
  videoUrl: "https://...",
  cover: "assets/couple-s1-e01-cover.png",
  status: "可觀看"
}
```

再於卡片模板中加入 `<img>`。

這樣可以逐集加入目前製作中的 Q 版夫妻封面，而不必改整個網站架構。

## 本機測試

因為 PWA / Service Worker 在 `file://` 模式不一定運作，建議使用簡單的本機伺服器：

```bash
python -m http.server 8080
```

然後瀏覽：

```text
http://localhost:8080
```

## GitHub Pages

1. 建立 Repository。
2. 把本資料夾內所有檔案放到 Repository 根目錄。
3. GitHub → Settings → Pages。
4. 選擇 Branch 部署。
5. 等待 Pages 網址產生。

## 版本建議

- V1.0：系列目錄與 96 集題目
- V1.1：加入每集封面圖
- V1.2：加入每集影片與分享按鈕
- V1.3：加入「今日關係練習」內容
- V2.0：加入使用者收藏 / 完成紀錄（可採純本機儲存，不必上傳）

© 2026 Hylove Business Inc / AI-Mind Care. All rights reserved.
