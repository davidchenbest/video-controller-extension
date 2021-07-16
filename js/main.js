function getVideos() {
  try {
    const videos = document.querySelectorAll("video");
    return videos;
  } catch (error) { }
}

function stepVideosRate(videos, rate) {
  videos.forEach((v) => {
    v.playbackRate += rate;
  });
}

function addRatePanel(videos) {
  const className = 'videoRatePanel'
  const parent = videos[0].parentNode
  const exist = parent.querySelector(`.${className}`)
  if (!exist) {
    const node = document.createElement("h1");
    node.innerHTML = '<button>-</button> <button>+</button>'
    // const textnode = document.createTextNode('<button>video controller</button>');
    // node.appendChild(textnode);
    node.style.cssText = 'position:absolute; z-index:10000;'
    node.className = className
    parent.append(node)
  }

}

window.addEventListener("load", (event) => {
  const fasterRate = 0.25;
  const slowerRate = -0.25;
  document.addEventListener("keypress", (e) => {
    const { key } = e;
    if (key === "d" || key === "s") {
      const videos = getVideos();
      if (videos && videos.length) {
        stepVideosRate(videos, key === "d" ? fasterRate : slowerRate);
        addRatePanel(videos)
      }
    }
  });
});
