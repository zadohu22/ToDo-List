class ToDo{
    constructor(title, date, time, priority, notes, list){
        this.title = title;
        this.date = date;
        this.time = time;
        this.priority = priority;
        this.notes = notes;
        this.list = list;
    }

    
}

const DomElements = {
        createButton: document.getElementById("addNewToDo"),
        popup: document.getElementById("createToDoPopup"),
        overlay: document.getElementById("blackOverlay"),
        addTask: document.getElementById("submitPopup"),
        userInput: document.getElementById("userInput"),
        dateButton: document.getElementById("dateButton"),
        dateContainer: document.getElementById("dateContainer"),
        pickerDiv: document.getElementById("pickerDiv"),
        dueDate: document.getElementById("dueDate"),
        textArea: document.getElementById("textArea"),
        radios: document.querySelectorAll('input[type="radio"]'),
        content: document.getElementById("content"),
        cardContainer: document.getElementById('cardContainer'),
        allCardContainers: document.getElementsByClassName('cardContainer'),
        checkbox: document.getElementById("taskNameCheck"),
        taskInfoPopup: document.getElementById("taskInfoPopup"),
        allTaskInfoPopup: document.getElementsByClassName("taskInfoPopup"),
        taskNamePopup: document.getElementById("taskName"),
        notesPopup: document.getElementById("taskNotes"),
        removeButtonPopup: document.getElementById("removeBtn"),
        markCompletePopup: document.getElementById("markComplete"),
        taskNameCheck: document.getElementById("taskNameCheck"),
        bottomOfContainer: document.getElementById("bottomOfContainer"),
        allBottomOfContainer: document.getElementsByClassName('bottomOfContainer'),
        createNewListPopup: document.getElementById("createNewListPopup"),
        newListBtn: document.getElementById("createNewList"),
        newListInput: document.getElementById("newListInput"),
        submitNewList: document.getElementById("submitNewList"),
        listForm: document.getElementById("sidebarForm")
}


const createDomElement = (element, className, idName, appendTo) => {
    const el = document.createElement(element);
    el.classList.add(className);
    el.id = idName;
    appendTo.appendChild(el)
    return el
}
export { ToDo, DomElements, createDomElement };