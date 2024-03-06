const titleBox = document.getElementById('title-input');
const contentBox = document.getElementById('content-input');

const listContainer = document.getElementById('note-container');

function loadData() {
  const notes = localStorage.getItem('notes');
  if (notes) {
    listContainer.innerHTML = notes;
  }
}

loadData();

function addNote() {
  const title = titleBox.value;
  const content = contentBox.value;

  if (!title) {
    alert('Please enter atleast a title');
    return;
  }

  const note = document.createElement('li');
  note.classList.add('note');
  const noteTitle = document.createElement('h3');
  noteTitle.textContent = title;
  const noteContent = document.createElement('p');
  noteContent.textContent = content;
  note.appendChild(noteTitle);
  note.appendChild(noteContent);

  let button = document.createElement('button');
  button.textContent = 'Delete';
  button.classList.add('delete-button');
  note.appendChild(button);

  listContainer.appendChild(note);
  titleBox.value = '';
  contentBox.value = '';
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if (e.target.classList.contains('delete-button')) {
    let isConfirmed = confirm('Are you sure you want to delete this note?');
    if (isConfirmed) {
      e.target.parentElement.remove();
      saveData();
    } else {
      return;
    }
  }
})


function saveData() {
  localStorage.setItem('notes', listContainer.innerHTML);
}

