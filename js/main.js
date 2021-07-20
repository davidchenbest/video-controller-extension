const fasterRate = 0.25;
const slowerRate = -0.25;

function getVideos() {
  try {
    const videos = document.querySelectorAll("video");
    return videos;
  } catch (error) {}
}

function stepVideosRate(rate) {
  const videos = getVideos();
  videos.forEach((v) => {
    v.playbackRate += rate;
    addRatePanel(videos, v.playbackRate);
  });
}

const clickChangeRate = (e) => {
  e.stopPropagation();
};

function addRatePanel(videos, currentSpeed) {
  const className = "ratePanel";
  const parent = videos[0].parentNode;
  const exist = parent.querySelector(`.${className}`);
  if (!exist) {
    const node = document.createElement("div");
    node.innerHTML = `
    <button class='ratePanel__decrease'>-</button>
    <span class='ratePanel__current'>${currentSpeed}</span> 
    <button class='ratePanel__increase'>+</button>`;
    // const textnode = document.createTextNode('<button>video controller</button>');
    // node.appendChild(textnode);
    // node.style.cssText = 'position:absolute; z-index:10000;'
    node.className = className;
    parent.append(node);

    const decreaseBtn = node.querySelector(".ratePanel__decrease");
    decreaseBtn.onclick = (event) => {
      event.stopPropagation();
      stepVideosRate(slowerRate);
    };

    const increaseBtn = node.querySelector(".ratePanel__increase");
    increaseBtn.onclick = (event) => {
      event.stopPropagation();
      stepVideosRate(fasterRate);
    };
  } else {
    const speedElement = document.querySelector(".ratePanel__current");
    speedElement.innerHTML = currentSpeed;
  }
}

window.addEventListener("load", (event) => {
  document.addEventListener("keypress", (e) => {
    const { key } = e;
    if (key === "d" || key === "s") {
      stepVideosRate(key === "d" ? fasterRate : slowerRate);
    }
  });
});
