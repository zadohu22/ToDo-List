/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/simplepicker/dist/simplepicker.node.js":
/*!*************************************************************!*\
  !*** ./node_modules/simplepicker/dist/simplepicker.node.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s="TYVf")}({"0DyV":function(e,t,i){"use strict";function n(e,t){e=[].concat(e);for(var i=0;i<t;i++)e[i]=void 0;return e}function r(e){var i=new Date(e.getTime()),r=e.getFullYear(),s=e.getMonth(),a={date:i,month:void 0};if(t.monthTracker.current=new Date(e.getTime()),t.monthTracker.current.setDate(1),t.monthTracker.years[r]=t.monthTracker.years[r]||{},void 0!==t.monthTracker.years[r][s])return a.month=t.monthTracker.years[r][s],a;(e=new Date(e.getTime())).setDate(1),t.monthTracker.years[r][s]=[];for(var o=t.monthTracker.years[r][s],c=0;e.getMonth()===s;){var l=e.getDate(),p=e.getDay();1===l&&(o[c]=n([],p)),o[c]=o[c]||[],o[c][p]=l,6===p&&c++,e.setDate(e.getDate()+1)}var d=5;void 0===o[5]&&(d=4,o[5]=n([],7));var m=o[d].length;if(m<7){var h=o[d].concat(n([],7-m));o[d]=h}return a.month=o,a}Object.defineProperty(t,"__esModule",{value:!0}),t.monthTracker={years:{}},t.months=["January","February","March","April","May","June","July","August","September","October","November","December"],t.days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t.scrapeMonth=r,t.scrapePreviousMonth=function(){var e=t.monthTracker.current;if(!e)throw Error("scrapePrevoisMonth called without setting monthTracker.current!");return e.setMonth(e.getMonth()-1),r(e)},t.scrapeNextMonth=function(){var e=t.monthTracker.current;if(!e)throw Error("scrapePrevoisMonth called without setting monthTracker.current!");return e.setMonth(e.getMonth()+1),r(e)};var s={st:[1,21,31],nd:[2,22],rd:[3,23]};t.getDisplayDate=function(e){var t=e.getDate();return-1!==s.st.indexOf(t)?t+"st":-1!==s.nd.indexOf(t)?t+"nd":-1!==s.rd.indexOf(t)?t+"rd":t+"th"},t.formatTimeFromInputElement=function(e){var t="",i=e.split(":"),n=i[0],r=(n=+n)>=12;return r&&n>12&&(n-=12),r||0!==n||(n=12),t+=n<10?"0"+n:n,t+=":"+i[1]+" ",t+=r?"PM":"AM"}},TYVf:function(e,t,i){"use strict";var n=i("0DyV"),r=i("ht6X"),s=["submit","close"],a=new Date,o=function(){function e(e,t){this._validOnListeners=s;var i=void 0,n=t;if("string"==typeof e){var r=document.querySelector(e);if(null===r)throw new Error("Invalid selector passed to SimplePicker!");i=r}else e instanceof HTMLElement?i=e:"object"==typeof e&&(n=e);i||(i=document.querySelector("body")),n||(n={}),this.selectedDate=new Date,this.injectTemplate(i),this.init(i,n),this.initListeners(),this._eventHandlers={}}return e.prototype.initElMethod=function(e){this.$=function(t){return e.querySelector(t)},this.$$=function(t){return e.querySelectorAll(t)}},e.prototype.init=function(e,t){this.$simplepickerWrapper=e.querySelector(".simplepicker-wrapper"),this.initElMethod(this.$simplepickerWrapper);var i=this.$,r=this.$$;this.$simplepicker=i(".simpilepicker-date-picker"),this.$trs=r(".simplepicker-calender tbody tr"),this.$tds=r(".simplepicker-calender tbody td"),this.$headerMonthAndYear=i(".simplepicker-month-and-year"),this.$monthAndYear=i(".simplepicker-selected-date"),this.$date=i(".simplepicker-date"),this.$day=i(".simplepicker-day-header"),this.$time=i(".simplepicker-time"),this.$timeInput=i(".simplepicker-time-section input"),this.$timeSectionIcon=i(".simplepicker-icon-time"),this.$cancel=i(".simplepicker-cancel-btn"),this.$ok=i(".simplepicker-ok-btn"),this.$displayDateElements=[this.$day,this.$headerMonthAndYear,this.$date],this.$time.classList.add("simplepicker-fade"),this.render(n.scrapeMonth(a)),t=t||{},this.opts=t,this.reset(t.selectedDate||a),void 0!==t.zIndex&&(this.$simplepickerWrapper.style.zIndex=t.zIndex.toString()),t.disableTimeSection&&this.disableTimeSection(),t.compactMode&&this.compactMode()},e.prototype.reset=function(e){var t=e||new Date;this.render(n.scrapeMonth(t));var i=t.toTimeString().split(" ")[0].replace(/\:\d\d$/,"");this.$timeInput.value=i,this.$time.innerText=n.formatTimeFromInputElement(i);var r=t.getDate().toString(),s=this.findElementWithDate(r);s.classList.contains("active")||(this.selectDateElement(s),this.updateDateComponents(t))},e.prototype.compactMode=function(){this.$date.style.display="none"},e.prototype.disableTimeSection=function(){this.$timeSectionIcon.style.visibility="hidden"},e.prototype.enableTimeSection=function(){this.$timeSectionIcon.style.visibility="visible"},e.prototype.injectTemplate=function(e){var t=document.createElement("template");t.innerHTML=r.htmlTemplate,e.appendChild(t.content.cloneNode(!0))},e.prototype.clearRows=function(){this.$tds.forEach(function(e){e.innerHTML="",e.classList.remove("active")})},e.prototype.updateDateComponents=function(e){var t=n.days[e.getDay()],i=n.months[e.getMonth()]+" "+e.getFullYear();this.$headerMonthAndYear.innerHTML=i,this.$monthAndYear.innerHTML=i,this.$day.innerHTML=t,this.$date.innerHTML=n.getDisplayDate(e)},e.prototype.render=function(e){var t=this.$$,i=this.$trs,n=e.month,r=e.date;this.clearRows(),n.forEach(function(e,t){var n=i[t].children;e.forEach(function(e,t){var i=n[t];e?(i.removeAttribute("data-empty"),i.innerHTML=e):i.setAttribute("data-empty","")})});var s=t("table tbody tr:last-child td"),a=!0;s.forEach(function(e){void 0===e.dataset.empty&&(a=!1)});var o=s[0].parentElement;o.style.display=a&&o?"none":"table-row",this.updateDateComponents(r)},e.prototype.updateSelectedDate=function(e){var t,i=this.$monthAndYear,r=this.$time;this.$date;t=e?e.innerHTML.trim():this.$date.innerHTML.replace(/[a-z]+/,"");var s=i.innerHTML.split(" "),a=s[0],o=s[1],c=n.months.indexOf(a),l=r.innerHTML.split(":"),p=+l[0],d=l[1].split(" "),m=d[0],h=d[1];"AM"===h&&12==p&&(p=0),"PM"===h&&p<12&&(p+=12);var u=new Date(+o,+c,+t,+p,+m);this.selectedDate=u;var v=t+" ";v+=i.innerHTML.trim()+" ",v+=r.innerHTML.trim(),this.readableDate=v.replace(/^\d+/,u.getDate().toString())},e.prototype.selectDateElement=function(e){var t=this.$(".simplepicker-calender tbody .active");e.classList.add("active"),t&&t.classList.remove("active"),this.updateSelectedDate(e),this.updateDateComponents(this.selectedDate)},e.prototype.findElementWithDate=function(e,t){var i,n;return void 0===t&&(t=!1),this.$tds.forEach(function(t){var r=t.innerHTML.trim();r===e&&(i=t),""!==r&&(n=t)}),void 0===i&&t&&(i=n),i},e.prototype.handleIconButtonClick=function(e){var t,i=this.$;if(e.classList.contains("simplepicker-icon-calender")){var r=i(".simplepicker-icon-time"),s=i(".simplepicker-time-section");return(o=i(".simplepicker-calender-section")).style.display="block",s.style.display="none",r.classList.remove("active"),e.classList.add("active"),void this.toogleDisplayFade()}if(e.classList.contains("simplepicker-icon-time")){var a=i(".simplepicker-icon-calender"),o=i(".simplepicker-calender-section");return(s=i(".simplepicker-time-section")).style.display="block",o.style.display="none",a.classList.remove("active"),e.classList.add("active"),void this.toogleDisplayFade()}var c=i(".simplepicker-calender td.active");if(c&&(t=c.innerHTML.trim()),e.classList.contains("simplepicker-icon-next")&&this.render(n.scrapeNextMonth()),e.classList.contains("simplepicker-icon-previous")&&this.render(n.scrapePreviousMonth()),t){var l=this.findElementWithDate(t,!0);this.selectDateElement(l)}},e.prototype.initListeners=function(){var e=this,t=e.$simplepicker,i=e.$timeInput,r=e.$ok,s=e.$cancel,a=e.$simplepickerWrapper,o=this;function c(){o.close(),o.callEvent("close",function(e){e()})}t.addEventListener("click",function(e){var t=e.target,i=t.tagName.toLowerCase();e.stopPropagation(),"td"!==i?"button"===i&&t.classList.contains("simplepicker-icon")&&o.handleIconButtonClick(t):o.selectDateElement(t)}),i.addEventListener("input",function(e){if(""!==e.target.value){var t=n.formatTimeFromInputElement(e.target.value);o.$time.innerHTML=t,o.updateSelectedDate()}}),r.addEventListener("click",function(){o.close(),o.callEvent("submit",function(e){e(o.selectedDate,o.readableDate)})}),s.addEventListener("click",c),a.addEventListener("click",c)},e.prototype.callEvent=function(e,t){(this._eventHandlers[e]||[]).forEach(function(e){t(e)})},e.prototype.open=function(){this.$simplepickerWrapper.classList.add("active")},e.prototype.close=function(){this.$simplepickerWrapper.classList.remove("active")},e.prototype.on=function(e,t){var i=this._validOnListeners,n=this._eventHandlers;if(!i.includes(e))throw new Error("Not a valid event!");n[e]=n[e]||[],n[e].push(t)},e.prototype.toogleDisplayFade=function(){this.$time.classList.toggle("simplepicker-fade"),this.$displayDateElements.forEach(function(e){e.classList.toggle("simplepicker-fade")})},e}();e.exports=o},ht6X:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.htmlTemplate='\n<div class="simplepicker-wrapper">\n  <div class="simpilepicker-date-picker">\n    <div class="simplepicker-day-header"></div>\n      <div class="simplepicker-date-section">\n        <div class="simplepicker-month-and-year"></div>\n        <div class="simplepicker-date"></div>\n        <div class="simplepicker-select-pane">\n          <button class="simplepicker-icon simplepicker-icon-calender active" title="Select date from calender!"></button>\n          <div class="simplepicker-time">12:00 PM</div>\n          <button class="simplepicker-icon simplepicker-icon-time" title="Select time"></button>\n        </div>\n      </div>\n      <div class="simplepicker-picker-section">\n        <div class="simplepicker-calender-section">\n          <div class="simplepicker-month-switcher simplepicker-select-pane">\n            <button class="simplepicker-icon simplepicker-icon-previous"></button>\n            <div class="simplepicker-selected-date"></div>\n            <button class="simplepicker-icon simplepicker-icon-next"></button>\n          </div>\n          <div class="simplepicker-calender">\n            <table>\n              <thead>\n                <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n              </thead>\n              <tbody>\n                '+function(e,t){for(var i="",n=1;n<=t;n++)i+=e;return i}("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>",6)+'\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class="simplepicker-time-section">\n          <input type="time" value="12:00" autofocus="false">\n        </div>\n      </div>\n      <div class="simplepicker-bottom-part">\n        <button class="simplepicker-cancel-btn simplepicker-btn" title="Cancel">Cancel</button>\n        <button class="simplepicker-ok-btn simplepicker-btn" title="OK">OK</button>\n      </div>\n  </div>\n</div>\n'}});
//# sourceMappingURL=simplepicker.node.js.map

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomElements": () => (/* binding */ DomElements),
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "createDomElement": () => (/* binding */ createDomElement)
/* harmony export */ });
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


/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListeners": () => (/* binding */ addListeners)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./src/create.js");
/* harmony import */ var simplepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplepicker */ "./node_modules/simplepicker/dist/simplepicker.node.js");
/* harmony import */ var simplepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simplepicker__WEBPACK_IMPORTED_MODULE_1__);



const taskArray = [];

const taskListener = () => {
    _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.addTask.addEventListener("click", () => {
        if (_create__WEBPACK_IMPORTED_MODULE_0__.DomElements.userInput.value != "") {
          const prioritySelection = () => {
            let priority;
            _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.radios.forEach((radio) => {
              if (radio.checked) {
                let selection = radio.id;
                priority = selection.charAt(0).toUpperCase() + selection.slice(1);
              }
            });
            return priority;
          };
      
          // close popup after submit
          _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.popup.style.display = "none";
          _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.style.display = "none";
          _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.pickerDiv.style.display = "none";
      
          // format Due Date for display
          let dueDateArr = _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.dueDate.innerHTML.split(" ");
          let usableDate = `${dueDateArr[2]} ${dueDateArr[1]}`;
          let usableTime = `${dueDateArr[4]} ${dueDateArr[5]}`;
      
          let createTodo = new _create__WEBPACK_IMPORTED_MODULE_0__.ToDo(
            userInput.value,
            usableDate,
            usableTime,
            prioritySelection(),
            _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.textArea.value
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
    _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.createButton.addEventListener("click", () => {
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.popup.style.display = "flex";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.style.display = "block";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.userInput.value = "";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.textArea.value = "";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.dueDate.value = "";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.dueDate.innerHTML = "";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.radios.forEach((radio) => {
          radio.checked = false;
        });
      });
}

const overlayListener = () => {
    _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.addEventListener("click", () => {
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.popup.style.display = "none";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.style.display = "none";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.pickerDiv.style.display = "none";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.taskInfoPopup.style.display = "none";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.userInput.value = "";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.createNewListPopup.style.display = "none";
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.newListInput.value = "";
        displayTasks();

      });
}

const dateButtonListener = () => {
    _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.dateButton.addEventListener("click", () => {
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.pickerDiv.style.display = "flex";
        let picker = new (simplepicker__WEBPACK_IMPORTED_MODULE_1___default())(pickerDiv, {
          zIndex: 1004,
        });
        picker.open();
        picker.on("submit", function (date, readableDate) {
          _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.dueDate.innerHTML = `Due: ${readableDate}`;
        });
      });
}

const cardContainerListener = () => {
    let cardsArr = Array.from(_create__WEBPACK_IMPORTED_MODULE_0__.DomElements.allCardContainers);
    cardsArr.forEach(e => {
        let location = e.dataset.index;
        console.log(location)
        e.addEventListener('click', (event) => {
          _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.removeButtonPopup.setAttribute('data-index', location);
            if(!event.target.classList.contains("taskNameCheck")){
                _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.taskInfoPopup.style.display = "flex";
                _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.style.display = "block";
                _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.taskNamePopup.value = taskArray[location].title;
                _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.notesPopup.value = taskArray[location].notes;
            }
        })
        
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.notesPopup.addEventListener('keyup', () => {
            taskArray[location].notes = _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.notesPopup.value;
        })

        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.taskNamePopup.addEventListener('keyup', () => {
          taskArray[location].title = _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.taskNamePopup.value;
      })
  
})

}
        





const displayTasks = () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    
    for (let i = 0; i < taskArray.length; i++) {
      let cardContainer = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(
        "div",
        "cardContainer",
        "cardContainer",
        content
      );
      cardContainer.setAttribute('data-index', i);
      // DomElements.taskNamePopup.innerText = taskArray[i].title;
      
      cardContainerListener();
      
    //   taskArray[i].notes = DomElements.notesPopup.value;

  
      let topOfContainer = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(
        "div",
        "topOfContainer",
        "topOfContainer",
        cardContainer
      );
  
      let taskNameCheck = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(
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
  
      let taskNameCheckLabel = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(
        "label",
        "taskNameCheckLabel",
        "taskNameCheckLabel",
        topOfContainer
      );
      taskNameCheckLabel.innerHTML = taskArray[i].title;
      
      const createBottomOfContainer= () => {
        let bottomOfContainer = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(
          "div",
          "bottomOfContainer",
          "bottomOfContainer",
          cardContainer
        );
          bottomOfContainer.setAttribute('data-index', i);
          
        if (taskArray[i].priority != undefined) {
          let taskPriority = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(
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
    
        let taskDueDate = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(
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

    let cardArr = Array.from(_create__WEBPACK_IMPORTED_MODULE_0__.DomElements.allCardContainers);
      
        
  
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.removeButtonPopup.addEventListener('click', () => {
            taskArray.splice(_create__WEBPACK_IMPORTED_MODULE_0__.DomElements.removeButtonPopup.dataset.index, 1);
            _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.taskInfoPopup.style.display = "none";
            _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.style.display = "none";
            displayTasks();
        })
      }

const newListBtnListener = () => {
  _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.newListBtn.addEventListener('click', () => {
    _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.createNewListPopup.style.display = 'flex';
    _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.style.display = 'block';


  })
}

const newListInputListener = () => {

}

const submitNewListListener = () => {
  let i = 0;
  _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.submitNewList.addEventListener('click', () => {
    
    i++;
    console.log(i)
    let newList = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)('div', 'newList', 'newList', _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.listForm);
    let checkbox = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)('input', 'listCheckbox', `listCheckbox${i}`, newList);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "listCheckbox");
    let listTitle = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)('label', 'listTitle', 'listTitle', newList);
    listTitle.setAttribute('for', `listCheckbox${i}`);
    listTitle.textContent = _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.newListInput.value;
    _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.newListInput.value = "";
    _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.createNewListPopup.style.display = "none";
    _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.style.display = "none";
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





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./src/create.js");
/* harmony import */ var simplepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplepicker */ "./node_modules/simplepicker/dist/simplepicker.node.js");
/* harmony import */ var simplepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simplepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");






(0,_listeners__WEBPACK_IMPORTED_MODULE_2__.addListeners)();





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ04rRDtBQUN2QjtBQUNHOzs7O0FBSTNDLHdEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3NpbXBsZXBpY2tlci9kaXN0L3NpbXBsZXBpY2tlci5ub2RlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIGkobil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciByPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLGkpLHIubD0hMCxyLmV4cG9ydHN9cmV0dXJuIGkubT1lLGkuYz10LGkuZD1mdW5jdGlvbihlLHQsbil7aS5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om59KX0saS5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGkudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9aShlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKGkucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIHIgaW4gZSlpLmQobixyLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwscikpO3JldHVybiBufSxpLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIGkuZCh0LFwiYVwiLHQpLHR9LGkubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0saS5wPVwiXCIsaShpLnM9XCJUWVZmXCIpfSh7XCIwRHlWXCI6ZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0KXtlPVtdLmNvbmNhdChlKTtmb3IodmFyIGk9MDtpPHQ7aSsrKWVbaV09dm9pZCAwO3JldHVybiBlfWZ1bmN0aW9uIHIoZSl7dmFyIGk9bmV3IERhdGUoZS5nZXRUaW1lKCkpLHI9ZS5nZXRGdWxsWWVhcigpLHM9ZS5nZXRNb250aCgpLGE9e2RhdGU6aSxtb250aDp2b2lkIDB9O2lmKHQubW9udGhUcmFja2VyLmN1cnJlbnQ9bmV3IERhdGUoZS5nZXRUaW1lKCkpLHQubW9udGhUcmFja2VyLmN1cnJlbnQuc2V0RGF0ZSgxKSx0Lm1vbnRoVHJhY2tlci55ZWFyc1tyXT10Lm1vbnRoVHJhY2tlci55ZWFyc1tyXXx8e30sdm9pZCAwIT09dC5tb250aFRyYWNrZXIueWVhcnNbcl1bc10pcmV0dXJuIGEubW9udGg9dC5tb250aFRyYWNrZXIueWVhcnNbcl1bc10sYTsoZT1uZXcgRGF0ZShlLmdldFRpbWUoKSkpLnNldERhdGUoMSksdC5tb250aFRyYWNrZXIueWVhcnNbcl1bc109W107Zm9yKHZhciBvPXQubW9udGhUcmFja2VyLnllYXJzW3JdW3NdLGM9MDtlLmdldE1vbnRoKCk9PT1zOyl7dmFyIGw9ZS5nZXREYXRlKCkscD1lLmdldERheSgpOzE9PT1sJiYob1tjXT1uKFtdLHApKSxvW2NdPW9bY118fFtdLG9bY11bcF09bCw2PT09cCYmYysrLGUuc2V0RGF0ZShlLmdldERhdGUoKSsxKX12YXIgZD01O3ZvaWQgMD09PW9bNV0mJihkPTQsb1s1XT1uKFtdLDcpKTt2YXIgbT1vW2RdLmxlbmd0aDtpZihtPDcpe3ZhciBoPW9bZF0uY29uY2F0KG4oW10sNy1tKSk7b1tkXT1ofXJldHVybiBhLm1vbnRoPW8sYX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lm1vbnRoVHJhY2tlcj17eWVhcnM6e319LHQubW9udGhzPVtcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSx0LmRheXM9W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sdC5zY3JhcGVNb250aD1yLHQuc2NyYXBlUHJldmlvdXNNb250aD1mdW5jdGlvbigpe3ZhciBlPXQubW9udGhUcmFja2VyLmN1cnJlbnQ7aWYoIWUpdGhyb3cgRXJyb3IoXCJzY3JhcGVQcmV2b2lzTW9udGggY2FsbGVkIHdpdGhvdXQgc2V0dGluZyBtb250aFRyYWNrZXIuY3VycmVudCFcIik7cmV0dXJuIGUuc2V0TW9udGgoZS5nZXRNb250aCgpLTEpLHIoZSl9LHQuc2NyYXBlTmV4dE1vbnRoPWZ1bmN0aW9uKCl7dmFyIGU9dC5tb250aFRyYWNrZXIuY3VycmVudDtpZighZSl0aHJvdyBFcnJvcihcInNjcmFwZVByZXZvaXNNb250aCBjYWxsZWQgd2l0aG91dCBzZXR0aW5nIG1vbnRoVHJhY2tlci5jdXJyZW50IVwiKTtyZXR1cm4gZS5zZXRNb250aChlLmdldE1vbnRoKCkrMSkscihlKX07dmFyIHM9e3N0OlsxLDIxLDMxXSxuZDpbMiwyMl0scmQ6WzMsMjNdfTt0LmdldERpc3BsYXlEYXRlPWZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0RGF0ZSgpO3JldHVybi0xIT09cy5zdC5pbmRleE9mKHQpP3QrXCJzdFwiOi0xIT09cy5uZC5pbmRleE9mKHQpP3QrXCJuZFwiOi0xIT09cy5yZC5pbmRleE9mKHQpP3QrXCJyZFwiOnQrXCJ0aFwifSx0LmZvcm1hdFRpbWVGcm9tSW5wdXRFbGVtZW50PWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCIsaT1lLnNwbGl0KFwiOlwiKSxuPWlbMF0scj0obj0rbik+PTEyO3JldHVybiByJiZuPjEyJiYobi09MTIpLHJ8fDAhPT1ufHwobj0xMiksdCs9bjwxMD9cIjBcIituOm4sdCs9XCI6XCIraVsxXStcIiBcIix0Kz1yP1wiUE1cIjpcIkFNXCJ9fSxUWVZmOmZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1pKFwiMER5VlwiKSxyPWkoXCJodDZYXCIpLHM9W1wic3VibWl0XCIsXCJjbG9zZVwiXSxhPW5ldyBEYXRlLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dGhpcy5fdmFsaWRPbkxpc3RlbmVycz1zO3ZhciBpPXZvaWQgMCxuPXQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk7aWYobnVsbD09PXIpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzZWxlY3RvciBwYXNzZWQgdG8gU2ltcGxlUGlja2VyIVwiKTtpPXJ9ZWxzZSBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/aT1lOlwib2JqZWN0XCI9PXR5cGVvZiBlJiYobj1lKTtpfHwoaT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSksbnx8KG49e30pLHRoaXMuc2VsZWN0ZWREYXRlPW5ldyBEYXRlLHRoaXMuaW5qZWN0VGVtcGxhdGUoaSksdGhpcy5pbml0KGksbiksdGhpcy5pbml0TGlzdGVuZXJzKCksdGhpcy5fZXZlbnRIYW5kbGVycz17fX1yZXR1cm4gZS5wcm90b3R5cGUuaW5pdEVsTWV0aG9kPWZ1bmN0aW9uKGUpe3RoaXMuJD1mdW5jdGlvbih0KXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yKHQpfSx0aGlzLiQkPWZ1bmN0aW9uKHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3JBbGwodCl9fSxlLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGUsdCl7dGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlcj1lLnF1ZXJ5U2VsZWN0b3IoXCIuc2ltcGxlcGlja2VyLXdyYXBwZXJcIiksdGhpcy5pbml0RWxNZXRob2QodGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlcik7dmFyIGk9dGhpcy4kLHI9dGhpcy4kJDt0aGlzLiRzaW1wbGVwaWNrZXI9aShcIi5zaW1waWxlcGlja2VyLWRhdGUtcGlja2VyXCIpLHRoaXMuJHRycz1yKFwiLnNpbXBsZXBpY2tlci1jYWxlbmRlciB0Ym9keSB0clwiKSx0aGlzLiR0ZHM9cihcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXIgdGJvZHkgdGRcIiksdGhpcy4kaGVhZGVyTW9udGhBbmRZZWFyPWkoXCIuc2ltcGxlcGlja2VyLW1vbnRoLWFuZC15ZWFyXCIpLHRoaXMuJG1vbnRoQW5kWWVhcj1pKFwiLnNpbXBsZXBpY2tlci1zZWxlY3RlZC1kYXRlXCIpLHRoaXMuJGRhdGU9aShcIi5zaW1wbGVwaWNrZXItZGF0ZVwiKSx0aGlzLiRkYXk9aShcIi5zaW1wbGVwaWNrZXItZGF5LWhlYWRlclwiKSx0aGlzLiR0aW1lPWkoXCIuc2ltcGxlcGlja2VyLXRpbWVcIiksdGhpcy4kdGltZUlucHV0PWkoXCIuc2ltcGxlcGlja2VyLXRpbWUtc2VjdGlvbiBpbnB1dFwiKSx0aGlzLiR0aW1lU2VjdGlvbkljb249aShcIi5zaW1wbGVwaWNrZXItaWNvbi10aW1lXCIpLHRoaXMuJGNhbmNlbD1pKFwiLnNpbXBsZXBpY2tlci1jYW5jZWwtYnRuXCIpLHRoaXMuJG9rPWkoXCIuc2ltcGxlcGlja2VyLW9rLWJ0blwiKSx0aGlzLiRkaXNwbGF5RGF0ZUVsZW1lbnRzPVt0aGlzLiRkYXksdGhpcy4kaGVhZGVyTW9udGhBbmRZZWFyLHRoaXMuJGRhdGVdLHRoaXMuJHRpbWUuY2xhc3NMaXN0LmFkZChcInNpbXBsZXBpY2tlci1mYWRlXCIpLHRoaXMucmVuZGVyKG4uc2NyYXBlTW9udGgoYSkpLHQ9dHx8e30sdGhpcy5vcHRzPXQsdGhpcy5yZXNldCh0LnNlbGVjdGVkRGF0ZXx8YSksdm9pZCAwIT09dC56SW5kZXgmJih0aGlzLiRzaW1wbGVwaWNrZXJXcmFwcGVyLnN0eWxlLnpJbmRleD10LnpJbmRleC50b1N0cmluZygpKSx0LmRpc2FibGVUaW1lU2VjdGlvbiYmdGhpcy5kaXNhYmxlVGltZVNlY3Rpb24oKSx0LmNvbXBhY3RNb2RlJiZ0aGlzLmNvbXBhY3RNb2RlKCl9LGUucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKGUpe3ZhciB0PWV8fG5ldyBEYXRlO3RoaXMucmVuZGVyKG4uc2NyYXBlTW9udGgodCkpO3ZhciBpPXQudG9UaW1lU3RyaW5nKCkuc3BsaXQoXCIgXCIpWzBdLnJlcGxhY2UoL1xcOlxcZFxcZCQvLFwiXCIpO3RoaXMuJHRpbWVJbnB1dC52YWx1ZT1pLHRoaXMuJHRpbWUuaW5uZXJUZXh0PW4uZm9ybWF0VGltZUZyb21JbnB1dEVsZW1lbnQoaSk7dmFyIHI9dC5nZXREYXRlKCkudG9TdHJpbmcoKSxzPXRoaXMuZmluZEVsZW1lbnRXaXRoRGF0ZShyKTtzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKXx8KHRoaXMuc2VsZWN0RGF0ZUVsZW1lbnQocyksdGhpcy51cGRhdGVEYXRlQ29tcG9uZW50cyh0KSl9LGUucHJvdG90eXBlLmNvbXBhY3RNb2RlPWZ1bmN0aW9uKCl7dGhpcy4kZGF0ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwifSxlLnByb3RvdHlwZS5kaXNhYmxlVGltZVNlY3Rpb249ZnVuY3Rpb24oKXt0aGlzLiR0aW1lU2VjdGlvbkljb24uc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwifSxlLnByb3RvdHlwZS5lbmFibGVUaW1lU2VjdGlvbj1mdW5jdGlvbigpe3RoaXMuJHRpbWVTZWN0aW9uSWNvbi5zdHlsZS52aXNpYmlsaXR5PVwidmlzaWJsZVwifSxlLnByb3RvdHlwZS5pbmplY3RUZW1wbGF0ZT1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7dC5pbm5lckhUTUw9ci5odG1sVGVtcGxhdGUsZS5hcHBlbmRDaGlsZCh0LmNvbnRlbnQuY2xvbmVOb2RlKCEwKSl9LGUucHJvdG90eXBlLmNsZWFyUm93cz1mdW5jdGlvbigpe3RoaXMuJHRkcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiXCIsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpfSl9LGUucHJvdG90eXBlLnVwZGF0ZURhdGVDb21wb25lbnRzPWZ1bmN0aW9uKGUpe3ZhciB0PW4uZGF5c1tlLmdldERheSgpXSxpPW4ubW9udGhzW2UuZ2V0TW9udGgoKV0rXCIgXCIrZS5nZXRGdWxsWWVhcigpO3RoaXMuJGhlYWRlck1vbnRoQW5kWWVhci5pbm5lckhUTUw9aSx0aGlzLiRtb250aEFuZFllYXIuaW5uZXJIVE1MPWksdGhpcy4kZGF5LmlubmVySFRNTD10LHRoaXMuJGRhdGUuaW5uZXJIVE1MPW4uZ2V0RGlzcGxheURhdGUoZSl9LGUucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLiQkLGk9dGhpcy4kdHJzLG49ZS5tb250aCxyPWUuZGF0ZTt0aGlzLmNsZWFyUm93cygpLG4uZm9yRWFjaChmdW5jdGlvbihlLHQpe3ZhciBuPWlbdF0uY2hpbGRyZW47ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIGk9blt0XTtlPyhpLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtZW1wdHlcIiksaS5pbm5lckhUTUw9ZSk6aS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVtcHR5XCIsXCJcIil9KX0pO3ZhciBzPXQoXCJ0YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkXCIpLGE9ITA7cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuZGF0YXNldC5lbXB0eSYmKGE9ITEpfSk7dmFyIG89c1swXS5wYXJlbnRFbGVtZW50O28uc3R5bGUuZGlzcGxheT1hJiZvP1wibm9uZVwiOlwidGFibGUtcm93XCIsdGhpcy51cGRhdGVEYXRlQ29tcG9uZW50cyhyKX0sZS5wcm90b3R5cGUudXBkYXRlU2VsZWN0ZWREYXRlPWZ1bmN0aW9uKGUpe3ZhciB0LGk9dGhpcy4kbW9udGhBbmRZZWFyLHI9dGhpcy4kdGltZTt0aGlzLiRkYXRlO3Q9ZT9lLmlubmVySFRNTC50cmltKCk6dGhpcy4kZGF0ZS5pbm5lckhUTUwucmVwbGFjZSgvW2Etel0rLyxcIlwiKTt2YXIgcz1pLmlubmVySFRNTC5zcGxpdChcIiBcIiksYT1zWzBdLG89c1sxXSxjPW4ubW9udGhzLmluZGV4T2YoYSksbD1yLmlubmVySFRNTC5zcGxpdChcIjpcIikscD0rbFswXSxkPWxbMV0uc3BsaXQoXCIgXCIpLG09ZFswXSxoPWRbMV07XCJBTVwiPT09aCYmMTI9PXAmJihwPTApLFwiUE1cIj09PWgmJnA8MTImJihwKz0xMik7dmFyIHU9bmV3IERhdGUoK28sK2MsK3QsK3AsK20pO3RoaXMuc2VsZWN0ZWREYXRlPXU7dmFyIHY9dCtcIiBcIjt2Kz1pLmlubmVySFRNTC50cmltKCkrXCIgXCIsdis9ci5pbm5lckhUTUwudHJpbSgpLHRoaXMucmVhZGFibGVEYXRlPXYucmVwbGFjZSgvXlxcZCsvLHUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpfSxlLnByb3RvdHlwZS5zZWxlY3REYXRlRWxlbWVudD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLiQoXCIuc2ltcGxlcGlja2VyLWNhbGVuZGVyIHRib2R5IC5hY3RpdmVcIik7ZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLHQmJnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSx0aGlzLnVwZGF0ZVNlbGVjdGVkRGF0ZShlKSx0aGlzLnVwZGF0ZURhdGVDb21wb25lbnRzKHRoaXMuc2VsZWN0ZWREYXRlKX0sZS5wcm90b3R5cGUuZmluZEVsZW1lbnRXaXRoRGF0ZT1mdW5jdGlvbihlLHQpe3ZhciBpLG47cmV0dXJuIHZvaWQgMD09PXQmJih0PSExKSx0aGlzLiR0ZHMuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgcj10LmlubmVySFRNTC50cmltKCk7cj09PWUmJihpPXQpLFwiXCIhPT1yJiYobj10KX0pLHZvaWQgMD09PWkmJnQmJihpPW4pLGl9LGUucHJvdG90eXBlLmhhbmRsZUljb25CdXR0b25DbGljaz1mdW5jdGlvbihlKXt2YXIgdCxpPXRoaXMuJDtpZihlLmNsYXNzTGlzdC5jb250YWlucyhcInNpbXBsZXBpY2tlci1pY29uLWNhbGVuZGVyXCIpKXt2YXIgcj1pKFwiLnNpbXBsZXBpY2tlci1pY29uLXRpbWVcIikscz1pKFwiLnNpbXBsZXBpY2tlci10aW1lLXNlY3Rpb25cIik7cmV0dXJuKG89aShcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXItc2VjdGlvblwiKSkuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIscy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSxlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIiksdm9pZCB0aGlzLnRvb2dsZURpc3BsYXlGYWRlKCl9aWYoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW1wbGVwaWNrZXItaWNvbi10aW1lXCIpKXt2YXIgYT1pKFwiLnNpbXBsZXBpY2tlci1pY29uLWNhbGVuZGVyXCIpLG89aShcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXItc2VjdGlvblwiKTtyZXR1cm4ocz1pKFwiLnNpbXBsZXBpY2tlci10aW1lLXNlY3Rpb25cIikpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLG8uc3R5bGUuZGlzcGxheT1cIm5vbmVcIixhLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIiksZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLHZvaWQgdGhpcy50b29nbGVEaXNwbGF5RmFkZSgpfXZhciBjPWkoXCIuc2ltcGxlcGlja2VyLWNhbGVuZGVyIHRkLmFjdGl2ZVwiKTtpZihjJiYodD1jLmlubmVySFRNTC50cmltKCkpLGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2ltcGxlcGlja2VyLWljb24tbmV4dFwiKSYmdGhpcy5yZW5kZXIobi5zY3JhcGVOZXh0TW9udGgoKSksZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW1wbGVwaWNrZXItaWNvbi1wcmV2aW91c1wiKSYmdGhpcy5yZW5kZXIobi5zY3JhcGVQcmV2aW91c01vbnRoKCkpLHQpe3ZhciBsPXRoaXMuZmluZEVsZW1lbnRXaXRoRGF0ZSh0LCEwKTt0aGlzLnNlbGVjdERhdGVFbGVtZW50KGwpfX0sZS5wcm90b3R5cGUuaW5pdExpc3RlbmVycz1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRzaW1wbGVwaWNrZXIsaT1lLiR0aW1lSW5wdXQscj1lLiRvayxzPWUuJGNhbmNlbCxhPWUuJHNpbXBsZXBpY2tlcldyYXBwZXIsbz10aGlzO2Z1bmN0aW9uIGMoKXtvLmNsb3NlKCksby5jYWxsRXZlbnQoXCJjbG9zZVwiLGZ1bmN0aW9uKGUpe2UoKX0pfXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQsaT10LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtlLnN0b3BQcm9wYWdhdGlvbigpLFwidGRcIiE9PWk/XCJidXR0b25cIj09PWkmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2ltcGxlcGlja2VyLWljb25cIikmJm8uaGFuZGxlSWNvbkJ1dHRvbkNsaWNrKHQpOm8uc2VsZWN0RGF0ZUVsZW1lbnQodCl9KSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGUpe2lmKFwiXCIhPT1lLnRhcmdldC52YWx1ZSl7dmFyIHQ9bi5mb3JtYXRUaW1lRnJvbUlucHV0RWxlbWVudChlLnRhcmdldC52YWx1ZSk7by4kdGltZS5pbm5lckhUTUw9dCxvLnVwZGF0ZVNlbGVjdGVkRGF0ZSgpfX0pLHIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtvLmNsb3NlKCksby5jYWxsRXZlbnQoXCJzdWJtaXRcIixmdW5jdGlvbihlKXtlKG8uc2VsZWN0ZWREYXRlLG8ucmVhZGFibGVEYXRlKX0pfSkscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGMpfSxlLnByb3RvdHlwZS5jYWxsRXZlbnQ9ZnVuY3Rpb24oZSx0KXsodGhpcy5fZXZlbnRIYW5kbGVyc1tlXXx8W10pLmZvckVhY2goZnVuY3Rpb24oZSl7dChlKX0pfSxlLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7dGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpfSxlLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuJHNpbXBsZXBpY2tlcldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKX0sZS5wcm90b3R5cGUub249ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLl92YWxpZE9uTGlzdGVuZXJzLG49dGhpcy5fZXZlbnRIYW5kbGVycztpZighaS5pbmNsdWRlcyhlKSl0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSB2YWxpZCBldmVudCFcIik7bltlXT1uW2VdfHxbXSxuW2VdLnB1c2godCl9LGUucHJvdG90eXBlLnRvb2dsZURpc3BsYXlGYWRlPWZ1bmN0aW9uKCl7dGhpcy4kdGltZS5jbGFzc0xpc3QudG9nZ2xlKFwic2ltcGxlcGlja2VyLWZhZGVcIiksdGhpcy4kZGlzcGxheURhdGVFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuY2xhc3NMaXN0LnRvZ2dsZShcInNpbXBsZXBpY2tlci1mYWRlXCIpfSl9LGV9KCk7ZS5leHBvcnRzPW99LGh0Nlg6ZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuaHRtbFRlbXBsYXRlPSdcXG48ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXdyYXBwZXJcIj5cXG4gIDxkaXYgY2xhc3M9XCJzaW1waWxlcGlja2VyLWRhdGUtcGlja2VyXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItZGF5LWhlYWRlclwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItZGF0ZS1zZWN0aW9uXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLW1vbnRoLWFuZC15ZWFyXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWRhdGVcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItc2VsZWN0LXBhbmVcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpbXBsZXBpY2tlci1pY29uIHNpbXBsZXBpY2tlci1pY29uLWNhbGVuZGVyIGFjdGl2ZVwiIHRpdGxlPVwiU2VsZWN0IGRhdGUgZnJvbSBjYWxlbmRlciFcIj48L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci10aW1lXCI+MTI6MDAgUE08L2Rpdj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpbXBsZXBpY2tlci1pY29uIHNpbXBsZXBpY2tlci1pY29uLXRpbWVcIiB0aXRsZT1cIlNlbGVjdCB0aW1lXCI+PC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXBpY2tlci1zZWN0aW9uXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWNhbGVuZGVyLXNlY3Rpb25cIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1tb250aC1zd2l0Y2hlciBzaW1wbGVwaWNrZXItc2VsZWN0LXBhbmVcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWljb24gc2ltcGxlcGlja2VyLWljb24tcHJldmlvdXNcIj48L2J1dHRvbj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXNlbGVjdGVkLWRhdGVcIj48L2Rpdj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWljb24gc2ltcGxlcGlja2VyLWljb24tbmV4dFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1jYWxlbmRlclwiPlxcbiAgICAgICAgICAgIDx0YWJsZT5cXG4gICAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgPHRyPjx0aD5TdW48L3RoPjx0aD5Nb248L3RoPjx0aD5UdWU8L3RoPjx0aD5XZWQ8L3RoPjx0aD5UaHU8L3RoPjx0aD5Gcmk8L3RoPjx0aD5TYXQ8L3RoPjwvdHI+XFxuICAgICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAnK2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciBpPVwiXCIsbj0xO248PXQ7bisrKWkrPWU7cmV0dXJuIGl9KFwiPHRyPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjwvdHI+XCIsNikrJ1xcbiAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci10aW1lLXNlY3Rpb25cIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgdmFsdWU9XCIxMjowMFwiIGF1dG9mb2N1cz1cImZhbHNlXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWJvdHRvbS1wYXJ0XCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWNhbmNlbC1idG4gc2ltcGxlcGlja2VyLWJ0blwiIHRpdGxlPVwiQ2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLW9rLWJ0biBzaW1wbGVwaWNrZXItYnRuXCIgdGl0bGU9XCJPS1wiPk9LPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG4nfX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2ltcGxlcGlja2VyLm5vZGUuanMubWFwIiwiY2xhc3MgVG9Eb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZSwgdGltZSwgcHJpb3JpdHksIG5vdGVzLCBsaXN0KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICB9XG5cbiAgICBcbn1cblxuY29uc3QgRG9tRWxlbWVudHMgPSB7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGROZXdUb0RvXCIpLFxuICAgICAgICBwb3B1cDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUb0RvUG9wdXBcIiksXG4gICAgICAgIG92ZXJsYXk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxhY2tPdmVybGF5XCIpLFxuICAgICAgICBhZGRUYXNrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFBvcHVwXCIpLFxuICAgICAgICB1c2VySW5wdXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklucHV0XCIpLFxuICAgICAgICBkYXRlQnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVCdXR0b25cIiksXG4gICAgICAgIGRhdGVDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUNvbnRhaW5lclwiKSxcbiAgICAgICAgcGlja2VyRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpY2tlckRpdlwiKSxcbiAgICAgICAgZHVlRGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLFxuICAgICAgICB0ZXh0QXJlYTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0QXJlYVwiKSxcbiAgICAgICAgcmFkaW9zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKSxcbiAgICAgICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLFxuICAgICAgICBjYXJkQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZENvbnRhaW5lcicpLFxuICAgICAgICBhbGxDYXJkQ29udGFpbmVyczogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZENvbnRhaW5lcicpLFxuICAgICAgICBjaGVja2JveDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTmFtZUNoZWNrXCIpLFxuICAgICAgICB0YXNrSW5mb1BvcHVwOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tJbmZvUG9wdXBcIiksXG4gICAgICAgIGFsbFRhc2tJbmZvUG9wdXA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrSW5mb1BvcHVwXCIpLFxuICAgICAgICB0YXNrTmFtZVBvcHVwOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lXCIpLFxuICAgICAgICBub3Rlc1BvcHVwOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOb3Rlc1wiKSxcbiAgICAgICAgcmVtb3ZlQnV0dG9uUG9wdXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtb3ZlQnRuXCIpLFxuICAgICAgICBtYXJrQ29tcGxldGVQb3B1cDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJrQ29tcGxldGVcIiksXG4gICAgICAgIHRhc2tOYW1lQ2hlY2s6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza05hbWVDaGVja1wiKSxcbiAgICAgICAgYm90dG9tT2ZDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90dG9tT2ZDb250YWluZXJcIiksXG4gICAgICAgIGFsbEJvdHRvbU9mQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3R0b21PZkNvbnRhaW5lcicpLFxuICAgICAgICBjcmVhdGVOZXdMaXN0UG9wdXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlTmV3TGlzdFBvcHVwXCIpLFxuICAgICAgICBuZXdMaXN0QnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZU5ld0xpc3RcIiksXG4gICAgICAgIG5ld0xpc3RJbnB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdMaXN0SW5wdXRcIiksXG4gICAgICAgIHN1Ym1pdE5ld0xpc3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0TmV3TGlzdFwiKSxcbiAgICAgICAgbGlzdEZvcm06IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhckZvcm1cIilcbn1cblxuXG5jb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnQsIGNsYXNzTmFtZSwgaWROYW1lLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWwuaWQgPSBpZE5hbWU7XG4gICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoZWwpXG4gICAgcmV0dXJuIGVsXG59XG5leHBvcnQgeyBUb0RvLCBEb21FbGVtZW50cywgY3JlYXRlRG9tRWxlbWVudCB9OyIsImltcG9ydCB7IERvbUVsZW1lbnRzLCBUb0RvLCBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlXCI7XG5pbXBvcnQgU2ltcGxlUGlja2VyIGZyb20gXCJzaW1wbGVwaWNrZXJcIjtcblxuY29uc3QgdGFza0FycmF5ID0gW107XG5cbmNvbnN0IHRhc2tMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBEb21FbGVtZW50cy5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChEb21FbGVtZW50cy51c2VySW5wdXQudmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5O1xuICAgICAgICAgICAgRG9tRWxlbWVudHMucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGlvbiA9IHJhZGlvLmlkO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gc2VsZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc2VsZWN0aW9uLnNsaWNlKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICAgICAgICB9O1xuICAgICAgXG4gICAgICAgICAgLy8gY2xvc2UgcG9wdXAgYWZ0ZXIgc3VibWl0XG4gICAgICAgICAgRG9tRWxlbWVudHMucG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIERvbUVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIERvbUVsZW1lbnRzLnBpY2tlckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBcbiAgICAgICAgICAvLyBmb3JtYXQgRHVlIERhdGUgZm9yIGRpc3BsYXlcbiAgICAgICAgICBsZXQgZHVlRGF0ZUFyciA9IERvbUVsZW1lbnRzLmR1ZURhdGUuaW5uZXJIVE1MLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICBsZXQgdXNhYmxlRGF0ZSA9IGAke2R1ZURhdGVBcnJbMl19ICR7ZHVlRGF0ZUFyclsxXX1gO1xuICAgICAgICAgIGxldCB1c2FibGVUaW1lID0gYCR7ZHVlRGF0ZUFycls0XX0gJHtkdWVEYXRlQXJyWzVdfWA7XG4gICAgICBcbiAgICAgICAgICBsZXQgY3JlYXRlVG9kbyA9IG5ldyBUb0RvKFxuICAgICAgICAgICAgdXNlcklucHV0LnZhbHVlLFxuICAgICAgICAgICAgdXNhYmxlRGF0ZSxcbiAgICAgICAgICAgIHVzYWJsZVRpbWUsXG4gICAgICAgICAgICBwcmlvcml0eVNlbGVjdGlvbigpLFxuICAgICAgICAgICAgRG9tRWxlbWVudHMudGV4dEFyZWEudmFsdWVcbiAgICAgICAgICApO1xuICAgICAgXG4gICAgICAgICAgdGFza0FycmF5LnB1c2goY3JlYXRlVG9kbyk7XG4gICAgICAgICAgY29uc29sZS5sb2codGFza0FycmF5KTtcbiAgICAgIFxuICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIC8vIGNsb3NlIElmIHN0YXRlbWVudFxuICAgICAgICB9XG4gICAgICAgIC8vIGNsb3NlIGV2ZW50IExpc3RlbmVyXG4gICAgICB9KTtcbn1cblxuY29uc3QgY3JlYXRlQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRG9tRWxlbWVudHMuY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIERvbUVsZW1lbnRzLnBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgRG9tRWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBEb21FbGVtZW50cy51c2VySW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBEb21FbGVtZW50cy50ZXh0QXJlYS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLmR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBEb21FbGVtZW50cy5kdWVEYXRlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbn1cblxuY29uc3Qgb3ZlcmxheUxpc3RlbmVyID0gKCkgPT4ge1xuICAgIERvbUVsZW1lbnRzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgRG9tRWxlbWVudHMucG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBEb21FbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgRG9tRWxlbWVudHMucGlja2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgRG9tRWxlbWVudHMudGFza0luZm9Qb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLnVzZXJJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLmNyZWF0ZU5ld0xpc3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLm5ld0xpc3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuXG4gICAgICB9KTtcbn1cblxuY29uc3QgZGF0ZUJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgIERvbUVsZW1lbnRzLmRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgRG9tRWxlbWVudHMucGlja2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgbGV0IHBpY2tlciA9IG5ldyBTaW1wbGVQaWNrZXIocGlja2VyRGl2LCB7XG4gICAgICAgICAgekluZGV4OiAxMDA0LFxuICAgICAgICB9KTtcbiAgICAgICAgcGlja2VyLm9wZW4oKTtcbiAgICAgICAgcGlja2VyLm9uKFwic3VibWl0XCIsIGZ1bmN0aW9uIChkYXRlLCByZWFkYWJsZURhdGUpIHtcbiAgICAgICAgICBEb21FbGVtZW50cy5kdWVEYXRlLmlubmVySFRNTCA9IGBEdWU6ICR7cmVhZGFibGVEYXRlfWA7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG59XG5cbmNvbnN0IGNhcmRDb250YWluZXJMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBsZXQgY2FyZHNBcnIgPSBBcnJheS5mcm9tKERvbUVsZW1lbnRzLmFsbENhcmRDb250YWluZXJzKTtcbiAgICBjYXJkc0Fyci5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBsZXQgbG9jYXRpb24gPSBlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgRG9tRWxlbWVudHMucmVtb3ZlQnV0dG9uUG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgbG9jYXRpb24pO1xuICAgICAgICAgICAgaWYoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrTmFtZUNoZWNrXCIpKXtcbiAgICAgICAgICAgICAgICBEb21FbGVtZW50cy50YXNrSW5mb1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgICAgICBEb21FbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgRG9tRWxlbWVudHMudGFza05hbWVQb3B1cC52YWx1ZSA9IHRhc2tBcnJheVtsb2NhdGlvbl0udGl0bGU7XG4gICAgICAgICAgICAgICAgRG9tRWxlbWVudHMubm90ZXNQb3B1cC52YWx1ZSA9IHRhc2tBcnJheVtsb2NhdGlvbl0ubm90ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBEb21FbGVtZW50cy5ub3Rlc1BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0FycmF5W2xvY2F0aW9uXS5ub3RlcyA9IERvbUVsZW1lbnRzLm5vdGVzUG9wdXAudmFsdWU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgRG9tRWxlbWVudHMudGFza05hbWVQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICAgICAgICB0YXNrQXJyYXlbbG9jYXRpb25dLnRpdGxlID0gRG9tRWxlbWVudHMudGFza05hbWVQb3B1cC52YWx1ZTtcbiAgICAgIH0pXG4gIFxufSlcblxufVxuICAgICAgICBcblxuXG5cblxuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNhcmRDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImNhcmRDb250YWluZXJcIixcbiAgICAgICAgXCJjYXJkQ29udGFpbmVyXCIsXG4gICAgICAgIGNvbnRlbnRcbiAgICAgICk7XG4gICAgICBjYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuICAgICAgLy8gRG9tRWxlbWVudHMudGFza05hbWVQb3B1cC5pbm5lclRleHQgPSB0YXNrQXJyYXlbaV0udGl0bGU7XG4gICAgICBcbiAgICAgIGNhcmRDb250YWluZXJMaXN0ZW5lcigpO1xuICAgICAgXG4gICAgLy8gICB0YXNrQXJyYXlbaV0ubm90ZXMgPSBEb21FbGVtZW50cy5ub3Rlc1BvcHVwLnZhbHVlO1xuXG4gIFxuICAgICAgbGV0IHRvcE9mQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJ0b3BPZkNvbnRhaW5lclwiLFxuICAgICAgICBcInRvcE9mQ29udGFpbmVyXCIsXG4gICAgICAgIGNhcmRDb250YWluZXJcbiAgICAgICk7XG4gIFxuICAgICAgbGV0IHRhc2tOYW1lQ2hlY2sgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIFwidGFza05hbWVDaGVja1wiLFxuICAgICAgICBcInRhc2tOYW1lQ2hlY2tcIixcbiAgICAgICAgdG9wT2ZDb250YWluZXJcbiAgICAgICk7XG4gICAgICB0YXNrTmFtZUNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcblxuICAgICAgLy8qKioqKioqKioqKioqKioqKiBcbiAgICAgIC8vIEJFTE9XIElTIExPR0lDIEZPUiBISURJTkcgUFJJT1JJVFkgQU5EIERBVEUgQU5EIFNUUklLSU5HIFRIUk9VR0ggVEhFIFRFWFQgV0hFTiBUSEUgQ0hFQ0tCT1ggSVMgQ0xJQ0tFRFxuICAgICAgLy8gVEhJUyBGVU5DVElPTkFMSVRZIFdPUktTLCBCVVQgSVMgQ0FVU0lORyBJU1NVRVMgV0lUSCBPVEhFUiBUSElOR1MsIEFORCBTSU5DRSBJVCdTIE5PVCBBIFBBUlQgT0YgVEhFIFxuICAgICAgLy8gQUNUVUFMIFBST0pFQ1QgUkVRVUlSRU1FTlRTLCBJJ00gTEVBVklORyBJVCBPVVQgRk9SIE5PV1xuICAgICAgLy8gT05FIFNPTFVUSU9OIEZPUiBNQUtJTkcgVEhJUyBXT1JLIFBST1BFUkxZIFdPVUxEIEJFIFRPIEFERCBBICdDTElDS0VEJyBQUk9QRVJUWS9NRVRIT0QgVE8gVEhFIE9CSkVDVFxuICAgICAgLy8gQU5EIFRIRU4gU0FZSU5HIFdIRU4gQ0hFQ0tCT1ggSVMgQ0xJQ0tFRCwgT0JKRUNULkNMSUNLRUQgPSBUUlVFXG4gICAgICAvLyBUSEVOIFdIRU4gVEhFIENBUkRTIEFSRSBXSVBFRCBBTkQgUkVQT1BVTEFURUQsIElGIE9CSkVDVC5DTElDS0VEID0gVFJVRSwgVEhFTiBBREQgQUxMIFRIRSBGVU5DVElPTkFMSVRZIFxuICAgICAgLy8gU08gVEhFIElTU1VFIEFSSVNFUyBXSEVOIERJU1BMQVlUQVNLUygpIElTIFJBTiwgQkVDQVVTRSBJVCBXSVBFUyBBTEwgQ0hJTERSRU4gQU5EIFJFLVBPUFVMQVRFUyBUSEVNIFxuICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKiBcblxuICAgICAgLy8gdGFza05hbWVDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgLy8gbGV0IGJvdHRvbU9mQ29udGFpbmVyQXJyID0gQXJyYXkuZnJvbShEb21FbGVtZW50cy5hbGxCb3R0b21PZkNvbnRhaW5lcik7XG5cbiAgICAgIC8vICAgaWYoZXZlbnQudGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgLy8gICAgIGJvdHRvbU9mQ29udGFpbmVyQXJyW2ldLnJlbW92ZSgpO1xuICAgICAgLy8gICAgIHRhc2tOYW1lQ2hlY2tMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdzdHJpa2VkJyk7XG4gICAgICAgICAgXG4gICAgICAvLyAgIH1lbHNlIGlmKCFldmVudC50YXJnZXQuY2hlY2tlZCl7XG4gICAgICAvLyAgICAgY3JlYXRlQm90dG9tT2ZDb250YWluZXIoKTtcbiAgICAgIC8vICAgICB0YXNrTmFtZUNoZWNrTGFiZWwuY2xhc3NMaXN0LnRvZ2dsZSgnc3RyaWtlZCcpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICBcbiAgICAgIGxldCB0YXNrTmFtZUNoZWNrTGFiZWwgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIFwidGFza05hbWVDaGVja0xhYmVsXCIsXG4gICAgICAgIFwidGFza05hbWVDaGVja0xhYmVsXCIsXG4gICAgICAgIHRvcE9mQ29udGFpbmVyXG4gICAgICApO1xuICAgICAgdGFza05hbWVDaGVja0xhYmVsLmlubmVySFRNTCA9IHRhc2tBcnJheVtpXS50aXRsZTtcbiAgICAgIFxuICAgICAgY29uc3QgY3JlYXRlQm90dG9tT2ZDb250YWluZXI9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvdHRvbU9mQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIFwiYm90dG9tT2ZDb250YWluZXJcIixcbiAgICAgICAgICBcImJvdHRvbU9mQ29udGFpbmVyXCIsXG4gICAgICAgICAgY2FyZENvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICAgIGJvdHRvbU9mQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuICAgICAgICAgIFxuICAgICAgICBpZiAodGFza0FycmF5W2ldLnByaW9yaXR5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGxldCB0YXNrUHJpb3JpdHkgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICBcInRhc2tQcmlvcml0eVwiLFxuICAgICAgICAgICAgXCJ0YXNrUHJpb3JpdHlcIixcbiAgICAgICAgICAgIGJvdHRvbU9mQ29udGFpbmVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0YXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gYFByaW9yaXR5OiAke3Rhc2tBcnJheVtpXS5wcmlvcml0eX1gO1xuICAgIFxuICAgICAgICAgIGlmICh0YXNrQXJyYXlbaV0ucHJpb3JpdHkgPT0gXCJMb3dcIikge1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFza0FycmF5W2ldLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgXCJ0YXNrRHVlRGF0ZVwiLFxuICAgICAgICAgIFwidGFza0R1ZURhdGVcIixcbiAgICAgICAgICBib3R0b21PZkNvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICBpZiAodGFza0FycmF5W2ldLmRhdGUgIT0gXCJ1bmRlZmluZWQgdW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICB0YXNrRHVlRGF0ZS5pbm5lckhUTUwgPSBgJHt0YXNrQXJyYXlbaV0uZGF0ZX0gfCAke3Rhc2tBcnJheVtpXS50aW1lfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNyZWF0ZUJvdHRvbU9mQ29udGFpbmVyKCk7XG4gICAgICB9XG4gICAgICBcbiAgXG4gICAgICBcbiAgfTtcblxuXG4gIGNvbnN0IHJlbW92ZUNhcmQgPSAoKSA9PiB7XG5cbiAgICBsZXQgY2FyZEFyciA9IEFycmF5LmZyb20oRG9tRWxlbWVudHMuYWxsQ2FyZENvbnRhaW5lcnMpO1xuICAgICAgXG4gICAgICAgIFxuICBcbiAgICAgICAgRG9tRWxlbWVudHMucmVtb3ZlQnV0dG9uUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrQXJyYXkuc3BsaWNlKERvbUVsZW1lbnRzLnJlbW92ZUJ1dHRvblBvcHVwLmRhdGFzZXQuaW5kZXgsIDEpO1xuICAgICAgICAgICAgRG9tRWxlbWVudHMudGFza0luZm9Qb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBEb21FbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG5jb25zdCBuZXdMaXN0QnRuTGlzdGVuZXIgPSAoKSA9PiB7XG4gIERvbUVsZW1lbnRzLm5ld0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgRG9tRWxlbWVudHMuY3JlYXRlTmV3TGlzdFBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgRG9tRWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXG4gIH0pXG59XG5cbmNvbnN0IG5ld0xpc3RJbnB1dExpc3RlbmVyID0gKCkgPT4ge1xuXG59XG5cbmNvbnN0IHN1Ym1pdE5ld0xpc3RMaXN0ZW5lciA9ICgpID0+IHtcbiAgbGV0IGkgPSAwO1xuICBEb21FbGVtZW50cy5zdWJtaXROZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFxuICAgIGkrKztcbiAgICBjb25zb2xlLmxvZyhpKVxuICAgIGxldCBuZXdMaXN0ID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ25ld0xpc3QnLCAnbmV3TGlzdCcsIERvbUVsZW1lbnRzLmxpc3RGb3JtKTtcbiAgICBsZXQgY2hlY2tib3ggPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsICdsaXN0Q2hlY2tib3gnLCBgbGlzdENoZWNrYm94JHtpfWAsIG5ld0xpc3QpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibGlzdENoZWNrYm94XCIpO1xuICAgIGxldCBsaXN0VGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KCdsYWJlbCcsICdsaXN0VGl0bGUnLCAnbGlzdFRpdGxlJywgbmV3TGlzdCk7XG4gICAgbGlzdFRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgYGxpc3RDaGVja2JveCR7aX1gKTtcbiAgICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBEb21FbGVtZW50cy5uZXdMaXN0SW5wdXQudmFsdWU7XG4gICAgRG9tRWxlbWVudHMubmV3TGlzdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICBEb21FbGVtZW50cy5jcmVhdGVOZXdMaXN0UG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIERvbUVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KVxuICBcblxufVxuXG5jb25zdCBhZGRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGFza0xpc3RlbmVyKCk7XG4gICAgY3JlYXRlQnV0dG9uTGlzdGVuZXIoKTtcbiAgICBvdmVybGF5TGlzdGVuZXIoKTtcbiAgICBkYXRlQnV0dG9uTGlzdGVuZXIoKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcbiAgICByZW1vdmVDYXJkKCk7XG4gICAgbmV3TGlzdEJ0bkxpc3RlbmVyKCk7XG4gICAgc3VibWl0TmV3TGlzdExpc3RlbmVyKCk7XG4gICAgLy8gY2hlY2tib3hMaXN0ZW5lcigpO1xufVxuXG5cbmV4cG9ydCB7IGFkZExpc3RlbmVycyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRvRG8sIERvbUVsZW1lbnRzLCBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlXCI7XG5pbXBvcnQgU2ltcGxlUGlja2VyIGZyb20gXCJzaW1wbGVwaWNrZXJcIjtcbmltcG9ydCB7IGFkZExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5cblxuYWRkTGlzdGVuZXJzKCk7XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==