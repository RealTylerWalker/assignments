// GET's THE TODO's FROM THE DATABASE

const getData = () => {
  axios
    .get("https://api.vschool.io/tylerwalker/todo")
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};

// LISTS THE TODO TITLES TO THE DOM

let listData = (data) => {
  for (let i = 0; i < data.length; i++) {
    const h1 = document.createElement(`h1`);
    h1.textContent = data[i].title;
    document.getElementById(`todo_list`).appendChild(`h1`);
  }
};

// FORM FOR THE POST REQUEST

const todoForm = document.todoForm;

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTodo = {
    title: todoForm.title.value,
  };

  todoForm.title.value = "";

  axios
    .post("https://api.vschool.io/tylerwalker/todo", newTodo)
    .then((response) => getData())
    .catch((error) => console.log(error));
});
