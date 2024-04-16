axios
  .get("https://api.vschool.io/pokemon/")
  // .then((response) => console.log(response));

  .then((response) => {
    const pokemonArray = response.data.objects[0].pokemon;
    for (let i = 0; i < pokemonArray.length; i++) {
      const pokemonName = pokemonArray[i].name;
      const h1 = document.createElement("h1");
      h1.textContent = pokemonName;
      document.body.appendChild(h1);
    }
  })
  .catch((error) => console.log(error));
