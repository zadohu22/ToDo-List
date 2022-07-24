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
/* harmony export */   "cardsArr": () => (/* binding */ cardsArr),
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
        taskNamePopup: document.getElementById("taskName"),
        notesPopup: document.getElementById("taskNotes"),
        removeButtonPopup: document.getElementById("removeBtn"),
        markCompletePopup: document.getElementById("markComplete"),
        taskNameCheck: document.getElementById("taskNameCheck"),
        bottomOfContainer: document.getElementById("bottomOfContainer")
}

let cardsArr = Array.from(DomElements.allCardContainers);

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
          console.log(_create__WEBPACK_IMPORTED_MODULE_0__.DomElements.textArea.value)
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
        e.addEventListener('click', (event) => {
            if(!event.target.classList.contains("taskNameCheck")){
                _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.taskInfoPopup.style.display = "flex";
                _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.style.display = "block";
                
                _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.notesPopup.value = taskArray[location].notes;
                console.log(taskArray[location].notes)
            }
        })
        
        _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.notesPopup.addEventListener('keyup', () => {
            taskArray[location].notes = _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.notesPopup.value;
            console.log(taskArray[location].notes)
        })

    });
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
      _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.taskNamePopup.innerText = taskArray[i].title;
      
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
  
      let taskNameCheckLabel = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(
        "label",
        "taskNameCheckLabel",
        "taskNameCheckLabel",
        topOfContainer
      );
      taskNameCheckLabel.innerHTML = taskArray[i].title;
  
      let bottomOfContainer = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(
        "div",
        "bottomOfContainer",
        "bottomOfContainer",
        cardContainer
      );
  
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
  };



const addListeners = () => {
    taskListener();
    createButtonListener();
    overlayListener();
    dateButtonListener();
    displayTasks();
    checkboxListener();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTitEO0FBQ3ZCO0FBQ0c7Ozs7QUFJM0Msd0RBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc2ltcGxlcGlja2VyL2Rpc3Qvc2ltcGxlcGlja2VyLm5vZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gaShuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIHI9dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsaSksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gaS5tPWUsaS5jPXQsaS5kPWZ1bmN0aW9uKGUsdCxuKXtpLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxpLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0saS50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1pKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoaS5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgciBpbiBlKWkuZChuLHIsZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxyKSk7cmV0dXJuIG59LGkubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gaS5kKHQsXCJhXCIsdCksdH0saS5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxpLnA9XCJcIixpKGkucz1cIlRZVmZcIil9KHtcIjBEeVZcIjpmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQpe2U9W10uY29uY2F0KGUpO2Zvcih2YXIgaT0wO2k8dDtpKyspZVtpXT12b2lkIDA7cmV0dXJuIGV9ZnVuY3Rpb24gcihlKXt2YXIgaT1uZXcgRGF0ZShlLmdldFRpbWUoKSkscj1lLmdldEZ1bGxZZWFyKCkscz1lLmdldE1vbnRoKCksYT17ZGF0ZTppLG1vbnRoOnZvaWQgMH07aWYodC5tb250aFRyYWNrZXIuY3VycmVudD1uZXcgRGF0ZShlLmdldFRpbWUoKSksdC5tb250aFRyYWNrZXIuY3VycmVudC5zZXREYXRlKDEpLHQubW9udGhUcmFja2VyLnllYXJzW3JdPXQubW9udGhUcmFja2VyLnllYXJzW3JdfHx7fSx2b2lkIDAhPT10Lm1vbnRoVHJhY2tlci55ZWFyc1tyXVtzXSlyZXR1cm4gYS5tb250aD10Lm1vbnRoVHJhY2tlci55ZWFyc1tyXVtzXSxhOyhlPW5ldyBEYXRlKGUuZ2V0VGltZSgpKSkuc2V0RGF0ZSgxKSx0Lm1vbnRoVHJhY2tlci55ZWFyc1tyXVtzXT1bXTtmb3IodmFyIG89dC5tb250aFRyYWNrZXIueWVhcnNbcl1bc10sYz0wO2UuZ2V0TW9udGgoKT09PXM7KXt2YXIgbD1lLmdldERhdGUoKSxwPWUuZ2V0RGF5KCk7MT09PWwmJihvW2NdPW4oW10scCkpLG9bY109b1tjXXx8W10sb1tjXVtwXT1sLDY9PT1wJiZjKyssZS5zZXREYXRlKGUuZ2V0RGF0ZSgpKzEpfXZhciBkPTU7dm9pZCAwPT09b1s1XSYmKGQ9NCxvWzVdPW4oW10sNykpO3ZhciBtPW9bZF0ubGVuZ3RoO2lmKG08Nyl7dmFyIGg9b1tkXS5jb25jYXQobihbXSw3LW0pKTtvW2RdPWh9cmV0dXJuIGEubW9udGg9byxhfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQubW9udGhUcmFja2VyPXt5ZWFyczp7fX0sdC5tb250aHM9W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLHQuZGF5cz1bXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSx0LnNjcmFwZU1vbnRoPXIsdC5zY3JhcGVQcmV2aW91c01vbnRoPWZ1bmN0aW9uKCl7dmFyIGU9dC5tb250aFRyYWNrZXIuY3VycmVudDtpZighZSl0aHJvdyBFcnJvcihcInNjcmFwZVByZXZvaXNNb250aCBjYWxsZWQgd2l0aG91dCBzZXR0aW5nIG1vbnRoVHJhY2tlci5jdXJyZW50IVwiKTtyZXR1cm4gZS5zZXRNb250aChlLmdldE1vbnRoKCktMSkscihlKX0sdC5zY3JhcGVOZXh0TW9udGg9ZnVuY3Rpb24oKXt2YXIgZT10Lm1vbnRoVHJhY2tlci5jdXJyZW50O2lmKCFlKXRocm93IEVycm9yKFwic2NyYXBlUHJldm9pc01vbnRoIGNhbGxlZCB3aXRob3V0IHNldHRpbmcgbW9udGhUcmFja2VyLmN1cnJlbnQhXCIpO3JldHVybiBlLnNldE1vbnRoKGUuZ2V0TW9udGgoKSsxKSxyKGUpfTt2YXIgcz17c3Q6WzEsMjEsMzFdLG5kOlsyLDIyXSxyZDpbMywyM119O3QuZ2V0RGlzcGxheURhdGU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5nZXREYXRlKCk7cmV0dXJuLTEhPT1zLnN0LmluZGV4T2YodCk/dCtcInN0XCI6LTEhPT1zLm5kLmluZGV4T2YodCk/dCtcIm5kXCI6LTEhPT1zLnJkLmluZGV4T2YodCk/dCtcInJkXCI6dCtcInRoXCJ9LHQuZm9ybWF0VGltZUZyb21JbnB1dEVsZW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIixpPWUuc3BsaXQoXCI6XCIpLG49aVswXSxyPShuPStuKT49MTI7cmV0dXJuIHImJm4+MTImJihuLT0xMikscnx8MCE9PW58fChuPTEyKSx0Kz1uPDEwP1wiMFwiK246bix0Kz1cIjpcIitpWzFdK1wiIFwiLHQrPXI/XCJQTVwiOlwiQU1cIn19LFRZVmY6ZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3ZhciBuPWkoXCIwRHlWXCIpLHI9aShcImh0NlhcIikscz1bXCJzdWJtaXRcIixcImNsb3NlXCJdLGE9bmV3IERhdGUsbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLl92YWxpZE9uTGlzdGVuZXJzPXM7dmFyIGk9dm9pZCAwLG49dDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTtpZihudWxsPT09cil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNlbGVjdG9yIHBhc3NlZCB0byBTaW1wbGVQaWNrZXIhXCIpO2k9cn1lbHNlIGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudD9pPWU6XCJvYmplY3RcIj09dHlwZW9mIGUmJihuPWUpO2l8fChpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKSxufHwobj17fSksdGhpcy5zZWxlY3RlZERhdGU9bmV3IERhdGUsdGhpcy5pbmplY3RUZW1wbGF0ZShpKSx0aGlzLmluaXQoaSxuKSx0aGlzLmluaXRMaXN0ZW5lcnMoKSx0aGlzLl9ldmVudEhhbmRsZXJzPXt9fXJldHVybiBlLnByb3RvdHlwZS5pbml0RWxNZXRob2Q9ZnVuY3Rpb24oZSl7dGhpcy4kPWZ1bmN0aW9uKHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3IodCl9LHRoaXMuJCQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUucXVlcnlTZWxlY3RvckFsbCh0KX19LGUucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oZSx0KXt0aGlzLiRzaW1wbGVwaWNrZXJXcmFwcGVyPWUucXVlcnlTZWxlY3RvcihcIi5zaW1wbGVwaWNrZXItd3JhcHBlclwiKSx0aGlzLmluaXRFbE1ldGhvZCh0aGlzLiRzaW1wbGVwaWNrZXJXcmFwcGVyKTt2YXIgaT10aGlzLiQscj10aGlzLiQkO3RoaXMuJHNpbXBsZXBpY2tlcj1pKFwiLnNpbXBpbGVwaWNrZXItZGF0ZS1waWNrZXJcIiksdGhpcy4kdHJzPXIoXCIuc2ltcGxlcGlja2VyLWNhbGVuZGVyIHRib2R5IHRyXCIpLHRoaXMuJHRkcz1yKFwiLnNpbXBsZXBpY2tlci1jYWxlbmRlciB0Ym9keSB0ZFwiKSx0aGlzLiRoZWFkZXJNb250aEFuZFllYXI9aShcIi5zaW1wbGVwaWNrZXItbW9udGgtYW5kLXllYXJcIiksdGhpcy4kbW9udGhBbmRZZWFyPWkoXCIuc2ltcGxlcGlja2VyLXNlbGVjdGVkLWRhdGVcIiksdGhpcy4kZGF0ZT1pKFwiLnNpbXBsZXBpY2tlci1kYXRlXCIpLHRoaXMuJGRheT1pKFwiLnNpbXBsZXBpY2tlci1kYXktaGVhZGVyXCIpLHRoaXMuJHRpbWU9aShcIi5zaW1wbGVwaWNrZXItdGltZVwiKSx0aGlzLiR0aW1lSW5wdXQ9aShcIi5zaW1wbGVwaWNrZXItdGltZS1zZWN0aW9uIGlucHV0XCIpLHRoaXMuJHRpbWVTZWN0aW9uSWNvbj1pKFwiLnNpbXBsZXBpY2tlci1pY29uLXRpbWVcIiksdGhpcy4kY2FuY2VsPWkoXCIuc2ltcGxlcGlja2VyLWNhbmNlbC1idG5cIiksdGhpcy4kb2s9aShcIi5zaW1wbGVwaWNrZXItb2stYnRuXCIpLHRoaXMuJGRpc3BsYXlEYXRlRWxlbWVudHM9W3RoaXMuJGRheSx0aGlzLiRoZWFkZXJNb250aEFuZFllYXIsdGhpcy4kZGF0ZV0sdGhpcy4kdGltZS5jbGFzc0xpc3QuYWRkKFwic2ltcGxlcGlja2VyLWZhZGVcIiksdGhpcy5yZW5kZXIobi5zY3JhcGVNb250aChhKSksdD10fHx7fSx0aGlzLm9wdHM9dCx0aGlzLnJlc2V0KHQuc2VsZWN0ZWREYXRlfHxhKSx2b2lkIDAhPT10LnpJbmRleCYmKHRoaXMuJHNpbXBsZXBpY2tlcldyYXBwZXIuc3R5bGUuekluZGV4PXQuekluZGV4LnRvU3RyaW5nKCkpLHQuZGlzYWJsZVRpbWVTZWN0aW9uJiZ0aGlzLmRpc2FibGVUaW1lU2VjdGlvbigpLHQuY29tcGFjdE1vZGUmJnRoaXMuY29tcGFjdE1vZGUoKX0sZS5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8bmV3IERhdGU7dGhpcy5yZW5kZXIobi5zY3JhcGVNb250aCh0KSk7dmFyIGk9dC50b1RpbWVTdHJpbmcoKS5zcGxpdChcIiBcIilbMF0ucmVwbGFjZSgvXFw6XFxkXFxkJC8sXCJcIik7dGhpcy4kdGltZUlucHV0LnZhbHVlPWksdGhpcy4kdGltZS5pbm5lclRleHQ9bi5mb3JtYXRUaW1lRnJvbUlucHV0RWxlbWVudChpKTt2YXIgcj10LmdldERhdGUoKS50b1N0cmluZygpLHM9dGhpcy5maW5kRWxlbWVudFdpdGhEYXRlKHIpO3MuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpfHwodGhpcy5zZWxlY3REYXRlRWxlbWVudChzKSx0aGlzLnVwZGF0ZURhdGVDb21wb25lbnRzKHQpKX0sZS5wcm90b3R5cGUuY29tcGFjdE1vZGU9ZnVuY3Rpb24oKXt0aGlzLiRkYXRlLnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9LGUucHJvdG90eXBlLmRpc2FibGVUaW1lU2VjdGlvbj1mdW5jdGlvbigpe3RoaXMuJHRpbWVTZWN0aW9uSWNvbi5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCJ9LGUucHJvdG90eXBlLmVuYWJsZVRpbWVTZWN0aW9uPWZ1bmN0aW9uKCl7dGhpcy4kdGltZVNlY3Rpb25JY29uLnN0eWxlLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCJ9LGUucHJvdG90eXBlLmluamVjdFRlbXBsYXRlPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTt0LmlubmVySFRNTD1yLmh0bWxUZW1wbGF0ZSxlLmFwcGVuZENoaWxkKHQuY29udGVudC5jbG9uZU5vZGUoITApKX0sZS5wcm90b3R5cGUuY2xlYXJSb3dzPWZ1bmN0aW9uKCl7dGhpcy4kdGRzLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCJcIixlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIil9KX0sZS5wcm90b3R5cGUudXBkYXRlRGF0ZUNvbXBvbmVudHM9ZnVuY3Rpb24oZSl7dmFyIHQ9bi5kYXlzW2UuZ2V0RGF5KCldLGk9bi5tb250aHNbZS5nZXRNb250aCgpXStcIiBcIitlLmdldEZ1bGxZZWFyKCk7dGhpcy4kaGVhZGVyTW9udGhBbmRZZWFyLmlubmVySFRNTD1pLHRoaXMuJG1vbnRoQW5kWWVhci5pbm5lckhUTUw9aSx0aGlzLiRkYXkuaW5uZXJIVE1MPXQsdGhpcy4kZGF0ZS5pbm5lckhUTUw9bi5nZXREaXNwbGF5RGF0ZShlKX0sZS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuJCQsaT10aGlzLiR0cnMsbj1lLm1vbnRoLHI9ZS5kYXRlO3RoaXMuY2xlYXJSb3dzKCksbi5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIG49aVt0XS5jaGlsZHJlbjtlLmZvckVhY2goZnVuY3Rpb24oZSx0KXt2YXIgaT1uW3RdO2U/KGkucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1lbXB0eVwiKSxpLmlubmVySFRNTD1lKTppLnNldEF0dHJpYnV0ZShcImRhdGEtZW1wdHlcIixcIlwiKX0pfSk7dmFyIHM9dChcInRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGRcIiksYT0hMDtzLmZvckVhY2goZnVuY3Rpb24oZSl7dm9pZCAwPT09ZS5kYXRhc2V0LmVtcHR5JiYoYT0hMSl9KTt2YXIgbz1zWzBdLnBhcmVudEVsZW1lbnQ7by5zdHlsZS5kaXNwbGF5PWEmJm8/XCJub25lXCI6XCJ0YWJsZS1yb3dcIix0aGlzLnVwZGF0ZURhdGVDb21wb25lbnRzKHIpfSxlLnByb3RvdHlwZS51cGRhdGVTZWxlY3RlZERhdGU9ZnVuY3Rpb24oZSl7dmFyIHQsaT10aGlzLiRtb250aEFuZFllYXIscj10aGlzLiR0aW1lO3RoaXMuJGRhdGU7dD1lP2UuaW5uZXJIVE1MLnRyaW0oKTp0aGlzLiRkYXRlLmlubmVySFRNTC5yZXBsYWNlKC9bYS16XSsvLFwiXCIpO3ZhciBzPWkuaW5uZXJIVE1MLnNwbGl0KFwiIFwiKSxhPXNbMF0sbz1zWzFdLGM9bi5tb250aHMuaW5kZXhPZihhKSxsPXIuaW5uZXJIVE1MLnNwbGl0KFwiOlwiKSxwPStsWzBdLGQ9bFsxXS5zcGxpdChcIiBcIiksbT1kWzBdLGg9ZFsxXTtcIkFNXCI9PT1oJiYxMj09cCYmKHA9MCksXCJQTVwiPT09aCYmcDwxMiYmKHArPTEyKTt2YXIgdT1uZXcgRGF0ZSgrbywrYywrdCwrcCwrbSk7dGhpcy5zZWxlY3RlZERhdGU9dTt2YXIgdj10K1wiIFwiO3YrPWkuaW5uZXJIVE1MLnRyaW0oKStcIiBcIix2Kz1yLmlubmVySFRNTC50cmltKCksdGhpcy5yZWFkYWJsZURhdGU9di5yZXBsYWNlKC9eXFxkKy8sdS5nZXREYXRlKCkudG9TdHJpbmcoKSl9LGUucHJvdG90eXBlLnNlbGVjdERhdGVFbGVtZW50PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuJChcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXIgdGJvZHkgLmFjdGl2ZVwiKTtlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIiksdCYmdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpLHRoaXMudXBkYXRlU2VsZWN0ZWREYXRlKGUpLHRoaXMudXBkYXRlRGF0ZUNvbXBvbmVudHModGhpcy5zZWxlY3RlZERhdGUpfSxlLnByb3RvdHlwZS5maW5kRWxlbWVudFdpdGhEYXRlPWZ1bmN0aW9uKGUsdCl7dmFyIGksbjtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ITEpLHRoaXMuJHRkcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciByPXQuaW5uZXJIVE1MLnRyaW0oKTtyPT09ZSYmKGk9dCksXCJcIiE9PXImJihuPXQpfSksdm9pZCAwPT09aSYmdCYmKGk9biksaX0sZS5wcm90b3R5cGUuaGFuZGxlSWNvbkJ1dHRvbkNsaWNrPWZ1bmN0aW9uKGUpe3ZhciB0LGk9dGhpcy4kO2lmKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2ltcGxlcGlja2VyLWljb24tY2FsZW5kZXJcIikpe3ZhciByPWkoXCIuc2ltcGxlcGlja2VyLWljb24tdGltZVwiKSxzPWkoXCIuc2ltcGxlcGlja2VyLXRpbWUtc2VjdGlvblwiKTtyZXR1cm4obz1pKFwiLnNpbXBsZXBpY2tlci1jYWxlbmRlci1zZWN0aW9uXCIpKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixzLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpLGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSx2b2lkIHRoaXMudG9vZ2xlRGlzcGxheUZhZGUoKX1pZihlLmNsYXNzTGlzdC5jb250YWlucyhcInNpbXBsZXBpY2tlci1pY29uLXRpbWVcIikpe3ZhciBhPWkoXCIuc2ltcGxlcGlja2VyLWljb24tY2FsZW5kZXJcIiksbz1pKFwiLnNpbXBsZXBpY2tlci1jYWxlbmRlci1zZWN0aW9uXCIpO3JldHVybihzPWkoXCIuc2ltcGxlcGlja2VyLXRpbWUtc2VjdGlvblwiKSkuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsby5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSxlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIiksdm9pZCB0aGlzLnRvb2dsZURpc3BsYXlGYWRlKCl9dmFyIGM9aShcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXIgdGQuYWN0aXZlXCIpO2lmKGMmJih0PWMuaW5uZXJIVE1MLnRyaW0oKSksZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW1wbGVwaWNrZXItaWNvbi1uZXh0XCIpJiZ0aGlzLnJlbmRlcihuLnNjcmFwZU5leHRNb250aCgpKSxlLmNsYXNzTGlzdC5jb250YWlucyhcInNpbXBsZXBpY2tlci1pY29uLXByZXZpb3VzXCIpJiZ0aGlzLnJlbmRlcihuLnNjcmFwZVByZXZpb3VzTW9udGgoKSksdCl7dmFyIGw9dGhpcy5maW5kRWxlbWVudFdpdGhEYXRlKHQsITApO3RoaXMuc2VsZWN0RGF0ZUVsZW1lbnQobCl9fSxlLnByb3RvdHlwZS5pbml0TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJHNpbXBsZXBpY2tlcixpPWUuJHRpbWVJbnB1dCxyPWUuJG9rLHM9ZS4kY2FuY2VsLGE9ZS4kc2ltcGxlcGlja2VyV3JhcHBlcixvPXRoaXM7ZnVuY3Rpb24gYygpe28uY2xvc2UoKSxvLmNhbGxFdmVudChcImNsb3NlXCIsZnVuY3Rpb24oZSl7ZSgpfSl9dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldCxpPXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO2Uuc3RvcFByb3BhZ2F0aW9uKCksXCJ0ZFwiIT09aT9cImJ1dHRvblwiPT09aSYmdC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW1wbGVwaWNrZXItaWNvblwiKSYmby5oYW5kbGVJY29uQnV0dG9uQ2xpY2sodCk6by5zZWxlY3REYXRlRWxlbWVudCh0KX0pLGkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oZSl7aWYoXCJcIiE9PWUudGFyZ2V0LnZhbHVlKXt2YXIgdD1uLmZvcm1hdFRpbWVGcm9tSW5wdXRFbGVtZW50KGUudGFyZ2V0LnZhbHVlKTtvLiR0aW1lLmlubmVySFRNTD10LG8udXBkYXRlU2VsZWN0ZWREYXRlKCl9fSksci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe28uY2xvc2UoKSxvLmNhbGxFdmVudChcInN1Ym1pdFwiLGZ1bmN0aW9uKGUpe2Uoby5zZWxlY3RlZERhdGUsby5yZWFkYWJsZURhdGUpfSl9KSxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGMpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYyl9LGUucHJvdG90eXBlLmNhbGxFdmVudD1mdW5jdGlvbihlLHQpeyh0aGlzLl9ldmVudEhhbmRsZXJzW2VdfHxbXSkuZm9yRWFjaChmdW5jdGlvbihlKXt0KGUpfSl9LGUucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oKXt0aGlzLiRzaW1wbGVwaWNrZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIil9LGUucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpfSxlLnByb3RvdHlwZS5vbj1mdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMuX3ZhbGlkT25MaXN0ZW5lcnMsbj10aGlzLl9ldmVudEhhbmRsZXJzO2lmKCFpLmluY2x1ZGVzKGUpKXRocm93IG5ldyBFcnJvcihcIk5vdCBhIHZhbGlkIGV2ZW50IVwiKTtuW2VdPW5bZV18fFtdLG5bZV0ucHVzaCh0KX0sZS5wcm90b3R5cGUudG9vZ2xlRGlzcGxheUZhZGU9ZnVuY3Rpb24oKXt0aGlzLiR0aW1lLmNsYXNzTGlzdC50b2dnbGUoXCJzaW1wbGVwaWNrZXItZmFkZVwiKSx0aGlzLiRkaXNwbGF5RGF0ZUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5jbGFzc0xpc3QudG9nZ2xlKFwic2ltcGxlcGlja2VyLWZhZGVcIil9KX0sZX0oKTtlLmV4cG9ydHM9b30saHQ2WDpmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5odG1sVGVtcGxhdGU9J1xcbjxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItd3JhcHBlclwiPlxcbiAgPGRpdiBjbGFzcz1cInNpbXBpbGVwaWNrZXItZGF0ZS1waWNrZXJcIj5cXG4gICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1kYXktaGVhZGVyXCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1kYXRlLXNlY3Rpb25cIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItbW9udGgtYW5kLXllYXJcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItZGF0ZVwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1zZWxlY3QtcGFuZVwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWljb24gc2ltcGxlcGlja2VyLWljb24tY2FsZW5kZXIgYWN0aXZlXCIgdGl0bGU9XCJTZWxlY3QgZGF0ZSBmcm9tIGNhbGVuZGVyIVwiPjwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXRpbWVcIj4xMjowMCBQTTwvZGl2PlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWljb24gc2ltcGxlcGlja2VyLWljb24tdGltZVwiIHRpdGxlPVwiU2VsZWN0IHRpbWVcIj48L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItcGlja2VyLXNlY3Rpb25cIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItY2FsZW5kZXItc2VjdGlvblwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLW1vbnRoLXN3aXRjaGVyIHNpbXBsZXBpY2tlci1zZWxlY3QtcGFuZVwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzaW1wbGVwaWNrZXItaWNvbiBzaW1wbGVwaWNrZXItaWNvbi1wcmV2aW91c1wiPjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItc2VsZWN0ZWQtZGF0ZVwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzaW1wbGVwaWNrZXItaWNvbiBzaW1wbGVwaWNrZXItaWNvbi1uZXh0XCI+PC9idXR0b24+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWNhbGVuZGVyXCI+XFxuICAgICAgICAgICAgPHRhYmxlPlxcbiAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICA8dHI+PHRoPlN1bjwvdGg+PHRoPk1vbjwvdGg+PHRoPlR1ZTwvdGg+PHRoPldlZDwvdGg+PHRoPlRodTwvdGg+PHRoPkZyaTwvdGg+PHRoPlNhdDwvdGg+PC90cj5cXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICcrZnVuY3Rpb24oZSx0KXtmb3IodmFyIGk9XCJcIixuPTE7bjw9dDtuKyspaSs9ZTtyZXR1cm4gaX0oXCI8dHI+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PC90cj5cIiw2KSsnXFxuICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXRpbWUtc2VjdGlvblwiPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRpbWVcIiB2YWx1ZT1cIjEyOjAwXCIgYXV0b2ZvY3VzPVwiZmFsc2VcIj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItYm90dG9tLXBhcnRcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzaW1wbGVwaWNrZXItY2FuY2VsLWJ0biBzaW1wbGVwaWNrZXItYnRuXCIgdGl0bGU9XCJDYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzaW1wbGVwaWNrZXItb2stYnRuIHNpbXBsZXBpY2tlci1idG5cIiB0aXRsZT1cIk9LXCI+T0s8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2Plxcbid9fSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW1wbGVwaWNrZXIubm9kZS5qcy5tYXAiLCJjbGFzcyBUb0Rve1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlLCB0aW1lLCBwcmlvcml0eSwgbm90ZXMpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIC8vIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIH1cblxuICAgIFxufVxuXG5jb25zdCBEb21FbGVtZW50cyA9IHtcbiAgICAgICAgY3JlYXRlQnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZE5ld1RvRG9cIiksXG4gICAgICAgIHBvcHVwOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVRvRG9Qb3B1cFwiKSxcbiAgICAgICAgb3ZlcmxheTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibGFja092ZXJsYXlcIiksXG4gICAgICAgIGFkZFRhc2s6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0UG9wdXBcIiksXG4gICAgICAgIHVzZXJJbnB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySW5wdXRcIiksXG4gICAgICAgIGRhdGVCdXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUJ1dHRvblwiKSxcbiAgICAgICAgZGF0ZUNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlQ29udGFpbmVyXCIpLFxuICAgICAgICBwaWNrZXJEaXY6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGlja2VyRGl2XCIpLFxuICAgICAgICBkdWVEYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIiksXG4gICAgICAgIHRleHRBcmVhOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRBcmVhXCIpLFxuICAgICAgICByYWRpb3M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLFxuICAgICAgICBjb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIiksXG4gICAgICAgIGNhcmRDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkQ29udGFpbmVyJyksXG4gICAgICAgIGFsbENhcmRDb250YWluZXJzOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkQ29udGFpbmVyJyksXG4gICAgICAgIGNoZWNrYm94OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lQ2hlY2tcIiksXG4gICAgICAgIHRhc2tJbmZvUG9wdXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0luZm9Qb3B1cFwiKSxcbiAgICAgICAgdGFza05hbWVQb3B1cDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTmFtZVwiKSxcbiAgICAgICAgbm90ZXNQb3B1cDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTm90ZXNcIiksXG4gICAgICAgIHJlbW92ZUJ1dHRvblBvcHVwOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbW92ZUJ0blwiKSxcbiAgICAgICAgbWFya0NvbXBsZXRlUG9wdXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFya0NvbXBsZXRlXCIpLFxuICAgICAgICB0YXNrTmFtZUNoZWNrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lQ2hlY2tcIiksXG4gICAgICAgIGJvdHRvbU9mQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbU9mQ29udGFpbmVyXCIpXG59XG5cbmxldCBjYXJkc0FyciA9IEFycmF5LmZyb20oRG9tRWxlbWVudHMuYWxsQ2FyZENvbnRhaW5lcnMpO1xuXG5jb25zdCBjcmVhdGVEb21FbGVtZW50ID0gKGVsZW1lbnQsIGNsYXNzTmFtZSwgaWROYW1lLCBhcHBlbmRUbykgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWwuaWQgPSBpZE5hbWU7XG4gICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoZWwpXG4gICAgcmV0dXJuIGVsXG59XG5leHBvcnQgeyBUb0RvLCBEb21FbGVtZW50cywgY3JlYXRlRG9tRWxlbWVudCwgY2FyZHNBcnIgfTsiLCJpbXBvcnQgeyBEb21FbGVtZW50cywgVG9EbywgY3JlYXRlRG9tRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZVwiO1xuaW1wb3J0IFNpbXBsZVBpY2tlciBmcm9tIFwic2ltcGxlcGlja2VyXCI7XG5cbmNvbnN0IHRhc2tBcnJheSA9IFtdO1xuXG5jb25zdCB0YXNrTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRG9tRWxlbWVudHMuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoRG9tRWxlbWVudHMudXNlcklucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eTtcbiAgICAgICAgICAgIERvbUVsZW1lbnRzLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICAgICAgICBpZiAocmFkaW8uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3Rpb24gPSByYWRpby5pZDtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IHNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHNlbGVjdGlvbi5zbGljZSgxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgICAgICAgfTtcbiAgICAgIFxuICAgICAgICAgIC8vIGNsb3NlIHBvcHVwIGFmdGVyIHN1Ym1pdFxuICAgICAgICAgIERvbUVsZW1lbnRzLnBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBEb21FbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBEb21FbGVtZW50cy5waWNrZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgXG4gICAgICAgICAgLy8gZm9ybWF0IER1ZSBEYXRlIGZvciBkaXNwbGF5XG4gICAgICAgICAgbGV0IGR1ZURhdGVBcnIgPSBEb21FbGVtZW50cy5kdWVEYXRlLmlubmVySFRNTC5zcGxpdChcIiBcIik7XG4gICAgICAgICAgbGV0IHVzYWJsZURhdGUgPSBgJHtkdWVEYXRlQXJyWzJdfSAke2R1ZURhdGVBcnJbMV19YDtcbiAgICAgICAgICBsZXQgdXNhYmxlVGltZSA9IGAke2R1ZURhdGVBcnJbNF19ICR7ZHVlRGF0ZUFycls1XX1gO1xuICAgICAgXG4gICAgICAgICAgbGV0IGNyZWF0ZVRvZG8gPSBuZXcgVG9EbyhcbiAgICAgICAgICAgIHVzZXJJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHVzYWJsZURhdGUsXG4gICAgICAgICAgICB1c2FibGVUaW1lLFxuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3Rpb24oKSxcbiAgICAgICAgICAgIERvbUVsZW1lbnRzLnRleHRBcmVhLnZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhEb21FbGVtZW50cy50ZXh0QXJlYS52YWx1ZSlcbiAgICAgICAgICB0YXNrQXJyYXkucHVzaChjcmVhdGVUb2RvKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICAgICAgXG4gICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gY2xvc2UgSWYgc3RhdGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xvc2UgZXZlbnQgTGlzdGVuZXJcbiAgICAgIH0pO1xufVxuXG5jb25zdCBjcmVhdGVCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICBEb21FbGVtZW50cy5jcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgRG9tRWxlbWVudHMucG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBEb21FbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLnVzZXJJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLnRleHRBcmVhLnZhbHVlID0gXCJcIjtcbiAgICAgICAgRG9tRWxlbWVudHMuZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLmR1ZURhdGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgRG9tRWxlbWVudHMucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xufVxuXG5jb25zdCBvdmVybGF5TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgRG9tRWxlbWVudHMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBEb21FbGVtZW50cy5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIERvbUVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBEb21FbGVtZW50cy5waWNrZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBEb21FbGVtZW50cy50YXNrSW5mb1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgRG9tRWxlbWVudHMudXNlcklucHV0LnZhbHVlID0gXCJcIjtcblxuICAgICAgfSk7XG59XG5cbmNvbnN0IGRhdGVCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICBEb21FbGVtZW50cy5kYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIERvbUVsZW1lbnRzLnBpY2tlckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGxldCBwaWNrZXIgPSBuZXcgU2ltcGxlUGlja2VyKHBpY2tlckRpdiwge1xuICAgICAgICAgIHpJbmRleDogMTAwNCxcbiAgICAgICAgfSk7XG4gICAgICAgIHBpY2tlci5vcGVuKCk7XG4gICAgICAgIHBpY2tlci5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZGF0ZSwgcmVhZGFibGVEYXRlKSB7XG4gICAgICAgICAgRG9tRWxlbWVudHMuZHVlRGF0ZS5pbm5lckhUTUwgPSBgRHVlOiAke3JlYWRhYmxlRGF0ZX1gO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xufVxuXG5jb25zdCBjYXJkQ29udGFpbmVyTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgbGV0IGNhcmRzQXJyID0gQXJyYXkuZnJvbShEb21FbGVtZW50cy5hbGxDYXJkQ29udGFpbmVycyk7XG4gICAgY2FyZHNBcnIuZm9yRWFjaChlID0+IHtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZighZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhc2tOYW1lQ2hlY2tcIikpe1xuICAgICAgICAgICAgICAgIERvbUVsZW1lbnRzLnRhc2tJbmZvUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgICAgIERvbUVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBEb21FbGVtZW50cy5ub3Rlc1BvcHVwLnZhbHVlID0gdGFza0FycmF5W2xvY2F0aW9uXS5ub3RlcztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXlbbG9jYXRpb25dLm5vdGVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgRG9tRWxlbWVudHMubm90ZXNQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tBcnJheVtsb2NhdGlvbl0ubm90ZXMgPSBEb21FbGVtZW50cy5ub3Rlc1BvcHVwLnZhbHVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0FycmF5W2xvY2F0aW9uXS5ub3RlcylcbiAgICAgICAgfSlcblxuICAgIH0pO1xufVxuXG5cblxuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNhcmRDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImNhcmRDb250YWluZXJcIixcbiAgICAgICAgXCJjYXJkQ29udGFpbmVyXCIsXG4gICAgICAgIGNvbnRlbnRcbiAgICAgICk7XG4gICAgICBjYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuICAgICAgRG9tRWxlbWVudHMudGFza05hbWVQb3B1cC5pbm5lclRleHQgPSB0YXNrQXJyYXlbaV0udGl0bGU7XG4gICAgICBcbiAgICAgIGNhcmRDb250YWluZXJMaXN0ZW5lcigpO1xuICAgIC8vICAgdGFza0FycmF5W2ldLm5vdGVzID0gRG9tRWxlbWVudHMubm90ZXNQb3B1cC52YWx1ZTtcblxuICBcbiAgICAgIGxldCB0b3BPZkNvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwidG9wT2ZDb250YWluZXJcIixcbiAgICAgICAgXCJ0b3BPZkNvbnRhaW5lclwiLFxuICAgICAgICBjYXJkQ29udGFpbmVyXG4gICAgICApO1xuICBcbiAgICAgIGxldCB0YXNrTmFtZUNoZWNrID0gY3JlYXRlRG9tRWxlbWVudChcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBcInRhc2tOYW1lQ2hlY2tcIixcbiAgICAgICAgXCJ0YXNrTmFtZUNoZWNrXCIsXG4gICAgICAgIHRvcE9mQ29udGFpbmVyXG4gICAgICApO1xuICAgICAgdGFza05hbWVDaGVjay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIFxuICAgICAgbGV0IHRhc2tOYW1lQ2hlY2tMYWJlbCA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgXCJ0YXNrTmFtZUNoZWNrTGFiZWxcIixcbiAgICAgICAgXCJ0YXNrTmFtZUNoZWNrTGFiZWxcIixcbiAgICAgICAgdG9wT2ZDb250YWluZXJcbiAgICAgICk7XG4gICAgICB0YXNrTmFtZUNoZWNrTGFiZWwuaW5uZXJIVE1MID0gdGFza0FycmF5W2ldLnRpdGxlO1xuICBcbiAgICAgIGxldCBib3R0b21PZkNvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiYm90dG9tT2ZDb250YWluZXJcIixcbiAgICAgICAgXCJib3R0b21PZkNvbnRhaW5lclwiLFxuICAgICAgICBjYXJkQ29udGFpbmVyXG4gICAgICApO1xuICBcbiAgICAgIGlmICh0YXNrQXJyYXlbaV0ucHJpb3JpdHkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCB0YXNrUHJpb3JpdHkgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIFwidGFza1ByaW9yaXR5XCIsXG4gICAgICAgICAgXCJ0YXNrUHJpb3JpdHlcIixcbiAgICAgICAgICBib3R0b21PZkNvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICB0YXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gYFByaW9yaXR5OiAke3Rhc2tBcnJheVtpXS5wcmlvcml0eX1gO1xuICBcbiAgICAgICAgaWYgKHRhc2tBcnJheVtpXS5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgICAgICAgdGFza1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2tBcnJheVtpXS5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgICAgdGFza1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgbGV0IHRhc2tEdWVEYXRlID0gY3JlYXRlRG9tRWxlbWVudChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIFwidGFza0R1ZURhdGVcIixcbiAgICAgICAgXCJ0YXNrRHVlRGF0ZVwiLFxuICAgICAgICBib3R0b21PZkNvbnRhaW5lclxuICAgICAgKTtcbiAgICAgIGlmICh0YXNrQXJyYXlbaV0uZGF0ZSAhPSBcInVuZGVmaW5lZCB1bmRlZmluZWRcIikge1xuICAgICAgICB0YXNrRHVlRGF0ZS5pbm5lckhUTUwgPSBgJHt0YXNrQXJyYXlbaV0uZGF0ZX0gfCAke3Rhc2tBcnJheVtpXS50aW1lfWA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRhc2tMaXN0ZW5lcigpO1xuICAgIGNyZWF0ZUJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgb3ZlcmxheUxpc3RlbmVyKCk7XG4gICAgZGF0ZUJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gICAgY2hlY2tib3hMaXN0ZW5lcigpO1xufVxuXG5cbmV4cG9ydCB7IGFkZExpc3RlbmVycyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRvRG8sIERvbUVsZW1lbnRzLCBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlXCI7XG5pbXBvcnQgU2ltcGxlUGlja2VyIGZyb20gXCJzaW1wbGVwaWNrZXJcIjtcbmltcG9ydCB7IGFkZExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5cblxuYWRkTGlzdGVuZXJzKCk7XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==