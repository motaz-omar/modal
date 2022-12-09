//variables
const open = document.querySelector("#open");
const modalcontainer = document.querySelector("#modal-container");
const close = document.querySelector("#close");
// action: activating/opening modal by a button

open.addEventListener("click", function () {
  modalcontainer.style.display = "block";
});
// action: activating/closing modal by a button
close.addEventListener("click", function () {
  modalcontainer.style.display = "none";
});
// action: activating/closing modal by window
window.addEventListener("click", function (o) {
  if (o.target === modalcontainer) {
    modalcontainer.style.display = "none";
  }
});
