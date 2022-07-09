import { ToDo } from "./create";
import SimplePicker from "simplepicker";

let userInput;

const createButtonListeners = (() => {
  let createButton = document.getElementById("addNewToDo");
  let popup = document.getElementById("createToDoPopup");
  let overlay = document.getElementById("blackOverlay");
  let createButtonPopup = document.getElementById("submitPopup");
  let popupInput = document.getElementById("userInput");
  let dateButton = document.getElementById("dateButton");
  let pickerDiv = document.getElementById("pickerDiv");
  let dueDate = document.getElementById("dueDate");
  let textArea = document.getElementById("textArea");
  let radios = document.querySelectorAll('input[type="radio"]');

  createButton.addEventListener("click", () => {
    popup.style.display = "flex";
    overlay.style.display = "block";
    popupInput.value = "";
    textArea.value = "";
    dueDate.value = "";
    dueDate.innerHTML = "";
    radios.forEach((radio => {
      radio.checked = false;
    }))
  });

  createButtonPopup.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
    userInput = popupInput.value;
  });

  overlay.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
    pickerDiv.style.display = "none";
    popupInput.value = "";
  });

  dateButton.addEventListener("click", () => {
    pickerDiv.style.display = "block";
    let picker = new SimplePicker(pickerDiv, {
      zIndex: 10,
    });
    picker.open();
    picker.on('submit', function(date, readableDate){
      dueDate.innerHTML = `Due: ${readableDate}`;
    })
  });

  
})();


