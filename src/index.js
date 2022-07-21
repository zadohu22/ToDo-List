import { ToDo, DomElements, createDomElement } from "./create";
import SimplePicker from "simplepicker";

const taskArray = [];
console.log(taskArray[1]);

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
      prioritySelection()
    );
    taskArray.push(createTodo);
    console.log(taskArray);

    displayTasks();
    // close If statement
  }
  // close event Listener
});

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

DomElements.overlay.addEventListener("click", () => {
  DomElements.popup.style.display = "none";
  DomElements.overlay.style.display = "none";
  DomElements.pickerDiv.style.display = "none";
  DomElements.userInput.value = "";
});

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


