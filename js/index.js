window.onload = function() {
    init();
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
    document.querySelector("#hero-tube-png").classList.add("animate__animated", "animate__fadeInTopRight");
    document.querySelector("#hero-photo-png").classList.add("animate__animated", "animate__fadeInTopRight", "animate__delay-2s");
    document.querySelector("#hero-tent-png").classList.add("animate__animated", "animate__fadeInRight", "animate__delay-3s");
}

