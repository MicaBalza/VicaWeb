modalContainer = document.querySelector("#modal-container");
registerButton = document.querySelector("#register-btn");
closeButton = document.querySelector(".close-btn");

registerButton.addEventListener("click", function () {
  modalContainer.style.visibility = "visible";
  modalContainer.style.opacity = "1";
});

closeButton.addEventListener("click", function () {
  modalContainer.style.visibility = "hidden";
  modalContainer.style.opacity = "0";
});
