// Get All
// axios
//   .get("https://api.vschool.io/tylerwalker/todo")
//   .then((response) => {
//     for (let i = 0; i < response.data.length; i++) {
//       const h1 = document.createElement("h1");
//       h1.textContent = response.data[i].title;
//       document.body.appendChild(h1);
//     }
//   })
//   .catch((error) => console.log(error));

// Get One

// axios.get("https://api.vschool.io/tylerwalker/todo/6618624c78fe452c114b7b4e")
// .then((response) => console.log(response.data))
// .catch((error) => console.log(error));

// Post Request
// Request Body

// const todoForm = document.todoForm;

// todoForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const newTodo = {
//     title: todoForm.title.value,
//     description: todoForm.description.value,
//     imgUrl: todoForm.imgUrl.value,
//   };
//requires two arguments axios.post("URL", "the object we would like to have added to the database")
//   axios
//     .post("https://api.vschool.io/tylerwalker/todo", newTodo)
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error));
// });

// post all the names of the pokemon as h1 elements on the DOM.

// axios
//   .get("https://api.vschool.io/pokemon/")
//   // .then((response) => console.log(response));

//   .then((response) => {
//     const pokemonArray = response.data.objects[0].pokemon;
//     for (let i = 0; i < pokemonArray.length; i++) {
//       const pokemonName = pokemonArray[i].name;
//       const h1 = document.createElement("h1");
//       h1.textContent = pokemonName;
//       document.body.appendChild(h1);
//     }
//   })
//   .catch((error) => console.log(error));

// Using Axios, POST another todo item.

// const secondTodoForm = document.secondTodoForm;

// secondTodoForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const newTodo = {
//     title: secondTodoForm.title.value,
//     description: secondTodoForm.description.value,
//     imgUrl: secondTodoForm.imgUrl.value,
//   };
//   axios
//     .post("https://api.vschool.io/tylerwalker/todo", newTodo)
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error));
// });

// axios
//   .delete("https://api.vschool.io/tylerwalker/todo/661d92f078fe452c114b7e71")
//   .then((response) => console.log(response.data))
//   .catch((error) => console.log(error));

axios
  .get("https://api.vschool.io/tylerwalker/todo")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
