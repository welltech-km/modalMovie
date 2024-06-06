



// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: '-Km1W6HSbSM',
    playerVars: {
              'autoplay': 1,
              'mute': 1,
              'controls': 0,
              'loop': 1,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
const overlay = document.querySelector('.overlay');


function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    overlay.addEventListener('click', () => {
        console.log(overlay);
        player.unMute();
    });
    done = true;
  }
}



const banner = document.querySelector('.banner');
const bannerWrapper = document.querySelector('.banner-wrapper');

const mySetTimeout = (el, prop, value) => {
return new Promise((resolve) => {
    setTimeout(() => {
    el.style[prop] = value;
    resolve();
    }, 2000);
});
};

async function displayBanner(){
await mySetTimeout(overlay, 'display', 'block');
await mySetTimeout(banner, 'opacity', '1');
await mySetTimeout(banner, 'transition', '.5s');
}
displayBanner();

overlay.addEventListener('click', () => {
    banner.style.opacity = '0';
    banner.style.transition = '.4s';
    setTimeout(() => {
        banner.style.left = '50%';
        banner.style.top = '50%';    
        banner.style.width = "1000px";
        banner.style.height = '50vh';
        banner.style.padding = '100px';
        banner.style.background = '#fff';
        banner.style.transform = 'translate(-50%,-50%)';
        banner.style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';
        banner.style.borderRadius = '10px';
    }, 600);
    setTimeout(() => {
        banner.style.opacity = '1';
    }, 1000);
    });