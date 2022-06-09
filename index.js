const btnEl = document.getElementById("btn");
const bodyEl = document.getElementById("body");

const colors = ["yellow", "red", "blue", "green", "purple"];

btnEl.addEventListener("click", () => {
  //   bodyEl.style.backgroundColor = colors[0]; acceder
  let random = Math.floor(Math.random() * colors.length);
  bodyEl.style.backgroundColor = colors[random];
});
