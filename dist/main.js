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
    constructor(title, date, time, priority, notes){
        this.title = title;
        // this.list = list;
        this.date = date;
        this.time = time;
        this.priority = priority;
        this.notes = notes;
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
        allBottomOfContainer: document.getElementsByClassName('bottomOfContainer')
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

const addListeners = () => {
    taskListener();
    createButtonListener();
    overlayListener();
    dateButtonListener();
    displayTasks();
    removeCard();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksa0JBQWtCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLDZCQUE2QixrRUFBNkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRkFBOEM7QUFDdEQsNkJBQTZCLGdGQUEyQztBQUN4RSxZQUFZLDRFQUF1QztBQUNuRCxZQUFZLHNFQUFpQztBQUM3QztBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUd3Qjs7Ozs7OztVQ2hReEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOK0Q7QUFDdkI7QUFDRzs7OztBQUkzQyx3REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zaW1wbGVwaWNrZXIvZGlzdC9zaW1wbGVwaWNrZXIubm9kZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBpKG4pe2lmKHRbbl0pcmV0dXJuIHRbbl0uZXhwb3J0czt2YXIgcj10W25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtuXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxpKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBpLm09ZSxpLmM9dCxpLmQ9ZnVuY3Rpb24oZSx0LG4pe2kubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LGkucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxpLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPWkoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihpLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciByIGluIGUpaS5kKG4scixmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLHIpKTtyZXR1cm4gbn0saS5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBpLmQodCxcImFcIix0KSx0fSxpLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LGkucD1cIlwiLGkoaS5zPVwiVFlWZlwiKX0oe1wiMER5VlwiOmZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCl7ZT1bXS5jb25jYXQoZSk7Zm9yKHZhciBpPTA7aTx0O2krKyllW2ldPXZvaWQgMDtyZXR1cm4gZX1mdW5jdGlvbiByKGUpe3ZhciBpPW5ldyBEYXRlKGUuZ2V0VGltZSgpKSxyPWUuZ2V0RnVsbFllYXIoKSxzPWUuZ2V0TW9udGgoKSxhPXtkYXRlOmksbW9udGg6dm9pZCAwfTtpZih0Lm1vbnRoVHJhY2tlci5jdXJyZW50PW5ldyBEYXRlKGUuZ2V0VGltZSgpKSx0Lm1vbnRoVHJhY2tlci5jdXJyZW50LnNldERhdGUoMSksdC5tb250aFRyYWNrZXIueWVhcnNbcl09dC5tb250aFRyYWNrZXIueWVhcnNbcl18fHt9LHZvaWQgMCE9PXQubW9udGhUcmFja2VyLnllYXJzW3JdW3NdKXJldHVybiBhLm1vbnRoPXQubW9udGhUcmFja2VyLnllYXJzW3JdW3NdLGE7KGU9bmV3IERhdGUoZS5nZXRUaW1lKCkpKS5zZXREYXRlKDEpLHQubW9udGhUcmFja2VyLnllYXJzW3JdW3NdPVtdO2Zvcih2YXIgbz10Lm1vbnRoVHJhY2tlci55ZWFyc1tyXVtzXSxjPTA7ZS5nZXRNb250aCgpPT09czspe3ZhciBsPWUuZ2V0RGF0ZSgpLHA9ZS5nZXREYXkoKTsxPT09bCYmKG9bY109bihbXSxwKSksb1tjXT1vW2NdfHxbXSxvW2NdW3BdPWwsNj09PXAmJmMrKyxlLnNldERhdGUoZS5nZXREYXRlKCkrMSl9dmFyIGQ9NTt2b2lkIDA9PT1vWzVdJiYoZD00LG9bNV09bihbXSw3KSk7dmFyIG09b1tkXS5sZW5ndGg7aWYobTw3KXt2YXIgaD1vW2RdLmNvbmNhdChuKFtdLDctbSkpO29bZF09aH1yZXR1cm4gYS5tb250aD1vLGF9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5tb250aFRyYWNrZXI9e3llYXJzOnt9fSx0Lm1vbnRocz1bXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sdC5kYXlzPVtcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLHQuc2NyYXBlTW9udGg9cix0LnNjcmFwZVByZXZpb3VzTW9udGg9ZnVuY3Rpb24oKXt2YXIgZT10Lm1vbnRoVHJhY2tlci5jdXJyZW50O2lmKCFlKXRocm93IEVycm9yKFwic2NyYXBlUHJldm9pc01vbnRoIGNhbGxlZCB3aXRob3V0IHNldHRpbmcgbW9udGhUcmFja2VyLmN1cnJlbnQhXCIpO3JldHVybiBlLnNldE1vbnRoKGUuZ2V0TW9udGgoKS0xKSxyKGUpfSx0LnNjcmFwZU5leHRNb250aD1mdW5jdGlvbigpe3ZhciBlPXQubW9udGhUcmFja2VyLmN1cnJlbnQ7aWYoIWUpdGhyb3cgRXJyb3IoXCJzY3JhcGVQcmV2b2lzTW9udGggY2FsbGVkIHdpdGhvdXQgc2V0dGluZyBtb250aFRyYWNrZXIuY3VycmVudCFcIik7cmV0dXJuIGUuc2V0TW9udGgoZS5nZXRNb250aCgpKzEpLHIoZSl9O3ZhciBzPXtzdDpbMSwyMSwzMV0sbmQ6WzIsMjJdLHJkOlszLDIzXX07dC5nZXREaXNwbGF5RGF0ZT1mdW5jdGlvbihlKXt2YXIgdD1lLmdldERhdGUoKTtyZXR1cm4tMSE9PXMuc3QuaW5kZXhPZih0KT90K1wic3RcIjotMSE9PXMubmQuaW5kZXhPZih0KT90K1wibmRcIjotMSE9PXMucmQuaW5kZXhPZih0KT90K1wicmRcIjp0K1widGhcIn0sdC5mb3JtYXRUaW1lRnJvbUlucHV0RWxlbWVudD1mdW5jdGlvbihlKXt2YXIgdD1cIlwiLGk9ZS5zcGxpdChcIjpcIiksbj1pWzBdLHI9KG49K24pPj0xMjtyZXR1cm4gciYmbj4xMiYmKG4tPTEyKSxyfHwwIT09bnx8KG49MTIpLHQrPW48MTA/XCIwXCIrbjpuLHQrPVwiOlwiK2lbMV0rXCIgXCIsdCs9cj9cIlBNXCI6XCJBTVwifX0sVFlWZjpmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49aShcIjBEeVZcIikscj1pKFwiaHQ2WFwiKSxzPVtcInN1Ym1pdFwiLFwiY2xvc2VcIl0sYT1uZXcgRGF0ZSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3RoaXMuX3ZhbGlkT25MaXN0ZW5lcnM9czt2YXIgaT12b2lkIDAsbj10O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpO2lmKG51bGw9PT1yKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc2VsZWN0b3IgcGFzc2VkIHRvIFNpbXBsZVBpY2tlciFcIik7aT1yfWVsc2UgZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50P2k9ZTpcIm9iamVjdFwiPT10eXBlb2YgZSYmKG49ZSk7aXx8KGk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikpLG58fChuPXt9KSx0aGlzLnNlbGVjdGVkRGF0ZT1uZXcgRGF0ZSx0aGlzLmluamVjdFRlbXBsYXRlKGkpLHRoaXMuaW5pdChpLG4pLHRoaXMuaW5pdExpc3RlbmVycygpLHRoaXMuX2V2ZW50SGFuZGxlcnM9e319cmV0dXJuIGUucHJvdG90eXBlLmluaXRFbE1ldGhvZD1mdW5jdGlvbihlKXt0aGlzLiQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUucXVlcnlTZWxlY3Rvcih0KX0sdGhpcy4kJD1mdW5jdGlvbih0KXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yQWxsKHQpfX0sZS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihlLHQpe3RoaXMuJHNpbXBsZXBpY2tlcldyYXBwZXI9ZS5xdWVyeVNlbGVjdG9yKFwiLnNpbXBsZXBpY2tlci13cmFwcGVyXCIpLHRoaXMuaW5pdEVsTWV0aG9kKHRoaXMuJHNpbXBsZXBpY2tlcldyYXBwZXIpO3ZhciBpPXRoaXMuJCxyPXRoaXMuJCQ7dGhpcy4kc2ltcGxlcGlja2VyPWkoXCIuc2ltcGlsZXBpY2tlci1kYXRlLXBpY2tlclwiKSx0aGlzLiR0cnM9cihcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXIgdGJvZHkgdHJcIiksdGhpcy4kdGRzPXIoXCIuc2ltcGxlcGlja2VyLWNhbGVuZGVyIHRib2R5IHRkXCIpLHRoaXMuJGhlYWRlck1vbnRoQW5kWWVhcj1pKFwiLnNpbXBsZXBpY2tlci1tb250aC1hbmQteWVhclwiKSx0aGlzLiRtb250aEFuZFllYXI9aShcIi5zaW1wbGVwaWNrZXItc2VsZWN0ZWQtZGF0ZVwiKSx0aGlzLiRkYXRlPWkoXCIuc2ltcGxlcGlja2VyLWRhdGVcIiksdGhpcy4kZGF5PWkoXCIuc2ltcGxlcGlja2VyLWRheS1oZWFkZXJcIiksdGhpcy4kdGltZT1pKFwiLnNpbXBsZXBpY2tlci10aW1lXCIpLHRoaXMuJHRpbWVJbnB1dD1pKFwiLnNpbXBsZXBpY2tlci10aW1lLXNlY3Rpb24gaW5wdXRcIiksdGhpcy4kdGltZVNlY3Rpb25JY29uPWkoXCIuc2ltcGxlcGlja2VyLWljb24tdGltZVwiKSx0aGlzLiRjYW5jZWw9aShcIi5zaW1wbGVwaWNrZXItY2FuY2VsLWJ0blwiKSx0aGlzLiRvaz1pKFwiLnNpbXBsZXBpY2tlci1vay1idG5cIiksdGhpcy4kZGlzcGxheURhdGVFbGVtZW50cz1bdGhpcy4kZGF5LHRoaXMuJGhlYWRlck1vbnRoQW5kWWVhcix0aGlzLiRkYXRlXSx0aGlzLiR0aW1lLmNsYXNzTGlzdC5hZGQoXCJzaW1wbGVwaWNrZXItZmFkZVwiKSx0aGlzLnJlbmRlcihuLnNjcmFwZU1vbnRoKGEpKSx0PXR8fHt9LHRoaXMub3B0cz10LHRoaXMucmVzZXQodC5zZWxlY3RlZERhdGV8fGEpLHZvaWQgMCE9PXQuekluZGV4JiYodGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlci5zdHlsZS56SW5kZXg9dC56SW5kZXgudG9TdHJpbmcoKSksdC5kaXNhYmxlVGltZVNlY3Rpb24mJnRoaXMuZGlzYWJsZVRpbWVTZWN0aW9uKCksdC5jb21wYWN0TW9kZSYmdGhpcy5jb21wYWN0TW9kZSgpfSxlLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbihlKXt2YXIgdD1lfHxuZXcgRGF0ZTt0aGlzLnJlbmRlcihuLnNjcmFwZU1vbnRoKHQpKTt2YXIgaT10LnRvVGltZVN0cmluZygpLnNwbGl0KFwiIFwiKVswXS5yZXBsYWNlKC9cXDpcXGRcXGQkLyxcIlwiKTt0aGlzLiR0aW1lSW5wdXQudmFsdWU9aSx0aGlzLiR0aW1lLmlubmVyVGV4dD1uLmZvcm1hdFRpbWVGcm9tSW5wdXRFbGVtZW50KGkpO3ZhciByPXQuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkscz10aGlzLmZpbmRFbGVtZW50V2l0aERhdGUocik7cy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIil8fCh0aGlzLnNlbGVjdERhdGVFbGVtZW50KHMpLHRoaXMudXBkYXRlRGF0ZUNvbXBvbmVudHModCkpfSxlLnByb3RvdHlwZS5jb21wYWN0TW9kZT1mdW5jdGlvbigpe3RoaXMuJGRhdGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn0sZS5wcm90b3R5cGUuZGlzYWJsZVRpbWVTZWN0aW9uPWZ1bmN0aW9uKCl7dGhpcy4kdGltZVNlY3Rpb25JY29uLnN0eWxlLnZpc2liaWxpdHk9XCJoaWRkZW5cIn0sZS5wcm90b3R5cGUuZW5hYmxlVGltZVNlY3Rpb249ZnVuY3Rpb24oKXt0aGlzLiR0aW1lU2VjdGlvbkljb24uc3R5bGUudmlzaWJpbGl0eT1cInZpc2libGVcIn0sZS5wcm90b3R5cGUuaW5qZWN0VGVtcGxhdGU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO3QuaW5uZXJIVE1MPXIuaHRtbFRlbXBsYXRlLGUuYXBwZW5kQ2hpbGQodC5jb250ZW50LmNsb25lTm9kZSghMCkpfSxlLnByb3RvdHlwZS5jbGVhclJvd3M9ZnVuY3Rpb24oKXt0aGlzLiR0ZHMuZm9yRWFjaChmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIlwiLGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKX0pfSxlLnByb3RvdHlwZS51cGRhdGVEYXRlQ29tcG9uZW50cz1mdW5jdGlvbihlKXt2YXIgdD1uLmRheXNbZS5nZXREYXkoKV0saT1uLm1vbnRoc1tlLmdldE1vbnRoKCldK1wiIFwiK2UuZ2V0RnVsbFllYXIoKTt0aGlzLiRoZWFkZXJNb250aEFuZFllYXIuaW5uZXJIVE1MPWksdGhpcy4kbW9udGhBbmRZZWFyLmlubmVySFRNTD1pLHRoaXMuJGRheS5pbm5lckhUTUw9dCx0aGlzLiRkYXRlLmlubmVySFRNTD1uLmdldERpc3BsYXlEYXRlKGUpfSxlLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy4kJCxpPXRoaXMuJHRycyxuPWUubW9udGgscj1lLmRhdGU7dGhpcy5jbGVhclJvd3MoKSxuLmZvckVhY2goZnVuY3Rpb24oZSx0KXt2YXIgbj1pW3RdLmNoaWxkcmVuO2UuZm9yRWFjaChmdW5jdGlvbihlLHQpe3ZhciBpPW5bdF07ZT8oaS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWVtcHR5XCIpLGkuaW5uZXJIVE1MPWUpOmkuc2V0QXR0cmlidXRlKFwiZGF0YS1lbXB0eVwiLFwiXCIpfSl9KTt2YXIgcz10KFwidGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZFwiKSxhPSEwO3MuZm9yRWFjaChmdW5jdGlvbihlKXt2b2lkIDA9PT1lLmRhdGFzZXQuZW1wdHkmJihhPSExKX0pO3ZhciBvPXNbMF0ucGFyZW50RWxlbWVudDtvLnN0eWxlLmRpc3BsYXk9YSYmbz9cIm5vbmVcIjpcInRhYmxlLXJvd1wiLHRoaXMudXBkYXRlRGF0ZUNvbXBvbmVudHMocil9LGUucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGVkRGF0ZT1mdW5jdGlvbihlKXt2YXIgdCxpPXRoaXMuJG1vbnRoQW5kWWVhcixyPXRoaXMuJHRpbWU7dGhpcy4kZGF0ZTt0PWU/ZS5pbm5lckhUTUwudHJpbSgpOnRoaXMuJGRhdGUuaW5uZXJIVE1MLnJlcGxhY2UoL1thLXpdKy8sXCJcIik7dmFyIHM9aS5pbm5lckhUTUwuc3BsaXQoXCIgXCIpLGE9c1swXSxvPXNbMV0sYz1uLm1vbnRocy5pbmRleE9mKGEpLGw9ci5pbm5lckhUTUwuc3BsaXQoXCI6XCIpLHA9K2xbMF0sZD1sWzFdLnNwbGl0KFwiIFwiKSxtPWRbMF0saD1kWzFdO1wiQU1cIj09PWgmJjEyPT1wJiYocD0wKSxcIlBNXCI9PT1oJiZwPDEyJiYocCs9MTIpO3ZhciB1PW5ldyBEYXRlKCtvLCtjLCt0LCtwLCttKTt0aGlzLnNlbGVjdGVkRGF0ZT11O3ZhciB2PXQrXCIgXCI7dis9aS5pbm5lckhUTUwudHJpbSgpK1wiIFwiLHYrPXIuaW5uZXJIVE1MLnRyaW0oKSx0aGlzLnJlYWRhYmxlRGF0ZT12LnJlcGxhY2UoL15cXGQrLyx1LmdldERhdGUoKS50b1N0cmluZygpKX0sZS5wcm90b3R5cGUuc2VsZWN0RGF0ZUVsZW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy4kKFwiLnNpbXBsZXBpY2tlci1jYWxlbmRlciB0Ym9keSAuYWN0aXZlXCIpO2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSx0JiZ0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIiksdGhpcy51cGRhdGVTZWxlY3RlZERhdGUoZSksdGhpcy51cGRhdGVEYXRlQ29tcG9uZW50cyh0aGlzLnNlbGVjdGVkRGF0ZSl9LGUucHJvdG90eXBlLmZpbmRFbGVtZW50V2l0aERhdGU9ZnVuY3Rpb24oZSx0KXt2YXIgaSxuO3JldHVybiB2b2lkIDA9PT10JiYodD0hMSksdGhpcy4kdGRzLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIHI9dC5pbm5lckhUTUwudHJpbSgpO3I9PT1lJiYoaT10KSxcIlwiIT09ciYmKG49dCl9KSx2b2lkIDA9PT1pJiZ0JiYoaT1uKSxpfSxlLnByb3RvdHlwZS5oYW5kbGVJY29uQnV0dG9uQ2xpY2s9ZnVuY3Rpb24oZSl7dmFyIHQsaT10aGlzLiQ7aWYoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW1wbGVwaWNrZXItaWNvbi1jYWxlbmRlclwiKSl7dmFyIHI9aShcIi5zaW1wbGVwaWNrZXItaWNvbi10aW1lXCIpLHM9aShcIi5zaW1wbGVwaWNrZXItdGltZS1zZWN0aW9uXCIpO3JldHVybihvPWkoXCIuc2ltcGxlcGlja2VyLWNhbGVuZGVyLXNlY3Rpb25cIikpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLHMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIiksZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLHZvaWQgdGhpcy50b29nbGVEaXNwbGF5RmFkZSgpfWlmKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2ltcGxlcGlja2VyLWljb24tdGltZVwiKSl7dmFyIGE9aShcIi5zaW1wbGVwaWNrZXItaWNvbi1jYWxlbmRlclwiKSxvPWkoXCIuc2ltcGxlcGlja2VyLWNhbGVuZGVyLXNlY3Rpb25cIik7cmV0dXJuKHM9aShcIi5zaW1wbGVwaWNrZXItdGltZS1zZWN0aW9uXCIpKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixvLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpLGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSx2b2lkIHRoaXMudG9vZ2xlRGlzcGxheUZhZGUoKX12YXIgYz1pKFwiLnNpbXBsZXBpY2tlci1jYWxlbmRlciB0ZC5hY3RpdmVcIik7aWYoYyYmKHQ9Yy5pbm5lckhUTUwudHJpbSgpKSxlLmNsYXNzTGlzdC5jb250YWlucyhcInNpbXBsZXBpY2tlci1pY29uLW5leHRcIikmJnRoaXMucmVuZGVyKG4uc2NyYXBlTmV4dE1vbnRoKCkpLGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2ltcGxlcGlja2VyLWljb24tcHJldmlvdXNcIikmJnRoaXMucmVuZGVyKG4uc2NyYXBlUHJldmlvdXNNb250aCgpKSx0KXt2YXIgbD10aGlzLmZpbmRFbGVtZW50V2l0aERhdGUodCwhMCk7dGhpcy5zZWxlY3REYXRlRWxlbWVudChsKX19LGUucHJvdG90eXBlLmluaXRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kc2ltcGxlcGlja2VyLGk9ZS4kdGltZUlucHV0LHI9ZS4kb2sscz1lLiRjYW5jZWwsYT1lLiRzaW1wbGVwaWNrZXJXcmFwcGVyLG89dGhpcztmdW5jdGlvbiBjKCl7by5jbG9zZSgpLG8uY2FsbEV2ZW50KFwiY2xvc2VcIixmdW5jdGlvbihlKXtlKCl9KX10LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LGk9dC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7ZS5zdG9wUHJvcGFnYXRpb24oKSxcInRkXCIhPT1pP1wiYnV0dG9uXCI9PT1pJiZ0LmNsYXNzTGlzdC5jb250YWlucyhcInNpbXBsZXBpY2tlci1pY29uXCIpJiZvLmhhbmRsZUljb25CdXR0b25DbGljayh0KTpvLnNlbGVjdERhdGVFbGVtZW50KHQpfSksaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihlKXtpZihcIlwiIT09ZS50YXJnZXQudmFsdWUpe3ZhciB0PW4uZm9ybWF0VGltZUZyb21JbnB1dEVsZW1lbnQoZS50YXJnZXQudmFsdWUpO28uJHRpbWUuaW5uZXJIVE1MPXQsby51cGRhdGVTZWxlY3RlZERhdGUoKX19KSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7by5jbG9zZSgpLG8uY2FsbEV2ZW50KFwic3VibWl0XCIsZnVuY3Rpb24oZSl7ZShvLnNlbGVjdGVkRGF0ZSxvLnJlYWRhYmxlRGF0ZSl9KX0pLHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYyksYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjKX0sZS5wcm90b3R5cGUuY2FsbEV2ZW50PWZ1bmN0aW9uKGUsdCl7KHRoaXMuX2V2ZW50SGFuZGxlcnNbZV18fFtdKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3QoZSl9KX0sZS5wcm90b3R5cGUub3Blbj1mdW5jdGlvbigpe3RoaXMuJHNpbXBsZXBpY2tlcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKX0sZS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLiRzaW1wbGVwaWNrZXJXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIil9LGUucHJvdG90eXBlLm9uPWZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5fdmFsaWRPbkxpc3RlbmVycyxuPXRoaXMuX2V2ZW50SGFuZGxlcnM7aWYoIWkuaW5jbHVkZXMoZSkpdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgdmFsaWQgZXZlbnQhXCIpO25bZV09bltlXXx8W10sbltlXS5wdXNoKHQpfSxlLnByb3RvdHlwZS50b29nbGVEaXNwbGF5RmFkZT1mdW5jdGlvbigpe3RoaXMuJHRpbWUuY2xhc3NMaXN0LnRvZ2dsZShcInNpbXBsZXBpY2tlci1mYWRlXCIpLHRoaXMuJGRpc3BsYXlEYXRlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKXtlLmNsYXNzTGlzdC50b2dnbGUoXCJzaW1wbGVwaWNrZXItZmFkZVwiKX0pfSxlfSgpO2UuZXhwb3J0cz1vfSxodDZYOmZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lmh0bWxUZW1wbGF0ZT0nXFxuPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci13cmFwcGVyXCI+XFxuICA8ZGl2IGNsYXNzPVwic2ltcGlsZXBpY2tlci1kYXRlLXBpY2tlclwiPlxcbiAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWRheS1oZWFkZXJcIj48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWRhdGUtc2VjdGlvblwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1tb250aC1hbmQteWVhclwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1kYXRlXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXNlbGVjdC1wYW5lXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzaW1wbGVwaWNrZXItaWNvbiBzaW1wbGVwaWNrZXItaWNvbi1jYWxlbmRlciBhY3RpdmVcIiB0aXRsZT1cIlNlbGVjdCBkYXRlIGZyb20gY2FsZW5kZXIhXCI+PC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItdGltZVwiPjEyOjAwIFBNPC9kaXY+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzaW1wbGVwaWNrZXItaWNvbiBzaW1wbGVwaWNrZXItaWNvbi10aW1lXCIgdGl0bGU9XCJTZWxlY3QgdGltZVwiPjwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1waWNrZXItc2VjdGlvblwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1jYWxlbmRlci1zZWN0aW9uXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItbW9udGgtc3dpdGNoZXIgc2ltcGxlcGlja2VyLXNlbGVjdC1wYW5lXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpbXBsZXBpY2tlci1pY29uIHNpbXBsZXBpY2tlci1pY29uLXByZXZpb3VzXCI+PC9idXR0b24+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1zZWxlY3RlZC1kYXRlXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpbXBsZXBpY2tlci1pY29uIHNpbXBsZXBpY2tlci1pY29uLW5leHRcIj48L2J1dHRvbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItY2FsZW5kZXJcIj5cXG4gICAgICAgICAgICA8dGFibGU+XFxuICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0cj48dGg+U3VuPC90aD48dGg+TW9uPC90aD48dGg+VHVlPC90aD48dGg+V2VkPC90aD48dGg+VGh1PC90aD48dGg+RnJpPC90aD48dGg+U2F0PC90aD48L3RyPlxcbiAgICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgJytmdW5jdGlvbihlLHQpe2Zvcih2YXIgaT1cIlwiLG49MTtuPD10O24rKylpKz1lO3JldHVybiBpfShcIjx0cj48dGQ+PC90ZD48dGQ+PC90ZD48dGQ+PC90ZD48dGQ+PC90ZD48dGQ+PC90ZD48dGQ+PC90ZD48dGQ+PC90ZD48L3RyPlwiLDYpKydcXG4gICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItdGltZS1zZWN0aW9uXCI+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIHZhbHVlPVwiMTI6MDBcIiBhdXRvZm9jdXM9XCJmYWxzZVwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1ib3R0b20tcGFydFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpbXBsZXBpY2tlci1jYW5jZWwtYnRuIHNpbXBsZXBpY2tlci1idG5cIiB0aXRsZT1cIkNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpbXBsZXBpY2tlci1vay1idG4gc2ltcGxlcGlja2VyLWJ0blwiIHRpdGxlPVwiT0tcIj5PSzwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJ319KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbXBsZXBpY2tlci5ub2RlLmpzLm1hcCIsImNsYXNzIFRvRG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUsIHRpbWUsIHByaW9yaXR5LCBub3Rlcyl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgLy8gdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgfVxuXG4gICAgXG59XG5cbmNvbnN0IERvbUVsZW1lbnRzID0ge1xuICAgICAgICBjcmVhdGVCdXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTmV3VG9Eb1wiKSxcbiAgICAgICAgcG9wdXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlVG9Eb1BvcHVwXCIpLFxuICAgICAgICBvdmVybGF5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJsYWNrT3ZlcmxheVwiKSxcbiAgICAgICAgYWRkVGFzazogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRQb3B1cFwiKSxcbiAgICAgICAgdXNlcklucHV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJbnB1dFwiKSxcbiAgICAgICAgZGF0ZUJ1dHRvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlQnV0dG9uXCIpLFxuICAgICAgICBkYXRlQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVDb250YWluZXJcIiksXG4gICAgICAgIHBpY2tlckRpdjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrZXJEaXZcIiksXG4gICAgICAgIGR1ZURhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKSxcbiAgICAgICAgdGV4dEFyZWE6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dEFyZWFcIiksXG4gICAgICAgIHJhZGlvczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyksXG4gICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKSxcbiAgICAgICAgY2FyZENvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRDb250YWluZXInKSxcbiAgICAgICAgYWxsQ2FyZENvbnRhaW5lcnM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmRDb250YWluZXInKSxcbiAgICAgICAgY2hlY2tib3g6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza05hbWVDaGVja1wiKSxcbiAgICAgICAgdGFza0luZm9Qb3B1cDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrSW5mb1BvcHVwXCIpLFxuICAgICAgICBhbGxUYXNrSW5mb1BvcHVwOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFza0luZm9Qb3B1cFwiKSxcbiAgICAgICAgdGFza05hbWVQb3B1cDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTmFtZVwiKSxcbiAgICAgICAgbm90ZXNQb3B1cDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTm90ZXNcIiksXG4gICAgICAgIHJlbW92ZUJ1dHRvblBvcHVwOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbW92ZUJ0blwiKSxcbiAgICAgICAgbWFya0NvbXBsZXRlUG9wdXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFya0NvbXBsZXRlXCIpLFxuICAgICAgICB0YXNrTmFtZUNoZWNrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lQ2hlY2tcIiksXG4gICAgICAgIGJvdHRvbU9mQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbU9mQ29udGFpbmVyXCIpLFxuICAgICAgICBhbGxCb3R0b21PZkNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm90dG9tT2ZDb250YWluZXInKVxufVxuXG5cbmNvbnN0IGNyZWF0ZURvbUVsZW1lbnQgPSAoZWxlbWVudCwgY2xhc3NOYW1lLCBpZE5hbWUsIGFwcGVuZFRvKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbC5pZCA9IGlkTmFtZTtcbiAgICBhcHBlbmRUby5hcHBlbmRDaGlsZChlbClcbiAgICByZXR1cm4gZWxcbn1cbmV4cG9ydCB7IFRvRG8sIERvbUVsZW1lbnRzLCBjcmVhdGVEb21FbGVtZW50IH07IiwiaW1wb3J0IHsgRG9tRWxlbWVudHMsIFRvRG8sIGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVcIjtcbmltcG9ydCBTaW1wbGVQaWNrZXIgZnJvbSBcInNpbXBsZXBpY2tlclwiO1xuXG5jb25zdCB0YXNrQXJyYXkgPSBbXTtcblxuY29uc3QgdGFza0xpc3RlbmVyID0gKCkgPT4ge1xuICAgIERvbUVsZW1lbnRzLmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKERvbUVsZW1lbnRzLnVzZXJJbnB1dC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHk7XG4gICAgICAgICAgICBEb21FbGVtZW50cy5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0aW9uID0gcmFkaW8uaWQ7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPSBzZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzZWxlY3Rpb24uc2xpY2UoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgICAgICAgIH07XG4gICAgICBcbiAgICAgICAgICAvLyBjbG9zZSBwb3B1cCBhZnRlciBzdWJtaXRcbiAgICAgICAgICBEb21FbGVtZW50cy5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgRG9tRWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgRG9tRWxlbWVudHMucGlja2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIFxuICAgICAgICAgIC8vIGZvcm1hdCBEdWUgRGF0ZSBmb3IgZGlzcGxheVxuICAgICAgICAgIGxldCBkdWVEYXRlQXJyID0gRG9tRWxlbWVudHMuZHVlRGF0ZS5pbm5lckhUTUwuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIGxldCB1c2FibGVEYXRlID0gYCR7ZHVlRGF0ZUFyclsyXX0gJHtkdWVEYXRlQXJyWzFdfWA7XG4gICAgICAgICAgbGV0IHVzYWJsZVRpbWUgPSBgJHtkdWVEYXRlQXJyWzRdfSAke2R1ZURhdGVBcnJbNV19YDtcbiAgICAgIFxuICAgICAgICAgIGxldCBjcmVhdGVUb2RvID0gbmV3IFRvRG8oXG4gICAgICAgICAgICB1c2VySW5wdXQudmFsdWUsXG4gICAgICAgICAgICB1c2FibGVEYXRlLFxuICAgICAgICAgICAgdXNhYmxlVGltZSxcbiAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0aW9uKCksXG4gICAgICAgICAgICBEb21FbGVtZW50cy50ZXh0QXJlYS52YWx1ZVxuICAgICAgICAgICk7XG4gICAgICBcbiAgICAgICAgICB0YXNrQXJyYXkucHVzaChjcmVhdGVUb2RvKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICAgICAgXG4gICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gY2xvc2UgSWYgc3RhdGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xvc2UgZXZlbnQgTGlzdGVuZXJcbiAgICAgIH0pO1xufVxuXG5jb25zdCBjcmVhdGVCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICBEb21FbGVtZW50cy5jcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgRG9tRWxlbWVudHMucG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBEb21FbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLnVzZXJJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLnRleHRBcmVhLnZhbHVlID0gXCJcIjtcbiAgICAgICAgRG9tRWxlbWVudHMuZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLmR1ZURhdGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgRG9tRWxlbWVudHMucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xufVxuXG5jb25zdCBvdmVybGF5TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRG9tRWxlbWVudHMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBEb21FbGVtZW50cy5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBEb21FbGVtZW50cy5waWNrZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBEb21FbGVtZW50cy50YXNrSW5mb1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgRG9tRWxlbWVudHMudXNlcklucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG5cbiAgICAgIH0pO1xufVxuXG5jb25zdCBkYXRlQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRG9tRWxlbWVudHMuZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBEb21FbGVtZW50cy5waWNrZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBsZXQgcGlja2VyID0gbmV3IFNpbXBsZVBpY2tlcihwaWNrZXJEaXYsIHtcbiAgICAgICAgICB6SW5kZXg6IDEwMDQsXG4gICAgICAgIH0pO1xuICAgICAgICBwaWNrZXIub3BlbigpO1xuICAgICAgICBwaWNrZXIub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGRhdGUsIHJlYWRhYmxlRGF0ZSkge1xuICAgICAgICAgIERvbUVsZW1lbnRzLmR1ZURhdGUuaW5uZXJIVE1MID0gYER1ZTogJHtyZWFkYWJsZURhdGV9YDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbn1cblxuY29uc3QgY2FyZENvbnRhaW5lckxpc3RlbmVyID0gKCkgPT4ge1xuICAgIGxldCBjYXJkc0FyciA9IEFycmF5LmZyb20oRG9tRWxlbWVudHMuYWxsQ2FyZENvbnRhaW5lcnMpO1xuICAgIGNhcmRzQXJyLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGxldCBsb2NhdGlvbiA9IGUuZGF0YXNldC5pbmRleDtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBEb21FbGVtZW50cy5yZW1vdmVCdXR0b25Qb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBsb2NhdGlvbik7XG4gICAgICAgICAgICBpZighZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhc2tOYW1lQ2hlY2tcIikpe1xuICAgICAgICAgICAgICAgIERvbUVsZW1lbnRzLnRhc2tJbmZvUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgICAgIERvbUVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBEb21FbGVtZW50cy50YXNrTmFtZVBvcHVwLnZhbHVlID0gdGFza0FycmF5W2xvY2F0aW9uXS50aXRsZTtcbiAgICAgICAgICAgICAgICBEb21FbGVtZW50cy5ub3Rlc1BvcHVwLnZhbHVlID0gdGFza0FycmF5W2xvY2F0aW9uXS5ub3RlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIERvbUVsZW1lbnRzLm5vdGVzUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrQXJyYXlbbG9jYXRpb25dLm5vdGVzID0gRG9tRWxlbWVudHMubm90ZXNQb3B1cC52YWx1ZTtcbiAgICAgICAgfSlcblxuICAgICAgICBEb21FbGVtZW50cy50YXNrTmFtZVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgICAgICAgIHRhc2tBcnJheVtsb2NhdGlvbl0udGl0bGUgPSBEb21FbGVtZW50cy50YXNrTmFtZVBvcHVwLnZhbHVlO1xuICAgICAgfSlcbiAgXG59KVxuXG59XG4gICAgICAgIFxuXG5cblxuXG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2FyZENvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiY2FyZENvbnRhaW5lclwiLFxuICAgICAgICBcImNhcmRDb250YWluZXJcIixcbiAgICAgICAgY29udGVudFxuICAgICAgKTtcbiAgICAgIGNhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG4gICAgICAvLyBEb21FbGVtZW50cy50YXNrTmFtZVBvcHVwLmlubmVyVGV4dCA9IHRhc2tBcnJheVtpXS50aXRsZTtcbiAgICAgIFxuICAgICAgY2FyZENvbnRhaW5lckxpc3RlbmVyKCk7XG4gICAgICBcbiAgICAvLyAgIHRhc2tBcnJheVtpXS5ub3RlcyA9IERvbUVsZW1lbnRzLm5vdGVzUG9wdXAudmFsdWU7XG5cbiAgXG4gICAgICBsZXQgdG9wT2ZDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcInRvcE9mQ29udGFpbmVyXCIsXG4gICAgICAgIFwidG9wT2ZDb250YWluZXJcIixcbiAgICAgICAgY2FyZENvbnRhaW5lclxuICAgICAgKTtcbiAgXG4gICAgICBsZXQgdGFza05hbWVDaGVjayA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgXCJ0YXNrTmFtZUNoZWNrXCIsXG4gICAgICAgIFwidGFza05hbWVDaGVja1wiLFxuICAgICAgICB0b3BPZkNvbnRhaW5lclxuICAgICAgKTtcbiAgICAgIHRhc2tOYW1lQ2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gICAgICAvLyoqKioqKioqKioqKioqKioqIFxuICAgICAgLy8gQkVMT1cgSVMgTE9HSUMgRk9SIEhJRElORyBQUklPUklUWSBBTkQgREFURSBBTkQgU1RSSUtJTkcgVEhST1VHSCBUSEUgVEVYVCBXSEVOIFRIRSBDSEVDS0JPWCBJUyBDTElDS0VEXG4gICAgICAvLyBUSElTIEZVTkNUSU9OQUxJVFkgV09SS1MsIEJVVCBJUyBDQVVTSU5HIElTU1VFUyBXSVRIIE9USEVSIFRISU5HUywgQU5EIFNJTkNFIElUJ1MgTk9UIEEgUEFSVCBPRiBUSEUgXG4gICAgICAvLyBBQ1RVQUwgUFJPSkVDVCBSRVFVSVJFTUVOVFMsIEknTSBMRUFWSU5HIElUIE9VVCBGT1IgTk9XXG4gICAgICAvLyBPTkUgU09MVVRJT04gRk9SIE1BS0lORyBUSElTIFdPUksgUFJPUEVSTFkgV09VTEQgQkUgVE8gQUREIEEgJ0NMSUNLRUQnIFBST1BFUlRZL01FVEhPRCBUTyBUSEUgT0JKRUNUXG4gICAgICAvLyBBTkQgVEhFTiBTQVlJTkcgV0hFTiBDSEVDS0JPWCBJUyBDTElDS0VELCBPQkpFQ1QuQ0xJQ0tFRCA9IFRSVUVcbiAgICAgIC8vIFRIRU4gV0hFTiBUSEUgQ0FSRFMgQVJFIFdJUEVEIEFORCBSRVBPUFVMQVRFRCwgSUYgT0JKRUNULkNMSUNLRUQgPSBUUlVFLCBUSEVOIEFERCBBTEwgVEhFIEZVTkNUSU9OQUxJVFkgXG4gICAgICAvLyBTTyBUSEUgSVNTVUUgQVJJU0VTIFdIRU4gRElTUExBWVRBU0tTKCkgSVMgUkFOLCBCRUNBVVNFIElUIFdJUEVTIEFMTCBDSElMRFJFTiBBTkQgUkUtUE9QVUxBVEVTIFRIRU0gXG4gICAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqIFxuXG4gICAgICAvLyB0YXNrTmFtZUNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBsZXQgYm90dG9tT2ZDb250YWluZXJBcnIgPSBBcnJheS5mcm9tKERvbUVsZW1lbnRzLmFsbEJvdHRvbU9mQ29udGFpbmVyKTtcblxuICAgICAgLy8gICBpZihldmVudC50YXJnZXQuY2hlY2tlZCl7XG4gICAgICAvLyAgICAgYm90dG9tT2ZDb250YWluZXJBcnJbaV0ucmVtb3ZlKCk7XG4gICAgICAvLyAgICAgdGFza05hbWVDaGVja0xhYmVsLmNsYXNzTGlzdC50b2dnbGUoJ3N0cmlrZWQnKTtcbiAgICAgICAgICBcbiAgICAgIC8vICAgfWVsc2UgaWYoIWV2ZW50LnRhcmdldC5jaGVja2VkKXtcbiAgICAgIC8vICAgICBjcmVhdGVCb3R0b21PZkNvbnRhaW5lcigpO1xuICAgICAgLy8gICAgIHRhc2tOYW1lQ2hlY2tMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdzdHJpa2VkJyk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gIFxuICAgICAgbGV0IHRhc2tOYW1lQ2hlY2tMYWJlbCA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgXCJ0YXNrTmFtZUNoZWNrTGFiZWxcIixcbiAgICAgICAgXCJ0YXNrTmFtZUNoZWNrTGFiZWxcIixcbiAgICAgICAgdG9wT2ZDb250YWluZXJcbiAgICAgICk7XG4gICAgICB0YXNrTmFtZUNoZWNrTGFiZWwuaW5uZXJIVE1MID0gdGFza0FycmF5W2ldLnRpdGxlO1xuICAgICAgXG4gICAgICBjb25zdCBjcmVhdGVCb3R0b21PZkNvbnRhaW5lcj0gKCkgPT4ge1xuICAgICAgICBsZXQgYm90dG9tT2ZDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgXCJib3R0b21PZkNvbnRhaW5lclwiLFxuICAgICAgICAgIFwiYm90dG9tT2ZDb250YWluZXJcIixcbiAgICAgICAgICBjYXJkQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgICAgYm90dG9tT2ZDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG4gICAgICAgICAgXG4gICAgICAgIGlmICh0YXNrQXJyYXlbaV0ucHJpb3JpdHkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgIFwidGFza1ByaW9yaXR5XCIsXG4gICAgICAgICAgICBcInRhc2tQcmlvcml0eVwiLFxuICAgICAgICAgICAgYm90dG9tT2ZDb250YWluZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBgUHJpb3JpdHk6ICR7dGFza0FycmF5W2ldLnByaW9yaXR5fWA7XG4gICAgXG4gICAgICAgICAgaWYgKHRhc2tBcnJheVtpXS5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YXNrQXJyYXlbaV0ucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IHRhc2tEdWVEYXRlID0gY3JlYXRlRG9tRWxlbWVudChcbiAgICAgICAgICBcInBcIixcbiAgICAgICAgICBcInRhc2tEdWVEYXRlXCIsXG4gICAgICAgICAgXCJ0YXNrRHVlRGF0ZVwiLFxuICAgICAgICAgIGJvdHRvbU9mQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0YXNrQXJyYXlbaV0uZGF0ZSAhPSBcInVuZGVmaW5lZCB1bmRlZmluZWRcIikge1xuICAgICAgICAgIHRhc2tEdWVEYXRlLmlubmVySFRNTCA9IGAke3Rhc2tBcnJheVtpXS5kYXRlfSB8ICR7dGFza0FycmF5W2ldLnRpbWV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3JlYXRlQm90dG9tT2ZDb250YWluZXIoKTtcbiAgICAgIH1cbiAgICAgIFxuICBcbiAgICAgIFxuICB9O1xuXG5cbiAgY29uc3QgcmVtb3ZlQ2FyZCA9ICgpID0+IHtcblxuICAgIGxldCBjYXJkQXJyID0gQXJyYXkuZnJvbShEb21FbGVtZW50cy5hbGxDYXJkQ29udGFpbmVycyk7XG4gICAgICBcbiAgICAgICAgXG4gIFxuICAgICAgICBEb21FbGVtZW50cy5yZW1vdmVCdXR0b25Qb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tBcnJheS5zcGxpY2UoRG9tRWxlbWVudHMucmVtb3ZlQnV0dG9uUG9wdXAuZGF0YXNldC5pbmRleCwgMSk7XG4gICAgICAgICAgICBEb21FbGVtZW50cy50YXNrSW5mb1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIERvbUVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0YXNrTGlzdGVuZXIoKTtcbiAgICBjcmVhdGVCdXR0b25MaXN0ZW5lcigpO1xuICAgIG92ZXJsYXlMaXN0ZW5lcigpO1xuICAgIGRhdGVCdXR0b25MaXN0ZW5lcigpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIHJlbW92ZUNhcmQoKTtcbiAgICAvLyBjaGVja2JveExpc3RlbmVyKCk7XG59XG5cblxuZXhwb3J0IHsgYWRkTGlzdGVuZXJzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVG9EbywgRG9tRWxlbWVudHMsIGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVcIjtcbmltcG9ydCBTaW1wbGVQaWNrZXIgZnJvbSBcInNpbXBsZXBpY2tlclwiO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXJzIH0gZnJvbSBcIi4vbGlzdGVuZXJzXCI7XG5cblxuXG5hZGRMaXN0ZW5lcnMoKTtcblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9