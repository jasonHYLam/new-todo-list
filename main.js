/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   display: () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


function display() {
    


    const projectSelect = document.querySelector("#projectSelect");
    
    const createProjectOption = (project) => {
        const option = document.createElement('option');
        option.textContent= project.name;
        console.log(`project name: ${project.name}`)
        projectSelect.appendChild(option);

    }
    const createAllOptions = (projectArray) => {
        projectArray.textContent = '';
        projectArray.forEach(createProjectOption)
    }


    // when creating new project, display all projects
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('projectAdded', createAllOptions);
}

/***/ }),

/***/ "./src/formHandler.js":
/*!****************************!*\
  !*** ./src/formHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formHandler: () => (/* binding */ formHandler)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


function formHandler() {
    const todoForm = document.querySelector("#todoForm")
    console.log(todoForm)
    const projectForm = document.querySelector("#projectForm")
    console.log(projectForm)

    const submitProject = document.querySelector('#projectSubmit')
    submitProject.addEventListener("click", () => {
        // pubSub for creating project
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('projectFormSubmitted', document.querySelector('#projectForm input').value)
        console.log(document.querySelector('#projectForm input').value)
        // pubSub for displayProject
    })
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


function project() {

    let projectArray = [];

    const pushToArray = (project) => {
        projectArray.push(project)
    }

    const getArray = () => projectArray;

    const displayArray = () => {
        console.log(projectArray);
    }

    const promptProjectToAdd = () => {
        return prompt(`choose a project! ${getArray().map((p, index) => [p.name, index])}`);
    }

    const selectProjectWithIndex = (index) => {
        return getArray()[index];
    }

    //delete project;  
    // create project

    class Project {
        constructor(name) {
            this.todoArray = [];
            this.name = name;
            pushToArray(this);
        }

        // USED
        addToDo(todo) {
            this.todoArray.push(todo)
        }
        // NOT USED
        removeToDo(todo) {
            this.todoArray.filter(el => el != todo);
        }

        // NOT USED AND DEVELOP
        changeToDo(todo) {

        }

        // NOT USED AND DEVELOP
        changeName(name) {
            this.name = name;
        }
    }


    // this should create a project and add it to projectArray. is this clean code?
    let testProject = new Project('testProject');

    // subscribe to when todo is added
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('todoAdded',(todo) => {
        // const index = promptProjectToAdd();
        // selectProjectWithIndex(index).addToDo(todo);//not sure if this works
    });

    // CREATE MORE SUBSCRIBES

    // subscribe to when projectform is submitted
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 
        console.log(projectArray);

        // when a new project is created
        // is it wise to put a publish inside a subscribe? i mean, i don't see why not
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('projectAdded', projectArray);
    })



}




/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pubSub: () => (/* binding */ pubSub)
/* harmony export */ });
const pubSub = {
    events: {},

    subscribe: function(event, cb) {
        // what does this.events[event] look like?
        console.log(`something subscribed to know about ${event}`)
        this.events[event] = this.events[event]|| [];
        this.events[event].push(cb);
    },

    unsubscribe: function(event, cb) {
        console.log(`something unsubscribed from ${event}`)
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(f => f != cb)
        }
    },

    publish: function(event, data) {
        console.log(`making a broadcast about ${event} with data`);
        if (this.events[event]) {
            this.events[event].forEach(f => {
                f(data);
            })
        }
    },
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todo: () => (/* binding */ todo)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");


//may have to encapsulate all of this into a function

function todo() {

    let todoArray = [];

    const pushToArray = (todo) => {
        todoArray.push(todo);
    }

    const displayArray = () => {
        console.log(todoArray);
    }


    class Todo {
        constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        // when todo is created, push to todoarray
        pushToArray(this);
        // when todo is created, publish the event, which triggers callback to add to project
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('todoAdded', this)//not sure if this haha works 
        }

        setProp(prop, value) {
            this[prop] = value;
        } 
    }

    // pubsub SUBSCRIBE
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('todoFormSubmitted', (args) => {
        const newTodo = new Todo(args[0], args[1], args[2], args[3])

        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('newTodoCreated', newTodo)
    })


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formHandler */ "./src/formHandler.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/display.js");





(0,_project__WEBPACK_IMPORTED_MODULE_1__.project)();
(0,_todo__WEBPACK_IMPORTED_MODULE_0__.todo)();
(0,_formHandler__WEBPACK_IMPORTED_MODULE_2__.formHandler)();
(0,_display__WEBPACK_IMPORTED_MODULE_3__.display)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRTNCO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLElBQUksMkNBQU07QUFDVjs7Ozs7Ozs7Ozs7Ozs7O0FDdkJrQzs7QUFFM0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFNO0FBQ2Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDZmtDOztBQUUzQjs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLDhDQUE4QztBQUN6Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDJDQUFNO0FBQ1Y7QUFDQSx1REFBdUQ7QUFDdkQsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLElBQUksMkNBQU07QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDJDQUFNO0FBQ2QsS0FBSzs7OztBQUlMOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlFTztBQUNQLGNBQWM7O0FBRWQ7QUFDQTtBQUNBLDBEQUEwRCxNQUFNO0FBQ2hFO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsbURBQW1ELE1BQU07QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmtDOztBQUVsQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFNO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDJDQUFNO0FBQ1Y7O0FBRUEsUUFBUSwyQ0FBTTtBQUNkLEtBQUs7OztBQUdMOzs7Ozs7OztVQzFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ007QUFDUTtBQUNSOztBQUVwQyxpREFBTztBQUNQLDJDQUFJO0FBQ0oseURBQVc7QUFDWCxpREFBTyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvZm9ybUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG4gICAgXG5cblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTZWxlY3RcIik7XG4gICAgXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdE9wdGlvbiA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQ9IHByb2plY3QubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coYHByb2plY3QgbmFtZTogJHtwcm9qZWN0Lm5hbWV9YClcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUFsbE9wdGlvbnMgPSAocHJvamVjdEFycmF5KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChjcmVhdGVQcm9qZWN0T3B0aW9uKVxuICAgIH1cblxuXG4gICAgLy8gd2hlbiBjcmVhdGluZyBuZXcgcHJvamVjdCwgZGlzcGxheSBhbGwgcHJvamVjdHNcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0QWRkZWQnLCBjcmVhdGVBbGxPcHRpb25zKTtcbn0iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1IYW5kbGVyKCkge1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKVxuICAgIGNvbnNvbGUubG9nKHRvZG9Gb3JtKVxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9ybVwiKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RGb3JtKVxuXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0U3VibWl0JylcbiAgICBzdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIHB1YlN1YiBmb3IgY3JlYXRpbmcgcHJvamVjdFxuICAgICAgICBwdWJTdWIucHVibGlzaCgncHJvamVjdEZvcm1TdWJtaXR0ZWQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm0gaW5wdXQnKS52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtIGlucHV0JykudmFsdWUpXG4gICAgICAgIC8vIHB1YlN1YiBmb3IgZGlzcGxheVByb2plY3RcbiAgICB9KVxufSIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdCgpIHtcblxuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICAgIGNvbnN0IHB1c2hUb0FycmF5ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBcnJheSA9ICgpID0+IHByb2plY3RBcnJheTtcblxuICAgIGNvbnN0IGRpc3BsYXlBcnJheSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9tcHRQcm9qZWN0VG9BZGQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9tcHQoYGNob29zZSBhIHByb2plY3QhICR7Z2V0QXJyYXkoKS5tYXAoKHAsIGluZGV4KSA9PiBbcC5uYW1lLCBpbmRleF0pfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdFByb2plY3RXaXRoSW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldEFycmF5KClbaW5kZXhdO1xuICAgIH1cblxuICAgIC8vZGVsZXRlIHByb2plY3Q7ICBcbiAgICAvLyBjcmVhdGUgcHJvamVjdFxuXG4gICAgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5ID0gW107XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgcHVzaFRvQXJyYXkodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVU0VEXG4gICAgICAgIGFkZFRvRG8odG9kbykge1xuICAgICAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaCh0b2RvKVxuICAgICAgICB9XG4gICAgICAgIC8vIE5PVCBVU0VEXG4gICAgICAgIHJlbW92ZVRvRG8odG9kbykge1xuICAgICAgICAgICAgdGhpcy50b2RvQXJyYXkuZmlsdGVyKGVsID0+IGVsICE9IHRvZG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTk9UIFVTRUQgQU5EIERFVkVMT1BcbiAgICAgICAgY2hhbmdlVG9Ebyh0b2RvKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVCBVU0VEIEFORCBERVZFTE9QXG4gICAgICAgIGNoYW5nZU5hbWUobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gdGhpcyBzaG91bGQgY3JlYXRlIGEgcHJvamVjdCBhbmQgYWRkIGl0IHRvIHByb2plY3RBcnJheS4gaXMgdGhpcyBjbGVhbiBjb2RlP1xuICAgIGxldCB0ZXN0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCd0ZXN0UHJvamVjdCcpO1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIHdoZW4gdG9kbyBpcyBhZGRlZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3RvZG9BZGRlZCcsKHRvZG8pID0+IHtcbiAgICAgICAgLy8gY29uc3QgaW5kZXggPSBwcm9tcHRQcm9qZWN0VG9BZGQoKTtcbiAgICAgICAgLy8gc2VsZWN0UHJvamVjdFdpdGhJbmRleChpbmRleCkuYWRkVG9Ebyh0b2RvKTsvL25vdCBzdXJlIGlmIHRoaXMgd29ya3NcbiAgICB9KTtcblxuICAgIC8vIENSRUFURSBNT1JFIFNVQlNDUklCRVNcblxuICAgIC8vIHN1YnNjcmliZSB0byB3aGVuIHByb2plY3Rmb3JtIGlzIHN1Ym1pdHRlZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpOyBcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcblxuICAgICAgICAvLyB3aGVuIGEgbmV3IHByb2plY3QgaXMgY3JlYXRlZFxuICAgICAgICAvLyBpcyBpdCB3aXNlIHRvIHB1dCBhIHB1Ymxpc2ggaW5zaWRlIGEgc3Vic2NyaWJlPyBpIG1lYW4sIGkgZG9uJ3Qgc2VlIHdoeSBub3RcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RBZGRlZCcsIHByb2plY3RBcnJheSk7XG4gICAgfSlcblxuXG5cbn1cblxuXG4iLCJleHBvcnQgY29uc3QgcHViU3ViID0ge1xuICAgIGV2ZW50czoge30sXG5cbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50LCBjYikge1xuICAgICAgICAvLyB3aGF0IGRvZXMgdGhpcy5ldmVudHNbZXZlbnRdIGxvb2sgbGlrZT9cbiAgICAgICAgY29uc29sZS5sb2coYHNvbWV0aGluZyBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldmVudH1gKVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF18fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2IpO1xuICAgIH0sXG5cbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzb21ldGhpbmcgdW5zdWJzY3JpYmVkIGZyb20gJHtldmVudH1gKVxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0uZmlsdGVyKGYgPT4gZiAhPSBjYilcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbWFraW5nIGEgYnJvYWRjYXN0IGFib3V0ICR7ZXZlbnR9IHdpdGggZGF0YWApO1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG59XG5cbiIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG4vL21heSBoYXZlIHRvIGVuY2Fwc3VsYXRlIGFsbCBvZiB0aGlzIGludG8gYSBmdW5jdGlvblxuXG5mdW5jdGlvbiB0b2RvKCkge1xuXG4gICAgbGV0IHRvZG9BcnJheSA9IFtdO1xuXG4gICAgY29uc3QgcHVzaFRvQXJyYXkgPSAodG9kbykgPT4ge1xuICAgICAgICB0b2RvQXJyYXkucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5QXJyYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9BcnJheSk7XG4gICAgfVxuXG5cbiAgICBjbGFzcyBUb2RvIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAvLyB3aGVuIHRvZG8gaXMgY3JlYXRlZCwgcHVzaCB0byB0b2RvYXJyYXlcbiAgICAgICAgcHVzaFRvQXJyYXkodGhpcyk7XG4gICAgICAgIC8vIHdoZW4gdG9kbyBpcyBjcmVhdGVkLCBwdWJsaXNoIHRoZSBldmVudCwgd2hpY2ggdHJpZ2dlcnMgY2FsbGJhY2sgdG8gYWRkIHRvIHByb2plY3RcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3RvZG9BZGRlZCcsIHRoaXMpLy9ub3Qgc3VyZSBpZiB0aGlzIGhhaGEgd29ya3MgXG4gICAgICAgIH1cblxuICAgICAgICBzZXRQcm9wKHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgLy8gcHVic3ViIFNVQlNDUklCRVxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3RvZG9Gb3JtU3VibWl0dGVkJywgKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG5cbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ25ld1RvZG9DcmVhdGVkJywgbmV3VG9kbylcbiAgICB9KVxuXG5cbn1cblxuZXhwb3J0IHt0b2RvfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZm9ybUhhbmRsZXIgfSBmcm9tIFwiLi9mb3JtSGFuZGxlclwiO1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxucHJvamVjdCgpO1xudG9kbygpO1xuZm9ybUhhbmRsZXIoKTtcbmRpc3BsYXkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=