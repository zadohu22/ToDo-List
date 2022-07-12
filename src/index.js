import { ToDo } from "./create";
import SimplePicker from "simplepicker";

let createButton = document.getElementById("addNewToDo");
let popup = document.getElementById("createToDoPopup");
let overlay = document.getElementById("blackOverlay");
let addTask = document.getElementById("submitPopup");
let userInput = document.getElementById("userInput");
let dateButton = document.getElementById("dateButton");
let dateContainer = document.getElementById("dateContainer");
let pickerDiv = document.getElementById("pickerDiv");
let dueDate = document.getElementById("dueDate");
let textArea = document.getElementById("textArea");
let radios = document.querySelectorAll('input[type="radio"]');
let content = document.getElementById("content");
let cardContainer = document.getElementById('cardContainer');

createButton.addEventListener("click", () => {
    popup.style.display = "flex";
    overlay.style.display = "block";
    userInput.value = "";
    textArea.value = "";
    dueDate.value = "";
    dueDate.innerHTML = "";
    radios.forEach((radio => {
      radio.checked = false;
    }))
  });

addTask.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
    let newTodo = document.createElement('p');
    let createTodo = new ToDo(`${userInput.value}`);
    newTodo.textContent = createTodo.title;
    newTodo.classList.add("newTodo");
    newTodo.id = 'newTodo';
    cardContainer.appendChild(newTodo);

  });

overlay.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
    pickerDiv.style.display = "none";
    userInput.value = "";
  });

dateButton.addEventListener("click", () => {
    pickerDiv.style.display = "flex";
    let picker = new SimplePicker(pickerDiv, {
      zIndex: 1004,
    });
    picker.open();
    picker.on('submit', function(date, readableDate){
      dueDate.innerHTML = `Due: ${readableDate}`;
    })
  });



