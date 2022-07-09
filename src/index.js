import { ToDo } from "./create";
import SimplePicker from "simplepicker";

let userInput;

const createButtonListeners = (() => {
  let createButton = document.getElementById("addNewToDo");
  let popup = document.getElementById("createToDoPopup");
  let overlay = document.getElementById("blackOverlay");
  let createButtonPopup = document.getElementById("submitPopup");
  let popupInput = document.getElementById("userInput");
  let element = document.getElementById("dateContainer");
  let dateButton = document.getElementById("dateButton");
  let content = document.getElementById("content");
  let pickerDiv = document.getElementById("pickerDiv");

  createButton.addEventListener("click", () => {
    popup.style.display = "flex";
    overlay.style.display = "block";
    popupInput.value = "";
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
  });
})();

// const addDatePicker = (() => {
//     let element = document.getElementById('dateContainer');
//     let dateButton = document.getElementById('dateButton');
//     let content = document.getElementById('content');

//     dateButton.addEventListener('click', () => {
//         let pickerDiv = document.createElement('div');
//         pickerDiv.id = 'pickerDiv';
//         content.appendChild(pickerDiv);
//     })
// })()
