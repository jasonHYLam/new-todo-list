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


// should handle DOM related functionality. Such as creating, changing and deleting DOM elements.
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

    function getSelectedProject() {
        return projectSelect.value

    }

    // get name of project from select
    projectSelect.addEventListener("change", ()=> {
        // send this code somewhere; use it to match with project
        // IM NOT SURE THIS WORKS, getProject IS USED BY FORMHANDLER AS WELL
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish("getProject", getSelectedProject())
    })
    

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


//handles form related functionality. such as when forms are submitted.
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
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('newTodoCreated',todoArray) //send to display.js ; also, this is the wrong todo array... i need to send this to a project array.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNNO0FBQ1E7QUFDUjs7QUFFcEMsaURBQU87QUFDUCxpREFBTztBQUNQLDJDQUFJO0FBQ0oseURBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2Zvcm1IYW5kbGVyLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbi8vIHNob3VsZCBoYW5kbGUgRE9NIHJlbGF0ZWQgZnVuY3Rpb25hbGl0eS4gU3VjaCBhcyBjcmVhdGluZywgY2hhbmdpbmcgYW5kIGRlbGV0aW5nIERPTSBlbGVtZW50cy5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5KCkge1xuICAgIFxuICAgIC8vIGRpc3BsYXkgcHJvamVjdCBhcnJheSBvbiBmaXJzdCBsb2FkXG4gICAgcHViU3ViLnN1YnNjcmliZSgnbG9hZFBhZ2UnLCBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMpXG5cbiAgICAvLyB3aGVuIG5ldyB0b2RvIGlzIGNyZWF0ZWQsIGRpc3BsYXkgYWxsIHRvZG9zXG4gICAgcHViU3ViLnN1YnNjcmliZSgnbmV3VG9kb0NyZWF0ZWQnLCBkaXNwbGF5UHJvamVjdFRvZG9zKVxuXG4gICAgLy8gd2hlbiBjcmVhdGluZyBuZXcgcHJvamVjdCwgZGlzcGxheSBhbGwgcHJvamVjdHNcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0QWRkZWQnLCBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMpO1xuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGNyZWF0ZURPTVByb3AgPSAoZWxUeXBlLCB2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9Qcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbFR5cGUpO1xuICAgICAgICB0b2RvUHJvcC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKHRvZG9Qcm9wKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRE9NKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvRE9NID0gKHRvZG8pID0+IHtcbiAgICAgICAgY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8udGl0bGUpO1xuICAgICAgICBjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby5kZXNjcmlwdGlvbik7XG4gICAgICAgIGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLmR1ZURhdGUpO1xuICAgICAgICBjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby5wcmlvcml0eSk7XG4gICAgICAgIGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsICdDaGFuZ2UnKTtcbiAgICAgICAgY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgJ0RlbGV0ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0VG9kb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgdG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3RUb2Rvcyh0b2RvQXJyYXkpIHtcbiAgICAgICAgcmVzZXRUb2RvQ29udGFpbmVyKCk7XG4gICAgICAgIHRvZG9BcnJheS5mb3JFYWNoKCh0b2RvKSA9PiBjcmVhdGVUb2RvRE9NKHRvZG8pKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTZWxlY3RcIik7XG4gICAgXG5cbiAgICAvLyBjYW4gb25seSBhc3NpZ24gb25lIGluc3RhbmNlIG9mIGEgTm9kZSwgc28gbmVlZCB0byBjcmVhdGUgbXVsdGlwbGUgaW5zdGFuY2VzXG4gICAgY29uc3QgY3JlYXRlT3B0aW9uRWxlbWVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRPcHRpb25FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHByb2plY3RTZWxlY3QudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgfVxuXG4gICAgY29uc3QgYXNzaWduUHJvamVjdE9wdGlvbiA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIHNlcGFyYXRlIHByb2plY3Qgc2VsZWN0IGFuZCB0b2RvIGZvcm0gcHJvamVjdCBzZWxlY3QuLi5cbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb25FbGVtZW50KHByb2plY3QpKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb25FbGVtZW50KHByb2plY3QpKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucyhwcm9qZWN0QXJyYXkpIHtcbiAgICAgICAgcmVzZXRPcHRpb25FbGVtZW50cygpO1xuICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4gYXNzaWduUHJvamVjdE9wdGlvbihwcm9qZWN0KSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0U2VsZWN0LnZhbHVlXG5cbiAgICB9XG5cbiAgICAvLyBnZXQgbmFtZSBvZiBwcm9qZWN0IGZyb20gc2VsZWN0XG4gICAgcHJvamVjdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpPT4ge1xuICAgICAgICAvLyBzZW5kIHRoaXMgY29kZSBzb21ld2hlcmU7IHVzZSBpdCB0byBtYXRjaCB3aXRoIHByb2plY3RcbiAgICAgICAgLy8gSU0gTk9UIFNVUkUgVEhJUyBXT1JLUywgZ2V0UHJvamVjdCBJUyBVU0VEIEJZIEZPUk1IQU5ETEVSIEFTIFdFTExcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goXCJnZXRQcm9qZWN0XCIsIGdldFNlbGVjdGVkUHJvamVjdCgpKVxuICAgIH0pXG4gICAgXG5cbn0iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuLy9oYW5kbGVzIGZvcm0gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LiBzdWNoIGFzIHdoZW4gZm9ybXMgYXJlIHN1Ym1pdHRlZC5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtSGFuZGxlcigpIHtcblxuICAgIGNvbnN0IHJlc2V0Rm9ybSA9IChmb3JtKSA9PiB7XG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKVxuICAgIGNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9TdWJtaXRcIik7XG5cbiAgICBjb25zdCBnZXRUb2RvQXJncyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvQXJncyA9IFt0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eV1cbiAgICByZXR1cm4gdG9kb0FyZ3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdFRvU2VuZFRvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3QudmFsdWU7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIHJlZmFjdG9yIHRvIHVzZSBkYXRhIGF0dHJpYnV0ZSBhbmQgaW5kZXguLi4gcGhvb2V5XG4gICAgfVxuXG4gICAgc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBnZXRQcm9qZWN0VG9TZW5kVG8oKTtcbiAgICAgICAgLy8gcHVic3ViIGZvciBjcmVhdGluZyBhIG5ldyB0b2RvXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIGdldFRvZG9BcmdzKCkpOyAvL3NlbmQgdG8gdG9kby5qc1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZ2V0UHJvamVjdCcsIGdldFByb2plY3RUb1NlbmRUbygpKS8vbWF5IG5lZWQgdG8gcmVtb3ZlIHRoZSAoKVxuICAgICAgICByZXNldEZvcm0odG9kb0Zvcm0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIilcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFN1Ym1pdCcpXG4gICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBwdWJTdWIgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtIGlucHV0JykudmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybSBpbnB1dCcpLnZhbHVlKVxuICAgICAgICByZXNldEZvcm0ocHJvamVjdEZvcm0pO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KCkge1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIHdoZW4gdG9kbyBpcyBhZGRlZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2dldFByb2plY3QnLChwcm9qZWN0TWF0Y2gpID0+IHsvL2R1bm5vIHdoYXQgdG8gY2FsbCBwcm9qZWN0TWF0Y2g7IHRoZSB0aGluZyB0aGF0IGkgcGFzcyB0byBmaW5kIHRoZSBjb3JyZWN0IHByb2plY3RcbiAgICAgICAgY29uc3QgdGVzdCA9IHByb2plY3RBcnJheS5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TWF0Y2gpXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IHRoaXMgJylcbiAgICAgICAgY29uc29sZS5sb2codGVzdCk7XG5cbiAgICAgICAgLy8gcHViU3ViIHRvIGRpc3BsYXkgdGhlIHRvZG9zXG4gICAgfSk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gd2hlbiBwcm9qZWN0Zm9ybSBpcyBzdWJtaXR0ZWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0Rm9ybVN1Ym1pdHRlZCcsIChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTsgXG5cbiAgICAgICAgLy8gd2hlbiBhIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWRcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RBZGRlZCcsIHByb2plY3RBcnJheSk7XG4gICAgfSlcblxuXG5cbiAgICBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbiAgICBjb25zdCBwdXNoVG9BcnJheSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QXJyYXkgPSAoKSA9PiBwcm9qZWN0QXJyYXk7XG5cbiAgICBjb25zdCBkaXNwbGF5QXJyYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbXB0UHJvamVjdFRvQWRkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvbXB0KGBjaG9vc2UgYSBwcm9qZWN0ISAke2dldEFycmF5KCkubWFwKChwLCBpbmRleCkgPT4gW3AubmFtZSwgaW5kZXhdKX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RQcm9qZWN0V2l0aEluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRBcnJheSgpW2luZGV4XTtcbiAgICB9XG5cbiAgICAvL2RlbGV0ZSBwcm9qZWN0OyAgXG4gICAgLy8gY3JlYXRlIHByb2plY3RcblxuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHB1c2hUb0FycmF5KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVVNFRFxuICAgICAgICBhZGRUb0RvKHRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LnB1c2godG9kbylcbiAgICAgICAgfVxuICAgICAgICAvLyBOT1QgVVNFRFxuICAgICAgICByZW1vdmVUb0RvKHRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LmZpbHRlcihlbCA9PiBlbCAhPSB0b2RvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVCBVU0VEIEFORCBERVZFTE9QXG4gICAgICAgIGNoYW5nZVRvRG8odG9kbykge1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOT1QgVVNFRCBBTkQgREVWRUxPUFxuICAgICAgICBjaGFuZ2VOYW1lKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGlzIHNob3VsZCBjcmVhdGUgYSBwcm9qZWN0IGFuZCBhZGQgaXQgdG8gcHJvamVjdEFycmF5LiBpcyB0aGlzIGNsZWFuIGNvZGU/XG5cbiAgICBjb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoJ015IEZpcnN0IFByb2plY3QnKTtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2xvYWRQYWdlJywgcHJvamVjdEFycmF5KVxuICAgIH1cblxuXG5cbiAgICAvLyBjcmVhdGUgbmV3IHByb2plY3Qgb24gZmlyc3QgbG9hZFxuXG4gICAgcGFnZUxvYWQoKTtcbn1cblxuXG4iLCJleHBvcnQgY29uc3QgcHViU3ViID0ge1xuICAgIGV2ZW50czoge30sXG5cbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50LCBjYikge1xuICAgICAgICAvLyB3aGF0IGRvZXMgdGhpcy5ldmVudHNbZXZlbnRdIGxvb2sgbGlrZT9cbiAgICAgICAgY29uc29sZS5sb2coYHNvbWV0aGluZyBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldmVudH1gKVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF18fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2IpO1xuICAgIH0sXG5cbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzb21ldGhpbmcgdW5zdWJzY3JpYmVkIGZyb20gJHtldmVudH1gKVxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0uZmlsdGVyKGYgPT4gZiAhPSBjYilcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbWFraW5nIGEgYnJvYWRjYXN0IGFib3V0ICR7ZXZlbnR9IHdpdGggZGF0YWApO1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG59XG5cbiIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJztcblxuLy9tYXkgaGF2ZSB0byBlbmNhcHN1bGF0ZSBhbGwgb2YgdGhpcyBpbnRvIGEgZnVuY3Rpb25cblxuZnVuY3Rpb24gdG9kbygpIHtcblxuICAgIC8vIHB1YnN1YiBTVUJTQ1JJQkVcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICBwdWJTdWIucHVibGlzaCgnbmV3VG9kb0NyZWF0ZWQnLHRvZG9BcnJheSkgLy9zZW5kIHRvIGRpc3BsYXkuanMgOyBhbHNvLCB0aGlzIGlzIHRoZSB3cm9uZyB0b2RvIGFycmF5Li4uIGkgbmVlZCB0byBzZW5kIHRoaXMgdG8gYSBwcm9qZWN0IGFycmF5LlxuICAgICAgICAvLyBORVhULCBJTVBMRU1FTlQgQ0hBTkdJTkcgVE9ET1M7IENIQU5HRSBQUk9QRVJUWSwgREVMRVRFXG4gICAgfSlcblxuICAgIGxldCB0b2RvQXJyYXkgPSBbXTtcblxuICAgIGNvbnN0IHB1c2hUb0FycmF5ID0gKHRvZG8pID0+IHtcbiAgICAgICAgdG9kb0FycmF5LnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUFycmF5ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpO1xuICAgIH1cblxuXG4gICAgY2xhc3MgVG9kbyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgLy8gd2hlbiB0b2RvIGlzIGNyZWF0ZWQsIHB1c2ggdG8gdG9kb2FycmF5XG4gICAgICAgIHB1c2hUb0FycmF5KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0UHJvcChwcm9wLCB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpc1twcm9wXSA9IHZhbHVlO1xuICAgICAgICB9IFxuICAgIH1cbn1cblxuZXhwb3J0IHt0b2RvfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZm9ybUhhbmRsZXIgfSBmcm9tIFwiLi9mb3JtSGFuZGxlclwiO1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuZGlzcGxheSgpO1xucHJvamVjdCgpO1xudG9kbygpO1xuZm9ybUhhbmRsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=