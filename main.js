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
    
    // display project array on first load
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('loadPage', displayAllProjectOptions)

    // when new todo is created, display all todos
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('newTodoCreated', displayProjectTodos)

    // when creating new project, display all projects
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('projectAdded', displayAllProjectOptions);

    const todoContainer = document.querySelector("#todoContainer");

    const createDOMProp = (elType, value) => {
        const todoDOM = document.createElement('div');
        const todoProp = document.createElement(elType);
        todoProp.textContent = value;
        todoDOM.appendChild(todoProp);
        todoContainer.appendChild(todoDOM);
    }

    const createTodoDOM = (todo) => {
        createDOMProp('span', todo.title);
        createDOMProp('span', todo.description);
        createDOMProp('span', todo.dueDate);
        createDOMProp('span', todo.priority);
        createDOMProp('button', 'Change');
        createDOMProp('button', 'Delete');
    }

    const resetTodoContainer = () => {
        todoContainer.textContent = "";
    }

    function displayProjectTodos(todoArray) {
        resetTodoContainer();
        todoArray.forEach((todo) => createTodoDOM(todo));
    }


    const projectSelect = document.querySelector("#projectSelect");
    

    // can only assign one instance of a Node, so need to create multiple instances
    const createOptionElement = (project) => {
        const option = document.createElement('option');
        option.textContent = project.name;
        return option;
    }

    const resetOptionElements = () => {
        const projectSelectInTodoForm = document.querySelector("#projectForTodo");
        projectSelectInTodoForm.textContent = "";
        projectSelect.textContent = "";

    }

    const assignProjectOption = (project) => {
        // may need to separate project select and todo form project select...
        const projectSelectInTodoForm = document.querySelector("#projectForTodo");
        projectSelectInTodoForm.appendChild(createOptionElement(project));
        projectSelect.appendChild(createOptionElement(project));
    }


    function displayAllProjectOptions(projectArray) {
        resetOptionElements();
        projectArray.forEach((project) => assignProjectOption(project))
    }

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

    const resetForm = (form) => {
        form.reset()
    }

    const todoForm = document.querySelector("#todoForm")
    const submitTodo = document.querySelector("#todoSubmit");

    const getTodoArgs = () => {
    const todoTitle = document.querySelector("#todoTitle").value;
    const todoDescription = document.querySelector("#todoDescription").value;
    const todoDueDate = document.querySelector("#dueDate").value;
    const todoPriority = document.querySelector("#todoPriority").value;
    const todoArgs = [todoTitle, todoDescription, todoDueDate, todoPriority]
    return todoArgs;
    }

    const getProjectToSendTo = () => {
        const project = document.querySelector("#projectForTodo");
        return project.value;
        // may need to refactor to use data attribute and index... phooey
    }

    submitTodo.addEventListener("click", (e) => {
        e.preventDefault();
        getProjectToSendTo();
        // pubsub for creating a new todo
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('todoFormSubmitted', getTodoArgs()); //send to todo.js
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('getProject', getProjectToSendTo())//may need to remove the ()
        resetForm(todoForm);
    })

    const projectForm = document.querySelector("#projectForm")

    const submitProject = document.querySelector('#projectSubmit')
    submitProject.addEventListener("click", (e) => {
        e.preventDefault();
        // pubSub for creating a new project
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('projectFormSubmitted', document.querySelector('#projectForm input').value)
        console.log(document.querySelector('#projectForm input').value)
        resetForm(projectForm);
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

    // subscribe to when todo is added
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('getProject',(projectMatch) => {//dunno what to call projectMatch; the thing that i pass to find the correct project
        const test = projectArray.filter((project) => project.name == projectMatch)
        console.log('test this ')
        console.log(test);

        // pubSub to display the todos
    });

    // subscribe to when projectform is submitted
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 

        // when a new project is created
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('projectAdded', projectArray);
    })



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

    const pageLoad = () => {
        let testProject = new Project('My First Project');
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('loadPage', projectArray)
    }



    // create new project on first load

    pageLoad();
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

    // pubsub SUBSCRIBE
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('todoFormSubmitted', (args) => {
        const newTodo = new Todo(args[0], args[1], args[2], args[3])
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('newTodoCreated',todoArray) //send to display.js
        // NEXT, IMPLEMENT CHANGING TODOS; CHANGE PROPERTY, DELETE
    })

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
        }

        setProp(prop, value) {
            this[prop] = value;
        } 
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





(0,_display__WEBPACK_IMPORTED_MODULE_3__.display)();
(0,_project__WEBPACK_IMPORTED_MODULE_1__.project)();
(0,_todo__WEBPACK_IMPORTED_MODULE_0__.todo)();
(0,_formHandler__WEBPACK_IMPORTED_MODULE_2__.formHandler)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1AsaURBQU87QUFDUCwyQ0FBSTtBQUNKLHlEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9mb3JtSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBcbiAgICAvLyBkaXNwbGF5IHByb2plY3QgYXJyYXkgb24gZmlyc3QgbG9hZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2xvYWRQYWdlJywgZGlzcGxheUFsbFByb2plY3RPcHRpb25zKVxuXG4gICAgLy8gd2hlbiBuZXcgdG9kbyBpcyBjcmVhdGVkLCBkaXNwbGF5IGFsbCB0b2Rvc1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ25ld1RvZG9DcmVhdGVkJywgZGlzcGxheVByb2plY3RUb2RvcylcblxuICAgIC8vIHdoZW4gY3JlYXRpbmcgbmV3IHByb2plY3QsIGRpc3BsYXkgYWxsIHByb2plY3RzXG4gICAgcHViU3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgZGlzcGxheUFsbFByb2plY3RPcHRpb25zKTtcblxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Db250YWluZXJcIik7XG5cbiAgICBjb25zdCBjcmVhdGVET01Qcm9wID0gKGVsVHlwZSwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0RPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b2RvUHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxUeXBlKTtcbiAgICAgICAgdG9kb1Byb3AudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgdG9kb0RPTS5hcHBlbmRDaGlsZCh0b2RvUHJvcCk7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RPTSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kb0RPTSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLnRpdGxlKTtcbiAgICAgICAgY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8uZGVzY3JpcHRpb24pO1xuICAgICAgICBjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby5kdWVEYXRlKTtcbiAgICAgICAgY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8ucHJpb3JpdHkpO1xuICAgICAgICBjcmVhdGVET01Qcm9wKCdidXR0b24nLCAnQ2hhbmdlJyk7XG4gICAgICAgIGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsICdEZWxldGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldFRvZG9Db250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHRvZG9Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VG9kb3ModG9kb0FycmF5KSB7XG4gICAgICAgIHJlc2V0VG9kb0NvbnRhaW5lcigpO1xuICAgICAgICB0b2RvQXJyYXkuZm9yRWFjaCgodG9kbykgPT4gY3JlYXRlVG9kb0RPTSh0b2RvKSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U2VsZWN0XCIpO1xuICAgIFxuXG4gICAgLy8gY2FuIG9ubHkgYXNzaWduIG9uZSBpbnN0YW5jZSBvZiBhIE5vZGUsIHNvIG5lZWQgdG8gY3JlYXRlIG11bHRpcGxlIGluc3RhbmNlc1xuICAgIGNvbnN0IGNyZWF0ZU9wdGlvbkVsZW1lbnQgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0T3B0aW9uRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RJblRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIH1cblxuICAgIGNvbnN0IGFzc2lnblByb2plY3RPcHRpb24gPSAocHJvamVjdCkgPT4ge1xuICAgICAgICAvLyBtYXkgbmVlZCB0byBzZXBhcmF0ZSBwcm9qZWN0IHNlbGVjdCBhbmQgdG9kbyBmb3JtIHByb2plY3Qgc2VsZWN0Li4uXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RJblRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uRWxlbWVudChwcm9qZWN0KSk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uRWxlbWVudChwcm9qZWN0KSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMocHJvamVjdEFycmF5KSB7XG4gICAgICAgIHJlc2V0T3B0aW9uRWxlbWVudHMoKTtcbiAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IGFzc2lnblByb2plY3RPcHRpb24ocHJvamVjdCkpXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtSGFuZGxlcigpIHtcblxuICAgIGNvbnN0IHJlc2V0Rm9ybSA9IChmb3JtKSA9PiB7XG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKVxuICAgIGNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9TdWJtaXRcIik7XG5cbiAgICBjb25zdCBnZXRUb2RvQXJncyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvQXJncyA9IFt0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eV1cbiAgICByZXR1cm4gdG9kb0FyZ3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdFRvU2VuZFRvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3QudmFsdWU7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIHJlZmFjdG9yIHRvIHVzZSBkYXRhIGF0dHJpYnV0ZSBhbmQgaW5kZXguLi4gcGhvb2V5XG4gICAgfVxuXG4gICAgc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBnZXRQcm9qZWN0VG9TZW5kVG8oKTtcbiAgICAgICAgLy8gcHVic3ViIGZvciBjcmVhdGluZyBhIG5ldyB0b2RvXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIGdldFRvZG9BcmdzKCkpOyAvL3NlbmQgdG8gdG9kby5qc1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZ2V0UHJvamVjdCcsIGdldFByb2plY3RUb1NlbmRUbygpKS8vbWF5IG5lZWQgdG8gcmVtb3ZlIHRoZSAoKVxuICAgICAgICByZXNldEZvcm0odG9kb0Zvcm0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIilcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFN1Ym1pdCcpXG4gICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBwdWJTdWIgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtIGlucHV0JykudmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybSBpbnB1dCcpLnZhbHVlKVxuICAgICAgICByZXNldEZvcm0ocHJvamVjdEZvcm0pO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KCkge1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIHdoZW4gdG9kbyBpcyBhZGRlZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2dldFByb2plY3QnLChwcm9qZWN0TWF0Y2gpID0+IHsvL2R1bm5vIHdoYXQgdG8gY2FsbCBwcm9qZWN0TWF0Y2g7IHRoZSB0aGluZyB0aGF0IGkgcGFzcyB0byBmaW5kIHRoZSBjb3JyZWN0IHByb2plY3RcbiAgICAgICAgY29uc3QgdGVzdCA9IHByb2plY3RBcnJheS5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TWF0Y2gpXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IHRoaXMgJylcbiAgICAgICAgY29uc29sZS5sb2codGVzdCk7XG5cbiAgICAgICAgLy8gcHViU3ViIHRvIGRpc3BsYXkgdGhlIHRvZG9zXG4gICAgfSk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gd2hlbiBwcm9qZWN0Zm9ybSBpcyBzdWJtaXR0ZWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0Rm9ybVN1Ym1pdHRlZCcsIChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTsgXG5cbiAgICAgICAgLy8gd2hlbiBhIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWRcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RBZGRlZCcsIHByb2plY3RBcnJheSk7XG4gICAgfSlcblxuXG5cbiAgICBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbiAgICBjb25zdCBwdXNoVG9BcnJheSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QXJyYXkgPSAoKSA9PiBwcm9qZWN0QXJyYXk7XG5cbiAgICBjb25zdCBkaXNwbGF5QXJyYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbXB0UHJvamVjdFRvQWRkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvbXB0KGBjaG9vc2UgYSBwcm9qZWN0ISAke2dldEFycmF5KCkubWFwKChwLCBpbmRleCkgPT4gW3AubmFtZSwgaW5kZXhdKX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RQcm9qZWN0V2l0aEluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRBcnJheSgpW2luZGV4XTtcbiAgICB9XG5cbiAgICAvL2RlbGV0ZSBwcm9qZWN0OyAgXG4gICAgLy8gY3JlYXRlIHByb2plY3RcblxuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHB1c2hUb0FycmF5KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVVNFRFxuICAgICAgICBhZGRUb0RvKHRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LnB1c2godG9kbylcbiAgICAgICAgfVxuICAgICAgICAvLyBOT1QgVVNFRFxuICAgICAgICByZW1vdmVUb0RvKHRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LmZpbHRlcihlbCA9PiBlbCAhPSB0b2RvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVCBVU0VEIEFORCBERVZFTE9QXG4gICAgICAgIGNoYW5nZVRvRG8odG9kbykge1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOT1QgVVNFRCBBTkQgREVWRUxPUFxuICAgICAgICBjaGFuZ2VOYW1lKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGlzIHNob3VsZCBjcmVhdGUgYSBwcm9qZWN0IGFuZCBhZGQgaXQgdG8gcHJvamVjdEFycmF5LiBpcyB0aGlzIGNsZWFuIGNvZGU/XG5cbiAgICBjb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoJ015IEZpcnN0IFByb2plY3QnKTtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2xvYWRQYWdlJywgcHJvamVjdEFycmF5KVxuICAgIH1cblxuXG5cbiAgICAvLyBjcmVhdGUgbmV3IHByb2plY3Qgb24gZmlyc3QgbG9hZFxuXG4gICAgcGFnZUxvYWQoKTtcbn1cblxuXG4iLCJleHBvcnQgY29uc3QgcHViU3ViID0ge1xuICAgIGV2ZW50czoge30sXG5cbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50LCBjYikge1xuICAgICAgICAvLyB3aGF0IGRvZXMgdGhpcy5ldmVudHNbZXZlbnRdIGxvb2sgbGlrZT9cbiAgICAgICAgY29uc29sZS5sb2coYHNvbWV0aGluZyBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldmVudH1gKVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF18fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2IpO1xuICAgIH0sXG5cbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzb21ldGhpbmcgdW5zdWJzY3JpYmVkIGZyb20gJHtldmVudH1gKVxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0uZmlsdGVyKGYgPT4gZiAhPSBjYilcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbWFraW5nIGEgYnJvYWRjYXN0IGFib3V0ICR7ZXZlbnR9IHdpdGggZGF0YWApO1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG59XG5cbiIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJztcblxuLy9tYXkgaGF2ZSB0byBlbmNhcHN1bGF0ZSBhbGwgb2YgdGhpcyBpbnRvIGEgZnVuY3Rpb25cblxuZnVuY3Rpb24gdG9kbygpIHtcblxuICAgIC8vIHB1YnN1YiBTVUJTQ1JJQkVcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICBwdWJTdWIucHVibGlzaCgnbmV3VG9kb0NyZWF0ZWQnLHRvZG9BcnJheSkgLy9zZW5kIHRvIGRpc3BsYXkuanNcbiAgICAgICAgLy8gTkVYVCwgSU1QTEVNRU5UIENIQU5HSU5HIFRPRE9TOyBDSEFOR0UgUFJPUEVSVFksIERFTEVURVxuICAgIH0pXG5cbiAgICBsZXQgdG9kb0FycmF5ID0gW107XG5cbiAgICBjb25zdCBwdXNoVG9BcnJheSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIHRvZG9BcnJheS5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlBcnJheSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KTtcbiAgICB9XG5cblxuICAgIGNsYXNzIFRvZG8ge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIC8vIHdoZW4gdG9kbyBpcyBjcmVhdGVkLCBwdXNoIHRvIHRvZG9hcnJheVxuICAgICAgICBwdXNoVG9BcnJheSh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFByb3AocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfSBcbiAgICB9XG59XG5cbmV4cG9ydCB7dG9kb307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGZvcm1IYW5kbGVyIH0gZnJvbSBcIi4vZm9ybUhhbmRsZXJcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmRpc3BsYXkoKTtcbnByb2plY3QoKTtcbnRvZG8oKTtcbmZvcm1IYW5kbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9