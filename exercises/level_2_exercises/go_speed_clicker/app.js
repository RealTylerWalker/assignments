function countButtonClicks() {
  const button = document.getElementById("myButton");
  const clickCountSpan = document.getElementById("clickCountSpan");
  let clickCount = sessionStorage.getItem("clickCount") || 0;
  clickCountSpan.textContent = clickCount;

  button.addEventListener("click", function (event) {
    event.preventDefault();
    clickCount++;
    clickCountSpan.textContent = clickCount;
    sessionStorage.setItem("clickCount", clickCount);
  });
}
countButtonClicks();
