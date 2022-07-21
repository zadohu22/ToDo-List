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
    constructor(title, date, time, priority, number, notes){
        this.title = title;
        // this.list = list;
        this.notes = notes;
        this.priority = priority;
        this.number = number;
        this.date = date;
        this.time = time;
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
        checkbox: document.getElementById("taskNameCheck")
}


const createDomElement = (element, className, idName, appendTo) => {
    const el = document.createElement(element);
    el.classList.add(className);
    el.id = idName;
    appendTo.appendChild(el)
    return el
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



const taskArray = [];
console.log(taskArray[1]);

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
      prioritySelection()
    );
    taskArray.push(createTodo);
    console.log(taskArray);

    displayTasks();
    // close If statement
  }
  // close event Listener
});

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

_create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.addEventListener("click", () => {
  _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.popup.style.display = "none";
  _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.overlay.style.display = "none";
  _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.pickerDiv.style.display = "none";
  _create__WEBPACK_IMPORTED_MODULE_0__.DomElements.userInput.value = "";
});

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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksa0VBQTZCLFdBQVcsYUFBYTtBQUN6RCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4Qyx3QkFBd0IseURBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHlEQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qix5REFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qix5REFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qix5REFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qix5REFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxzQkFBc0I7O0FBRWxFO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix5REFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFtQixJQUFJLGtCQUFrQjtBQUMxRTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc2ltcGxlcGlja2VyL2Rpc3Qvc2ltcGxlcGlja2VyLm5vZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIGkobil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciByPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLGkpLHIubD0hMCxyLmV4cG9ydHN9cmV0dXJuIGkubT1lLGkuYz10LGkuZD1mdW5jdGlvbihlLHQsbil7aS5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om59KX0saS5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGkudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9aShlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKGkucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIHIgaW4gZSlpLmQobixyLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwscikpO3JldHVybiBufSxpLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIGkuZCh0LFwiYVwiLHQpLHR9LGkubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0saS5wPVwiXCIsaShpLnM9XCJUWVZmXCIpfSh7XCIwRHlWXCI6ZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0KXtlPVtdLmNvbmNhdChlKTtmb3IodmFyIGk9MDtpPHQ7aSsrKWVbaV09dm9pZCAwO3JldHVybiBlfWZ1bmN0aW9uIHIoZSl7dmFyIGk9bmV3IERhdGUoZS5nZXRUaW1lKCkpLHI9ZS5nZXRGdWxsWWVhcigpLHM9ZS5nZXRNb250aCgpLGE9e2RhdGU6aSxtb250aDp2b2lkIDB9O2lmKHQubW9udGhUcmFja2VyLmN1cnJlbnQ9bmV3IERhdGUoZS5nZXRUaW1lKCkpLHQubW9udGhUcmFja2VyLmN1cnJlbnQuc2V0RGF0ZSgxKSx0Lm1vbnRoVHJhY2tlci55ZWFyc1tyXT10Lm1vbnRoVHJhY2tlci55ZWFyc1tyXXx8e30sdm9pZCAwIT09dC5tb250aFRyYWNrZXIueWVhcnNbcl1bc10pcmV0dXJuIGEubW9udGg9dC5tb250aFRyYWNrZXIueWVhcnNbcl1bc10sYTsoZT1uZXcgRGF0ZShlLmdldFRpbWUoKSkpLnNldERhdGUoMSksdC5tb250aFRyYWNrZXIueWVhcnNbcl1bc109W107Zm9yKHZhciBvPXQubW9udGhUcmFja2VyLnllYXJzW3JdW3NdLGM9MDtlLmdldE1vbnRoKCk9PT1zOyl7dmFyIGw9ZS5nZXREYXRlKCkscD1lLmdldERheSgpOzE9PT1sJiYob1tjXT1uKFtdLHApKSxvW2NdPW9bY118fFtdLG9bY11bcF09bCw2PT09cCYmYysrLGUuc2V0RGF0ZShlLmdldERhdGUoKSsxKX12YXIgZD01O3ZvaWQgMD09PW9bNV0mJihkPTQsb1s1XT1uKFtdLDcpKTt2YXIgbT1vW2RdLmxlbmd0aDtpZihtPDcpe3ZhciBoPW9bZF0uY29uY2F0KG4oW10sNy1tKSk7b1tkXT1ofXJldHVybiBhLm1vbnRoPW8sYX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lm1vbnRoVHJhY2tlcj17eWVhcnM6e319LHQubW9udGhzPVtcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSx0LmRheXM9W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sdC5zY3JhcGVNb250aD1yLHQuc2NyYXBlUHJldmlvdXNNb250aD1mdW5jdGlvbigpe3ZhciBlPXQubW9udGhUcmFja2VyLmN1cnJlbnQ7aWYoIWUpdGhyb3cgRXJyb3IoXCJzY3JhcGVQcmV2b2lzTW9udGggY2FsbGVkIHdpdGhvdXQgc2V0dGluZyBtb250aFRyYWNrZXIuY3VycmVudCFcIik7cmV0dXJuIGUuc2V0TW9udGgoZS5nZXRNb250aCgpLTEpLHIoZSl9LHQuc2NyYXBlTmV4dE1vbnRoPWZ1bmN0aW9uKCl7dmFyIGU9dC5tb250aFRyYWNrZXIuY3VycmVudDtpZighZSl0aHJvdyBFcnJvcihcInNjcmFwZVByZXZvaXNNb250aCBjYWxsZWQgd2l0aG91dCBzZXR0aW5nIG1vbnRoVHJhY2tlci5jdXJyZW50IVwiKTtyZXR1cm4gZS5zZXRNb250aChlLmdldE1vbnRoKCkrMSkscihlKX07dmFyIHM9e3N0OlsxLDIxLDMxXSxuZDpbMiwyMl0scmQ6WzMsMjNdfTt0LmdldERpc3BsYXlEYXRlPWZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0RGF0ZSgpO3JldHVybi0xIT09cy5zdC5pbmRleE9mKHQpP3QrXCJzdFwiOi0xIT09cy5uZC5pbmRleE9mKHQpP3QrXCJuZFwiOi0xIT09cy5yZC5pbmRleE9mKHQpP3QrXCJyZFwiOnQrXCJ0aFwifSx0LmZvcm1hdFRpbWVGcm9tSW5wdXRFbGVtZW50PWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCIsaT1lLnNwbGl0KFwiOlwiKSxuPWlbMF0scj0obj0rbik+PTEyO3JldHVybiByJiZuPjEyJiYobi09MTIpLHJ8fDAhPT1ufHwobj0xMiksdCs9bjwxMD9cIjBcIituOm4sdCs9XCI6XCIraVsxXStcIiBcIix0Kz1yP1wiUE1cIjpcIkFNXCJ9fSxUWVZmOmZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1pKFwiMER5VlwiKSxyPWkoXCJodDZYXCIpLHM9W1wic3VibWl0XCIsXCJjbG9zZVwiXSxhPW5ldyBEYXRlLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dGhpcy5fdmFsaWRPbkxpc3RlbmVycz1zO3ZhciBpPXZvaWQgMCxuPXQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk7aWYobnVsbD09PXIpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzZWxlY3RvciBwYXNzZWQgdG8gU2ltcGxlUGlja2VyIVwiKTtpPXJ9ZWxzZSBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/aT1lOlwib2JqZWN0XCI9PXR5cGVvZiBlJiYobj1lKTtpfHwoaT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSksbnx8KG49e30pLHRoaXMuc2VsZWN0ZWREYXRlPW5ldyBEYXRlLHRoaXMuaW5qZWN0VGVtcGxhdGUoaSksdGhpcy5pbml0KGksbiksdGhpcy5pbml0TGlzdGVuZXJzKCksdGhpcy5fZXZlbnRIYW5kbGVycz17fX1yZXR1cm4gZS5wcm90b3R5cGUuaW5pdEVsTWV0aG9kPWZ1bmN0aW9uKGUpe3RoaXMuJD1mdW5jdGlvbih0KXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yKHQpfSx0aGlzLiQkPWZ1bmN0aW9uKHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3JBbGwodCl9fSxlLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGUsdCl7dGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlcj1lLnF1ZXJ5U2VsZWN0b3IoXCIuc2ltcGxlcGlja2VyLXdyYXBwZXJcIiksdGhpcy5pbml0RWxNZXRob2QodGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlcik7dmFyIGk9dGhpcy4kLHI9dGhpcy4kJDt0aGlzLiRzaW1wbGVwaWNrZXI9aShcIi5zaW1waWxlcGlja2VyLWRhdGUtcGlja2VyXCIpLHRoaXMuJHRycz1yKFwiLnNpbXBsZXBpY2tlci1jYWxlbmRlciB0Ym9keSB0clwiKSx0aGlzLiR0ZHM9cihcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXIgdGJvZHkgdGRcIiksdGhpcy4kaGVhZGVyTW9udGhBbmRZZWFyPWkoXCIuc2ltcGxlcGlja2VyLW1vbnRoLWFuZC15ZWFyXCIpLHRoaXMuJG1vbnRoQW5kWWVhcj1pKFwiLnNpbXBsZXBpY2tlci1zZWxlY3RlZC1kYXRlXCIpLHRoaXMuJGRhdGU9aShcIi5zaW1wbGVwaWNrZXItZGF0ZVwiKSx0aGlzLiRkYXk9aShcIi5zaW1wbGVwaWNrZXItZGF5LWhlYWRlclwiKSx0aGlzLiR0aW1lPWkoXCIuc2ltcGxlcGlja2VyLXRpbWVcIiksdGhpcy4kdGltZUlucHV0PWkoXCIuc2ltcGxlcGlja2VyLXRpbWUtc2VjdGlvbiBpbnB1dFwiKSx0aGlzLiR0aW1lU2VjdGlvbkljb249aShcIi5zaW1wbGVwaWNrZXItaWNvbi10aW1lXCIpLHRoaXMuJGNhbmNlbD1pKFwiLnNpbXBsZXBpY2tlci1jYW5jZWwtYnRuXCIpLHRoaXMuJG9rPWkoXCIuc2ltcGxlcGlja2VyLW9rLWJ0blwiKSx0aGlzLiRkaXNwbGF5RGF0ZUVsZW1lbnRzPVt0aGlzLiRkYXksdGhpcy4kaGVhZGVyTW9udGhBbmRZZWFyLHRoaXMuJGRhdGVdLHRoaXMuJHRpbWUuY2xhc3NMaXN0LmFkZChcInNpbXBsZXBpY2tlci1mYWRlXCIpLHRoaXMucmVuZGVyKG4uc2NyYXBlTW9udGgoYSkpLHQ9dHx8e30sdGhpcy5vcHRzPXQsdGhpcy5yZXNldCh0LnNlbGVjdGVkRGF0ZXx8YSksdm9pZCAwIT09dC56SW5kZXgmJih0aGlzLiRzaW1wbGVwaWNrZXJXcmFwcGVyLnN0eWxlLnpJbmRleD10LnpJbmRleC50b1N0cmluZygpKSx0LmRpc2FibGVUaW1lU2VjdGlvbiYmdGhpcy5kaXNhYmxlVGltZVNlY3Rpb24oKSx0LmNvbXBhY3RNb2RlJiZ0aGlzLmNvbXBhY3RNb2RlKCl9LGUucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKGUpe3ZhciB0PWV8fG5ldyBEYXRlO3RoaXMucmVuZGVyKG4uc2NyYXBlTW9udGgodCkpO3ZhciBpPXQudG9UaW1lU3RyaW5nKCkuc3BsaXQoXCIgXCIpWzBdLnJlcGxhY2UoL1xcOlxcZFxcZCQvLFwiXCIpO3RoaXMuJHRpbWVJbnB1dC52YWx1ZT1pLHRoaXMuJHRpbWUuaW5uZXJUZXh0PW4uZm9ybWF0VGltZUZyb21JbnB1dEVsZW1lbnQoaSk7dmFyIHI9dC5nZXREYXRlKCkudG9TdHJpbmcoKSxzPXRoaXMuZmluZEVsZW1lbnRXaXRoRGF0ZShyKTtzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKXx8KHRoaXMuc2VsZWN0RGF0ZUVsZW1lbnQocyksdGhpcy51cGRhdGVEYXRlQ29tcG9uZW50cyh0KSl9LGUucHJvdG90eXBlLmNvbXBhY3RNb2RlPWZ1bmN0aW9uKCl7dGhpcy4kZGF0ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwifSxlLnByb3RvdHlwZS5kaXNhYmxlVGltZVNlY3Rpb249ZnVuY3Rpb24oKXt0aGlzLiR0aW1lU2VjdGlvbkljb24uc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwifSxlLnByb3RvdHlwZS5lbmFibGVUaW1lU2VjdGlvbj1mdW5jdGlvbigpe3RoaXMuJHRpbWVTZWN0aW9uSWNvbi5zdHlsZS52aXNpYmlsaXR5PVwidmlzaWJsZVwifSxlLnByb3RvdHlwZS5pbmplY3RUZW1wbGF0ZT1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7dC5pbm5lckhUTUw9ci5odG1sVGVtcGxhdGUsZS5hcHBlbmRDaGlsZCh0LmNvbnRlbnQuY2xvbmVOb2RlKCEwKSl9LGUucHJvdG90eXBlLmNsZWFyUm93cz1mdW5jdGlvbigpe3RoaXMuJHRkcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiXCIsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpfSl9LGUucHJvdG90eXBlLnVwZGF0ZURhdGVDb21wb25lbnRzPWZ1bmN0aW9uKGUpe3ZhciB0PW4uZGF5c1tlLmdldERheSgpXSxpPW4ubW9udGhzW2UuZ2V0TW9udGgoKV0rXCIgXCIrZS5nZXRGdWxsWWVhcigpO3RoaXMuJGhlYWRlck1vbnRoQW5kWWVhci5pbm5lckhUTUw9aSx0aGlzLiRtb250aEFuZFllYXIuaW5uZXJIVE1MPWksdGhpcy4kZGF5LmlubmVySFRNTD10LHRoaXMuJGRhdGUuaW5uZXJIVE1MPW4uZ2V0RGlzcGxheURhdGUoZSl9LGUucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLiQkLGk9dGhpcy4kdHJzLG49ZS5tb250aCxyPWUuZGF0ZTt0aGlzLmNsZWFyUm93cygpLG4uZm9yRWFjaChmdW5jdGlvbihlLHQpe3ZhciBuPWlbdF0uY2hpbGRyZW47ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIGk9blt0XTtlPyhpLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtZW1wdHlcIiksaS5pbm5lckhUTUw9ZSk6aS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVtcHR5XCIsXCJcIil9KX0pO3ZhciBzPXQoXCJ0YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkXCIpLGE9ITA7cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuZGF0YXNldC5lbXB0eSYmKGE9ITEpfSk7dmFyIG89c1swXS5wYXJlbnRFbGVtZW50O28uc3R5bGUuZGlzcGxheT1hJiZvP1wibm9uZVwiOlwidGFibGUtcm93XCIsdGhpcy51cGRhdGVEYXRlQ29tcG9uZW50cyhyKX0sZS5wcm90b3R5cGUudXBkYXRlU2VsZWN0ZWREYXRlPWZ1bmN0aW9uKGUpe3ZhciB0LGk9dGhpcy4kbW9udGhBbmRZZWFyLHI9dGhpcy4kdGltZTt0aGlzLiRkYXRlO3Q9ZT9lLmlubmVySFRNTC50cmltKCk6dGhpcy4kZGF0ZS5pbm5lckhUTUwucmVwbGFjZSgvW2Etel0rLyxcIlwiKTt2YXIgcz1pLmlubmVySFRNTC5zcGxpdChcIiBcIiksYT1zWzBdLG89c1sxXSxjPW4ubW9udGhzLmluZGV4T2YoYSksbD1yLmlubmVySFRNTC5zcGxpdChcIjpcIikscD0rbFswXSxkPWxbMV0uc3BsaXQoXCIgXCIpLG09ZFswXSxoPWRbMV07XCJBTVwiPT09aCYmMTI9PXAmJihwPTApLFwiUE1cIj09PWgmJnA8MTImJihwKz0xMik7dmFyIHU9bmV3IERhdGUoK28sK2MsK3QsK3AsK20pO3RoaXMuc2VsZWN0ZWREYXRlPXU7dmFyIHY9dCtcIiBcIjt2Kz1pLmlubmVySFRNTC50cmltKCkrXCIgXCIsdis9ci5pbm5lckhUTUwudHJpbSgpLHRoaXMucmVhZGFibGVEYXRlPXYucmVwbGFjZSgvXlxcZCsvLHUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpfSxlLnByb3RvdHlwZS5zZWxlY3REYXRlRWxlbWVudD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLiQoXCIuc2ltcGxlcGlja2VyLWNhbGVuZGVyIHRib2R5IC5hY3RpdmVcIik7ZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLHQmJnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSx0aGlzLnVwZGF0ZVNlbGVjdGVkRGF0ZShlKSx0aGlzLnVwZGF0ZURhdGVDb21wb25lbnRzKHRoaXMuc2VsZWN0ZWREYXRlKX0sZS5wcm90b3R5cGUuZmluZEVsZW1lbnRXaXRoRGF0ZT1mdW5jdGlvbihlLHQpe3ZhciBpLG47cmV0dXJuIHZvaWQgMD09PXQmJih0PSExKSx0aGlzLiR0ZHMuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgcj10LmlubmVySFRNTC50cmltKCk7cj09PWUmJihpPXQpLFwiXCIhPT1yJiYobj10KX0pLHZvaWQgMD09PWkmJnQmJihpPW4pLGl9LGUucHJvdG90eXBlLmhhbmRsZUljb25CdXR0b25DbGljaz1mdW5jdGlvbihlKXt2YXIgdCxpPXRoaXMuJDtpZihlLmNsYXNzTGlzdC5jb250YWlucyhcInNpbXBsZXBpY2tlci1pY29uLWNhbGVuZGVyXCIpKXt2YXIgcj1pKFwiLnNpbXBsZXBpY2tlci1pY29uLXRpbWVcIikscz1pKFwiLnNpbXBsZXBpY2tlci10aW1lLXNlY3Rpb25cIik7cmV0dXJuKG89aShcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXItc2VjdGlvblwiKSkuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIscy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSxlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIiksdm9pZCB0aGlzLnRvb2dsZURpc3BsYXlGYWRlKCl9aWYoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW1wbGVwaWNrZXItaWNvbi10aW1lXCIpKXt2YXIgYT1pKFwiLnNpbXBsZXBpY2tlci1pY29uLWNhbGVuZGVyXCIpLG89aShcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXItc2VjdGlvblwiKTtyZXR1cm4ocz1pKFwiLnNpbXBsZXBpY2tlci10aW1lLXNlY3Rpb25cIikpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLG8uc3R5bGUuZGlzcGxheT1cIm5vbmVcIixhLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIiksZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLHZvaWQgdGhpcy50b29nbGVEaXNwbGF5RmFkZSgpfXZhciBjPWkoXCIuc2ltcGxlcGlja2VyLWNhbGVuZGVyIHRkLmFjdGl2ZVwiKTtpZihjJiYodD1jLmlubmVySFRNTC50cmltKCkpLGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2ltcGxlcGlja2VyLWljb24tbmV4dFwiKSYmdGhpcy5yZW5kZXIobi5zY3JhcGVOZXh0TW9udGgoKSksZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW1wbGVwaWNrZXItaWNvbi1wcmV2aW91c1wiKSYmdGhpcy5yZW5kZXIobi5zY3JhcGVQcmV2aW91c01vbnRoKCkpLHQpe3ZhciBsPXRoaXMuZmluZEVsZW1lbnRXaXRoRGF0ZSh0LCEwKTt0aGlzLnNlbGVjdERhdGVFbGVtZW50KGwpfX0sZS5wcm90b3R5cGUuaW5pdExpc3RlbmVycz1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRzaW1wbGVwaWNrZXIsaT1lLiR0aW1lSW5wdXQscj1lLiRvayxzPWUuJGNhbmNlbCxhPWUuJHNpbXBsZXBpY2tlcldyYXBwZXIsbz10aGlzO2Z1bmN0aW9uIGMoKXtvLmNsb3NlKCksby5jYWxsRXZlbnQoXCJjbG9zZVwiLGZ1bmN0aW9uKGUpe2UoKX0pfXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQsaT10LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtlLnN0b3BQcm9wYWdhdGlvbigpLFwidGRcIiE9PWk/XCJidXR0b25cIj09PWkmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2ltcGxlcGlja2VyLWljb25cIikmJm8uaGFuZGxlSWNvbkJ1dHRvbkNsaWNrKHQpOm8uc2VsZWN0RGF0ZUVsZW1lbnQodCl9KSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGUpe2lmKFwiXCIhPT1lLnRhcmdldC52YWx1ZSl7dmFyIHQ9bi5mb3JtYXRUaW1lRnJvbUlucHV0RWxlbWVudChlLnRhcmdldC52YWx1ZSk7by4kdGltZS5pbm5lckhUTUw9dCxvLnVwZGF0ZVNlbGVjdGVkRGF0ZSgpfX0pLHIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtvLmNsb3NlKCksby5jYWxsRXZlbnQoXCJzdWJtaXRcIixmdW5jdGlvbihlKXtlKG8uc2VsZWN0ZWREYXRlLG8ucmVhZGFibGVEYXRlKX0pfSkscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGMpfSxlLnByb3RvdHlwZS5jYWxsRXZlbnQ9ZnVuY3Rpb24oZSx0KXsodGhpcy5fZXZlbnRIYW5kbGVyc1tlXXx8W10pLmZvckVhY2goZnVuY3Rpb24oZSl7dChlKX0pfSxlLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7dGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpfSxlLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuJHNpbXBsZXBpY2tlcldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKX0sZS5wcm90b3R5cGUub249ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLl92YWxpZE9uTGlzdGVuZXJzLG49dGhpcy5fZXZlbnRIYW5kbGVycztpZighaS5pbmNsdWRlcyhlKSl0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSB2YWxpZCBldmVudCFcIik7bltlXT1uW2VdfHxbXSxuW2VdLnB1c2godCl9LGUucHJvdG90eXBlLnRvb2dsZURpc3BsYXlGYWRlPWZ1bmN0aW9uKCl7dGhpcy4kdGltZS5jbGFzc0xpc3QudG9nZ2xlKFwic2ltcGxlcGlja2VyLWZhZGVcIiksdGhpcy4kZGlzcGxheURhdGVFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuY2xhc3NMaXN0LnRvZ2dsZShcInNpbXBsZXBpY2tlci1mYWRlXCIpfSl9LGV9KCk7ZS5leHBvcnRzPW99LGh0Nlg6ZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuaHRtbFRlbXBsYXRlPSdcXG48ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXdyYXBwZXJcIj5cXG4gIDxkaXYgY2xhc3M9XCJzaW1waWxlcGlja2VyLWRhdGUtcGlja2VyXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItZGF5LWhlYWRlclwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItZGF0ZS1zZWN0aW9uXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLW1vbnRoLWFuZC15ZWFyXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWRhdGVcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItc2VsZWN0LXBhbmVcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpbXBsZXBpY2tlci1pY29uIHNpbXBsZXBpY2tlci1pY29uLWNhbGVuZGVyIGFjdGl2ZVwiIHRpdGxlPVwiU2VsZWN0IGRhdGUgZnJvbSBjYWxlbmRlciFcIj48L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci10aW1lXCI+MTI6MDAgUE08L2Rpdj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpbXBsZXBpY2tlci1pY29uIHNpbXBsZXBpY2tlci1pY29uLXRpbWVcIiB0aXRsZT1cIlNlbGVjdCB0aW1lXCI+PC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXBpY2tlci1zZWN0aW9uXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWNhbGVuZGVyLXNlY3Rpb25cIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1tb250aC1zd2l0Y2hlciBzaW1wbGVwaWNrZXItc2VsZWN0LXBhbmVcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWljb24gc2ltcGxlcGlja2VyLWljb24tcHJldmlvdXNcIj48L2J1dHRvbj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXNlbGVjdGVkLWRhdGVcIj48L2Rpdj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWljb24gc2ltcGxlcGlja2VyLWljb24tbmV4dFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1jYWxlbmRlclwiPlxcbiAgICAgICAgICAgIDx0YWJsZT5cXG4gICAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgPHRyPjx0aD5TdW48L3RoPjx0aD5Nb248L3RoPjx0aD5UdWU8L3RoPjx0aD5XZWQ8L3RoPjx0aD5UaHU8L3RoPjx0aD5Gcmk8L3RoPjx0aD5TYXQ8L3RoPjwvdHI+XFxuICAgICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAnK2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciBpPVwiXCIsbj0xO248PXQ7bisrKWkrPWU7cmV0dXJuIGl9KFwiPHRyPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjwvdHI+XCIsNikrJ1xcbiAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci10aW1lLXNlY3Rpb25cIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgdmFsdWU9XCIxMjowMFwiIGF1dG9mb2N1cz1cImZhbHNlXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWJvdHRvbS1wYXJ0XCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWNhbmNlbC1idG4gc2ltcGxlcGlja2VyLWJ0blwiIHRpdGxlPVwiQ2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLW9rLWJ0biBzaW1wbGVwaWNrZXItYnRuXCIgdGl0bGU9XCJPS1wiPk9LPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG4nfX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2ltcGxlcGlja2VyLm5vZGUuanMubWFwIiwiY2xhc3MgVG9Eb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZSwgdGltZSwgcHJpb3JpdHksIG51bWJlciwgbm90ZXMpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIC8vIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBcbn1cblxuY29uc3QgRG9tRWxlbWVudHMgPSB7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGROZXdUb0RvXCIpLFxuICAgICAgICBwb3B1cDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUb0RvUG9wdXBcIiksXG4gICAgICAgIG92ZXJsYXk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxhY2tPdmVybGF5XCIpLFxuICAgICAgICBhZGRUYXNrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFBvcHVwXCIpLFxuICAgICAgICB1c2VySW5wdXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklucHV0XCIpLFxuICAgICAgICBkYXRlQnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVCdXR0b25cIiksXG4gICAgICAgIGRhdGVDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUNvbnRhaW5lclwiKSxcbiAgICAgICAgcGlja2VyRGl2OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpY2tlckRpdlwiKSxcbiAgICAgICAgZHVlRGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLFxuICAgICAgICB0ZXh0QXJlYTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0QXJlYVwiKSxcbiAgICAgICAgcmFkaW9zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKSxcbiAgICAgICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLFxuICAgICAgICBjYXJkQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZENvbnRhaW5lcicpLFxuICAgICAgICBjaGVja2JveDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTmFtZUNoZWNrXCIpXG59XG5cblxuY29uc3QgY3JlYXRlRG9tRWxlbWVudCA9IChlbGVtZW50LCBjbGFzc05hbWUsIGlkTmFtZSwgYXBwZW5kVG8pID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsLmlkID0gaWROYW1lO1xuICAgIGFwcGVuZFRvLmFwcGVuZENoaWxkKGVsKVxuICAgIHJldHVybiBlbFxufVxuZXhwb3J0IHsgVG9EbywgRG9tRWxlbWVudHMsIGNyZWF0ZURvbUVsZW1lbnQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVG9EbywgRG9tRWxlbWVudHMsIGNyZWF0ZURvbUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVcIjtcbmltcG9ydCBTaW1wbGVQaWNrZXIgZnJvbSBcInNpbXBsZXBpY2tlclwiO1xuXG5jb25zdCB0YXNrQXJyYXkgPSBbXTtcbmNvbnNvbGUubG9nKHRhc2tBcnJheVsxXSk7XG5cbkRvbUVsZW1lbnRzLmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKERvbUVsZW1lbnRzLnVzZXJJbnB1dC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICBsZXQgcHJpb3JpdHk7XG4gICAgICBEb21FbGVtZW50cy5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgICBsZXQgc2VsZWN0aW9uID0gcmFkaW8uaWQ7XG4gICAgICAgICAgcHJpb3JpdHkgPSBzZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzZWxlY3Rpb24uc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgIH07XG5cbiAgICAvLyBjbG9zZSBwb3B1cCBhZnRlciBzdWJtaXRcbiAgICBEb21FbGVtZW50cy5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgRG9tRWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgRG9tRWxlbWVudHMucGlja2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIC8vIGZvcm1hdCBEdWUgRGF0ZSBmb3IgZGlzcGxheVxuICAgIGxldCBkdWVEYXRlQXJyID0gRG9tRWxlbWVudHMuZHVlRGF0ZS5pbm5lckhUTUwuc3BsaXQoXCIgXCIpO1xuICAgIGxldCB1c2FibGVEYXRlID0gYCR7ZHVlRGF0ZUFyclsyXX0gJHtkdWVEYXRlQXJyWzFdfWA7XG4gICAgbGV0IHVzYWJsZVRpbWUgPSBgJHtkdWVEYXRlQXJyWzRdfSAke2R1ZURhdGVBcnJbNV19YDtcblxuICAgIGxldCBjcmVhdGVUb2RvID0gbmV3IFRvRG8oXG4gICAgICB1c2VySW5wdXQudmFsdWUsXG4gICAgICB1c2FibGVEYXRlLFxuICAgICAgdXNhYmxlVGltZSxcbiAgICAgIHByaW9yaXR5U2VsZWN0aW9uKClcbiAgICApO1xuICAgIHRhc2tBcnJheS5wdXNoKGNyZWF0ZVRvZG8pO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG5cbiAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAvLyBjbG9zZSBJZiBzdGF0ZW1lbnRcbiAgfVxuICAvLyBjbG9zZSBldmVudCBMaXN0ZW5lclxufSk7XG5cbkRvbUVsZW1lbnRzLmNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBEb21FbGVtZW50cy5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIERvbUVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgRG9tRWxlbWVudHMudXNlcklucHV0LnZhbHVlID0gXCJcIjtcbiAgRG9tRWxlbWVudHMudGV4dEFyZWEudmFsdWUgPSBcIlwiO1xuICBEb21FbGVtZW50cy5kdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgRG9tRWxlbWVudHMuZHVlRGF0ZS5pbm5lckhUTUwgPSBcIlwiO1xuICBEb21FbGVtZW50cy5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICByYWRpby5jaGVja2VkID0gZmFsc2U7XG4gIH0pO1xufSk7XG5cbkRvbUVsZW1lbnRzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgRG9tRWxlbWVudHMucG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBEb21FbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgRG9tRWxlbWVudHMucGlja2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgRG9tRWxlbWVudHMudXNlcklucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG5Eb21FbGVtZW50cy5kYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIERvbUVsZW1lbnRzLnBpY2tlckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGxldCBwaWNrZXIgPSBuZXcgU2ltcGxlUGlja2VyKHBpY2tlckRpdiwge1xuICAgIHpJbmRleDogMTAwNCxcbiAgfSk7XG4gIHBpY2tlci5vcGVuKCk7XG4gIHBpY2tlci5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZGF0ZSwgcmVhZGFibGVEYXRlKSB7XG4gICAgRG9tRWxlbWVudHMuZHVlRGF0ZS5pbm5lckhUTUwgPSBgRHVlOiAke3JlYWRhYmxlRGF0ZX1gO1xuICB9KTtcbn0pO1xuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG59XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjYXJkQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcImNhcmRDb250YWluZXJcIixcbiAgICAgIFwiY2FyZENvbnRhaW5lclwiLFxuICAgICAgY29udGVudFxuICAgICk7XG5cbiAgICBsZXQgdG9wT2ZDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwidG9wT2ZDb250YWluZXJcIixcbiAgICAgIFwidG9wT2ZDb250YWluZXJcIixcbiAgICAgIGNhcmRDb250YWluZXJcbiAgICApO1xuXG4gICAgbGV0IHRhc2tOYW1lQ2hlY2sgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgXCJpbnB1dFwiLFxuICAgICAgXCJ0YXNrTmFtZUNoZWNrXCIsXG4gICAgICBcInRhc2tOYW1lQ2hlY2tcIixcbiAgICAgIHRvcE9mQ29udGFpbmVyXG4gICAgKTtcbiAgICB0YXNrTmFtZUNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcblxuICAgIGxldCB0YXNrTmFtZUNoZWNrTGFiZWwgPSBjcmVhdGVEb21FbGVtZW50KFxuICAgICAgXCJsYWJlbFwiLFxuICAgICAgXCJ0YXNrTmFtZUNoZWNrTGFiZWxcIixcbiAgICAgIFwidGFza05hbWVDaGVja0xhYmVsXCIsXG4gICAgICB0b3BPZkNvbnRhaW5lclxuICAgICk7XG4gICAgdGFza05hbWVDaGVja0xhYmVsLmlubmVySFRNTCA9IHRhc2tBcnJheVtpXS50aXRsZTtcblxuICAgIGxldCBib3R0b21PZkNvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJib3R0b21PZkNvbnRhaW5lclwiLFxuICAgICAgXCJib3R0b21PZkNvbnRhaW5lclwiLFxuICAgICAgY2FyZENvbnRhaW5lclxuICAgICk7XG5cbiAgICBpZiAodGFza0FycmF5W2ldLnByaW9yaXR5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICAgIFwicFwiLFxuICAgICAgICBcInRhc2tQcmlvcml0eVwiLFxuICAgICAgICBcInRhc2tQcmlvcml0eVwiLFxuICAgICAgICBib3R0b21PZkNvbnRhaW5lclxuICAgICAgKTtcbiAgICAgIHRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBgUHJpb3JpdHk6ICR7dGFza0FycmF5W2ldLnByaW9yaXR5fWA7XG5cbiAgICAgIGlmICh0YXNrQXJyYXlbaV0ucHJpb3JpdHkgPT0gXCJMb3dcIikge1xuICAgICAgICB0YXNrUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICB9IGVsc2UgaWYgKHRhc2tBcnJheVtpXS5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgIHRhc2tQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0YXNrRHVlRGF0ZSA9IGNyZWF0ZURvbUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFwidGFza0R1ZURhdGVcIixcbiAgICAgIFwidGFza0R1ZURhdGVcIixcbiAgICAgIGJvdHRvbU9mQ29udGFpbmVyXG4gICAgKTtcbiAgICBpZiAodGFza0FycmF5W2ldLmRhdGUgIT0gXCJ1bmRlZmluZWQgdW5kZWZpbmVkXCIpIHtcbiAgICAgIHRhc2tEdWVEYXRlLmlubmVySFRNTCA9IGAke3Rhc2tBcnJheVtpXS5kYXRlfSB8ICR7dGFza0FycmF5W2ldLnRpbWV9YDtcbiAgICB9XG4gIH1cbn07XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9