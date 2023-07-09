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

    function displayProjectTodos(todoArray) {
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
    console.log(todoForm)
    const submitTodo = document.querySelector("#todoSubmit");

    const getTodoArgs = () => {
    const todoTitle = document.querySelector("#todoTitle").value;
    const todoDescription = document.querySelector("#todoDescription").value;
    const todoDueDate = document.querySelector("#dueDate").value;
    const todoPriority = document.querySelector("#todoPriority").value;
    const todoArgs = [todoTitle, todoDescription, todoDueDate, todoPriority]
    return todoArgs;
    }

    submitTodo.addEventListener("click", (e) => {
        e.preventDefault();
        // pubsub for creating a new todo
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('todoFormSubmitted', getTodoArgs());
        resetForm(todoForm);
    })

    const projectForm = document.querySelector("#projectForm")
    console.log(projectForm)

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
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('todoAdded',(todo) => {
        // const index = promptProjectToAdd();
        // selectProjectWithIndex(index).addToDo(todo);//not sure if this works
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
        console.log('do this please')
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('loadPage', projectArray)
        console.log('project array under')
        console.log(projectArray)
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
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('newTodoCreated',todoArray)
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
        // when todo is created, publish the event, which triggers callback to add to project
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('todoAdded', this)//not sure if this haha works 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvZm9ybUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG4gICAgXG4gICAgLy8gZGlzcGxheSBwcm9qZWN0IGFycmF5IG9uIGZpcnN0IGxvYWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdsb2FkUGFnZScsIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucylcblxuICAgIC8vIHdoZW4gbmV3IHRvZG8gaXMgY3JlYXRlZCwgZGlzcGxheSBhbGwgdG9kb3NcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCduZXdUb2RvQ3JlYXRlZCcsIGRpc3BsYXlQcm9qZWN0VG9kb3MpXG5cbiAgICAvLyB3aGVuIGNyZWF0aW5nIG5ldyBwcm9qZWN0LCBkaXNwbGF5IGFsbCBwcm9qZWN0c1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucyk7XG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY3JlYXRlRE9NUHJvcCA9IChlbFR5cGUsIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9ET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb1Byb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsVHlwZSk7XG4gICAgICAgIHRvZG9Qcm9wLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQodG9kb1Byb3ApO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9ET00pO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG9ET00gPSAodG9kbykgPT4ge1xuICAgICAgICBjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby50aXRsZSk7XG4gICAgICAgIGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8uZHVlRGF0ZSk7XG4gICAgICAgIGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgJ0NoYW5nZScpO1xuICAgICAgICBjcmVhdGVET01Qcm9wKCdidXR0b24nLCAnRGVsZXRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3RUb2Rvcyh0b2RvQXJyYXkpIHtcbiAgICAgICAgdG9kb0FycmF5LmZvckVhY2goKHRvZG8pID0+IGNyZWF0ZVRvZG9ET00odG9kbykpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFNlbGVjdFwiKTtcbiAgICBcblxuICAgIC8vIGNhbiBvbmx5IGFzc2lnbiBvbmUgaW5zdGFuY2Ugb2YgYSBOb2RlLCBzbyBuZWVkIHRvIGNyZWF0ZSBtdWx0aXBsZSBpbnN0YW5jZXNcbiAgICBjb25zdCBjcmVhdGVPcHRpb25FbGVtZW50ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldE9wdGlvbkVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvclRvZG9cIik7XG4gICAgICAgIHByb2plY3RTZWxlY3RJblRvZG9Gb3JtLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgcHJvamVjdFNlbGVjdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICB9XG5cbiAgICBjb25zdCBhc3NpZ25Qcm9qZWN0T3B0aW9uID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgLy8gbWF5IG5lZWQgdG8gc2VwYXJhdGUgcHJvamVjdCBzZWxlY3QgYW5kIHRvZG8gZm9ybSBwcm9qZWN0IHNlbGVjdC4uLlxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvclRvZG9cIik7XG4gICAgICAgIHByb2plY3RTZWxlY3RJblRvZG9Gb3JtLmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQocHJvamVjdCkpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQocHJvamVjdCkpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFsbFByb2plY3RPcHRpb25zKHByb2plY3RBcnJheSkge1xuICAgICAgICByZXNldE9wdGlvbkVsZW1lbnRzKCk7XG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiBhc3NpZ25Qcm9qZWN0T3B0aW9uKHByb2plY3QpKVxuICAgIH1cblxufSIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybUhhbmRsZXIoKSB7XG5cbiAgICBjb25zdCByZXNldEZvcm0gPSAoZm9ybSkgPT4ge1xuICAgICAgICBmb3JtLnJlc2V0KClcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0Zvcm1cIilcbiAgICBjb25zb2xlLmxvZyh0b2RvRm9ybSlcbiAgICBjb25zdCBzdWJtaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvU3VibWl0XCIpO1xuXG4gICAgY29uc3QgZ2V0VG9kb0FyZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvVGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudmFsdWU7XG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvUHJpb3JpdHlcIikudmFsdWU7XG4gICAgY29uc3QgdG9kb0FyZ3MgPSBbdG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHldXG4gICAgcmV0dXJuIHRvZG9BcmdzO1xuICAgIH1cblxuICAgIHN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gcHVic3ViIGZvciBjcmVhdGluZyBhIG5ldyB0b2RvXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIGdldFRvZG9BcmdzKCkpO1xuICAgICAgICByZXNldEZvcm0odG9kb0Zvcm0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIilcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0Rm9ybSlcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFN1Ym1pdCcpXG4gICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBwdWJTdWIgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtIGlucHV0JykudmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybSBpbnB1dCcpLnZhbHVlKVxuICAgICAgICByZXNldEZvcm0ocHJvamVjdEZvcm0pO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KCkge1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIHdoZW4gdG9kbyBpcyBhZGRlZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3RvZG9BZGRlZCcsKHRvZG8pID0+IHtcbiAgICAgICAgLy8gY29uc3QgaW5kZXggPSBwcm9tcHRQcm9qZWN0VG9BZGQoKTtcbiAgICAgICAgLy8gc2VsZWN0UHJvamVjdFdpdGhJbmRleChpbmRleCkuYWRkVG9Ebyh0b2RvKTsvL25vdCBzdXJlIGlmIHRoaXMgd29ya3NcbiAgICB9KTtcblxuICAgIC8vIHN1YnNjcmliZSB0byB3aGVuIHByb2plY3Rmb3JtIGlzIHN1Ym1pdHRlZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpOyBcblxuICAgICAgICAvLyB3aGVuIGEgbmV3IHByb2plY3QgaXMgY3JlYXRlZFxuICAgICAgICBwdWJTdWIucHVibGlzaCgncHJvamVjdEFkZGVkJywgcHJvamVjdEFycmF5KTtcbiAgICB9KVxuXG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG4gICAgY29uc3QgcHVzaFRvQXJyYXkgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KVxuICAgIH1cblxuICAgIGNvbnN0IGdldEFycmF5ID0gKCkgPT4gcHJvamVjdEFycmF5O1xuXG4gICAgY29uc3QgZGlzcGxheUFycmF5ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21wdFByb2plY3RUb0FkZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb21wdChgY2hvb3NlIGEgcHJvamVjdCEgJHtnZXRBcnJheSgpLm1hcCgocCwgaW5kZXgpID0+IFtwLm5hbWUsIGluZGV4XSl9YCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0UHJvamVjdFdpdGhJbmRleCA9IChpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0QXJyYXkoKVtpbmRleF07XG4gICAgfVxuXG4gICAgLy9kZWxldGUgcHJvamVjdDsgIFxuICAgIC8vIGNyZWF0ZSBwcm9qZWN0XG5cbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAgICAgdGhpcy50b2RvQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVTRURcbiAgICAgICAgYWRkVG9Ebyh0b2RvKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheS5wdXNoKHRvZG8pXG4gICAgICAgIH1cbiAgICAgICAgLy8gTk9UIFVTRURcbiAgICAgICAgcmVtb3ZlVG9Ebyh0b2RvKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheS5maWx0ZXIoZWwgPT4gZWwgIT0gdG9kbyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOT1QgVVNFRCBBTkQgREVWRUxPUFxuICAgICAgICBjaGFuZ2VUb0RvKHRvZG8pIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTk9UIFVTRUQgQU5EIERFVkVMT1BcbiAgICAgICAgY2hhbmdlTmFtZShuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcyBzaG91bGQgY3JlYXRlIGEgcHJvamVjdCBhbmQgYWRkIGl0IHRvIHByb2plY3RBcnJheS4gaXMgdGhpcyBjbGVhbiBjb2RlP1xuXG4gICAgY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0ZXN0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdNeSBGaXJzdCBQcm9qZWN0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkbyB0aGlzIHBsZWFzZScpXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdsb2FkUGFnZScsIHByb2plY3RBcnJheSlcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3QgYXJyYXkgdW5kZXInKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpXG4gICAgfVxuXG5cblxuICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdCBvbiBmaXJzdCBsb2FkXG5cbiAgICBwYWdlTG9hZCgpO1xufVxuXG5cbiIsImV4cG9ydCBjb25zdCBwdWJTdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcblxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIC8vIHdoYXQgZG9lcyB0aGlzLmV2ZW50c1tldmVudF0gbG9vayBsaWtlP1xuICAgICAgICBjb25zb2xlLmxvZyhgc29tZXRoaW5nIHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2ZW50fWApXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XXx8IFtdO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChjYik7XG4gICAgfSxcblxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudCwgY2IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNvbWV0aGluZyB1bnN1YnNjcmliZWQgZnJvbSAke2V2ZW50fWApXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XS5maWx0ZXIoZiA9PiBmICE9IGNiKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBtYWtpbmcgYSBicm9hZGNhc3QgYWJvdXQgJHtldmVudH0gd2l0aCBkYXRhYCk7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgICAgIGYoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbn1cblxuIiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG4vL21heSBoYXZlIHRvIGVuY2Fwc3VsYXRlIGFsbCBvZiB0aGlzIGludG8gYSBmdW5jdGlvblxuXG5mdW5jdGlvbiB0b2RvKCkge1xuXG4gICAgLy8gcHVic3ViIFNVQlNDUklCRVxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3RvZG9Gb3JtU3VibWl0dGVkJywgKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCduZXdUb2RvQ3JlYXRlZCcsdG9kb0FycmF5KVxuICAgICAgICAvLyBORVhULCBJTVBMRU1FTlQgQ0hBTkdJTkcgVE9ET1M7IENIQU5HRSBQUk9QRVJUWSwgREVMRVRFXG4gICAgfSlcblxuICAgIGxldCB0b2RvQXJyYXkgPSBbXTtcblxuICAgIGNvbnN0IHB1c2hUb0FycmF5ID0gKHRvZG8pID0+IHtcbiAgICAgICAgdG9kb0FycmF5LnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUFycmF5ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpO1xuICAgIH1cblxuXG4gICAgY2xhc3MgVG9kbyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgLy8gd2hlbiB0b2RvIGlzIGNyZWF0ZWQsIHB1c2ggdG8gdG9kb2FycmF5XG4gICAgICAgIHB1c2hUb0FycmF5KHRoaXMpO1xuICAgICAgICAvLyB3aGVuIHRvZG8gaXMgY3JlYXRlZCwgcHVibGlzaCB0aGUgZXZlbnQsIHdoaWNoIHRyaWdnZXJzIGNhbGxiYWNrIHRvIGFkZCB0byBwcm9qZWN0XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd0b2RvQWRkZWQnLCB0aGlzKS8vbm90IHN1cmUgaWYgdGhpcyBoYWhhIHdvcmtzIFxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UHJvcChwcm9wLCB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpc1twcm9wXSA9IHZhbHVlO1xuICAgICAgICB9IFxuICAgIH1cbn1cblxuZXhwb3J0IHt0b2RvfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZm9ybUhhbmRsZXIgfSBmcm9tIFwiLi9mb3JtSGFuZGxlclwiO1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuZGlzcGxheSgpO1xucHJvamVjdCgpO1xudG9kbygpO1xuZm9ybUhhbmRsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=