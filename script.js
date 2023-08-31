import "./style.css";

const circle = document.querySelector(".circle");
const countEl = document.querySelector(".count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const fillButton = document.getElementById("fill");

let count = 0;
const maxCount = 100;
let increment = false;
let decrement = false;

function updateCircleBorder() {
  const fillAngle = (count / maxCount) * 360;
  circle.style.setProperty("--fill", `${fillAngle}deg`);
  circle.style.setProperty("--duration", `${(count / maxCount) * 4}s`);
  countEl.textContent = count;
}

function decrementToZero() {
  increment = false;
  decrement = true;
  if (count === 0) {
    countEl.style.color = `black`;
  }
  if (count > 0 && decrement === true) {
    count--;
    circle.style.setProperty("--background", "#dc143c");
    updateCircleBorder();
    setTimeout(decrementToZero, 25);
    fillButton.disabled = true;
  }
  fillButton.disabled = false;
}

function incrementToMax() {
  decrement = false;
  increment = true;
  if (count < 100 && increment === true) {
    count++;
    circle.style.setProperty("--background", "green");
    updateCircleBorder();
    setTimeout(incrementToMax, 25);
  }
}

increaseButton.addEventListener("click", () => {
  if (count < maxCount) {
    count++;
    countEl.style.color = `green`;
    circle.style.setProperty("--background", "green");
    updateCircleBorder();
  }
});

decreaseButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countEl.style.color = `#dc143c`;
    circle.style.setProperty("--background", "#dc143c");
    updateCircleBorder();
  }
});

resetButton.addEventListener("click", () => {
  countEl.style.color = `#dc143c `;
  decrementToZero();
});

fillButton.addEventListener("click", () => {
  countEl.style.color = `green `;
  incrementToMax();
});
