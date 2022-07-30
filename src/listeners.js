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
        DomElements.createNewListPopup.style.display = "none";
        DomElements.newListInput.value = "";
        displayTasks();

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
        console.log(location)
        e.addEventListener('click', (event) => {
          DomElements.removeButtonPopup.setAttribute('data-index', location);
            if(!event.target.classList.contains("taskNameCheck")){
                DomElements.taskInfoPopup.style.display = "flex";
                DomElements.overlay.style.display = "block";
                DomElements.taskNamePopup.value = taskArray[location].title;
                DomElements.notesPopup.value = taskArray[location].notes;
            }
        })
        
        DomElements.notesPopup.addEventListener('keyup', () => {
            taskArray[location].notes = DomElements.notesPopup.value;
        })

        DomElements.taskNamePopup.addEventListener('keyup', () => {
          taskArray[location].title = DomElements.taskNamePopup.value;
      })
  
})

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
      // DomElements.taskNamePopup.innerText = taskArray[i].title;
      
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

      //***************** 
      // BELOW IS LOGIC FOR HIDING PRIORITY AND DATE AND STRIKING THROUGH THE TEXT WHEN THE CHECKBOX IS CLICKED
      // THIS FUNCTIONALITY WORKS, BUT IS CAUSING ISSUES WITH OTHER THINGS, AND SINCE IT'S NOT A PART OF THE 
      // ACTUAL PROJECT REQUIREMENTS, I'M LEAVING IT OUT FOR NOW
      // ONE SOLUTION FOR MAKING THIS WORK PROPERLY WOULD BE TO ADD A 'CLICKED' PROPERTY/METHOD TO THE OBJECT
      // AND THEN SAYING WHEN CHECKBOX IS CLICKED, OBJECT.CLICKED = TRUE
      // THEN WHEN THE CARDS ARE WIPED AND REPOPULATED, IF OBJECT.CLICKED = TRUE, THEN ADD ALL THE FUNCTIONALITY 
      // SO THE ISSUE ARISES WHEN DISPLAYTASKS() IS RAN, BECAUSE IT WIPES ALL CHILDREN AND RE-POPULATES THEM 
      //************************** 

      // taskNameCheck.addEventListener('click', (event) => {
      // let bottomOfContainerArr = Array.from(DomElements.allBottomOfContainer);

      //   if(event.target.checked){
      //     bottomOfContainerArr[i].remove();
      //     taskNameCheckLabel.classList.toggle('striked');
          
      //   }else if(!event.target.checked){
      //     createBottomOfContainer();
      //     taskNameCheckLabel.classList.toggle('striked');
      //   }
      // })
  
      let taskNameCheckLabel = createDomElement(
        "label",
        "taskNameCheckLabel",
        "taskNameCheckLabel",
        topOfContainer
      );
      taskNameCheckLabel.innerHTML = taskArray[i].title;
      
      const createBottomOfContainer= () => {
        let bottomOfContainer = createDomElement(
          "div",
          "bottomOfContainer",
          "bottomOfContainer",
          cardContainer
        );
          bottomOfContainer.setAttribute('data-index', i);
          
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
      createBottomOfContainer();
      }
      
  
      
  };


  const removeCard = () => {

    let cardArr = Array.from(DomElements.allCardContainers);
      
        
  
        DomElements.removeButtonPopup.addEventListener('click', () => {
            taskArray.splice(DomElements.removeButtonPopup.dataset.index, 1);
            DomElements.taskInfoPopup.style.display = "none";
            DomElements.overlay.style.display = "none";
            displayTasks();
        })
      }

const newListBtnListener = () => {
  DomElements.newListBtn.addEventListener('click', () => {
    DomElements.createNewListPopup.style.display = 'flex';
    DomElements.overlay.style.display = 'block';


  })
}

const newListInputListener = () => {

}

const submitNewListListener = () => {
  let i = 0;
  DomElements.submitNewList.addEventListener('click', () => {
    
    i++;
    console.log(i)
    let newList = createDomElement('div', 'newList', 'newList', DomElements.listForm);
    let checkbox = createDomElement('input', 'listCheckbox', `listCheckbox${i}`, newList);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "listCheckbox");
    let listTitle = createDomElement('label', 'listTitle', 'listTitle', newList);
    listTitle.setAttribute('for', `listCheckbox${i}`);
    listTitle.textContent = DomElements.newListInput.value;
    DomElements.newListInput.value = "";
    DomElements.createNewListPopup.style.display = "none";
    DomElements.overlay.style.display = "none";
  })
  

}

const addListeners = () => {
    taskListener();
    createButtonListener();
    overlayListener();
    dateButtonListener();
    displayTasks();
    removeCard();
    newListBtnListener();
    submitNewListListener();
    // checkboxListener();
}


export { addListeners };
