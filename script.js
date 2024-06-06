document.addEventListener('DOMContentLoaded', function () {

    const overlay = document.querySelector('.overlay');
    const banner = document.querySelector('.banner');

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
        banner.style.background = 'gray';
        banner.style.transform = 'translate(-50%,-50%)';
    }, 600);
    setTimeout(() => {
        banner.style.opacity = '1';
    }, 1000);
    });

});
