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

#todoContainer {
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.todoDOM {
    cursor: pointer;
    min-height: 80px;
    box-shadow: 0px 1px 1px black;
    overflow: auto;
    background-color: aliceblue;
}

.title, .description, .dueDate {
    background-color: white;
}

.expanded {
    padding: 10px 10px 0px;
    height: 100px;
    float:top;
}
.expanded.hidden {
    display: none;
}

.description.hidden {
    display: none;
}

.low-priority {
    border-left: palegoldenrod solid 15px;
}

.medium-priority {
    border-left: orange solid 15px;
}
.high-priority {
    border-left: red solid 15px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,OAAO;AACX;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,6BAA6B;IAC7B,cAAc;IACd,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;AACA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,8BAA8B;AAClC;AACA;IACI,2BAA2B;AAC/B","sourcesContent":["body {\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n#body {\n    display: flex;\n    flex: 1;\n}\n\n#left {\n    background-color: blueviolet;\n}\n\n#header {\n    height: 10vh;\n}\n\n#todoContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n.todoDOM {\n    cursor: pointer;\n    min-height: 80px;\n    box-shadow: 0px 1px 1px black;\n    overflow: auto;\n    background-color: aliceblue;\n}\n\n.title, .description, .dueDate {\n    background-color: white;\n}\n\n.expanded {\n    padding: 10px 10px 0px;\n    height: 100px;\n    float:top;\n}\n.expanded.hidden {\n    display: none;\n}\n\n.description.hidden {\n    display: none;\n}\n\n.low-priority {\n    border-left: palegoldenrod solid 15px;\n}\n\n.medium-priority {\n    border-left: orange solid 15px;\n}\n.high-priority {\n    border-left: red solid 15px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



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
        // hide description class by default
        if (className == 'description') {
            todoProp.classList.add('hidden');
        }
        return todoProp;
    }


    const createTodoDOM = (todo) => {
        const todoDOM = document.createElement('div');
        todoDOM.classList.add('todoDOM');
        todoDOM.setAttribute('data-index', todo.todoNumber);
        setPriorityClass(todo, todoDOM);

        const todoTop = createDOMProp('div',"","todoTop")
        todoTop.appendChild(createDOMProp('span', todo.title, 'title'));
        todoTop.appendChild(createDOMProp('span', todo.dueDate, 'dueDate'));
        todoTop.appendChild(createDOMProp('button', 'Change', 'change'));
        todoTop.appendChild(createDOMProp('button', 'Delete', 'delete'));
    

        const expanded = createDOMProp('div',"","expanded")
        expanded.classList.add('hidden');
        expanded.appendChild(createDOMProp('span', todo.priority, 'priority'));
        expanded.appendChild(createDOMProp('span', todo.description, 'description'));

        todoDOM.appendChild(todoTop);
        todoDOM.appendChild(expanded);
        todoContainer.appendChild(todoDOM);
    }

    const setPriorityClass = (todo, todoDOM) => {
        switch(todo.priority) {
            case 'low':
                todoDOM.classList.add('low-priority');
                break;
            case 'medium':
                todoDOM.classList.add('medium-priority');
                break;
            case 'high':
                todoDOM.classList.add('high-priority');
                break;
        }
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

        if (e.target.tagName == 'BUTTON') return;
        const todoDOM = (e.target.closest(".todoDOM"));
        if (todoDOM) {
            toggleExpandTodoAndCloseOthers(todoDOM)
        }
    })

    function toggleExpandTodoAndCloseOthers(el) {
        removeCurrentClicked();
        setCurrentClicked(el);
        hideAllTodoExpansions();
        toggleExpandTodo(el);
    }

    function setCurrentClicked(todoDOM) {
        todoDOM.classList.add('current-clicked');
    }

    function removeCurrentClicked() {
        const currentClicked = document.querySelector('.current-clicked')
        if (currentClicked) {
            currentClicked.classList.remove('current-clicked');
        }
    }

    function hideAllTodoExpansions() {
        const allExpanded = document.querySelectorAll(".expanded")
        for (let todo of allExpanded) {
            if (todo.parentNode.classList.contains('current-clicked')) continue;
            if (!todo.classList.contains("hidden")) {
                todo.classList.add("hidden");
            }
        }
    }
    function toggleExpandTodo(el) {
        const bottom = el.querySelector(".expanded");
        bottom.classList.contains('hidden') ? bottom.classList.remove('hidden'):bottom.classList.add('hidden');
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFNO0FBQ2QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQU07QUFDbEI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN0TmtDOztBQUVsQztBQUNPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQU07QUFDZCxRQUFRLDJDQUFNLDhDQUE4QztBQUM1RDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFNO0FBQ2Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDOUNrQzs7QUFFM0I7QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLElBQUksMkNBQU0sdURBQXVELG1DQUFtQztBQUNwRyxnRUFBZ0Usb0NBQW9DO0FBQ3BHO0FBQ0EsS0FBSzs7QUFFTCx1Q0FBdUM7QUFDdkMsSUFBSSwyQ0FBTTtBQUNWLGdFQUFnRSxvQ0FBb0M7QUFDcEc7QUFDQSxRQUFRLDJDQUFNO0FBQ2QsS0FBSzs7QUFFTDtBQUNBLElBQUksMkNBQU07QUFDVjtBQUNBLHdDQUF3QztBQUN4QyxRQUFRLDJDQUFNO0FBQ2Q7QUFDQSxLQUFLOztBQUVMO0FBQ0EsSUFBSSwyQ0FBTTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDJDQUFNLHdDQUF3QztBQUN0RCxRQUFRLDJDQUFNO0FBQ2QsS0FBSzs7QUFFTCxJQUFJLDJDQUFNO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwyQ0FBTTtBQUNkLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQU07O0FBRWQ7QUFDQSxRQUFRLDJDQUFNO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHTztBQUNQLGNBQWM7O0FBRWQ7QUFDQTtBQUNBLDBEQUEwRCxNQUFNO0FBQ2hFO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsbURBQW1ELE1BQU07QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmtDO0FBQ0Y7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0EsSUFBSSwyQ0FBTSwyQ0FBMkM7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMkNBQU07QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNNO0FBQ1E7QUFDUjtBQUNmOztBQUVyQixpREFBTztBQUNQLGlEQUFPO0FBQ1AsMkNBQUk7QUFDSix5REFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9mb3JtSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG59XG5cbiNsZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xufVxuXG4jaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG59XG5cbiN0b2RvQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA3cHg7XG59XG4udG9kb0RPTSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggYmxhY2s7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG4udGl0bGUsIC5kZXNjcmlwdGlvbiwgLmR1ZURhdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZXhwYW5kZWQge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmbG9hdDp0b3A7XG59XG4uZXhwYW5kZWQuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGVzY3JpcHRpb24uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG93LXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogcGFsZWdvbGRlbnJvZCBzb2xpZCAxNXB4O1xufVxuXG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogb3JhbmdlIHNvbGlkIDE1cHg7XG59XG4uaGlnaC1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IHJlZCBzb2xpZCAxNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLE9BQU87QUFDWDs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI2xlZnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jdG9kb0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogN3B4O1xcbn1cXG4udG9kb0RPTSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWluLWhlaWdodDogODBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggYmxhY2s7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi50aXRsZSwgLmRlc2NyaXB0aW9uLCAuZHVlRGF0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBmbG9hdDp0b3A7XFxufVxcbi5leHBhbmRlZC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiBwYWxlZ29sZGVucm9kIHNvbGlkIDE1cHg7XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogb3JhbmdlIHNvbGlkIDE1cHg7XFxufVxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IHJlZCBzb2xpZCAxNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG4vLyBzaG91bGQgaGFuZGxlIERPTSByZWxhdGVkIGZ1bmN0aW9uYWxpdHkuIFN1Y2ggYXMgY3JlYXRpbmcsIGNoYW5naW5nIGFuZCBkZWxldGluZyBET00gZWxlbWVudHMuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBcblxuXG4gICAgLy8gZGlzcGxheSBwcm9qZWN0IGFycmF5IG9uIGZpcnN0IGxvYWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdsb2FkSW5pdGlhbE9wdGlvbnMnLCBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMpO1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2xvYWRJbml0aWFsUHJvamVjdCcsIChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNoYW5nZUhlYWRlcihwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdFRvZG9zKHByb2plY3QudG9kb0FycmF5KTsgXG4gICAgICAgIHNldFByb2plY3RTZWxlY3RPcHRpb24ocHJvamVjdCk7XG4gICAgfSlcblxuICAgIC8vIHdoZW4gbmV3IHRvZG8gaXMgY3JlYXRlZCwgZGlzcGxheSBhbGwgdG9kb3NcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCduZXdUb2RvQ3JlYXRlZCcsIGRpc3BsYXlQcm9qZWN0VG9kb3MpXG5cbiAgICAvLyB3aGVuIGNyZWF0aW5nIG5ldyBwcm9qZWN0LCBkaXNwbGF5IGFsbCBwcm9qZWN0c1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucyk7XG5cbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgKHByb2plY3QpID0+IHtcbiAgICAgICAgY2hhbmdlSGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VG9kb3MocHJvamVjdC50b2RvQXJyYXkpOyBcbiAgICAgICAgc2V0UHJvamVjdFNlbGVjdE9wdGlvbihwcm9qZWN0KTtcbiAgICB9KVxuXG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY3JlYXRlRE9NUHJvcCA9IChlbFR5cGUsIHZhbHVlLCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb1Byb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsVHlwZSk7XG4gICAgICAgIHRvZG9Qcm9wLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIHRvZG9Qcm9wLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgLy8gaGlkZSBkZXNjcmlwdGlvbiBjbGFzcyBieSBkZWZhdWx0XG4gICAgICAgIGlmIChjbGFzc05hbWUgPT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdG9kb1Byb3AuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvZG9Qcm9wO1xuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlVG9kb0RPTSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9ET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCd0b2RvRE9NJyk7XG4gICAgICAgIHRvZG9ET00uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgdG9kby50b2RvTnVtYmVyKTtcbiAgICAgICAgc2V0UHJpb3JpdHlDbGFzcyh0b2RvLCB0b2RvRE9NKTtcblxuICAgICAgICBjb25zdCB0b2RvVG9wID0gY3JlYXRlRE9NUHJvcCgnZGl2JyxcIlwiLFwidG9kb1RvcFwiKVxuICAgICAgICB0b2RvVG9wLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLnRpdGxlLCAndGl0bGUnKSk7XG4gICAgICAgIHRvZG9Ub3AuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8uZHVlRGF0ZSwgJ2R1ZURhdGUnKSk7XG4gICAgICAgIHRvZG9Ub3AuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgJ0NoYW5nZScsICdjaGFuZ2UnKSk7XG4gICAgICAgIHRvZG9Ub3AuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgJ0RlbGV0ZScsICdkZWxldGUnKSk7XG4gICAgXG5cbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBjcmVhdGVET01Qcm9wKCdkaXYnLFwiXCIsXCJleHBhbmRlZFwiKVxuICAgICAgICBleHBhbmRlZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZXhwYW5kZWQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8ucHJpb3JpdHksICdwcmlvcml0eScpKTtcbiAgICAgICAgZXhwYW5kZWQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8uZGVzY3JpcHRpb24sICdkZXNjcmlwdGlvbicpKTtcblxuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKHRvZG9Ub3ApO1xuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGV4cGFuZGVkKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRE9NKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcmlvcml0eUNsYXNzID0gKHRvZG8sIHRvZG9ET00pID0+IHtcbiAgICAgICAgc3dpdGNoKHRvZG8ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRUb2RvQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICB0b2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdFRvZG9zKHRvZG9BcnJheSkge1xuICAgICAgICByZXNldFRvZG9Db250YWluZXIoKTtcbiAgICAgICAgdG9kb0FycmF5LmZvckVhY2goKHRvZG8pID0+IGNyZWF0ZVRvZG9ET00odG9kbykpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFNlbGVjdFwiKTtcbiAgICBcblxuICAgIC8vIGNhbiBvbmx5IGFzc2lnbiBvbmUgaW5zdGFuY2Ugb2YgYSBOb2RlLCBzbyBuZWVkIHRvIGNyZWF0ZSBtdWx0aXBsZSBpbnN0YW5jZXNcbiAgICBjb25zdCBjcmVhdGVPcHRpb25FbGVtZW50ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0T3B0aW9uRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RJblRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG5cbiAgICBjb25zdCBhc3NpZ25Qcm9qZWN0T3B0aW9uID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgLy8gbWF5IG5lZWQgdG8gc2VwYXJhdGUgcHJvamVjdCBzZWxlY3QgYW5kIHRvZG8gZm9ybSBwcm9qZWN0IHNlbGVjdC4uLlxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvclRvZG9cIik7XG4gICAgICAgIHByb2plY3RTZWxlY3RJblRvZG9Gb3JtLmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQocHJvamVjdCkpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQocHJvamVjdCkpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFsbFByb2plY3RPcHRpb25zKHByb2plY3RBcnJheSkge1xuICAgICAgICByZXNldE9wdGlvbkVsZW1lbnRzKCk7XG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiBhc3NpZ25Qcm9qZWN0T3B0aW9uKHByb2plY3QpKVxuICAgIH1cblxuICAgIC8vIHdoZW4gY3JlYXRpbmcgYSBwcm9qZWN0LCBtYWtlIHRoZSBwcm9qZWN0U2VsZWN0IHZhbHVlIGJlIG1hdGNoaW5nIFByb2plY3QuLi4gXG4gICAgZnVuY3Rpb24gc2V0UHJvamVjdFNlbGVjdE9wdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RJblRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0U2VsZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdFNlbGVjdFtpXS50ZXh0Q29udGVudCA9PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2VsZWN0LnZhbHVlID0gcHJvamVjdFNlbGVjdFtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybS52YWx1ZSA9IHByb2plY3RTZWxlY3RbaV0udmFsdWU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RTZWxlY3QudmFsdWVcblxuICAgIH1cblxuICAgIC8vIHdoZW4gY2xpY2tpbmcgb24gcHJvamVjdCBzZWxlY3RzXG4gICAgcHJvamVjdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpPT4ge1xuICAgICAgICAvLyBzZW5kIHRoaXMgY29kZSB0byBwcm9qZWN0LmpzXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKFwiZ2V0UHJvamVjdEZyb21Qcm9qZWN0U2VsZWN0XCIsIGdldFNlbGVjdGVkUHJvamVjdCgpKVxuICAgIH0pXG4gICAgXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtaGVhZGVyXCIpO1xuICAgIGNvbnN0IGNoYW5nZUhlYWRlciA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICAvLyBkZWxldGUgdG9kbyBET01cbiAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XG4gICAgICAgICAgICAvLyBwdWJsaXNoIHRoZSBkYXRhIGluZGV4IG9mIHRoZSB0b2RvIERPTSwgdG8gcHJvamVjdFxuICAgICAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2dldFRvZG9Ub01vZGlmeScsIGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGNsaWNrIGNoYW5nZSB0b2RvIGJ1dHRvblxuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlJykpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGZvcm0gd2hlcmUgaW5pdGlhbCB2YWx1ZXMgYXJlIHRoYXQgb2YgdGhlIHRvZG8gRE9NIHRleHRcbiAgICAgICAgICAgIC8vIGFuZCB3aGVuIGNsaWNraW5nIHN1Ym1pdCwgc2VuZCB0b2RvIGluZGV4IHRvIHByb2plY3QuanMgdG8gZ2V0IGNvcnJlc3BvbmRpbmcgdG9kbywgc28gdGhhdCBpdCBjYW4gYmUgbW9kaWZpZWRcbiAgICAgICAgICAgIC8vIHRoZW4gYmUgc2VudCB0aGUgcHJvamVjdCBzbyB0aGF0IGl0IGNhbiBiZSBkaXNwbGF5ZWQgYWdhaW5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUT0RPIFxuICAgIC8vIHdoZW4gY2xpY2tpbmcgb24gdG9kbywgZXhwYW5kIGl0OyBhZGQgY2xhc3MgdGhhdCBjb250YWlucyBhIGxhcmdlciBoZWlnaHQgdmFsdWVcbiAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09ICdCVVRUT04nKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHRvZG9ET00gPSAoZS50YXJnZXQuY2xvc2VzdChcIi50b2RvRE9NXCIpKTtcbiAgICAgICAgaWYgKHRvZG9ET00pIHtcbiAgICAgICAgICAgIHRvZ2dsZUV4cGFuZFRvZG9BbmRDbG9zZU90aGVycyh0b2RvRE9NKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUV4cGFuZFRvZG9BbmRDbG9zZU90aGVycyhlbCkge1xuICAgICAgICByZW1vdmVDdXJyZW50Q2xpY2tlZCgpO1xuICAgICAgICBzZXRDdXJyZW50Q2xpY2tlZChlbCk7XG4gICAgICAgIGhpZGVBbGxUb2RvRXhwYW5zaW9ucygpO1xuICAgICAgICB0b2dnbGVFeHBhbmRUb2RvKGVsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50Q2xpY2tlZCh0b2RvRE9NKSB7XG4gICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jbGlja2VkJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ3VycmVudENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY2xpY2tlZCcpXG4gICAgICAgIGlmIChjdXJyZW50Q2xpY2tlZCkge1xuICAgICAgICAgICAgY3VycmVudENsaWNrZWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jbGlja2VkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlQWxsVG9kb0V4cGFuc2lvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFsbEV4cGFuZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leHBhbmRlZFwiKVxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIGFsbEV4cGFuZGVkKSB7XG4gICAgICAgICAgICBpZiAodG9kby5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1jbGlja2VkJykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCF0b2RvLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVFeHBhbmRUb2RvKGVsKSB7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuZXhwYW5kZWRcIik7XG4gICAgICAgIGJvdHRvbS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpID8gYm90dG9tLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOmJvdHRvbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICAvL3doZW4gY2hhbmdpbmcgdG9kbywgc2VuZCBmb3JtIGlucHV0LCBzZW5kIERPTSBpbmRleCwgdGhlbiBkaXNwbGF5IG1hdGNoaW5nIHRvZG9cblxufSIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG4vL2hhbmRsZXMgZm9ybSByZWxhdGVkIGZ1bmN0aW9uYWxpdHkuIHN1Y2ggYXMgd2hlbiBmb3JtcyBhcmUgc3VibWl0dGVkLlxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1IYW5kbGVyKCkge1xuXG4gICAgY29uc3QgcmVzZXRGb3JtID0gKGZvcm0pID0+IHtcbiAgICAgICAgZm9ybS5yZXNldCgpXG4gICAgfVxuXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Gb3JtXCIpXG4gICAgY29uc3Qgc3VibWl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1N1Ym1pdFwiKTtcblxuICAgIGNvbnN0IGdldFRvZG9BcmdzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1RpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1ByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9BcmdzID0gW3RvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5XVxuICAgIHJldHVybiB0b2RvQXJncztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTZWxlY3RlZFByb2plY3RPcHRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICByZXR1cm4gcHJvamVjdC52YWx1ZTtcbiAgICAgICAgLy8gbWF5IG5lZWQgdG8gcmVmYWN0b3IgdG8gdXNlIGRhdGEgYXR0cmlidXRlIGFuZCBpbmRleC4uLiBwaG9vZXlcbiAgICB9XG5cbiAgICBzdWJtaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIHB1YnN1YiBmb3IgY3JlYXRpbmcgYSBuZXcgdG9kb1xuICAgICAgICAvL3RyeSBzd2FwcGluZyB0aGVzZSBhbmQgc2VlIHdoYXQgaGFwcGVuc1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZ2V0UHJvamVjdEZyb21Ub2RvRm9ybScsIGdldFNlbGVjdGVkUHJvamVjdE9wdGlvbigpKS8vc2VuZCB0byBwcm9qZWN0LmpzXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIGdldFRvZG9BcmdzKCkpOyAvL3NlbmQgdG8gdG9kby5qc1xuICAgICAgICByZXNldEZvcm0odG9kb0Zvcm0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIilcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFN1Ym1pdCcpXG4gICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBwdWJTdWIgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtIGlucHV0JykudmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybSBpbnB1dCcpLnZhbHVlKVxuICAgICAgICByZXNldEZvcm0ocHJvamVjdEZvcm0pO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KCkge1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuXG4gICAgLy8gaXMgbWF0Y2hpbmdQcm9qZWN0IHZhcmlhYmxlIGZsYXdlZD9cbiAgICBsZXQgbWF0Y2hpbmdQcm9qZWN0ID0ge307XG4gICAgLy9nZXRQcm9qZWN0IGFuZCBzZW5kVG9kb1RvUHJvamVjdFRvZG9BcnJheSBvY2N1ciBjb25zZWN1dGl2ZWx5XG4gICAgLy8gZ2V0IHByb2plY3QgZnJvbSB0b2RvIGZvcm07IGZpcnN0IGdldCBtYXRjaGluZyBwcm9qZWN0LCB0aGVuIHdhaXQgZm9yIHRvZG8gdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3RcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0RnJvbVRvZG9Gb3JtJywocHJvamVjdE1hdGNoKSA9PiB7Ly9kdW5ubyB3aGF0IHRvIGNhbGwgcHJvamVjdE1hdGNoOyB0aGUgdGhpbmcgdGhhdCBpIHBhc3MgdG8gZmluZCB0aGUgY29ycmVjdCBwcm9qZWN0XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RBcnJheS5maW5kKChwcm9qZWN0KSA9PiB7cmV0dXJuIHByb2plY3QubmFtZSA9PSBwcm9qZWN0TWF0Y2h9KS8vYWxzbywgbWF5IG5lZWQgdG8gdXNlIGRhdGEgYXR0cmlidXRlLCByYXRoZXIgdGhhbiBuYW1lLiBvciB1c2UgZm9ybSB2YW9saWRhdGlvbiB0byBub3QgdXNlIHNhbWUgbmFtZVxuICAgICAgICBzZXRNYXRjaGluZ1Byb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vZ2V0IHByb2plY3QgZnJvbSBwcm9qZWN0IHNlbGVjdDsgaW1tZWRpYXRlbHkgcHVibGlzaCB0byBkaXNwbGF5IGFycmF5XG4gICAgcHViU3ViLnN1YnNjcmliZSgnZ2V0UHJvamVjdEZyb21Qcm9qZWN0U2VsZWN0JywocHJvamVjdE1hdGNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RBcnJheS5maW5kKChwcm9qZWN0KSA9PiB7cmV0dXJuIHByb2plY3QubmFtZSA9PSBwcm9qZWN0TWF0Y2h9KVxuICAgICAgICBzZXRNYXRjaGluZ1Byb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpXG4gICAgfSk7XG5cbiAgICAvL2FkZCB0b2RvIHRvIHByb2plY3QgdG9kb0FycmF5XG4gICAgcHViU3ViLnN1YnNjcmliZSgnc2VuZFRvZG9Ub1Byb2plY3RUb2RvQXJyYXknLCAodG9kbykgPT4ge1xuICAgICAgICBhZGRUb2RvVG9Qcm9qZWN0QXJyYXkobWF0Y2hpbmdQcm9qZWN0LCB0b2RvKVxuICAgICAgICAvLyBwdWJTdWIgdG8gZGlzcGxheSB0aGUgdG9kb3M7IHNlbmQgdG8gZGlzcGxheS5qc1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZGlzcGxheVNlbGVjdGVkUHJvamVjdCcsIG1hdGNoaW5nUHJvamVjdClcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgICB9KTtcblxuICAgIC8vIHN1YnNjcmliZSB0byB3aGVuIHByb2plY3Rmb3JtIGlzIHN1Ym1pdHRlZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpOyBcbiAgICAgICAgc2V0TWF0Y2hpbmdQcm9qZWN0KG5ld1Byb2plY3QpXG5cbiAgICAgICAgLy8gd2hlbiBhIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWRcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RBZGRlZCcsIHByb2plY3RBcnJheSk7IC8vbmVlZGVkIHRvIGRpc3BsYXkgYWxsIHByb2plY3Qgb3B0aW9uc1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZGlzcGxheVNlbGVjdGVkUHJvamVjdCcsIG1hdGNoaW5nUHJvamVjdCkgLy9uZWVkZWQgdG8gc2V0IGhlYWRlciBhbmQgdG9kbyB0byBwYXJ0aWN1bGFyIHByb2plY3RcbiAgICB9KVxuXG4gICAgcHViU3ViLnN1YnNjcmliZSgnZ2V0VG9kb1RvTW9kaWZ5JywgKHRvZG9JbmRleCk9PiB7XG4gICAgICAgIC8vIG1vZGlmaWVzIGluIHBsYWNlLCBtdXRhdGluZyB0aGUgb3JpZ2luYWwgYXJyYXkuIHRoaXMgaXMgd2hhdCB3ZSB3YW50XG4gICAgICAgIG1hdGNoaW5nUHJvamVjdC50b2RvQXJyYXkuc3BsaWNlKFxuICAgICAgICAgICAgbWF0Y2hpbmdQcm9qZWN0LnRvZG9BcnJheS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0udG9kb051bWJlciA9PSB0b2RvSW5kZXgpLCAxKVxuXG4gICAgICAgIC8vIG5vdyBkaXNwbGF5IGFnYWluXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KVxuICAgIH0pXG5cblxuICAgIGNvbnN0IHNldE1hdGNoaW5nUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIG1hdGNoaW5nUHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuICAgIGNvbnN0IGFkZFRvZG9Ub1Byb2plY3RBcnJheSA9IChwcm9qZWN0LCB0b2RvKSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb0FycmF5LnB1c2godG9kbylcbiAgICB9XG5cbiAgICBjb25zdCBpbmNyZWFzZVByb2plY3RzID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBcnJheSA9ICgpID0+IHByb2plY3RBcnJheTtcblxuXG4gICAgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5ID0gW107XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgaW5jcmVhc2VQcm9qZWN0cyh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVTRURcbiAgICAgICAgYWRkVG9Ebyh0b2RvKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheS5wdXNoKHRvZG8pXG4gICAgICAgIH1cbiAgICAgICAgLy8gTk9UIFVTRURcbiAgICAgICAgcmVtb3ZlVG9Ebyh0b2RvKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheS5maWx0ZXIoZWwgPT4gZWwgIT0gdG9kbyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOT1QgVVNFRCBBTkQgREVWRUxPUFxuICAgICAgICBjaGFuZ2VUb0RvKHRvZG8pIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTk9UIFVTRUQgQU5EIERFVkVMT1BcbiAgICAgICAgY2hhbmdlTmFtZShuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcyBzaG91bGQgY3JlYXRlIGEgcHJvamVjdCBhbmQgYWRkIGl0IHRvIHByb2plY3RBcnJheS4gaXMgdGhpcyBjbGVhbiBjb2RlP1xuXG4gICAgY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0ZXN0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdNeSBGaXJzdCBQcm9qZWN0Jyk7XG4gICAgICAgIC8vIGFkZGVkIHRoaXMgYmVsb3dcbiAgICAgICAgc2V0TWF0Y2hpbmdQcm9qZWN0KHRlc3RQcm9qZWN0KTtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2xvYWRJbml0aWFsT3B0aW9ucycsIHByb2plY3RBcnJheSk7XG5cbiAgICAgICAgLy8gYWRkZWQgdGhpcyBiZWxvd1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnbG9hZEluaXRpYWxQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgbmV3IHByb2plY3Qgb24gZmlyc3QgbG9hZFxuICAgIHBhZ2VMb2FkKCk7XG59XG5cblxuIiwiZXhwb3J0IGNvbnN0IHB1YlN1YiA9IHtcbiAgICBldmVudHM6IHt9LFxuXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudCwgY2IpIHtcbiAgICAgICAgLy8gd2hhdCBkb2VzIHRoaXMuZXZlbnRzW2V2ZW50XSBsb29rIGxpa2U/XG4gICAgICAgIGNvbnNvbGUubG9nKGBzb21ldGhpbmcgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZlbnR9YClcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGNiKTtcbiAgICB9LFxuXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50LCBjYikge1xuICAgICAgICBjb25zb2xlLmxvZyhgc29tZXRoaW5nIHVuc3Vic2NyaWJlZCBmcm9tICR7ZXZlbnR9YClcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdLmZpbHRlcihmID0+IGYgIT0gY2IpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG1ha2luZyBhIGJyb2FkY2FzdCBhYm91dCAke2V2ZW50fSB3aXRoIGRhdGFgKTtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICAgICAgZihkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxufVxuXG4iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucyc7XG5cbi8vbWF5IGhhdmUgdG8gZW5jYXBzdWxhdGUgYWxsIG9mIHRoaXMgaW50byBhIGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHRvZG8oKSB7XG5cbiAgICAvLyBwdWJzdWIgU1VCU0NSSUJFXG4gICAgcHViU3ViLnN1YnNjcmliZSgndG9kb0Zvcm1TdWJtaXR0ZWQnLCAoYXJncykgPT4gey8vcHJvYmFibHkgY291bGQgZGVzdHJ1Y3R1cmUgdGhpcyB0YmhcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG5cbiAgICAgICAgLy8gaW4gZmFjdCwgd2hhdCBpIHRoaW5rIG5lZWRzIHRvIGhhcHBlbiBpcyB0byBwdWJsaXNoIHRoZSB0b2RvIHRvIGFuIGV2ZW50LCBhbmQgcHJvamVjdCB3aWxsIHN1YnNjcmliZSB0byBwdXQgdGhhdCBpbiB0b2RvYXJyYXkuXG4gICAgICAgIC8vIGFuZCB0aGVuIHRoYXQgd2lsbCBwdWJsaXNoIHRvIGRpc3BsYXkuXG4gICAgICAgIC8vIE5FWFQsIElNUExFTUVOVCBDSEFOR0lORyBUT0RPUzsgQ0hBTkdFIFBST1BFUlRZLCBERUxFVEVcbiAgICB9KVxuXG4gICAgbGV0IHRvZG9Db3VudGVyID0gMDtcblxuICAgIGNvbnN0IGluY3JlbWVudENvdW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRvZG9Db3VudGVyKytcbiAgICB9XG5cblxuICAgIGNsYXNzIFRvZG8ge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMudG9kb051bWJlciA9IHRvZG9Db3VudGVyO1xuICAgICAgICBpbmNyZW1lbnRDb3VudGVyKCk7XG5cbiAgICAgICAgLy8gbWF5IGhhdmUgdG8gbW92ZSB0aGlzIGVsc2V3aGVyZSwgYnV0IHdoZW4gbmV3IHRvZG8gaXMgY3JlYXRlZCwgYXBwZW5kIGl0IHRvIGEgcHJvamVjdCB0b2RvQXJyYXlcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3NlbmRUb2RvVG9Qcm9qZWN0VG9kb0FycmF5JywgdGhpcylcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFByb3AocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfSBcbiAgICB9XG59XG5cbmV4cG9ydCB7dG9kb307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBmb3JtSGFuZGxlciB9IGZyb20gXCIuL2Zvcm1IYW5kbGVyXCI7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmRpc3BsYXkoKTtcbnByb2plY3QoKTtcbnRvZG8oKTtcbmZvcm1IYW5kbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9