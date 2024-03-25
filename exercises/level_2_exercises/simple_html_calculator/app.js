const addForm = document.getElementById(`add`);
const subForm = document.getElementById(`subtract`);
const multForm = document.getElementById(`multiply`);

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  const firstAddNumber = parseFloat(addForm.firstAdditionNumber.value);
  const secondAddNumber = parseFloat(addForm.secondAdditionNumber.value);

  function addTwoNumbers(a, b) {
    return a + b;
  }
  let result = addTwoNumbers(firstAddNumber, secondAddNumber);
  let answerBox = document.createElement("span");
  answerBox.textContent = result;
  addForm.append(answerBox);
  answerBox.classList.add(`answerBox`);
});

subtractButton.addEventListener("click", function (event) {
  event.preventDefault();
  const firstSubNumber = parseFloat(subForm.firstSubtractionNumber.value);
  const secondSubNumber = parseFloat(subForm.secondSubtractionNumber.value);

  function subtractTwoNumbers(a, b) {
    return a - b;
  }
  let result = subtractTwoNumbers(firstSubNumber, secondSubNumber);
  let answerBox = document.createElement("span");
  answerBox.textContent = result;
  subForm.append(answerBox);
  answerBox.classList.add(`answerBox`);
});

multiplyButton.addEventListener("click", function (event) {
  event.preventDefault();
  let firstMultNumber = parseFloat(multForm.firstMultNumber.value);
  let secondMultNumber = parseFloat(multForm.secondMultNumber.value);

  function multiplyTwoNumbers(a, b) {
    return a * b;
  }
  let result = multiplyTwoNumbers(firstMultNumber, secondMultNumber);
  let answerBox = document.createElement("span");
  answerBox.textContent = result;
  multForm.append(answerBox);
  answerBox.classList.add(`answerBox`);
});
