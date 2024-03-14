const header = document.getElementById("header");
const h1 = document.createElement("h1");
h1.textContent = "JavaScript Made This!!!";
header.appendChild(h1);
h1.className = "header";

const subtitle1 = document.createElement("p");
subtitle1.textContent = "Tyler Walker";
header.appendChild(subtitle1);
subtitle1.style.textAlign = "center";
subtitle1.style.color = "peachpuff";
subtitle1.style.margin = "auto";

const subtitle2 = document.createElement("span");
subtitle2.textContent = " wrote the JavaScript!";
subtitle1.appendChild(subtitle2);
subtitle2.style.color = "blue";

const messages = document.querySelectorAll(".message");

const mainDiv = document.querySelector(".messages");
const messageLeft1 = document.createElement("div");
messageLeft1.textContent = "Hey, how are you?";
mainDiv.append(messageLeft1);
messageLeft1.classList.add("message", "left");

const messageRight1 = document.createElement("div");
messageRight1.textContent = "I'm well, thanks for asking!";
mainDiv.append(messageRight1);
messageRight1.classList.add("message", "right");

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function () {
  const messages = document.querySelectorAll(".message");
  for (let i = 0; i < messages.length; i++) {
    messages[i].remove();
  }
});
