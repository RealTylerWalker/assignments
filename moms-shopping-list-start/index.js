
const form = document.addItem;

form.addEventListener("submit", function(e){
    e.preventDefault();
    const inputItem = form.title.value;
    form.title.value = ""

    const listItem = document.createElement("li")
    const pElement = document.createElement("p")
    pElement.textContent = inputItem
    listItem.append(pElement);
  

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    listItem.append(deleteButton);

    deleteButton.addEventListener("click", function(e){
        listItem.remove();
    })

    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    listItem.append(editButton);

    editButton.addEventListener("click", function(e){
        const editInput= document.createElement("input")
        const submitEditsButton = document.createElement("button")
        submitEditsButton.textContent = "submit";
        listItem.append(submitEditsButton);
        listItem.append(editInput);
        submitEditsButton.addEventListener("click", function(){
         pElement.textContent = editInput.value 
         editInput.remove();
         submitEditsButton.remove();  
        })
    })

  

    document.getElementById("list").append(listItem);
})

