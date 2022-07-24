import { DomElements, ToDo, createDomElement } from "./create";
import SimplePicker from "simplepicker";

const taskArray = [];

const taskListener = () => {
    DomElements.addTask.addEventListener("click", () => {
        if (DomElements.userInput.value != "") {
          const prioritySelection = () => {
            let priority;
            DomElements.radios.forEach((radio) => {
              if (radio.checked) {
                let selection = radio.id;
                priority = selection.charAt(0).toUpperCase() + selection.slice(1);
              }
            });
            return priority;
          };
      
          // close popup after submit
          DomElements.popup.style.display = "none";
          DomElements.overlay.style.display = "none";
          DomElements.pickerDiv.style.display = "none";
      
          // format Due Date for display
          let dueDateArr = DomElements.dueDate.innerHTML.split(" ");
          let usableDate = `${dueDateArr[2]} ${dueDateArr[1]}`;
          let usableTime = `${dueDateArr[4]} ${dueDateArr[5]}`;
      
          let createTodo = new ToDo(
            userInput.value,
            usableDate,
            usableTime,
            prioritySelection(),
            DomElements.textArea.value
          );
          console.log(DomElements.textArea.value)
          taskArray.push(createTodo);
          console.log(taskArray);
      
          displayTasks();
          
          
          // close If statement
        }
        // close event Listener
      });
}

const createButtonListener = () => {
    DomElements.createButton.addEventListener("click", () => {
        DomElements.popup.style.display = "flex";
        DomElements.overlay.style.display = "block";
        DomElements.userInput.value = "";
        DomElements.textArea.value = "";
        DomElements.dueDate.value = "";
        DomElements.dueDate.innerHTML = "";
        DomElements.radios.forEach((radio) => {
          radio.checked = false;
        });
      });
}

const overlayListener = () => {
    DomElements.overlay.addEventListener("click", () => {
        DomElements.popup.style.display = "none";
        DomElements.overlay.style.display = "none";
        DomElements.pickerDiv.style.display = "none";
        DomElements.taskInfoPopup.style.display = "none";
        DomElements.userInput.value = "";

      });
}

const dateButtonListener = () => {
    DomElements.dateButton.addEventListener("click", () => {
        DomElements.pickerDiv.style.display = "flex";
        let picker = new SimplePicker(pickerDiv, {
          zIndex: 1004,
        });
        picker.open();
        picker.on("submit", function (date, readableDate) {
          DomElements.dueDate.innerHTML = `Due: ${readableDate}`;
        });
      });
}

const cardContainerListener = () => {
    let cardsArr = Array.from(DomElements.allCardContainers);
    cardsArr.forEach(e => {
        let location = e.dataset.index;
        e.addEventListener('click', (event) => {
            if(!event.target.classList.contains("taskNameCheck")){
                DomElements.taskInfoPopup.style.display = "flex";
                DomElements.overlay.style.display = "block";
                
                DomElements.notesPopup.value = taskArray[location].notes;
                console.log(taskArray[location].notes)
            }
        })
        
        DomElements.notesPopup.addEventListener('keyup', () => {
            taskArray[location].notes = DomElements.notesPopup.value;
            console.log(taskArray[location].notes)
        })

    });
}




const displayTasks = () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    
    for (let i = 0; i < taskArray.length; i++) {
      let cardContainer = createDomElement(
        "div",
        "cardContainer",
        "cardContainer",
        content
      );
      cardContainer.setAttribute('data-index', i);
      DomElements.taskNamePopup.innerText = taskArray[i].title;
      
      cardContainerListener();
    //   taskArray[i].notes = DomElements.notesPopup.value;

  
      let topOfContainer = createDomElement(
        "div",
        "topOfContainer",
        "topOfContainer",
        cardContainer
      );
  
      let taskNameCheck = createDomElement(
        "input",
        "taskNameCheck",
        "taskNameCheck",
        topOfContainer
      );
      taskNameCheck.setAttribute("type", "checkbox");
  
      let taskNameCheckLabel = createDomElement(
        "label",
        "taskNameCheckLabel",
        "taskNameCheckLabel",
        topOfContainer
      );
      taskNameCheckLabel.innerHTML = taskArray[i].title;
  
      let bottomOfContainer = createDomElement(
        "div",
        "bottomOfContainer",
        "bottomOfContainer",
        cardContainer
      );
  
      if (taskArray[i].priority != undefined) {
        let taskPriority = createDomElement(
          "p",
          "taskPriority",
          "taskPriority",
          bottomOfContainer
        );
        taskPriority.innerHTML = `Priority: ${taskArray[i].priority}`;
  
        if (taskArray[i].priority == "Low") {
          taskPriority.style.color = "green";
        } else if (taskArray[i].priority == "Medium") {
          taskPriority.style.color = "orange";
        } else {
          taskPriority.style.color = "red";
        }
      }
  
      let taskDueDate = createDomElement(
        "p",
        "taskDueDate",
        "taskDueDate",
        bottomOfContainer
      );
      if (taskArray[i].date != "undefined undefined") {
        taskDueDate.innerHTML = `${taskArray[i].date} | ${taskArray[i].time}`;
      }
    }
  };



const addListeners = () => {
    taskListener();
    createButtonListener();
    overlayListener();
    dateButtonListener();
    displayTasks();
    checkboxListener();
}


export { addListeners };
