window.onload = function() {
    init()
};

function init() {
    setTimeout(hideLoading, 2000)
    
}

function hideLoading() {
    document.querySelector(".loading").style.opacity = "0";
    document.body.style.overflow = "auto";
    setTimeout(heroAnimation, 1000);
}

function heroAnimation() {
    document.querySelector(".loading").style.visibility = "hidden";
    document.querySelector(".hero-content").style.visibility = "visible";
    document.querySelector(".hero-content").classList.add("animate__animated", "animate__fadeInDown");
    document.querySelector(".hero-image").style.visibility = "visible";
    document.querySelector(".hero-image").classList.add("animate__animated", "animate__fadeInTopRight");
}