function getVideos() {
  try {
    const videos = document.querySelectorAll("video");
    return videos;
  } catch (error) {}
}

function stepVideosRate(videos, rate) {
  videos.forEach((v) => {
    v.playbackRate += rate;
  });
}

window.addEventListener("load", (event) => {
  const fasterRate = 0.25;
  const slowerRate = -0.25;
  document.addEventListener("keypress", (e) => {
    const { key } = e;
    if (key === "d" || key === "s") {
      const videos = getVideos();
      if (videos && videos.length)
        stepVideosRate(videos, key === "d" ? fasterRate : slowerRate);
    }
  });
});
