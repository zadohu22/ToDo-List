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
let checkbox = document.getElementById("taskNameCheck");

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
  if(userInput.value != ""){
    const prioritySelection = () => {
      let priority;
      radios.forEach((radio => {
        if (radio.checked){
          let selection = radio.id;
          priority = selection.charAt(0).toUpperCase() + selection.slice(1);
        }
      }))
      return priority;
    }
    
      popup.style.display = "none";
      overlay.style.display = "none";
      pickerDiv.style.display = "none";
  
      // ****** format usable date/time ******
      let dueDateArr = dueDate.innerHTML.split(" ");
      let usableDate = `${dueDateArr[2]} ${dueDateArr[1]}`;
      let usableTime = `${dueDateArr[4]} ${dueDateArr[5]}`;
  
      // *** create TODO object ***
      let createTodo = new ToDo(userInput.value, usableDate, usableTime, prioritySelection());
  
      // *** create DOM things ***
      let cardContainer = document.createElement('div');
      cardContainer.id="cardContainer";
      cardContainer.classList.add("cardContainer");
      content.appendChild(cardContainer);
  
      // ***** Top Of Container *****
      let topOfContainer = document.createElement('div');
      topOfContainer.classList.add("topOfContainer");
      cardContainer.appendChild(topOfContainer);
      
      let taskNameCheck = document.createElement('input');
      taskNameCheck.setAttribute("type", "checkbox");
      taskNameCheck.setAttribute("name", "taskNameCheck");
      taskNameCheck.id = "taskNameCheck";
      topOfContainer.appendChild(taskNameCheck);
      
      let taskName = document.createElement("p");
      taskName.classList.add("taskName");
      taskName.id = "taskName";
      taskName.innerHTML = createTodo.title;
      topOfContainer.appendChild(taskName);
  
      // ***** Bottom Of Container *****
      let bottomOfContainer = document.createElement("div");
      bottomOfContainer.classList.add("bottomOfContainer");
      cardContainer.appendChild(bottomOfContainer);
      
      
      let taskPriority = document.createElement("p");
      taskPriority.classList.add("taskPriority");
      taskPriority.id = "taskPriority";
      taskPriority.innerHTML = `Priority: ${createTodo.priority}`;
      bottomOfContainer.appendChild(taskPriority);
  
      if(createTodo.priority == "Low"){
        taskPriority.style.color = "green";
      }else if(createTodo.priority == "Medium"){
        taskPriority.style.color = "orange";
      }else{
        taskPriority.style.color = "red";
      }
  
  
    let taskDueDate = document.createElement("p");
    taskDueDate.classList.add("taskDueDate");
    taskDueDate.id = "taskDueDate";
    console.log(createTodo.date)
    if(createTodo.date != "undefined undefined"){
      taskDueDate.innerHTML = `${createTodo.date} | ${createTodo.time}`;
      bottomOfContainer.appendChild(taskDueDate);
    }
  }
 
  
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



