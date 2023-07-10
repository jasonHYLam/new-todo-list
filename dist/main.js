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

    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('displaySelectedProject', (project) => {
        console.log('project')
        console.log(project)
        console.log('project array')
        console.log(project.todoArray)
        changeHeader(project.name);
        displayProjectTodos(project.todoArray);
    })



    const todoContainer = document.querySelector("#todoContainer");

    const createDOMProp = (elType, value, className) => {
        const todoProp = document.createElement(elType);
        todoProp.textContent = value;
        todoProp.classList.add(className);
        return todoProp;
        // change 
    }

    const createTodoDOM = (todo) => {
        const todoDOM = document.createElement('div');
        // todoDOM.appendChild(createDOMProp('span', todo.title, 'title'));
        // createDOMProp('span', todo.description, 'description');
        // createDOMProp('span', todo.dueDate, 'dueDate');
        // createDOMProp('span', todo.priority, 'priority');
        // createDOMProp('button', 'Change', 'change');
        // createDOMProp('button', 'Delete', 'delete');
        todoDOM.appendChild(createDOMProp('span', todo.title, 'title'));
        todoDOM.appendChild(createDOMProp('span', todo.description, 'description'));
        todoDOM.appendChild(createDOMProp('span', todo.dueDate, 'dueDate'));
        todoDOM.appendChild(createDOMProp('span', todo.priority, 'priority'));
        todoDOM.appendChild(createDOMProp('button', 'Change', 'change'));
        todoDOM.appendChild(createDOMProp('button', 'Delete', 'delete'));
        todoContainer.appendChild(todoDOM);
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

    // when clicking on project selects
    projectSelect.addEventListener("change", ()=> {
        // send this code to project.js
        // IM NOT SURE THIS WORKS, getProject IS USED BY FORMHANDLER AS WELL
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish("getProjectFromProjectSelect", getSelectedProject())
    })
    

    const header = document.querySelector("#header");
    const changeHeader = (projectName) => {
        header.textContent = "";
        header.textContent = projectName;
    }

    todoContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains('delete')) {

        }
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

    const getSelectedProjectOption = () => {
        const project = document.querySelector("#projectForTodo");
        return project.value;
        // may need to refactor to use data attribute and index... phooey
    }

    submitTodo.addEventListener("click", (e) => {
        e.preventDefault();
        // pubsub for creating a new todo
        //try swapping these and see what happens
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('getProjectFromTodoForm', getSelectedProjectOption())//send to project.js
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('todoFormSubmitted', getTodoArgs()); //send to todo.js
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
    let projectArray = [];


    let matchingProject = {};
    //getProject and sendTodoToProjectTodoArray occur consecutively
    // get project from todo form; first get matching project, then wait for todo to be added to the project
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('getProjectFromTodoForm',(projectMatch) => {//dunno what to call projectMatch; the thing that i pass to find the correct project
        const selectedProject = projectArray.find((project) => {return project.name == projectMatch})//also, may need to use data attribute, rather than name. or use form vaolidation to not use same name
        setMatchingProject(selectedProject);
    });

    //get project from project select; immediately publish to display array
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('getProjectFromProjectSelect',(projectMatch) => {
        const selectedProject = projectArray.find((project) => {return project.name == projectMatch})
        setMatchingProject(selectedProject);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('displaySelectedProject', matchingProject)
    });

    //add todo to project todoArray
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('sendTodoToProjectTodoArray', (todo) => {
        addTodoToProjectArray(matchingProject, todo)
        // pubSub to display the todos; send to display.js
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('displaySelectedProject', matchingProject)
    });

    // subscribe to when projectform is submitted
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 
        setMatchingProject(newProject)

        // when a new project is created
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('projectAdded', projectArray);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('displaySelectedProject', matchingProject)
    })



    const setMatchingProject = (project) => {
        matchingProject = project;
    }
    const addTodoToProjectArray = (project, todo) => {
        project.todoArray.push(todo)
    }

    const increaseProjects = (project) => {
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
            increaseProjects(this);
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
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('todoFormSubmitted', (args) => {//probably could destructure this tbh
        const newTodo = new Todo(args[0], args[1], args[2], args[3])

        // in fact, what i think needs to happen is to publish the todo to an event, and project will subscribe to put that in todoarray.
        // and then that will publish to display.
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

        // may have to move this elsewhere, but when new todo is created, append it to a project todoArray
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('sendTodoToProjectTodoArray', this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkNBQTJDO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwyQ0FBTTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDNUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDTTtBQUNRO0FBQ1I7O0FBRXBDLGlEQUFPO0FBQ1AsaURBQU87QUFDUCwyQ0FBSTtBQUNKLHlEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9mb3JtSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG4vLyBzaG91bGQgaGFuZGxlIERPTSByZWxhdGVkIGZ1bmN0aW9uYWxpdHkuIFN1Y2ggYXMgY3JlYXRpbmcsIGNoYW5naW5nIGFuZCBkZWxldGluZyBET00gZWxlbWVudHMuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBcbiAgICAvLyBkaXNwbGF5IHByb2plY3QgYXJyYXkgb24gZmlyc3QgbG9hZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2xvYWRQYWdlJywgZGlzcGxheUFsbFByb2plY3RPcHRpb25zKVxuXG4gICAgLy8gd2hlbiBuZXcgdG9kbyBpcyBjcmVhdGVkLCBkaXNwbGF5IGFsbCB0b2Rvc1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ25ld1RvZG9DcmVhdGVkJywgZGlzcGxheVByb2plY3RUb2RvcylcblxuICAgIC8vIHdoZW4gY3JlYXRpbmcgbmV3IHByb2plY3QsIGRpc3BsYXkgYWxsIHByb2plY3RzXG4gICAgcHViU3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgZGlzcGxheUFsbFByb2plY3RPcHRpb25zKTtcblxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdCcpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0IGFycmF5JylcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50b2RvQXJyYXkpXG4gICAgICAgIGNoYW5nZUhlYWRlcihwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdFRvZG9zKHByb2plY3QudG9kb0FycmF5KTtcbiAgICB9KVxuXG5cblxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Db250YWluZXJcIik7XG5cbiAgICBjb25zdCBjcmVhdGVET01Qcm9wID0gKGVsVHlwZSwgdmFsdWUsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvUHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxUeXBlKTtcbiAgICAgICAgdG9kb1Byb3AudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgdG9kb1Byb3AuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gdG9kb1Byb3A7XG4gICAgICAgIC8vIGNoYW5nZSBcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvRE9NID0gKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0RPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyB0b2RvRE9NLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLnRpdGxlLCAndGl0bGUnKSk7XG4gICAgICAgIC8vIGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLmRlc2NyaXB0aW9uLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgLy8gY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8uZHVlRGF0ZSwgJ2R1ZURhdGUnKTtcbiAgICAgICAgLy8gY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8ucHJpb3JpdHksICdwcmlvcml0eScpO1xuICAgICAgICAvLyBjcmVhdGVET01Qcm9wKCdidXR0b24nLCAnQ2hhbmdlJywgJ2NoYW5nZScpO1xuICAgICAgICAvLyBjcmVhdGVET01Qcm9wKCdidXR0b24nLCAnRGVsZXRlJywgJ2RlbGV0ZScpO1xuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLnRpdGxlLCAndGl0bGUnKSk7XG4gICAgICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8uZGVzY3JpcHRpb24sICdkZXNjcmlwdGlvbicpKTtcbiAgICAgICAgdG9kb0RPTS5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby5kdWVEYXRlLCAnZHVlRGF0ZScpKTtcbiAgICAgICAgdG9kb0RPTS5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby5wcmlvcml0eSwgJ3ByaW9yaXR5JykpO1xuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsICdDaGFuZ2UnLCAnY2hhbmdlJykpO1xuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsICdEZWxldGUnLCAnZGVsZXRlJykpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9ET00pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0VG9kb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgdG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3RUb2Rvcyh0b2RvQXJyYXkpIHtcbiAgICAgICAgcmVzZXRUb2RvQ29udGFpbmVyKCk7XG4gICAgICAgIHRvZG9BcnJheS5mb3JFYWNoKCh0b2RvKSA9PiBjcmVhdGVUb2RvRE9NKHRvZG8pKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTZWxlY3RcIik7XG4gICAgXG5cbiAgICAvLyBjYW4gb25seSBhc3NpZ24gb25lIGluc3RhbmNlIG9mIGEgTm9kZSwgc28gbmVlZCB0byBjcmVhdGUgbXVsdGlwbGUgaW5zdGFuY2VzXG4gICAgY29uc3QgY3JlYXRlT3B0aW9uRWxlbWVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRPcHRpb25FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHByb2plY3RTZWxlY3QudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgfVxuXG4gICAgY29uc3QgYXNzaWduUHJvamVjdE9wdGlvbiA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIHNlcGFyYXRlIHByb2plY3Qgc2VsZWN0IGFuZCB0b2RvIGZvcm0gcHJvamVjdCBzZWxlY3QuLi5cbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb25FbGVtZW50KHByb2plY3QpKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb25FbGVtZW50KHByb2plY3QpKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucyhwcm9qZWN0QXJyYXkpIHtcbiAgICAgICAgcmVzZXRPcHRpb25FbGVtZW50cygpO1xuICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4gYXNzaWduUHJvamVjdE9wdGlvbihwcm9qZWN0KSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0U2VsZWN0LnZhbHVlXG5cbiAgICB9XG5cbiAgICAvLyB3aGVuIGNsaWNraW5nIG9uIHByb2plY3Qgc2VsZWN0c1xuICAgIHByb2plY3RTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKT0+IHtcbiAgICAgICAgLy8gc2VuZCB0aGlzIGNvZGUgdG8gcHJvamVjdC5qc1xuICAgICAgICAvLyBJTSBOT1QgU1VSRSBUSElTIFdPUktTLCBnZXRQcm9qZWN0IElTIFVTRUQgQlkgRk9STUhBTkRMRVIgQVMgV0VMTFxuICAgICAgICBwdWJTdWIucHVibGlzaChcImdldFByb2plY3RGcm9tUHJvamVjdFNlbGVjdFwiLCBnZXRTZWxlY3RlZFByb2plY3QoKSlcbiAgICB9KVxuICAgIFxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIik7XG4gICAgY29uc3QgY2hhbmdlSGVhZGVyID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XG5cbiAgICAgICAgfVxuICAgIH0pXG5cbn0iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuLy9oYW5kbGVzIGZvcm0gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LiBzdWNoIGFzIHdoZW4gZm9ybXMgYXJlIHN1Ym1pdHRlZC5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtSGFuZGxlcigpIHtcblxuICAgIGNvbnN0IHJlc2V0Rm9ybSA9IChmb3JtKSA9PiB7XG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKVxuICAgIGNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9TdWJtaXRcIik7XG5cbiAgICBjb25zdCBnZXRUb2RvQXJncyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvQXJncyA9IFt0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eV1cbiAgICByZXR1cm4gdG9kb0FyZ3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VsZWN0ZWRQcm9qZWN0T3B0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3QudmFsdWU7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIHJlZmFjdG9yIHRvIHVzZSBkYXRhIGF0dHJpYnV0ZSBhbmQgaW5kZXguLi4gcGhvb2V5XG4gICAgfVxuXG4gICAgc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBwdWJzdWIgZm9yIGNyZWF0aW5nIGEgbmV3IHRvZG9cbiAgICAgICAgLy90cnkgc3dhcHBpbmcgdGhlc2UgYW5kIHNlZSB3aGF0IGhhcHBlbnNcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2dldFByb2plY3RGcm9tVG9kb0Zvcm0nLCBnZXRTZWxlY3RlZFByb2plY3RPcHRpb24oKSkvL3NlbmQgdG8gcHJvamVjdC5qc1xuICAgICAgICBwdWJTdWIucHVibGlzaCgndG9kb0Zvcm1TdWJtaXR0ZWQnLCBnZXRUb2RvQXJncygpKTsgLy9zZW5kIHRvIHRvZG8uanNcbiAgICAgICAgcmVzZXRGb3JtKHRvZG9Gb3JtKTtcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtXCIpXG5cbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RTdWJtaXQnKVxuICAgIHN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gcHViU3ViIGZvciBjcmVhdGluZyBhIG5ldyBwcm9qZWN0XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdwcm9qZWN0Rm9ybVN1Ym1pdHRlZCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybSBpbnB1dCcpLnZhbHVlKVxuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm0gaW5wdXQnKS52YWx1ZSlcbiAgICAgICAgcmVzZXRGb3JtKHByb2plY3RGb3JtKTtcbiAgICB9KVxufSIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdCgpIHtcbiAgICBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cblxuICAgIGxldCBtYXRjaGluZ1Byb2plY3QgPSB7fTtcbiAgICAvL2dldFByb2plY3QgYW5kIHNlbmRUb2RvVG9Qcm9qZWN0VG9kb0FycmF5IG9jY3VyIGNvbnNlY3V0aXZlbHlcbiAgICAvLyBnZXQgcHJvamVjdCBmcm9tIHRvZG8gZm9ybTsgZmlyc3QgZ2V0IG1hdGNoaW5nIHByb2plY3QsIHRoZW4gd2FpdCBmb3IgdG9kbyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2dldFByb2plY3RGcm9tVG9kb0Zvcm0nLChwcm9qZWN0TWF0Y2gpID0+IHsvL2R1bm5vIHdoYXQgdG8gY2FsbCBwcm9qZWN0TWF0Y2g7IHRoZSB0aGluZyB0aGF0IGkgcGFzcyB0byBmaW5kIHRoZSBjb3JyZWN0IHByb2plY3RcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5LmZpbmQoKHByb2plY3QpID0+IHtyZXR1cm4gcHJvamVjdC5uYW1lID09IHByb2plY3RNYXRjaH0pLy9hbHNvLCBtYXkgbmVlZCB0byB1c2UgZGF0YSBhdHRyaWJ1dGUsIHJhdGhlciB0aGFuIG5hbWUuIG9yIHVzZSBmb3JtIHZhb2xpZGF0aW9uIHRvIG5vdCB1c2Ugc2FtZSBuYW1lXG4gICAgICAgIHNldE1hdGNoaW5nUHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy9nZXQgcHJvamVjdCBmcm9tIHByb2plY3Qgc2VsZWN0OyBpbW1lZGlhdGVseSBwdWJsaXNoIHRvIGRpc3BsYXkgYXJyYXlcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0RnJvbVByb2plY3RTZWxlY3QnLChwcm9qZWN0TWF0Y2gpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5LmZpbmQoKHByb2plY3QpID0+IHtyZXR1cm4gcHJvamVjdC5uYW1lID09IHByb2plY3RNYXRjaH0pXG4gICAgICAgIHNldE1hdGNoaW5nUHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZGlzcGxheVNlbGVjdGVkUHJvamVjdCcsIG1hdGNoaW5nUHJvamVjdClcbiAgICB9KTtcblxuICAgIC8vYWRkIHRvZG8gdG8gcHJvamVjdCB0b2RvQXJyYXlcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdzZW5kVG9kb1RvUHJvamVjdFRvZG9BcnJheScsICh0b2RvKSA9PiB7XG4gICAgICAgIGFkZFRvZG9Ub1Byb2plY3RBcnJheShtYXRjaGluZ1Byb2plY3QsIHRvZG8pXG4gICAgICAgIC8vIHB1YlN1YiB0byBkaXNwbGF5IHRoZSB0b2Rvczsgc2VuZCB0byBkaXNwbGF5LmpzXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KVxuICAgIH0pO1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIHdoZW4gcHJvamVjdGZvcm0gaXMgc3VibWl0dGVkXG4gICAgcHViU3ViLnN1YnNjcmliZSgncHJvamVjdEZvcm1TdWJtaXR0ZWQnLCAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7IFxuICAgICAgICBzZXRNYXRjaGluZ1Byb2plY3QobmV3UHJvamVjdClcblxuICAgICAgICAvLyB3aGVuIGEgbmV3IHByb2plY3QgaXMgY3JlYXRlZFxuICAgICAgICBwdWJTdWIucHVibGlzaCgncHJvamVjdEFkZGVkJywgcHJvamVjdEFycmF5KTtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpXG4gICAgfSlcblxuXG5cbiAgICBjb25zdCBzZXRNYXRjaGluZ1Byb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBtYXRjaGluZ1Byb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbiAgICBjb25zdCBhZGRUb2RvVG9Qcm9qZWN0QXJyYXkgPSAocHJvamVjdCwgdG9kbykgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9BcnJheS5wdXNoKHRvZG8pXG4gICAgfVxuXG4gICAgY29uc3QgaW5jcmVhc2VQcm9qZWN0cyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QXJyYXkgPSAoKSA9PiBwcm9qZWN0QXJyYXk7XG5cbiAgICBjb25zdCBkaXNwbGF5QXJyYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbXB0UHJvamVjdFRvQWRkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvbXB0KGBjaG9vc2UgYSBwcm9qZWN0ISAke2dldEFycmF5KCkubWFwKChwLCBpbmRleCkgPT4gW3AubmFtZSwgaW5kZXhdKX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RQcm9qZWN0V2l0aEluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRBcnJheSgpW2luZGV4XTtcbiAgICB9XG5cbiAgICAvL2RlbGV0ZSBwcm9qZWN0OyAgXG4gICAgLy8gY3JlYXRlIHByb2plY3RcblxuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGluY3JlYXNlUHJvamVjdHModGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVU0VEXG4gICAgICAgIGFkZFRvRG8odG9kbykge1xuICAgICAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaCh0b2RvKVxuICAgICAgICB9XG4gICAgICAgIC8vIE5PVCBVU0VEXG4gICAgICAgIHJlbW92ZVRvRG8odG9kbykge1xuICAgICAgICAgICAgdGhpcy50b2RvQXJyYXkuZmlsdGVyKGVsID0+IGVsICE9IHRvZG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTk9UIFVTRUQgQU5EIERFVkVMT1BcbiAgICAgICAgY2hhbmdlVG9Ebyh0b2RvKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVCBVU0VEIEFORCBERVZFTE9QXG4gICAgICAgIGNoYW5nZU5hbWUobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoaXMgc2hvdWxkIGNyZWF0ZSBhIHByb2plY3QgYW5kIGFkZCBpdCB0byBwcm9qZWN0QXJyYXkuIGlzIHRoaXMgY2xlYW4gY29kZT9cblxuICAgIGNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdCgnTXkgRmlyc3QgUHJvamVjdCcpO1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnbG9hZFBhZ2UnLCBwcm9qZWN0QXJyYXkpXG4gICAgfVxuXG5cblxuICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdCBvbiBmaXJzdCBsb2FkXG5cbiAgICBwYWdlTG9hZCgpO1xufVxuXG5cbiIsImV4cG9ydCBjb25zdCBwdWJTdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcblxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIC8vIHdoYXQgZG9lcyB0aGlzLmV2ZW50c1tldmVudF0gbG9vayBsaWtlP1xuICAgICAgICBjb25zb2xlLmxvZyhgc29tZXRoaW5nIHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2ZW50fWApXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XXx8IFtdO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChjYik7XG4gICAgfSxcblxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudCwgY2IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNvbWV0aGluZyB1bnN1YnNjcmliZWQgZnJvbSAke2V2ZW50fWApXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XS5maWx0ZXIoZiA9PiBmICE9IGNiKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBtYWtpbmcgYSBicm9hZGNhc3QgYWJvdXQgJHtldmVudH0gd2l0aCBkYXRhYCk7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgICAgIGYoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbn1cblxuIiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG4vL21heSBoYXZlIHRvIGVuY2Fwc3VsYXRlIGFsbCBvZiB0aGlzIGludG8gYSBmdW5jdGlvblxuXG5mdW5jdGlvbiB0b2RvKCkge1xuXG4gICAgLy8gcHVic3ViIFNVQlNDUklCRVxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3RvZG9Gb3JtU3VibWl0dGVkJywgKGFyZ3MpID0+IHsvL3Byb2JhYmx5IGNvdWxkIGRlc3RydWN0dXJlIHRoaXMgdGJoXG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuXG4gICAgICAgIC8vIGluIGZhY3QsIHdoYXQgaSB0aGluayBuZWVkcyB0byBoYXBwZW4gaXMgdG8gcHVibGlzaCB0aGUgdG9kbyB0byBhbiBldmVudCwgYW5kIHByb2plY3Qgd2lsbCBzdWJzY3JpYmUgdG8gcHV0IHRoYXQgaW4gdG9kb2FycmF5LlxuICAgICAgICAvLyBhbmQgdGhlbiB0aGF0IHdpbGwgcHVibGlzaCB0byBkaXNwbGF5LlxuICAgICAgICAvLyBORVhULCBJTVBMRU1FTlQgQ0hBTkdJTkcgVE9ET1M7IENIQU5HRSBQUk9QRVJUWSwgREVMRVRFXG4gICAgfSlcblxuICAgIGxldCB0b2RvQXJyYXkgPSBbXTtcblxuICAgIGNvbnN0IHB1c2hUb0FycmF5ID0gKHRvZG8pID0+IHtcbiAgICAgICAgdG9kb0FycmF5LnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUFycmF5ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpO1xuICAgIH1cblxuXG4gICAgY2xhc3MgVG9kbyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgLy8gd2hlbiB0b2RvIGlzIGNyZWF0ZWQsIHB1c2ggdG8gdG9kb2FycmF5XG4gICAgICAgIHB1c2hUb0FycmF5KHRoaXMpO1xuXG4gICAgICAgIC8vIG1heSBoYXZlIHRvIG1vdmUgdGhpcyBlbHNld2hlcmUsIGJ1dCB3aGVuIG5ldyB0b2RvIGlzIGNyZWF0ZWQsIGFwcGVuZCBpdCB0byBhIHByb2plY3QgdG9kb0FycmF5XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdzZW5kVG9kb1RvUHJvamVjdFRvZG9BcnJheScsIHRoaXMpXG4gICAgICAgIH1cblxuICAgICAgICBzZXRQcm9wKHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH0gXG4gICAgfVxufVxuXG5leHBvcnQge3RvZG99OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBmb3JtSGFuZGxlciB9IGZyb20gXCIuL2Zvcm1IYW5kbGVyXCI7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5kaXNwbGF5KCk7XG5wcm9qZWN0KCk7XG50b2RvKCk7XG5mb3JtSGFuZGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==