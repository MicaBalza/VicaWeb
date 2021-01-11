whatsappButton = document.querySelector(".whatsapp");
footerHeight = document.querySelector("footer").scrollHeight;
var height = Math.max(
  document.body.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.clientHeight,
  document.documentElement.scrollHeight,
  document.documentElement.offsetHeight
);
var limit = height + footerHeight - whatsappButton.scrollHeight / 2;

/* height - window.innerHeight - footerHeight + whatsappButton.scrollHeight / 2; */

var ticking = false;

window.onscroll = function (e) {
  if (!ticking) {
    if (scrollY > 50 && scrollY < limit) {
      whatsappButton.style.position = "fixed";
      whatsappButton.style.bottom = "var(--spacer)";
      whatsappButton.style.opacity = "1";
      console.log("hola");
      ticking = true;
    }
  } else {
    if (scrollY == 0) {
      whatsappButton.style.opacity = "0";
      console.log("chau");
      ticking = false;
    } else if (scrollY > limit) {
      whatsappButton.style.position = "absolute";
      whatsappButton.style.bottom = `${-limit}px`;
      console.log(limit);
      ticking = false;
    }
  }
};
