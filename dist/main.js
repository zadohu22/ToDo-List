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
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
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
let i = 0;

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

// *********** BEGIN ADD TASK LISTENER ************** //
// *********** BEGIN ADD TASK LISTENER ************** //
// *********** BEGIN ADD TASK LISTENER ************** //


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


  
      // **** increment (i) for use in checkbox label logic, and remove logic *****
      i++;
      console.log(i)



      // ****** format usable date/time ******
      let dueDateArr = dueDate.innerHTML.split(" ");
      let usableDate = `${dueDateArr[2]} ${dueDateArr[1]}`;
      let usableTime = `${dueDateArr[4]} ${dueDateArr[5]}`;


  
      // *** create TODO object ***
      let createTodo = new _create__WEBPACK_IMPORTED_MODULE_0__.ToDo(userInput.value, usableDate, usableTime, prioritySelection(), `${i}`);
      console.log(createTodo)

  
      // *** create DOM things ***
      let cardContainer = document.createElement('div');
      cardContainer.id="cardContainer";
      cardContainer.classList.add("cardContainer");
      content.appendChild(cardContainer);


  
      // ***** Top Of Container *****
      let topOfContainer = document.createElement('div');
      topOfContainer.classList.add("topOfContainer");
      cardContainer.appendChild(topOfContainer);

      

      // ************  CheckBox  ******************//

      let taskNameCheck = document.createElement('input');
      taskNameCheck.setAttribute("type", "checkbox");
      taskNameCheck.setAttribute("name", "taskNameCheck");
      taskNameCheck.id = `taskNameCheck${i}`;
      topOfContainer.appendChild(taskNameCheck);


      
      // ************* Task Name ******************* //
      let taskNameCheckLabel = document.createElement("label");
      // taskNameCheckLabel.setAttribute("for", `taskNameCheck${i}`);
      taskNameCheckLabel.classList.add("taskName");
      taskNameCheckLabel.id = "taskName";
      taskNameCheckLabel.innerHTML = createTodo.title;
      topOfContainer.appendChild(taskNameCheckLabel);


  
      // ***** Bottom Of Container ***** //
      let bottomOfContainer = document.createElement("div");
      bottomOfContainer.classList.add("bottomOfContainer");
      cardContainer.appendChild(bottomOfContainer);


      
      // ************* Priority Text && Color Logic *************** //
      if (createTodo.priority != undefined){
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
      }

    // *************** Display Formatted Due Date ****************** //
  
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

 // ************** END ADD TASK LISTENER **************** //
  // ************** END ADD TASK LISTENER **************** //
   // ************** END ADD TASK LISTENER **************** //




overlay.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
    pickerDiv.style.display = "none";
    userInput.value = "";
  });

dateButton.addEventListener("click", () => {
    pickerDiv.style.display = "flex";
    let picker = new (simplepicker__WEBPACK_IMPORTED_MODULE_1___default())(pickerDiv, {
      zIndex: 1004,
    });
    picker.open();
    picker.on('submit', function(date, readableDate){
      dueDate.innerHTML = `Due: ${readableDate}`;
    })
  });




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHFCQUFxQixxREFBWTtBQUNqQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0MsS0FBSztBQUNMLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc2ltcGxlcGlja2VyL2Rpc3Qvc2ltcGxlcGlja2VyLm5vZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIGkobil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciByPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLGkpLHIubD0hMCxyLmV4cG9ydHN9cmV0dXJuIGkubT1lLGkuYz10LGkuZD1mdW5jdGlvbihlLHQsbil7aS5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om59KX0saS5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGkudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9aShlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKGkucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIHIgaW4gZSlpLmQobixyLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwscikpO3JldHVybiBufSxpLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIGkuZCh0LFwiYVwiLHQpLHR9LGkubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0saS5wPVwiXCIsaShpLnM9XCJUWVZmXCIpfSh7XCIwRHlWXCI6ZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0KXtlPVtdLmNvbmNhdChlKTtmb3IodmFyIGk9MDtpPHQ7aSsrKWVbaV09dm9pZCAwO3JldHVybiBlfWZ1bmN0aW9uIHIoZSl7dmFyIGk9bmV3IERhdGUoZS5nZXRUaW1lKCkpLHI9ZS5nZXRGdWxsWWVhcigpLHM9ZS5nZXRNb250aCgpLGE9e2RhdGU6aSxtb250aDp2b2lkIDB9O2lmKHQubW9udGhUcmFja2VyLmN1cnJlbnQ9bmV3IERhdGUoZS5nZXRUaW1lKCkpLHQubW9udGhUcmFja2VyLmN1cnJlbnQuc2V0RGF0ZSgxKSx0Lm1vbnRoVHJhY2tlci55ZWFyc1tyXT10Lm1vbnRoVHJhY2tlci55ZWFyc1tyXXx8e30sdm9pZCAwIT09dC5tb250aFRyYWNrZXIueWVhcnNbcl1bc10pcmV0dXJuIGEubW9udGg9dC5tb250aFRyYWNrZXIueWVhcnNbcl1bc10sYTsoZT1uZXcgRGF0ZShlLmdldFRpbWUoKSkpLnNldERhdGUoMSksdC5tb250aFRyYWNrZXIueWVhcnNbcl1bc109W107Zm9yKHZhciBvPXQubW9udGhUcmFja2VyLnllYXJzW3JdW3NdLGM9MDtlLmdldE1vbnRoKCk9PT1zOyl7dmFyIGw9ZS5nZXREYXRlKCkscD1lLmdldERheSgpOzE9PT1sJiYob1tjXT1uKFtdLHApKSxvW2NdPW9bY118fFtdLG9bY11bcF09bCw2PT09cCYmYysrLGUuc2V0RGF0ZShlLmdldERhdGUoKSsxKX12YXIgZD01O3ZvaWQgMD09PW9bNV0mJihkPTQsb1s1XT1uKFtdLDcpKTt2YXIgbT1vW2RdLmxlbmd0aDtpZihtPDcpe3ZhciBoPW9bZF0uY29uY2F0KG4oW10sNy1tKSk7b1tkXT1ofXJldHVybiBhLm1vbnRoPW8sYX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lm1vbnRoVHJhY2tlcj17eWVhcnM6e319LHQubW9udGhzPVtcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSx0LmRheXM9W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sdC5zY3JhcGVNb250aD1yLHQuc2NyYXBlUHJldmlvdXNNb250aD1mdW5jdGlvbigpe3ZhciBlPXQubW9udGhUcmFja2VyLmN1cnJlbnQ7aWYoIWUpdGhyb3cgRXJyb3IoXCJzY3JhcGVQcmV2b2lzTW9udGggY2FsbGVkIHdpdGhvdXQgc2V0dGluZyBtb250aFRyYWNrZXIuY3VycmVudCFcIik7cmV0dXJuIGUuc2V0TW9udGgoZS5nZXRNb250aCgpLTEpLHIoZSl9LHQuc2NyYXBlTmV4dE1vbnRoPWZ1bmN0aW9uKCl7dmFyIGU9dC5tb250aFRyYWNrZXIuY3VycmVudDtpZighZSl0aHJvdyBFcnJvcihcInNjcmFwZVByZXZvaXNNb250aCBjYWxsZWQgd2l0aG91dCBzZXR0aW5nIG1vbnRoVHJhY2tlci5jdXJyZW50IVwiKTtyZXR1cm4gZS5zZXRNb250aChlLmdldE1vbnRoKCkrMSkscihlKX07dmFyIHM9e3N0OlsxLDIxLDMxXSxuZDpbMiwyMl0scmQ6WzMsMjNdfTt0LmdldERpc3BsYXlEYXRlPWZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0RGF0ZSgpO3JldHVybi0xIT09cy5zdC5pbmRleE9mKHQpP3QrXCJzdFwiOi0xIT09cy5uZC5pbmRleE9mKHQpP3QrXCJuZFwiOi0xIT09cy5yZC5pbmRleE9mKHQpP3QrXCJyZFwiOnQrXCJ0aFwifSx0LmZvcm1hdFRpbWVGcm9tSW5wdXRFbGVtZW50PWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCIsaT1lLnNwbGl0KFwiOlwiKSxuPWlbMF0scj0obj0rbik+PTEyO3JldHVybiByJiZuPjEyJiYobi09MTIpLHJ8fDAhPT1ufHwobj0xMiksdCs9bjwxMD9cIjBcIituOm4sdCs9XCI6XCIraVsxXStcIiBcIix0Kz1yP1wiUE1cIjpcIkFNXCJ9fSxUWVZmOmZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1pKFwiMER5VlwiKSxyPWkoXCJodDZYXCIpLHM9W1wic3VibWl0XCIsXCJjbG9zZVwiXSxhPW5ldyBEYXRlLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dGhpcy5fdmFsaWRPbkxpc3RlbmVycz1zO3ZhciBpPXZvaWQgMCxuPXQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk7aWYobnVsbD09PXIpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzZWxlY3RvciBwYXNzZWQgdG8gU2ltcGxlUGlja2VyIVwiKTtpPXJ9ZWxzZSBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/aT1lOlwib2JqZWN0XCI9PXR5cGVvZiBlJiYobj1lKTtpfHwoaT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSksbnx8KG49e30pLHRoaXMuc2VsZWN0ZWREYXRlPW5ldyBEYXRlLHRoaXMuaW5qZWN0VGVtcGxhdGUoaSksdGhpcy5pbml0KGksbiksdGhpcy5pbml0TGlzdGVuZXJzKCksdGhpcy5fZXZlbnRIYW5kbGVycz17fX1yZXR1cm4gZS5wcm90b3R5cGUuaW5pdEVsTWV0aG9kPWZ1bmN0aW9uKGUpe3RoaXMuJD1mdW5jdGlvbih0KXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yKHQpfSx0aGlzLiQkPWZ1bmN0aW9uKHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3JBbGwodCl9fSxlLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGUsdCl7dGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlcj1lLnF1ZXJ5U2VsZWN0b3IoXCIuc2ltcGxlcGlja2VyLXdyYXBwZXJcIiksdGhpcy5pbml0RWxNZXRob2QodGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlcik7dmFyIGk9dGhpcy4kLHI9dGhpcy4kJDt0aGlzLiRzaW1wbGVwaWNrZXI9aShcIi5zaW1waWxlcGlja2VyLWRhdGUtcGlja2VyXCIpLHRoaXMuJHRycz1yKFwiLnNpbXBsZXBpY2tlci1jYWxlbmRlciB0Ym9keSB0clwiKSx0aGlzLiR0ZHM9cihcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXIgdGJvZHkgdGRcIiksdGhpcy4kaGVhZGVyTW9udGhBbmRZZWFyPWkoXCIuc2ltcGxlcGlja2VyLW1vbnRoLWFuZC15ZWFyXCIpLHRoaXMuJG1vbnRoQW5kWWVhcj1pKFwiLnNpbXBsZXBpY2tlci1zZWxlY3RlZC1kYXRlXCIpLHRoaXMuJGRhdGU9aShcIi5zaW1wbGVwaWNrZXItZGF0ZVwiKSx0aGlzLiRkYXk9aShcIi5zaW1wbGVwaWNrZXItZGF5LWhlYWRlclwiKSx0aGlzLiR0aW1lPWkoXCIuc2ltcGxlcGlja2VyLXRpbWVcIiksdGhpcy4kdGltZUlucHV0PWkoXCIuc2ltcGxlcGlja2VyLXRpbWUtc2VjdGlvbiBpbnB1dFwiKSx0aGlzLiR0aW1lU2VjdGlvbkljb249aShcIi5zaW1wbGVwaWNrZXItaWNvbi10aW1lXCIpLHRoaXMuJGNhbmNlbD1pKFwiLnNpbXBsZXBpY2tlci1jYW5jZWwtYnRuXCIpLHRoaXMuJG9rPWkoXCIuc2ltcGxlcGlja2VyLW9rLWJ0blwiKSx0aGlzLiRkaXNwbGF5RGF0ZUVsZW1lbnRzPVt0aGlzLiRkYXksdGhpcy4kaGVhZGVyTW9udGhBbmRZZWFyLHRoaXMuJGRhdGVdLHRoaXMuJHRpbWUuY2xhc3NMaXN0LmFkZChcInNpbXBsZXBpY2tlci1mYWRlXCIpLHRoaXMucmVuZGVyKG4uc2NyYXBlTW9udGgoYSkpLHQ9dHx8e30sdGhpcy5vcHRzPXQsdGhpcy5yZXNldCh0LnNlbGVjdGVkRGF0ZXx8YSksdm9pZCAwIT09dC56SW5kZXgmJih0aGlzLiRzaW1wbGVwaWNrZXJXcmFwcGVyLnN0eWxlLnpJbmRleD10LnpJbmRleC50b1N0cmluZygpKSx0LmRpc2FibGVUaW1lU2VjdGlvbiYmdGhpcy5kaXNhYmxlVGltZVNlY3Rpb24oKSx0LmNvbXBhY3RNb2RlJiZ0aGlzLmNvbXBhY3RNb2RlKCl9LGUucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKGUpe3ZhciB0PWV8fG5ldyBEYXRlO3RoaXMucmVuZGVyKG4uc2NyYXBlTW9udGgodCkpO3ZhciBpPXQudG9UaW1lU3RyaW5nKCkuc3BsaXQoXCIgXCIpWzBdLnJlcGxhY2UoL1xcOlxcZFxcZCQvLFwiXCIpO3RoaXMuJHRpbWVJbnB1dC52YWx1ZT1pLHRoaXMuJHRpbWUuaW5uZXJUZXh0PW4uZm9ybWF0VGltZUZyb21JbnB1dEVsZW1lbnQoaSk7dmFyIHI9dC5nZXREYXRlKCkudG9TdHJpbmcoKSxzPXRoaXMuZmluZEVsZW1lbnRXaXRoRGF0ZShyKTtzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKXx8KHRoaXMuc2VsZWN0RGF0ZUVsZW1lbnQocyksdGhpcy51cGRhdGVEYXRlQ29tcG9uZW50cyh0KSl9LGUucHJvdG90eXBlLmNvbXBhY3RNb2RlPWZ1bmN0aW9uKCl7dGhpcy4kZGF0ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwifSxlLnByb3RvdHlwZS5kaXNhYmxlVGltZVNlY3Rpb249ZnVuY3Rpb24oKXt0aGlzLiR0aW1lU2VjdGlvbkljb24uc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwifSxlLnByb3RvdHlwZS5lbmFibGVUaW1lU2VjdGlvbj1mdW5jdGlvbigpe3RoaXMuJHRpbWVTZWN0aW9uSWNvbi5zdHlsZS52aXNpYmlsaXR5PVwidmlzaWJsZVwifSxlLnByb3RvdHlwZS5pbmplY3RUZW1wbGF0ZT1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7dC5pbm5lckhUTUw9ci5odG1sVGVtcGxhdGUsZS5hcHBlbmRDaGlsZCh0LmNvbnRlbnQuY2xvbmVOb2RlKCEwKSl9LGUucHJvdG90eXBlLmNsZWFyUm93cz1mdW5jdGlvbigpe3RoaXMuJHRkcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiXCIsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpfSl9LGUucHJvdG90eXBlLnVwZGF0ZURhdGVDb21wb25lbnRzPWZ1bmN0aW9uKGUpe3ZhciB0PW4uZGF5c1tlLmdldERheSgpXSxpPW4ubW9udGhzW2UuZ2V0TW9udGgoKV0rXCIgXCIrZS5nZXRGdWxsWWVhcigpO3RoaXMuJGhlYWRlck1vbnRoQW5kWWVhci5pbm5lckhUTUw9aSx0aGlzLiRtb250aEFuZFllYXIuaW5uZXJIVE1MPWksdGhpcy4kZGF5LmlubmVySFRNTD10LHRoaXMuJGRhdGUuaW5uZXJIVE1MPW4uZ2V0RGlzcGxheURhdGUoZSl9LGUucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLiQkLGk9dGhpcy4kdHJzLG49ZS5tb250aCxyPWUuZGF0ZTt0aGlzLmNsZWFyUm93cygpLG4uZm9yRWFjaChmdW5jdGlvbihlLHQpe3ZhciBuPWlbdF0uY2hpbGRyZW47ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIGk9blt0XTtlPyhpLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtZW1wdHlcIiksaS5pbm5lckhUTUw9ZSk6aS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVtcHR5XCIsXCJcIil9KX0pO3ZhciBzPXQoXCJ0YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkXCIpLGE9ITA7cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuZGF0YXNldC5lbXB0eSYmKGE9ITEpfSk7dmFyIG89c1swXS5wYXJlbnRFbGVtZW50O28uc3R5bGUuZGlzcGxheT1hJiZvP1wibm9uZVwiOlwidGFibGUtcm93XCIsdGhpcy51cGRhdGVEYXRlQ29tcG9uZW50cyhyKX0sZS5wcm90b3R5cGUudXBkYXRlU2VsZWN0ZWREYXRlPWZ1bmN0aW9uKGUpe3ZhciB0LGk9dGhpcy4kbW9udGhBbmRZZWFyLHI9dGhpcy4kdGltZTt0aGlzLiRkYXRlO3Q9ZT9lLmlubmVySFRNTC50cmltKCk6dGhpcy4kZGF0ZS5pbm5lckhUTUwucmVwbGFjZSgvW2Etel0rLyxcIlwiKTt2YXIgcz1pLmlubmVySFRNTC5zcGxpdChcIiBcIiksYT1zWzBdLG89c1sxXSxjPW4ubW9udGhzLmluZGV4T2YoYSksbD1yLmlubmVySFRNTC5zcGxpdChcIjpcIikscD0rbFswXSxkPWxbMV0uc3BsaXQoXCIgXCIpLG09ZFswXSxoPWRbMV07XCJBTVwiPT09aCYmMTI9PXAmJihwPTApLFwiUE1cIj09PWgmJnA8MTImJihwKz0xMik7dmFyIHU9bmV3IERhdGUoK28sK2MsK3QsK3AsK20pO3RoaXMuc2VsZWN0ZWREYXRlPXU7dmFyIHY9dCtcIiBcIjt2Kz1pLmlubmVySFRNTC50cmltKCkrXCIgXCIsdis9ci5pbm5lckhUTUwudHJpbSgpLHRoaXMucmVhZGFibGVEYXRlPXYucmVwbGFjZSgvXlxcZCsvLHUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpfSxlLnByb3RvdHlwZS5zZWxlY3REYXRlRWxlbWVudD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLiQoXCIuc2ltcGxlcGlja2VyLWNhbGVuZGVyIHRib2R5IC5hY3RpdmVcIik7ZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLHQmJnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSx0aGlzLnVwZGF0ZVNlbGVjdGVkRGF0ZShlKSx0aGlzLnVwZGF0ZURhdGVDb21wb25lbnRzKHRoaXMuc2VsZWN0ZWREYXRlKX0sZS5wcm90b3R5cGUuZmluZEVsZW1lbnRXaXRoRGF0ZT1mdW5jdGlvbihlLHQpe3ZhciBpLG47cmV0dXJuIHZvaWQgMD09PXQmJih0PSExKSx0aGlzLiR0ZHMuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgcj10LmlubmVySFRNTC50cmltKCk7cj09PWUmJihpPXQpLFwiXCIhPT1yJiYobj10KX0pLHZvaWQgMD09PWkmJnQmJihpPW4pLGl9LGUucHJvdG90eXBlLmhhbmRsZUljb25CdXR0b25DbGljaz1mdW5jdGlvbihlKXt2YXIgdCxpPXRoaXMuJDtpZihlLmNsYXNzTGlzdC5jb250YWlucyhcInNpbXBsZXBpY2tlci1pY29uLWNhbGVuZGVyXCIpKXt2YXIgcj1pKFwiLnNpbXBsZXBpY2tlci1pY29uLXRpbWVcIikscz1pKFwiLnNpbXBsZXBpY2tlci10aW1lLXNlY3Rpb25cIik7cmV0dXJuKG89aShcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXItc2VjdGlvblwiKSkuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIscy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSxlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIiksdm9pZCB0aGlzLnRvb2dsZURpc3BsYXlGYWRlKCl9aWYoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW1wbGVwaWNrZXItaWNvbi10aW1lXCIpKXt2YXIgYT1pKFwiLnNpbXBsZXBpY2tlci1pY29uLWNhbGVuZGVyXCIpLG89aShcIi5zaW1wbGVwaWNrZXItY2FsZW5kZXItc2VjdGlvblwiKTtyZXR1cm4ocz1pKFwiLnNpbXBsZXBpY2tlci10aW1lLXNlY3Rpb25cIikpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLG8uc3R5bGUuZGlzcGxheT1cIm5vbmVcIixhLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIiksZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLHZvaWQgdGhpcy50b29nbGVEaXNwbGF5RmFkZSgpfXZhciBjPWkoXCIuc2ltcGxlcGlja2VyLWNhbGVuZGVyIHRkLmFjdGl2ZVwiKTtpZihjJiYodD1jLmlubmVySFRNTC50cmltKCkpLGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2ltcGxlcGlja2VyLWljb24tbmV4dFwiKSYmdGhpcy5yZW5kZXIobi5zY3JhcGVOZXh0TW9udGgoKSksZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW1wbGVwaWNrZXItaWNvbi1wcmV2aW91c1wiKSYmdGhpcy5yZW5kZXIobi5zY3JhcGVQcmV2aW91c01vbnRoKCkpLHQpe3ZhciBsPXRoaXMuZmluZEVsZW1lbnRXaXRoRGF0ZSh0LCEwKTt0aGlzLnNlbGVjdERhdGVFbGVtZW50KGwpfX0sZS5wcm90b3R5cGUuaW5pdExpc3RlbmVycz1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRzaW1wbGVwaWNrZXIsaT1lLiR0aW1lSW5wdXQscj1lLiRvayxzPWUuJGNhbmNlbCxhPWUuJHNpbXBsZXBpY2tlcldyYXBwZXIsbz10aGlzO2Z1bmN0aW9uIGMoKXtvLmNsb3NlKCksby5jYWxsRXZlbnQoXCJjbG9zZVwiLGZ1bmN0aW9uKGUpe2UoKX0pfXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQsaT10LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtlLnN0b3BQcm9wYWdhdGlvbigpLFwidGRcIiE9PWk/XCJidXR0b25cIj09PWkmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2ltcGxlcGlja2VyLWljb25cIikmJm8uaGFuZGxlSWNvbkJ1dHRvbkNsaWNrKHQpOm8uc2VsZWN0RGF0ZUVsZW1lbnQodCl9KSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGUpe2lmKFwiXCIhPT1lLnRhcmdldC52YWx1ZSl7dmFyIHQ9bi5mb3JtYXRUaW1lRnJvbUlucHV0RWxlbWVudChlLnRhcmdldC52YWx1ZSk7by4kdGltZS5pbm5lckhUTUw9dCxvLnVwZGF0ZVNlbGVjdGVkRGF0ZSgpfX0pLHIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtvLmNsb3NlKCksby5jYWxsRXZlbnQoXCJzdWJtaXRcIixmdW5jdGlvbihlKXtlKG8uc2VsZWN0ZWREYXRlLG8ucmVhZGFibGVEYXRlKX0pfSkscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGMpfSxlLnByb3RvdHlwZS5jYWxsRXZlbnQ9ZnVuY3Rpb24oZSx0KXsodGhpcy5fZXZlbnRIYW5kbGVyc1tlXXx8W10pLmZvckVhY2goZnVuY3Rpb24oZSl7dChlKX0pfSxlLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7dGhpcy4kc2ltcGxlcGlja2VyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpfSxlLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuJHNpbXBsZXBpY2tlcldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKX0sZS5wcm90b3R5cGUub249ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLl92YWxpZE9uTGlzdGVuZXJzLG49dGhpcy5fZXZlbnRIYW5kbGVycztpZighaS5pbmNsdWRlcyhlKSl0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSB2YWxpZCBldmVudCFcIik7bltlXT1uW2VdfHxbXSxuW2VdLnB1c2godCl9LGUucHJvdG90eXBlLnRvb2dsZURpc3BsYXlGYWRlPWZ1bmN0aW9uKCl7dGhpcy4kdGltZS5jbGFzc0xpc3QudG9nZ2xlKFwic2ltcGxlcGlja2VyLWZhZGVcIiksdGhpcy4kZGlzcGxheURhdGVFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuY2xhc3NMaXN0LnRvZ2dsZShcInNpbXBsZXBpY2tlci1mYWRlXCIpfSl9LGV9KCk7ZS5leHBvcnRzPW99LGh0Nlg6ZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuaHRtbFRlbXBsYXRlPSdcXG48ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXdyYXBwZXJcIj5cXG4gIDxkaXYgY2xhc3M9XCJzaW1waWxlcGlja2VyLWRhdGUtcGlja2VyXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItZGF5LWhlYWRlclwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItZGF0ZS1zZWN0aW9uXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLW1vbnRoLWFuZC15ZWFyXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWRhdGVcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGVwaWNrZXItc2VsZWN0LXBhbmVcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpbXBsZXBpY2tlci1pY29uIHNpbXBsZXBpY2tlci1pY29uLWNhbGVuZGVyIGFjdGl2ZVwiIHRpdGxlPVwiU2VsZWN0IGRhdGUgZnJvbSBjYWxlbmRlciFcIj48L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci10aW1lXCI+MTI6MDAgUE08L2Rpdj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpbXBsZXBpY2tlci1pY29uIHNpbXBsZXBpY2tlci1pY29uLXRpbWVcIiB0aXRsZT1cIlNlbGVjdCB0aW1lXCI+PC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXBpY2tlci1zZWN0aW9uXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWNhbGVuZGVyLXNlY3Rpb25cIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1tb250aC1zd2l0Y2hlciBzaW1wbGVwaWNrZXItc2VsZWN0LXBhbmVcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWljb24gc2ltcGxlcGlja2VyLWljb24tcHJldmlvdXNcIj48L2J1dHRvbj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLXNlbGVjdGVkLWRhdGVcIj48L2Rpdj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWljb24gc2ltcGxlcGlja2VyLWljb24tbmV4dFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci1jYWxlbmRlclwiPlxcbiAgICAgICAgICAgIDx0YWJsZT5cXG4gICAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgPHRyPjx0aD5TdW48L3RoPjx0aD5Nb248L3RoPjx0aD5UdWU8L3RoPjx0aD5XZWQ8L3RoPjx0aD5UaHU8L3RoPjx0aD5Gcmk8L3RoPjx0aD5TYXQ8L3RoPjwvdHI+XFxuICAgICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAnK2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciBpPVwiXCIsbj0xO248PXQ7bisrKWkrPWU7cmV0dXJuIGl9KFwiPHRyPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjwvdHI+XCIsNikrJ1xcbiAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZXBpY2tlci10aW1lLXNlY3Rpb25cIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgdmFsdWU9XCIxMjowMFwiIGF1dG9mb2N1cz1cImZhbHNlXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlcGlja2VyLWJvdHRvbS1wYXJ0XCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLWNhbmNlbC1idG4gc2ltcGxlcGlja2VyLWJ0blwiIHRpdGxlPVwiQ2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ltcGxlcGlja2VyLW9rLWJ0biBzaW1wbGVwaWNrZXItYnRuXCIgdGl0bGU9XCJPS1wiPk9LPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG4nfX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2ltcGxlcGlja2VyLm5vZGUuanMubWFwIiwiY2xhc3MgVG9Eb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZSwgdGltZSwgcHJpb3JpdHksIG51bWJlciwgbm90ZXMpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIC8vIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBcbn1cblxuZXhwb3J0IHsgVG9EbyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vY3JlYXRlXCI7XG5pbXBvcnQgU2ltcGxlUGlja2VyIGZyb20gXCJzaW1wbGVwaWNrZXJcIjtcblxubGV0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTmV3VG9Eb1wiKTtcbmxldCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlVG9Eb1BvcHVwXCIpO1xubGV0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJsYWNrT3ZlcmxheVwiKTtcbmxldCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRQb3B1cFwiKTtcbmxldCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJbnB1dFwiKTtcbmxldCBkYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlQnV0dG9uXCIpO1xubGV0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVDb250YWluZXJcIik7XG5sZXQgcGlja2VyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrZXJEaXZcIik7XG5sZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbmxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dEFyZWFcIik7XG5sZXQgcmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmxldCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRDb250YWluZXInKTtcbmxldCBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza05hbWVDaGVja1wiKTtcbmxldCBpID0gMDtcblxuY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB1c2VySW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHRleHRBcmVhLnZhbHVlID0gXCJcIjtcbiAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICBkdWVEYXRlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmFkaW9zLmZvckVhY2goKHJhZGlvID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9KSlcbiAgfSk7XG5cbi8vICoqKioqKioqKioqIEJFR0lOIEFERCBUQVNLIExJU1RFTkVSICoqKioqKioqKioqKioqIC8vXG4vLyAqKioqKioqKioqKiBCRUdJTiBBREQgVEFTSyBMSVNURU5FUiAqKioqKioqKioqKioqKiAvL1xuLy8gKioqKioqKioqKiogQkVHSU4gQUREIFRBU0sgTElTVEVORVIgKioqKioqKioqKioqKiogLy9cblxuXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmKHVzZXJJbnB1dC52YWx1ZSAhPSBcIlwiKXtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICAgIGxldCBwcmlvcml0eTtcbiAgICAgIHJhZGlvcy5mb3JFYWNoKChyYWRpbyA9PiB7XG4gICAgICAgIGlmIChyYWRpby5jaGVja2VkKXtcbiAgICAgICAgICBsZXQgc2VsZWN0aW9uID0gcmFkaW8uaWQ7XG4gICAgICAgICAgcHJpb3JpdHkgPSBzZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzZWxlY3Rpb24uc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgIH1cbiAgICBcbiAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgcGlja2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXG4gIFxuICAgICAgLy8gKioqKiBpbmNyZW1lbnQgKGkpIGZvciB1c2UgaW4gY2hlY2tib3ggbGFiZWwgbG9naWMsIGFuZCByZW1vdmUgbG9naWMgKioqKipcbiAgICAgIGkrKztcbiAgICAgIGNvbnNvbGUubG9nKGkpXG5cblxuXG4gICAgICAvLyAqKioqKiogZm9ybWF0IHVzYWJsZSBkYXRlL3RpbWUgKioqKioqXG4gICAgICBsZXQgZHVlRGF0ZUFyciA9IGR1ZURhdGUuaW5uZXJIVE1MLnNwbGl0KFwiIFwiKTtcbiAgICAgIGxldCB1c2FibGVEYXRlID0gYCR7ZHVlRGF0ZUFyclsyXX0gJHtkdWVEYXRlQXJyWzFdfWA7XG4gICAgICBsZXQgdXNhYmxlVGltZSA9IGAke2R1ZURhdGVBcnJbNF19ICR7ZHVlRGF0ZUFycls1XX1gO1xuXG5cbiAgXG4gICAgICAvLyAqKiogY3JlYXRlIFRPRE8gb2JqZWN0ICoqKlxuICAgICAgbGV0IGNyZWF0ZVRvZG8gPSBuZXcgVG9Ebyh1c2VySW5wdXQudmFsdWUsIHVzYWJsZURhdGUsIHVzYWJsZVRpbWUsIHByaW9yaXR5U2VsZWN0aW9uKCksIGAke2l9YCk7XG4gICAgICBjb25zb2xlLmxvZyhjcmVhdGVUb2RvKVxuXG4gIFxuICAgICAgLy8gKioqIGNyZWF0ZSBET00gdGhpbmdzICoqKlxuICAgICAgbGV0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhcmRDb250YWluZXIuaWQ9XCJjYXJkQ29udGFpbmVyXCI7XG4gICAgICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkQ29udGFpbmVyXCIpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcblxuXG4gIFxuICAgICAgLy8gKioqKiogVG9wIE9mIENvbnRhaW5lciAqKioqKlxuICAgICAgbGV0IHRvcE9mQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b3BPZkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9wT2ZDb250YWluZXJcIik7XG4gICAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcE9mQ29udGFpbmVyKTtcblxuICAgICAgXG5cbiAgICAgIC8vICoqKioqKioqKioqKiAgQ2hlY2tCb3ggICoqKioqKioqKioqKioqKioqKi8vXG5cbiAgICAgIGxldCB0YXNrTmFtZUNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHRhc2tOYW1lQ2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgdGFza05hbWVDaGVjay5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFza05hbWVDaGVja1wiKTtcbiAgICAgIHRhc2tOYW1lQ2hlY2suaWQgPSBgdGFza05hbWVDaGVjayR7aX1gO1xuICAgICAgdG9wT2ZDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWVDaGVjayk7XG5cblxuICAgICAgXG4gICAgICAvLyAqKioqKioqKioqKioqIFRhc2sgTmFtZSAqKioqKioqKioqKioqKioqKioqIC8vXG4gICAgICBsZXQgdGFza05hbWVDaGVja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgLy8gdGFza05hbWVDaGVja0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgdGFza05hbWVDaGVjayR7aX1gKTtcbiAgICAgIHRhc2tOYW1lQ2hlY2tMYWJlbC5jbGFzc0xpc3QuYWRkKFwidGFza05hbWVcIik7XG4gICAgICB0YXNrTmFtZUNoZWNrTGFiZWwuaWQgPSBcInRhc2tOYW1lXCI7XG4gICAgICB0YXNrTmFtZUNoZWNrTGFiZWwuaW5uZXJIVE1MID0gY3JlYXRlVG9kby50aXRsZTtcbiAgICAgIHRvcE9mQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOYW1lQ2hlY2tMYWJlbCk7XG5cblxuICBcbiAgICAgIC8vICoqKioqIEJvdHRvbSBPZiBDb250YWluZXIgKioqKiogLy9cbiAgICAgIGxldCBib3R0b21PZkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib3R0b21PZkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm90dG9tT2ZDb250YWluZXJcIik7XG4gICAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbU9mQ29udGFpbmVyKTtcblxuXG4gICAgICBcbiAgICAgIC8vICoqKioqKioqKioqKiogUHJpb3JpdHkgVGV4dCAmJiBDb2xvciBMb2dpYyAqKioqKioqKioqKioqKiogLy9cbiAgICAgIGlmIChjcmVhdGVUb2RvLnByaW9yaXR5ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUHJpb3JpdHlcIik7XG4gICAgICAgIHRhc2tQcmlvcml0eS5pZCA9IFwidGFza1ByaW9yaXR5XCI7XG4gICAgICAgIHRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBgUHJpb3JpdHk6ICR7Y3JlYXRlVG9kby5wcmlvcml0eX1gO1xuICAgICAgICBib3R0b21PZkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIFxuICAgICAgICBpZihjcmVhdGVUb2RvLnByaW9yaXR5ID09IFwiTG93XCIpe1xuICAgICAgICAgIHRhc2tQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfWVsc2UgaWYoY3JlYXRlVG9kby5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKXtcbiAgICAgICAgICB0YXNrUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0YXNrUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAvLyAqKioqKioqKioqKioqKiogRGlzcGxheSBGb3JtYXR0ZWQgRHVlIERhdGUgKioqKioqKioqKioqKioqKioqIC8vXG4gIFxuICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRHVlRGF0ZVwiKTtcbiAgICB0YXNrRHVlRGF0ZS5pZCA9IFwidGFza0R1ZURhdGVcIjtcbiAgICBjb25zb2xlLmxvZyhjcmVhdGVUb2RvLmRhdGUpXG4gICAgaWYoY3JlYXRlVG9kby5kYXRlICE9IFwidW5kZWZpbmVkIHVuZGVmaW5lZFwiKXtcbiAgICAgIHRhc2tEdWVEYXRlLmlubmVySFRNTCA9IGAke2NyZWF0ZVRvZG8uZGF0ZX0gfCAke2NyZWF0ZVRvZG8udGltZX1gO1xuICAgICAgYm90dG9tT2ZDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICAgIH1cbiAgfVxuIFxufSk7XG5cbiAvLyAqKioqKioqKioqKioqKiBFTkQgQUREIFRBU0sgTElTVEVORVIgKioqKioqKioqKioqKioqKiAvL1xuICAvLyAqKioqKioqKioqKioqKiBFTkQgQUREIFRBU0sgTElTVEVORVIgKioqKioqKioqKioqKioqKiAvL1xuICAgLy8gKioqKioqKioqKioqKiogRU5EIEFERCBUQVNLIExJU1RFTkVSICoqKioqKioqKioqKioqKiogLy9cblxuXG5cblxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwaWNrZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHVzZXJJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH0pO1xuXG5kYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGlja2VyRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBsZXQgcGlja2VyID0gbmV3IFNpbXBsZVBpY2tlcihwaWNrZXJEaXYsIHtcbiAgICAgIHpJbmRleDogMTAwNCxcbiAgICB9KTtcbiAgICBwaWNrZXIub3BlbigpO1xuICAgIHBpY2tlci5vbignc3VibWl0JywgZnVuY3Rpb24oZGF0ZSwgcmVhZGFibGVEYXRlKXtcbiAgICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gYER1ZTogJHtyZWFkYWJsZURhdGV9YDtcbiAgICB9KVxuICB9KTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==