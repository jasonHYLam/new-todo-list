/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
}
#body {
    display: flex;
    flex: 1;


}

#left {
    background-color: blueviolet;
}

#header {
    height: 10vh;
}

.todoDOM {
    cursor: pointer;
    padding: 20px 5px 20px;
    box-shadow: 0px 1px 1px black;
    border: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,OAAO;;;AAGX;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,6BAA6B;IAC7B,YAAY;AAChB","sourcesContent":["body {\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n#body {\n    display: flex;\n    flex: 1;\n\n\n}\n\n#left {\n    background-color: blueviolet;\n}\n\n#header {\n    height: 10vh;\n}\n\n.todoDOM {\n    cursor: pointer;\n    padding: 20px 5px 20px;\n    box-shadow: 0px 1px 1px black;\n    border: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('loadInitialOptions', displayAllProjectOptions);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('loadInitialProject', (project) => {
        changeHeader(project.name);
        displayProjectTodos(project.todoArray); 
        setProjectSelectOption(project);
    })

    // when new todo is created, display all todos
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('newTodoCreated', displayProjectTodos)

    // when creating new project, display all projects
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('projectAdded', displayAllProjectOptions);

    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('displaySelectedProject', (project) => {
        changeHeader(project.name);
        displayProjectTodos(project.todoArray); 
        setProjectSelectOption(project);
    })


    const todoContainer = document.querySelector("#todoContainer");

    const createDOMProp = (elType, value, className) => {
        const todoProp = document.createElement(elType);
        todoProp.textContent = value;
        todoProp.classList.add(className);
        return todoProp;
    }

    const createTodoDOM = (todo) => {
        const todoDOM = document.createElement('div');
        todoDOM.classList.add('todoDOM');
        todoDOM.setAttribute('data-index', todo.todoNumber);
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
        option.value = project.name;
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

    // when creating a project, make the projectSelect value be matching Project... 
    function setProjectSelectOption(project) {
        const projectSelectInTodoForm = document.querySelector("#projectForTodo");
        for (let i = 0; i < projectSelect.length; i++) {
            if (projectSelect[i].textContent == project.name) {
                projectSelect.value = projectSelect[i].value;
                projectSelectInTodoForm.value = projectSelect[i].value;

            }
        }
    }

    function getSelectedProject() {
        return projectSelect.value

    }

    // when clicking on project selects
    projectSelect.addEventListener("change", ()=> {
        // send this code to project.js
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish("getProjectFromProjectSelect", getSelectedProject())
    })
    

    const header = document.querySelector("#project-header");
    const changeHeader = (projectName) => {
        header.textContent = "";
        header.textContent = projectName;
    }

    // delete todo DOM
    todoContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains('delete')) {
            // publish the data index of the todo DOM, to project
            _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('getTodoToModify', e.target.parentNode.getAttribute('data-index'));
        }
    })

    // click change todo button
    todoContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains('change')) {
            // create a form where initial values are that of the todo DOM text
            // and when clicking submit, send todo index to project.js to get corresponding todo, so that it can be modified
            // then be sent the project so that it can be displayed again
        }
    })

    // TODO 
    // when clicking on todo, expand it; add class that contains a larger height value
    todoContainer.addEventListener("click", (e) => {
        console.log(e.target.classList);
        if (e.target.classList.contains('todoDOM')) {
            console.log('oh yea')
        }
    })
    // show its description; maybe unhide it, by removing a hidden class

    // priortiy color; value of priority should determine color of A div, by use of function to add class to that div
    // probably use switch function

    // when clicking again, add the hidden class to description and remove class of expansion

    //when changing todo, send form input, send DOM index, then display matching todo

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


    // is matchingProject variable flawed?
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
        console.log(projectArray);
    });

    // subscribe to when projectform is submitted
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 
        setMatchingProject(newProject)

        // when a new project is created
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('projectAdded', projectArray); //needed to display all project options
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
    })

    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('getTodoToModify', (todoIndex)=> {
        // modifies in place, mutating the original array. this is what we want
        matchingProject.todoArray.splice(
            matchingProject.todoArray.findIndex((item) => item.todoNumber == todoIndex), 1)

        // now display again
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
        // added this below
        setMatchingProject(testProject);
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('loadInitialOptions', projectArray);

        // added this below
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('loadInitialProject', matchingProject);
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

    let todoCounter = 0;

    const incrementCounter = () => {
        todoCounter++
    }


    class Todo {
        constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.todoNumber = todoCounter;
        incrementCounter();

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_display__WEBPACK_IMPORTED_MODULE_3__.display)();
(0,_project__WEBPACK_IMPORTED_MODULE_1__.project)();
(0,_todo__WEBPACK_IMPORTED_MODULE_0__.todo)();
(0,_formHandler__WEBPACK_IMPORTED_MODULE_2__.formHandler)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L25ldy10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvZm9ybUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuXG5cbn1cblxuI2xlZnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59XG5cbiNoZWFkZXIge1xuICAgIGhlaWdodDogMTB2aDtcbn1cblxuLnRvZG9ET00ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDVweCAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixPQUFPOzs7QUFHWDs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG5cXG5cXG59XFxuXFxuI2xlZnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4udG9kb0RPTSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMjBweCA1cHggMjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG4vLyBzaG91bGQgaGFuZGxlIERPTSByZWxhdGVkIGZ1bmN0aW9uYWxpdHkuIFN1Y2ggYXMgY3JlYXRpbmcsIGNoYW5naW5nIGFuZCBkZWxldGluZyBET00gZWxlbWVudHMuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBcblxuXG4gICAgLy8gZGlzcGxheSBwcm9qZWN0IGFycmF5IG9uIGZpcnN0IGxvYWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdsb2FkSW5pdGlhbE9wdGlvbnMnLCBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMpO1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2xvYWRJbml0aWFsUHJvamVjdCcsIChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNoYW5nZUhlYWRlcihwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdFRvZG9zKHByb2plY3QudG9kb0FycmF5KTsgXG4gICAgICAgIHNldFByb2plY3RTZWxlY3RPcHRpb24ocHJvamVjdCk7XG4gICAgfSlcblxuICAgIC8vIHdoZW4gbmV3IHRvZG8gaXMgY3JlYXRlZCwgZGlzcGxheSBhbGwgdG9kb3NcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCduZXdUb2RvQ3JlYXRlZCcsIGRpc3BsYXlQcm9qZWN0VG9kb3MpXG5cbiAgICAvLyB3aGVuIGNyZWF0aW5nIG5ldyBwcm9qZWN0LCBkaXNwbGF5IGFsbCBwcm9qZWN0c1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucyk7XG5cbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgKHByb2plY3QpID0+IHtcbiAgICAgICAgY2hhbmdlSGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VG9kb3MocHJvamVjdC50b2RvQXJyYXkpOyBcbiAgICAgICAgc2V0UHJvamVjdFNlbGVjdE9wdGlvbihwcm9qZWN0KTtcbiAgICB9KVxuXG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY3JlYXRlRE9NUHJvcCA9IChlbFR5cGUsIHZhbHVlLCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb1Byb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsVHlwZSk7XG4gICAgICAgIHRvZG9Qcm9wLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIHRvZG9Qcm9wLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRvZG9Qcm9wO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG9ET00gPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB0b2RvRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgndG9kb0RPTScpO1xuICAgICAgICB0b2RvRE9NLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIHRvZG8udG9kb051bWJlcik7XG4gICAgICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8udGl0bGUsICd0aXRsZScpKTtcbiAgICAgICAgdG9kb0RPTS5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby5kZXNjcmlwdGlvbiwgJ2Rlc2NyaXB0aW9uJykpO1xuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLmR1ZURhdGUsICdkdWVEYXRlJykpO1xuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLnByaW9yaXR5LCAncHJpb3JpdHknKSk7XG4gICAgICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgJ0NoYW5nZScsICdjaGFuZ2UnKSk7XG4gICAgICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgJ0RlbGV0ZScsICdkZWxldGUnKSk7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RPTSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRUb2RvQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICB0b2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdFRvZG9zKHRvZG9BcnJheSkge1xuICAgICAgICByZXNldFRvZG9Db250YWluZXIoKTtcbiAgICAgICAgdG9kb0FycmF5LmZvckVhY2goKHRvZG8pID0+IGNyZWF0ZVRvZG9ET00odG9kbykpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFNlbGVjdFwiKTtcbiAgICBcblxuICAgIC8vIGNhbiBvbmx5IGFzc2lnbiBvbmUgaW5zdGFuY2Ugb2YgYSBOb2RlLCBzbyBuZWVkIHRvIGNyZWF0ZSBtdWx0aXBsZSBpbnN0YW5jZXNcbiAgICBjb25zdCBjcmVhdGVPcHRpb25FbGVtZW50ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0T3B0aW9uRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RJblRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG5cbiAgICBjb25zdCBhc3NpZ25Qcm9qZWN0T3B0aW9uID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgLy8gbWF5IG5lZWQgdG8gc2VwYXJhdGUgcHJvamVjdCBzZWxlY3QgYW5kIHRvZG8gZm9ybSBwcm9qZWN0IHNlbGVjdC4uLlxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvclRvZG9cIik7XG4gICAgICAgIHByb2plY3RTZWxlY3RJblRvZG9Gb3JtLmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQocHJvamVjdCkpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQocHJvamVjdCkpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFsbFByb2plY3RPcHRpb25zKHByb2plY3RBcnJheSkge1xuICAgICAgICByZXNldE9wdGlvbkVsZW1lbnRzKCk7XG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiBhc3NpZ25Qcm9qZWN0T3B0aW9uKHByb2plY3QpKVxuICAgIH1cblxuICAgIC8vIHdoZW4gY3JlYXRpbmcgYSBwcm9qZWN0LCBtYWtlIHRoZSBwcm9qZWN0U2VsZWN0IHZhbHVlIGJlIG1hdGNoaW5nIFByb2plY3QuLi4gXG4gICAgZnVuY3Rpb24gc2V0UHJvamVjdFNlbGVjdE9wdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RJblRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0U2VsZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdFNlbGVjdFtpXS50ZXh0Q29udGVudCA9PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2VsZWN0LnZhbHVlID0gcHJvamVjdFNlbGVjdFtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybS52YWx1ZSA9IHByb2plY3RTZWxlY3RbaV0udmFsdWU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RTZWxlY3QudmFsdWVcblxuICAgIH1cblxuICAgIC8vIHdoZW4gY2xpY2tpbmcgb24gcHJvamVjdCBzZWxlY3RzXG4gICAgcHJvamVjdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpPT4ge1xuICAgICAgICAvLyBzZW5kIHRoaXMgY29kZSB0byBwcm9qZWN0LmpzXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKFwiZ2V0UHJvamVjdEZyb21Qcm9qZWN0U2VsZWN0XCIsIGdldFNlbGVjdGVkUHJvamVjdCgpKVxuICAgIH0pXG4gICAgXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtaGVhZGVyXCIpO1xuICAgIGNvbnN0IGNoYW5nZUhlYWRlciA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICAvLyBkZWxldGUgdG9kbyBET01cbiAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XG4gICAgICAgICAgICAvLyBwdWJsaXNoIHRoZSBkYXRhIGluZGV4IG9mIHRoZSB0b2RvIERPTSwgdG8gcHJvamVjdFxuICAgICAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2dldFRvZG9Ub01vZGlmeScsIGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGNsaWNrIGNoYW5nZSB0b2RvIGJ1dHRvblxuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlJykpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGZvcm0gd2hlcmUgaW5pdGlhbCB2YWx1ZXMgYXJlIHRoYXQgb2YgdGhlIHRvZG8gRE9NIHRleHRcbiAgICAgICAgICAgIC8vIGFuZCB3aGVuIGNsaWNraW5nIHN1Ym1pdCwgc2VuZCB0b2RvIGluZGV4IHRvIHByb2plY3QuanMgdG8gZ2V0IGNvcnJlc3BvbmRpbmcgdG9kbywgc28gdGhhdCBpdCBjYW4gYmUgbW9kaWZpZWRcbiAgICAgICAgICAgIC8vIHRoZW4gYmUgc2VudCB0aGUgcHJvamVjdCBzbyB0aGF0IGl0IGNhbiBiZSBkaXNwbGF5ZWQgYWdhaW5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUT0RPIFxuICAgIC8vIHdoZW4gY2xpY2tpbmcgb24gdG9kbywgZXhwYW5kIGl0OyBhZGQgY2xhc3MgdGhhdCBjb250YWlucyBhIGxhcmdlciBoZWlnaHQgdmFsdWVcbiAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc0xpc3QpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvRE9NJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvaCB5ZWEnKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvLyBzaG93IGl0cyBkZXNjcmlwdGlvbjsgbWF5YmUgdW5oaWRlIGl0LCBieSByZW1vdmluZyBhIGhpZGRlbiBjbGFzc1xuXG4gICAgLy8gcHJpb3J0aXkgY29sb3I7IHZhbHVlIG9mIHByaW9yaXR5IHNob3VsZCBkZXRlcm1pbmUgY29sb3Igb2YgQSBkaXYsIGJ5IHVzZSBvZiBmdW5jdGlvbiB0byBhZGQgY2xhc3MgdG8gdGhhdCBkaXZcbiAgICAvLyBwcm9iYWJseSB1c2Ugc3dpdGNoIGZ1bmN0aW9uXG5cbiAgICAvLyB3aGVuIGNsaWNraW5nIGFnYWluLCBhZGQgdGhlIGhpZGRlbiBjbGFzcyB0byBkZXNjcmlwdGlvbiBhbmQgcmVtb3ZlIGNsYXNzIG9mIGV4cGFuc2lvblxuXG4gICAgLy93aGVuIGNoYW5naW5nIHRvZG8sIHNlbmQgZm9ybSBpbnB1dCwgc2VuZCBET00gaW5kZXgsIHRoZW4gZGlzcGxheSBtYXRjaGluZyB0b2RvXG5cbn0iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuLy9oYW5kbGVzIGZvcm0gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LiBzdWNoIGFzIHdoZW4gZm9ybXMgYXJlIHN1Ym1pdHRlZC5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtSGFuZGxlcigpIHtcblxuICAgIGNvbnN0IHJlc2V0Rm9ybSA9IChmb3JtKSA9PiB7XG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKVxuICAgIGNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9TdWJtaXRcIik7XG5cbiAgICBjb25zdCBnZXRUb2RvQXJncyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvQXJncyA9IFt0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eV1cbiAgICByZXR1cm4gdG9kb0FyZ3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VsZWN0ZWRQcm9qZWN0T3B0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3QudmFsdWU7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIHJlZmFjdG9yIHRvIHVzZSBkYXRhIGF0dHJpYnV0ZSBhbmQgaW5kZXguLi4gcGhvb2V5XG4gICAgfVxuXG4gICAgc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBwdWJzdWIgZm9yIGNyZWF0aW5nIGEgbmV3IHRvZG9cbiAgICAgICAgLy90cnkgc3dhcHBpbmcgdGhlc2UgYW5kIHNlZSB3aGF0IGhhcHBlbnNcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2dldFByb2plY3RGcm9tVG9kb0Zvcm0nLCBnZXRTZWxlY3RlZFByb2plY3RPcHRpb24oKSkvL3NlbmQgdG8gcHJvamVjdC5qc1xuICAgICAgICBwdWJTdWIucHVibGlzaCgndG9kb0Zvcm1TdWJtaXR0ZWQnLCBnZXRUb2RvQXJncygpKTsgLy9zZW5kIHRvIHRvZG8uanNcbiAgICAgICAgcmVzZXRGb3JtKHRvZG9Gb3JtKTtcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JtXCIpXG5cbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RTdWJtaXQnKVxuICAgIHN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gcHViU3ViIGZvciBjcmVhdGluZyBhIG5ldyBwcm9qZWN0XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdwcm9qZWN0Rm9ybVN1Ym1pdHRlZCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybSBpbnB1dCcpLnZhbHVlKVxuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm0gaW5wdXQnKS52YWx1ZSlcbiAgICAgICAgcmVzZXRGb3JtKHByb2plY3RGb3JtKTtcbiAgICB9KVxufSIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdCgpIHtcbiAgICBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cblxuICAgIC8vIGlzIG1hdGNoaW5nUHJvamVjdCB2YXJpYWJsZSBmbGF3ZWQ/XG4gICAgbGV0IG1hdGNoaW5nUHJvamVjdCA9IHt9O1xuICAgIC8vZ2V0UHJvamVjdCBhbmQgc2VuZFRvZG9Ub1Byb2plY3RUb2RvQXJyYXkgb2NjdXIgY29uc2VjdXRpdmVseVxuICAgIC8vIGdldCBwcm9qZWN0IGZyb20gdG9kbyBmb3JtOyBmaXJzdCBnZXQgbWF0Y2hpbmcgcHJvamVjdCwgdGhlbiB3YWl0IGZvciB0b2RvIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0XG4gICAgcHViU3ViLnN1YnNjcmliZSgnZ2V0UHJvamVjdEZyb21Ub2RvRm9ybScsKHByb2plY3RNYXRjaCkgPT4gey8vZHVubm8gd2hhdCB0byBjYWxsIHByb2plY3RNYXRjaDsgdGhlIHRoaW5nIHRoYXQgaSBwYXNzIHRvIGZpbmQgdGhlIGNvcnJlY3QgcHJvamVjdFxuICAgICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0QXJyYXkuZmluZCgocHJvamVjdCkgPT4ge3JldHVybiBwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE1hdGNofSkvL2Fsc28sIG1heSBuZWVkIHRvIHVzZSBkYXRhIGF0dHJpYnV0ZSwgcmF0aGVyIHRoYW4gbmFtZS4gb3IgdXNlIGZvcm0gdmFvbGlkYXRpb24gdG8gbm90IHVzZSBzYW1lIG5hbWVcbiAgICAgICAgc2V0TWF0Y2hpbmdQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICAvL2dldCBwcm9qZWN0IGZyb20gcHJvamVjdCBzZWxlY3Q7IGltbWVkaWF0ZWx5IHB1Ymxpc2ggdG8gZGlzcGxheSBhcnJheVxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2dldFByb2plY3RGcm9tUHJvamVjdFNlbGVjdCcsKHByb2plY3RNYXRjaCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0QXJyYXkuZmluZCgocHJvamVjdCkgPT4ge3JldHVybiBwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE1hdGNofSlcbiAgICAgICAgc2V0TWF0Y2hpbmdQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KVxuICAgIH0pO1xuXG4gICAgLy9hZGQgdG9kbyB0byBwcm9qZWN0IHRvZG9BcnJheVxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3NlbmRUb2RvVG9Qcm9qZWN0VG9kb0FycmF5JywgKHRvZG8pID0+IHtcbiAgICAgICAgYWRkVG9kb1RvUHJvamVjdEFycmF5KG1hdGNoaW5nUHJvamVjdCwgdG9kbylcbiAgICAgICAgLy8gcHViU3ViIHRvIGRpc3BsYXkgdGhlIHRvZG9zOyBzZW5kIHRvIGRpc3BsYXkuanNcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgfSk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gd2hlbiBwcm9qZWN0Zm9ybSBpcyBzdWJtaXR0ZWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0Rm9ybVN1Ym1pdHRlZCcsIChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTsgXG4gICAgICAgIHNldE1hdGNoaW5nUHJvamVjdChuZXdQcm9qZWN0KVxuXG4gICAgICAgIC8vIHdoZW4gYSBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLCBwcm9qZWN0QXJyYXkpOyAvL25lZWRlZCB0byBkaXNwbGF5IGFsbCBwcm9qZWN0IG9wdGlvbnNcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpIC8vbmVlZGVkIHRvIHNldCBoZWFkZXIgYW5kIHRvZG8gdG8gcGFydGljdWxhciBwcm9qZWN0XG4gICAgfSlcblxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2dldFRvZG9Ub01vZGlmeScsICh0b2RvSW5kZXgpPT4ge1xuICAgICAgICAvLyBtb2RpZmllcyBpbiBwbGFjZSwgbXV0YXRpbmcgdGhlIG9yaWdpbmFsIGFycmF5LiB0aGlzIGlzIHdoYXQgd2Ugd2FudFxuICAgICAgICBtYXRjaGluZ1Byb2plY3QudG9kb0FycmF5LnNwbGljZShcbiAgICAgICAgICAgIG1hdGNoaW5nUHJvamVjdC50b2RvQXJyYXkuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLnRvZG9OdW1iZXIgPT0gdG9kb0luZGV4KSwgMSlcblxuICAgICAgICAvLyBub3cgZGlzcGxheSBhZ2FpblxuICAgICAgICBwdWJTdWIucHVibGlzaCgnZGlzcGxheVNlbGVjdGVkUHJvamVjdCcsIG1hdGNoaW5nUHJvamVjdClcbiAgICB9KVxuXG5cbiAgICBjb25zdCBzZXRNYXRjaGluZ1Byb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBtYXRjaGluZ1Byb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbiAgICBjb25zdCBhZGRUb2RvVG9Qcm9qZWN0QXJyYXkgPSAocHJvamVjdCwgdG9kbykgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9BcnJheS5wdXNoKHRvZG8pXG4gICAgfVxuXG4gICAgY29uc3QgaW5jcmVhc2VQcm9qZWN0cyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QXJyYXkgPSAoKSA9PiBwcm9qZWN0QXJyYXk7XG5cblxuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGluY3JlYXNlUHJvamVjdHModGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVU0VEXG4gICAgICAgIGFkZFRvRG8odG9kbykge1xuICAgICAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaCh0b2RvKVxuICAgICAgICB9XG4gICAgICAgIC8vIE5PVCBVU0VEXG4gICAgICAgIHJlbW92ZVRvRG8odG9kbykge1xuICAgICAgICAgICAgdGhpcy50b2RvQXJyYXkuZmlsdGVyKGVsID0+IGVsICE9IHRvZG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTk9UIFVTRUQgQU5EIERFVkVMT1BcbiAgICAgICAgY2hhbmdlVG9Ebyh0b2RvKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVCBVU0VEIEFORCBERVZFTE9QXG4gICAgICAgIGNoYW5nZU5hbWUobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoaXMgc2hvdWxkIGNyZWF0ZSBhIHByb2plY3QgYW5kIGFkZCBpdCB0byBwcm9qZWN0QXJyYXkuIGlzIHRoaXMgY2xlYW4gY29kZT9cblxuICAgIGNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdCgnTXkgRmlyc3QgUHJvamVjdCcpO1xuICAgICAgICAvLyBhZGRlZCB0aGlzIGJlbG93XG4gICAgICAgIHNldE1hdGNoaW5nUHJvamVjdCh0ZXN0UHJvamVjdCk7XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdsb2FkSW5pdGlhbE9wdGlvbnMnLCBwcm9qZWN0QXJyYXkpO1xuXG4gICAgICAgIC8vIGFkZGVkIHRoaXMgYmVsb3dcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2xvYWRJbml0aWFsUHJvamVjdCcsIG1hdGNoaW5nUHJvamVjdCk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIG5ldyBwcm9qZWN0IG9uIGZpcnN0IGxvYWRcbiAgICBwYWdlTG9hZCgpO1xufVxuXG5cbiIsImV4cG9ydCBjb25zdCBwdWJTdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcblxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIC8vIHdoYXQgZG9lcyB0aGlzLmV2ZW50c1tldmVudF0gbG9vayBsaWtlP1xuICAgICAgICBjb25zb2xlLmxvZyhgc29tZXRoaW5nIHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2ZW50fWApXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XXx8IFtdO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChjYik7XG4gICAgfSxcblxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudCwgY2IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNvbWV0aGluZyB1bnN1YnNjcmliZWQgZnJvbSAke2V2ZW50fWApXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XS5maWx0ZXIoZiA9PiBmICE9IGNiKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBtYWtpbmcgYSBicm9hZGNhc3QgYWJvdXQgJHtldmVudH0gd2l0aCBkYXRhYCk7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgICAgIGYoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbn1cblxuIiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG4vL21heSBoYXZlIHRvIGVuY2Fwc3VsYXRlIGFsbCBvZiB0aGlzIGludG8gYSBmdW5jdGlvblxuXG5mdW5jdGlvbiB0b2RvKCkge1xuXG4gICAgLy8gcHVic3ViIFNVQlNDUklCRVxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3RvZG9Gb3JtU3VibWl0dGVkJywgKGFyZ3MpID0+IHsvL3Byb2JhYmx5IGNvdWxkIGRlc3RydWN0dXJlIHRoaXMgdGJoXG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuXG4gICAgICAgIC8vIGluIGZhY3QsIHdoYXQgaSB0aGluayBuZWVkcyB0byBoYXBwZW4gaXMgdG8gcHVibGlzaCB0aGUgdG9kbyB0byBhbiBldmVudCwgYW5kIHByb2plY3Qgd2lsbCBzdWJzY3JpYmUgdG8gcHV0IHRoYXQgaW4gdG9kb2FycmF5LlxuICAgICAgICAvLyBhbmQgdGhlbiB0aGF0IHdpbGwgcHVibGlzaCB0byBkaXNwbGF5LlxuICAgICAgICAvLyBORVhULCBJTVBMRU1FTlQgQ0hBTkdJTkcgVE9ET1M7IENIQU5HRSBQUk9QRVJUWSwgREVMRVRFXG4gICAgfSlcblxuICAgIGxldCB0b2RvQ291bnRlciA9IDA7XG5cbiAgICBjb25zdCBpbmNyZW1lbnRDb3VudGVyID0gKCkgPT4ge1xuICAgICAgICB0b2RvQ291bnRlcisrXG4gICAgfVxuXG5cbiAgICBjbGFzcyBUb2RvIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRvZG9OdW1iZXIgPSB0b2RvQ291bnRlcjtcbiAgICAgICAgaW5jcmVtZW50Q291bnRlcigpO1xuXG4gICAgICAgIC8vIG1heSBoYXZlIHRvIG1vdmUgdGhpcyBlbHNld2hlcmUsIGJ1dCB3aGVuIG5ldyB0b2RvIGlzIGNyZWF0ZWQsIGFwcGVuZCBpdCB0byBhIHByb2plY3QgdG9kb0FycmF5XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdzZW5kVG9kb1RvUHJvamVjdFRvZG9BcnJheScsIHRoaXMpXG4gICAgICAgIH1cblxuICAgICAgICBzZXRQcm9wKHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH0gXG4gICAgfVxufVxuXG5leHBvcnQge3RvZG99OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZm9ybUhhbmRsZXIgfSBmcm9tIFwiLi9mb3JtSGFuZGxlclwiO1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5kaXNwbGF5KCk7XG5wcm9qZWN0KCk7XG50b2RvKCk7XG5mb3JtSGFuZGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==