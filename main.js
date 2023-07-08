/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        const index = promptProjectToAdd();
        selectProjectWithIndex(index).addToDo(todo);//not sure if this works
    });

    // CREATE MORE SUBSCRIBES




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

    let test = new Todo(
        'let',
        'let us',
        'now',
        'urgent',
        );
        
    // displayArray();
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '.formHandler'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





(0,_project__WEBPACK_IMPORTED_MODULE_1__.project)();
(0,_todo__WEBPACK_IMPORTED_MODULE_0__.todo)();
Object(function webpackMissingModule() { var e = new Error("Cannot find module '.formHandler'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRTNCOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsOENBQThDO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLElBQUksMkNBQU07QUFDVjtBQUNBLG9EQUFvRDtBQUNwRCxLQUFLOztBQUVMOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRU87QUFDUCxjQUFjOztBQUVkO0FBQ0E7QUFDQSwwREFBMEQsTUFBTTtBQUNoRTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1EQUFtRCxNQUFNO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJrQzs7QUFFbEM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBTTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMxQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ007QUFDTTs7O0FBRzFDLGlEQUFPO0FBQ1AsMkNBQUk7QUFDSiwySUFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QoKSB7XG5cbiAgICBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbiAgICBjb25zdCBwdXNoVG9BcnJheSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QXJyYXkgPSAoKSA9PiBwcm9qZWN0QXJyYXk7XG5cbiAgICBjb25zdCBkaXNwbGF5QXJyYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbXB0UHJvamVjdFRvQWRkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvbXB0KGBjaG9vc2UgYSBwcm9qZWN0ISAke2dldEFycmF5KCkubWFwKChwLCBpbmRleCkgPT4gW3AubmFtZSwgaW5kZXhdKX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RQcm9qZWN0V2l0aEluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRBcnJheSgpW2luZGV4XTtcbiAgICB9XG5cbiAgICAvL2RlbGV0ZSBwcm9qZWN0OyAgXG4gICAgLy8gY3JlYXRlIHByb2plY3RcblxuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHB1c2hUb0FycmF5KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVVNFRFxuICAgICAgICBhZGRUb0RvKHRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LnB1c2godG9kbylcbiAgICAgICAgfVxuICAgICAgICAvLyBOT1QgVVNFRFxuICAgICAgICByZW1vdmVUb0RvKHRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LmZpbHRlcihlbCA9PiBlbCAhPSB0b2RvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVCBVU0VEIEFORCBERVZFTE9QXG4gICAgICAgIGNoYW5nZVRvRG8odG9kbykge1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOT1QgVVNFRCBBTkQgREVWRUxPUFxuICAgICAgICBjaGFuZ2VOYW1lKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHRoaXMgc2hvdWxkIGNyZWF0ZSBhIHByb2plY3QgYW5kIGFkZCBpdCB0byBwcm9qZWN0QXJyYXkuIGlzIHRoaXMgY2xlYW4gY29kZT9cbiAgICBsZXQgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdCgndGVzdFByb2plY3QnKTtcblxuICAgIC8vIHN1YnNjcmliZSB0byB3aGVuIHRvZG8gaXMgYWRkZWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCd0b2RvQWRkZWQnLCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvbXB0UHJvamVjdFRvQWRkKCk7XG4gICAgICAgIHNlbGVjdFByb2plY3RXaXRoSW5kZXgoaW5kZXgpLmFkZFRvRG8odG9kbyk7Ly9ub3Qgc3VyZSBpZiB0aGlzIHdvcmtzXG4gICAgfSk7XG5cbiAgICAvLyBDUkVBVEUgTU9SRSBTVUJTQ1JJQkVTXG5cblxuXG5cbn1cbiIsImV4cG9ydCBjb25zdCBwdWJTdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcblxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIC8vIHdoYXQgZG9lcyB0aGlzLmV2ZW50c1tldmVudF0gbG9vayBsaWtlP1xuICAgICAgICBjb25zb2xlLmxvZyhgc29tZXRoaW5nIHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2ZW50fWApXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XXx8IFtdO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChjYik7XG4gICAgfSxcblxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudCwgY2IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNvbWV0aGluZyB1bnN1YnNjcmliZWQgZnJvbSAke2V2ZW50fWApXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XS5maWx0ZXIoZiA9PiBmICE9IGNiKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBtYWtpbmcgYSBicm9hZGNhc3QgYWJvdXQgJHtldmVudH0gd2l0aCBkYXRhYCk7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgICAgIGYoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbn1cblxuIiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbi8vbWF5IGhhdmUgdG8gZW5jYXBzdWxhdGUgYWxsIG9mIHRoaXMgaW50byBhIGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHRvZG8oKSB7XG5cbiAgICBsZXQgdG9kb0FycmF5ID0gW107XG5cbiAgICBjb25zdCBwdXNoVG9BcnJheSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIHRvZG9BcnJheS5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlBcnJheSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KTtcbiAgICB9XG5cblxuICAgIGNsYXNzIFRvZG8ge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIC8vIHdoZW4gdG9kbyBpcyBjcmVhdGVkLCBwdXNoIHRvIHRvZG9hcnJheVxuICAgICAgICBwdXNoVG9BcnJheSh0aGlzKTtcbiAgICAgICAgLy8gd2hlbiB0b2RvIGlzIGNyZWF0ZWQsIHB1Ymxpc2ggdGhlIGV2ZW50LCB3aGljaCB0cmlnZ2VycyBjYWxsYmFjayB0byBhZGQgdG8gcHJvamVjdFxuICAgICAgICBwdWJTdWIucHVibGlzaCgndG9kb0FkZGVkJywgdGhpcykvL25vdCBzdXJlIGlmIHRoaXMgaGFoYSB3b3JrcyBcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFByb3AocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBsZXQgdGVzdCA9IG5ldyBUb2RvKFxuICAgICAgICAnbGV0JyxcbiAgICAgICAgJ2xldCB1cycsXG4gICAgICAgICdub3cnLFxuICAgICAgICAndXJnZW50JyxcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgLy8gZGlzcGxheUFycmF5KCk7XG59XG5cbmV4cG9ydCB7dG9kb307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGZvcm1IYW5kbGVyIH0gZnJvbSBcIi5mb3JtSGFuZGxlclwiXG5cblxucHJvamVjdCgpO1xudG9kbygpO1xuZm9ybUhhbmRsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=