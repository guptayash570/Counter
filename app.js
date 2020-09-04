const decBtn = document.querySelector("#dec-btn");
const resBtn = document.querySelector("#reset-btn");
const incBtn = document.querySelector("#inc-btn");

//EVENT LISTENERS
decBtn.addEventListener("click", decrease);
resBtn.addEventListener("click", reset);
incBtn.addEventListener("click", increase);

//FUNCTIONS
function decrease() {
  const span = document.getElementById("number");
  let num = span.innerHTML;
  num--;
  span.innerHTML = num;
  if (num < 0) {
    span.style.color = "crimson";
  } else if (num == 0) {
    span.style.color = "rgb(29, 25, 44)";
  }
}
function reset() {
  const span = document.querySelector("#number");
  let num = span.innerHTML;
  num = 0;
  span.innerHTML = num;

  if (num === 0) {
    span.style.color = "rgb(29, 25, 44)";
  }
}
function increase() {
  const span = document.querySelector("#number");
  let num = span.innerHTML;
  num++;
  span.innerHTML = num;
  if (num > 0) {
    span.style.color = "green";
  } else if (num == 0) {
    span.style.color = "rgb(29, 25, 44)";
  }
}
