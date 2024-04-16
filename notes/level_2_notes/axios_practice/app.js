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
