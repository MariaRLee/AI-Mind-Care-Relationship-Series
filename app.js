// V1.1：目前公開內容僅顯示「夫妻關係｜第一季」EP01–EP02。
// 其他季度、其他關係系列與完整內容暫不公開，留待後續版本加入。

const publicEpisodes = [
  {
    number: "EP01",
    title: "你根本不在乎我",
    status: "短片準備中",
    videoUrl: ""
  },
  {
    number: "EP02",
    title: "你為什麼一直滑手機？",
    status: "短片準備中",
    videoUrl: ""
  }
];

const episodeGrid = document.getElementById("episodeGrid");

episodeGrid.innerHTML = publicEpisodes.map(episode => {
  const action = episode.videoUrl
    ? `<a class="episode-link" href="${episode.videoUrl}" target="_blank" rel="noopener">觀看短片</a>`
    : `<span class="episode-status">${episode.status}</span>`;

  return `
    <article class="episode-card">
      <div>
        <span class="episode-number">${episode.number}</span>
        <h3 class="episode-title">${episode.title}</h3>
      </div>
      ${action}
    </article>
  `;
}).join("");
