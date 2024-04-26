//**********  API fetching  ********** */
const getData = () => {
  axios
    .get("https://api.vschool.io/tylerwalker/todo")
    .then((response) => {
      listData(response.data);
      renderPricing(response.data);
    })
    .catch((error) => console.log(error));
};

const deleteTodo = (id) => {
  axios
    .delete(`https://api.vschool.io/tylerwalker/todo/${id}`)
    .then(() => getData())
    .catch((error) => console.log(error));
};

const updateTodo = (id, todo) => {
  axios
    .put(`https://api.vschool.io/tylerwalker/todo/${id}`, todo)
    .then(() => getData())
    .catch((error) => console.log(error));
};

const postTodo = (newTodo) => {
  axios
    .post("https://api.vschool.io/tylerwalker/todo", newTodo)
    .then(() => getData())
    .catch((error) => console.log(error));
};
/********************************************** */

/*** Fetch data on load */
window.addEventListener("load", getData);
/*************** */

/********* todo form */
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

  postTodo(newTodo);
});
/************************* */

/******** UI renderers */

const renderPricing = (data) => {
  const projected = data.reduce((total, todo) => todo.price + total, 0);
  document.getElementById(
    `projectedTotalPrice`
  ).textContent = `(Projected) Total Price: $${projected.toFixed(2)}`;
  const actual = data
    .filter((todo) => todo.completed)
    .reduce((total, todo) => todo.price + total, 0);
  document.getElementById(
    `actualTotalPrice`
  ).textContent = `(Completed) Total Price: $${actual.toFixed(2)}`;
};

let listData = (data) => {
  clearList();
  for (let i = 0; i < data.length; i++) {
    renderTodoItem(data[i], i + 1);
  }
};

const renderTodoItem = (todo, itemNumber) => {
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todoContainer");

  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("todo-item");

  const h1Div = document.createElement("div");
  h1Div.classList.add("item-title-div");

  const h1 = document.createElement("h1");
  h1.textContent = `${itemNumber}) ${todo.title}`;
  h1.classList.add("todo-item-title");

  const span = document.createElement("span");
  span.textContent = `DESCRIPTION: ${todo.description}`;
  span.classList.add("todo-item-details");

  const img = document.createElement("img");
  img.src = todo.imgUrl;
  img.classList.add("todo-item-img");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("button-div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `completedCheckbox-${todo._id}`;
  checkbox.classList.add("checkbox");
  checkbox.checked = todo.completed;
  if (todo.completed) {
    h1.classList.add("todo-item-title-checked");
  } else {
    h1.classList.remove("todo-item-title-checked");
  }

  const priceP = document.createElement("p");
  priceP.textContent = ` PRICE: $${todo.price}`;
  priceP.classList.add("todo-item-details");

  h1Div.appendChild(checkbox);
  h1Div.appendChild(h1);
  bodyDiv.appendChild(span);
  bodyDiv.appendChild(priceP);
  bodyDiv.appendChild(img);
  bodyDiv.appendChild(deleteButton);

  todoContainer.append(h1Div, bodyDiv);

  document.getElementById(`todo-list`).append(todoContainer);

  const id = todo._id;
  deleteButton.addEventListener("click", (event) => {
    event.preventDefault();
    deleteTodo(id);
  });
  checkbox.addEventListener("change", () => {
    updateTodo(id, { ...todo, completed: checkbox.checked });
  });
};

const clearList = () => {
  const el = document.getElementById(`todo-list`);
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};
