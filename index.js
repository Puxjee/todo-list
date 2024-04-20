const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const addButton = document.getElementById("add-button")

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}

const showList = () => {  
    listContainer.innerHTML = localStorage.getItem("data")
}


addButton.addEventListener("click", () => {
  const inputValue = inputBox.value.trim()
  if (inputValue === "") {
    alert("Please enter a valid task")
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerText = inputValue
  

  const span = document.createElement("span");
  span.innerHTML = "&times;"

  listItem.appendChild(span)
  inputBox.value = ""
  saveData()

  listContainer.appendChild(listItem);

});

document.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
  }, false);

showList()