const button = document.getElementById("myButton");
const clickCountSpan = document.getElementById("clickCountSpan");
let clickCount = sessionStorage.getItem("count");
// clickCountSpan.textContent = clickCount;

if (clickCount) {
  clickCountSpan.textContent = clickCount;
} else {
  clickCountSpan.textContent = 0;
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  clickCount++;
  clickCountSpan.textContent = clickCount;
  sessionStorage.setItem("count", clickCount);
});
