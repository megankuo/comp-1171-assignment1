//* Apply dark theme
// Change background colour of textarea parent (form)
// Change button colours darker
// Change "Dark Theme" text to "Light Theme" - reverses colour to normal

const btnDarkTheme = document.getElementById('Dark Theme');
const allBtns = document.querySelectorAll('button');
const textareaElem = document.querySelector('textarea');
const hiddenElements = [textareaElem, allBtns[2], allBtns[3]];
btnDarkTheme.addEventListener('click', updateText);
btnDarkTheme.addEventListener('click', updateColor);

function updateColor() {
  const formElem = document.querySelector('form');
  const asideElem = document.querySelector('aside');
  const oldColor = ['#5f987c', '#696969', '#5f987c', '#d23b24'];
  const newColor = ['#273f33', '#ebe8e7', '#273f33', '#57180f'];
  if (btnDarkTheme.textContent === 'Light Theme') {
    asideElem.style.backgroundColor = '#696969';
    formElem.style.backgroundColor = '#38312e';
    textareaElem.style.backgroundColor = '#000000';
    textareaElem.style.color = '#fff';
    allBtns[1].style.color = '#000000';
    for (let i = 0; i < allBtns.length; i++) {
      allBtns[i].style.backgroundColor = newColor[i];
    }
  } else {
    asideElem.style.backgroundColor = '#c0c0c0';
    formElem.style.backgroundColor = '#ebe8e7';
    textareaElem.style.backgroundColor = '#ffffff';
    textareaElem.style.color = '#000';
    allBtns[1].style.color = '#fff';
    for (let i = 0; i < allBtns.length; i++) {
      allBtns[i].style.backgroundColor = oldColor[i];
    }
  }
}

function updateText() {
  const currentText = btnDarkTheme.textContent;
  if (currentText === 'Dark Theme') {
    btnDarkTheme.textContent = 'Light Theme';
  } else {
    btnDarkTheme.textContent = 'Dark Theme';
  }
}

//* "Cancel" button functionality
// Hide textarea, Save and Cancel buttons

const btnCancel = document.getElementById('Cancel');
btnCancel.addEventListener('click', hideElements);

function hideElements() {
  hiddenElements.forEach((element) => {
    element.style.visibility = 'hidden';
  });
}

//* "New Note" button functionality
// unhide textarea, Save and Cancel buttons

const btnNew = document.getElementById('New Note');
btnNew.addEventListener('click', showElements);

function showElements() {
  hiddenElements.forEach((element) => {
    element.style.visibility = 'visible';
  });
}

//* Notes
// Declare an array (notesArray) with objects {title: "note one", body: "some text 1"}, {title: "note two", body: "some text 2"},

const notesArray = [
  { title: 'note one', body: 'some text1' },
  { title: 'note two', body: 'some text2' },
];

//* "Save" button functionality
// Allow Save when text present in textarea
// Adds new object to notesArray, first line = title, rest = body
// Add new list item to sidebar with title of new object

const btnSave = document.getElementById('Save');
const noteList = document.querySelector('ul');
btnSave.addEventListener('click', saveNote);

function saveNote() {
  if (textareaElem.value !== '') {
    let title = textareaElem.value.split('\n')[0];
    let body = textareaElem.value.split('\n').slice(1)[0];
    let newNote = { title: title, body: body };
    notesArray.push(newNote);
    const newLI = document.createElement('li');
    newLI.textContent = title;
    noteList.appendChild(newLI);
  }
}

//* Recall notes
// On click, find object in notesArray matching title property to text of list item (use innerText of li)
// Display object body in textarea

noteList.addEventListener('click', showNote);

function showNote(evt) {
  let selectedNote = evt.target.innerText;
  for (let i = 0; i < notesArray.length; i++) {
    if (notesArray[i].title === selectedNote) {
      textareaElem.value = notesArray[i].body;
      break;
    }
  }
}
