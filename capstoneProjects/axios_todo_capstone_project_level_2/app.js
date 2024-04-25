// GET's THE TODO's FROM THE DATABASE

const getData = () => {
  axios
    .get("https://api.vschool.io/tylerwalker/todo")
    .then((response) => listData(response.data))
    .catch((error) => console.log(error));
};

// LISTS THE TODO TITLES TO THE DOM

let listData = (data) => {
  clearList();

  let counter = 1;
  let projectedPriceValue = 0;
  let actualPriceValue = 0;

  // Create the totalPrice element

  const projectedTotalPrice = document.createElement("h3");
  projectedTotalPrice.textContent = "(Projected) Total Price: $0.00";
  document.body.append(projectedTotalPrice);

  // Create Actual Price Element

  const actualTotalPrice = document.createElement(`h3`);
  actualTotalPrice.textContent = "(Completed) Total Price: $0.00";
  document.body.append(actualTotalPrice);

  for (let i = 0; i < data.length; i++) {
    // create list item elements and then set their values

    const h1Div = document.createElement(`div`);
    h1Div.classList.add("h1Div");

    const bodyDiv = document.createElement(`div`);

    const h1 = document.createElement(`h1`);
    h1.textContent = `${counter++}) ${data[i].title}`;

    const span = document.createElement(`span`);
    span.textContent = `DESCRIPTION: ${data[i].description}`;

    const img = document.createElement(`img`);
    img.src = data[i].imgUrl;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `completedCheckbox-${data[i]._id}`;

    const priceP = document.createElement("p");
    priceP.textContent = ` PRICE: $${data[i].price}`;

    const totalPrice = document.createElement("h3");

    //Calculate Total Price
    projectedPriceValue += parseFloat(data[i].price);
    //append todo items to the DOM

    h1Div.appendChild(checkbox);
    h1Div.appendChild(h1);
    bodyDiv.appendChild(span);
    bodyDiv.appendChild(priceP);
    bodyDiv.appendChild(img);
    bodyDiv.appendChild(deleteButton);
    document.body.append(totalPrice);

    document.getElementById(`todo-list`).append(h1Div);
    document.getElementById(`todo-list`).append(bodyDiv);

    const id = data[i]._id;
    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      deleteTodo(id);
    });
    checkbox.addEventListener(`change`, () => {
      event.preventDefault();
      const price = parseFloat(data[i].price);
      if (event.target.checked) {
        console.log(h1);
        h1.style.setProperty(`text-decoration`, `line-through`);
        span.style.setProperty(`text-decoration`, `line-through`);
        actualPriceValue += price;
      } else {
        h1.style.setProperty(`text-decoration`, `none`);
        actualPriceValue -= price;
      }
      actualTotalPrice.textContent = `(Completed) Total Price $${actualPriceValue.toFixed(
        2
      )}`;
    });
  }
  projectedTotalPrice.textContent = `(Projected) Total Price: $${projectedPriceValue.toFixed(
    2
  )}`;
};

const clearList = () => {
  const el = document.getElementById(`todo-list`);
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

const deleteTodo = (id) => {
  axios
    .delete(`https://api.vschool.io/tylerwalker/todo/${id}`)
    .then(() => getData())
    .catch((error) => console.log(error));
};

getData();

// FORM FOR THE POST REQUEST

const todoForm = document.todoForm;

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTodo = {
    title: todoForm.title.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value,
    price: todoForm.price.value,
  };

  todoForm.title.value = "";
  todoForm.description.value = "";
  todoForm.imgUrl.value = "";
  todoForm.price.value = "";
  axios
    .post("https://api.vschool.io/tylerwalker/todo", newTodo)
    .then(() => getData())
    .catch((error) => console.log(error));
});
