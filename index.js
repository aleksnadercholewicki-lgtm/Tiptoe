
document.getElementById("btn1").addEventListener("click", () => {
  document.querySelector(".card").hidden = true;
  document.getElementById("good-choice").hidden = false
});
document.getElementById("btn2").addEventListener("click", () => {
  document.querySelector(".card").hidden = true;
  document.getElementById("bad-choice").hidden = false;
});