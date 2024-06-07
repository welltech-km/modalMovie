// Youtube iframe API //

// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
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

// 3. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 4. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
const overlay = document.querySelector('.overlay');


function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    overlay.addEventListener('click', () => {
        console.log(overlay);
        player.unMute();
        player.setOption('controls', 1);
    });
    done = true;
  }
}
//-- YouTube iframe API  --//


// ページ読み込み→バナー表示まで
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


// 動画クリック→モーダル表示
const overlayBg = document.querySelector('.overlay-bg');
const modal = document.querySelector('.modal');

overlay.addEventListener('click', (e) => {
    banner.style.opacity = '0';
    banner.style.transition = '.4s';

    overlay.classList.add('overlay-bg');
    const overlayBg = document.querySelector('.overlay-bg');
    
    setTimeout(() => {
        banner.style.left = '50%';
        banner.style.top = '50%';    
        banner.style.width = "1000px";
        banner.style.height = '60vh';
        banner.style.padding = '100px';
        banner.style.background = '#fff';
        banner.style.transform = 'translate(-50%,-50%)';
        banner.style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';
        banner.style.borderRadius = '15px';

        overlayBg.style.width = '100vw';
        overlayBg.style.height = '100vh';
        overlayBg.style.backgroundColor = '#000';
        overlayBg.style.zIndex = '100';
    }, 600);
    setTimeout(() => {
        banner.style.opacity = '1';
        overlayBg.style.opacity = '0.55';
        overlayBg.style.transition = '.4s';
        overlayBg.classList.remove('overlay');
    }, 1000);

    overlayBg.addEventListener('click', () => {
        modal.style.opacity = '0';
        modal.style.transition = '.4s';
        setTimeout(() => {
          modal.style.display = 'none';
        }, 400);
    });
    }, {once: true});





modal.addEventListener('click', (event) => {
  if(event.target.closest(banner) === null) {
    alert('外側をクリックされました。');
  }
});

const closeBtn = document.querySelector('.player-close');
closeBtn.addEventListener('click', () => {
      modal.style.opacity = '0';
      modal.style.transition = '.4s';
      setTimeout(() => {
        modal.style.display = 'none';
      }, 400);
});