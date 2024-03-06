const inputBox = document.getElementById("todo-text");
const listContainer = document.getElementById("list-container")


function loadData() {
  listContainer.innerHTML = localStorage.getItem("data")
}

loadData();

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
    listContainer.appendChild(li);
    saveData()
  }
  inputBox.value = '';
}


listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saveData()
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
