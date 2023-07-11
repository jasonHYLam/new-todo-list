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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --bottom-shadow: 0px 1px black;
}
body {
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

#right {
    flex: 1;
}

#header {
    height: 10vh;
}

#todoForm {
    padding-bottom: 30px;
    box-shadow: var(--bottom-shadow);
}

#todoContainer {
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.todoDOM {
    cursor: pointer;
    min-height: 80px;
    box-shadow: var(--bottom-shadow);
    overflow: auto;
    background-color: aliceblue;
    padding-right: 20px;
    padding-left: 20px;
}

.todoMainContent.hidden, .formInTodo.hidden, .expanded.hidden {
    display: none;
}

.todoTop {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
}

.todoTopRight {
    display: flex;
    gap: 5px;

}

.title, .description, .dueDate {
    background-color: white;
    padding: 5px;
}

.title {
    font-size: 25px;
}

.expanded {
    padding: 10px 10px 0px;
    height: 100px;
    float:top;
}
.expanded.hidden {
    display: none;
}

/* .description.hidden {
    display: none;
} */

.low-priority {
    border-left: palegoldenrod solid 15px;
}

.medium-priority {
    border-left: orange solid 15px;
}
.high-priority {
    border-left: red solid 15px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,OAAO;AACX;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,gCAAgC;IAChC,cAAc;IACd,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;;AAEZ;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;AACA;IACI,aAAa;AACjB;;AAEA;;GAEG;;AAEH;IACI,qCAAqC;AACzC;;AAEA;IACI,8BAA8B;AAClC;AACA;IACI,2BAA2B;AAC/B","sourcesContent":[":root {\n    --bottom-shadow: 0px 1px black;\n}\nbody {\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n#body {\n    display: flex;\n    flex: 1;\n}\n\n#left {\n    background-color: blueviolet;\n}\n\n#right {\n    flex: 1;\n}\n\n#header {\n    height: 10vh;\n}\n\n#todoForm {\n    padding-bottom: 30px;\n    box-shadow: var(--bottom-shadow);\n}\n\n#todoContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n.todoDOM {\n    cursor: pointer;\n    min-height: 80px;\n    box-shadow: var(--bottom-shadow);\n    overflow: auto;\n    background-color: aliceblue;\n    padding-right: 20px;\n    padding-left: 20px;\n}\n\n.todoMainContent.hidden, .formInTodo.hidden, .expanded.hidden {\n    display: none;\n}\n\n.todoTop {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 15px;\n}\n\n.todoTopRight {\n    display: flex;\n    gap: 5px;\n\n}\n\n.title, .description, .dueDate {\n    background-color: white;\n    padding: 5px;\n}\n\n.title {\n    font-size: 25px;\n}\n\n.expanded {\n    padding: 10px 10px 0px;\n    height: 100px;\n    float:top;\n}\n.expanded.hidden {\n    display: none;\n}\n\n/* .description.hidden {\n    display: none;\n} */\n\n.low-priority {\n    border-left: palegoldenrod solid 15px;\n}\n\n.medium-priority {\n    border-left: orange solid 15px;\n}\n.high-priority {\n    border-left: red solid 15px;\n}"],"sourceRoot":""}]);
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

        // setPriorityClass(todo, todoDOM);

        // const todoTop = createDOMProp('div',"","todoTop")

        // const todoTopLeft = createDOMProp('div', "", "todoTopLeft");
        // todoTop.appendChild(todoTopLeft)
        // todoTopLeft.appendChild(createDOMProp('span', todo.title, 'title'));

        // const todoTopRight = createDOMProp('div', "", "todoTopRight");
        // todoTop.appendChild(todoTopRight)
        // todoTopRight.appendChild(createDOMProp('span', todo.dueDate, 'dueDate'));
        // todoTopRight.appendChild(createDOMProp('button', 'Change', 'change'));
        // todoTopRight.appendChild(createDOMProp('button', 'Delete', 'delete'));
    

        // const expanded = createDOMProp('div',"","expanded")
        // expanded.classList.add('hidden');
        // expanded.appendChild(createDOMProp('span', todo.priority, 'priority'));
        // expanded.appendChild(createDOMProp('span', todo.description, 'description'));

        // todoDOM.appendChild(todoTop);
        // todoDOM.appendChild(expanded);
        todoDOM.appendChild(createMainTodoContent(todo));
        todoDOM.appendChild(createFormInTodo());
        todoContainer.appendChild(todoDOM);
    }

    const createMainTodoContent = (todo) => {        

        const todoMainContent = document.createElement('div');
        todoMainContent.classList.add('todoMainContent');
        setPriorityClass(todo, todoMainContent);
        const todoTop = createDOMProp('div',"","todoTop")

        const todoTopLeft = createDOMProp('div', "", "todoTopLeft");
        todoTop.appendChild(todoTopLeft)
        todoTopLeft.appendChild(createDOMProp('span', todo.title, 'title'));

        const todoTopRight = createDOMProp('div', "", "todoTopRight");
        todoTop.appendChild(todoTopRight)
        todoTopRight.appendChild(createDOMProp('span', todo.dueDate, 'dueDate'));
        todoTopRight.appendChild(createDOMProp('button', 'Change', 'change'));
        todoTopRight.appendChild(createDOMProp('button', 'Delete', 'delete'));
    

        const expanded = createDOMProp('div',"","expanded")
        expanded.classList.add('hidden');
        expanded.appendChild(createDOMProp('span', todo.priority, 'priority'));
        expanded.appendChild(createDOMProp('span', todo.description, 'description'));

        todoMainContent.appendChild(todoTop);
        todoMainContent.appendChild(expanded);
        // todoContainer.appendChild(todoDOM);

        return todoMainContent;
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

    const createFormInTodo = () => {
        const form = createDOMProp('form', "", 'formInTodo');
        form.classList.add('hidden');

        const title = createDOMProp('input', "", "formTitle");
        title.setAttribute('placeholder', 'New title:')
        const description = createDOMProp('input', "", "formDescription");
        description.setAttribute('placeholder', 'New description:')
        const date = createDOMProp('input', "", "formDate");
        date.setAttribute('type', 'date');
        const priority = createDOMProp('select', "", "formPriority");
        const submit = createDOMProp('button', "Make changes", "formSubmit");
        const cancel = createDOMProp('button', "Cancel", "formCancel");

        const lowPriority = createDOMProp('option', 'Not urgent', 'low')
        priority.appendChild(lowPriority)

        const mediumPriority = createDOMProp('option', 'Not too urgent', 'medium')
        priority.appendChild(mediumPriority)

        const highPriority = createDOMProp('option', 'Urgent', 'high')
        priority.appendChild(highPriority);

        form.appendChild(title);
        form.appendChild(description);
        form.appendChild(date);
        form.appendChild(priority);
        form.appendChild(submit);
        form.appendChild(cancel);

        return form;
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
            const todoDOM = (e.target.closest('.todoDOM'));
            toggleMainTodoContent(todoDOM);
            toggleFormInTodo(todoDOM);
            // create a form where initial values are that of the todo DOM text
            // and when clicking submit, send todo index to project.js to get corresponding todo, so that it can be modified
            // then be sent the project so that it can be displayed again
        }
    })

    // click on cancel button in form in todo
    todoContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('formCancel')) {
            const todoDOM = (e.target.closest('.todoDOM'));
            toggleMainTodoContent(todoDOM);
            toggleFormInTodo(todoDOM);
            const form = todoDOM.querySelector('.formInTodo');
            resetForm(form);
        }

    })

    function resetForm(form) {
        form.reset();
    }

    function toggleMainTodoContent(el) {
        const main = el.querySelector('.todoMainContent');
        toggleHidden(main);
    }

    function toggleFormInTodo(el) {
        const form = el.querySelector('.formInTodo');
        toggleHidden(form);
    }

    // TODO 
    // when clicking on todo, expand it and hide other expanded todos.
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

    function removeCurrentClicked() {
        const currentClicked = document.querySelector('.current-clicked')
        if (currentClicked) {
            currentClicked.classList.remove('current-clicked');
        }
    }

    function setCurrentClicked(todoDOM) {
        todoDOM.classList.add('current-clicked');
    }

    function hideAllTodoExpansions() {
        const allExpanded = document.querySelectorAll(".expanded")
        for (let todo of allExpanded) {
            if (todo.closest(".todoDOM").classList.contains('current-clicked')) continue;
            if (!todo.classList.contains("hidden")) {
                todo.classList.add("hidden");
            }
        }
    }
    function toggleExpandTodo(el) {
        const bottom = el.querySelector(".expanded");
        toggleHidden(bottom);
    }

    function toggleHidden(el) {
        el.classList.contains('hidden') ? el.classList.remove('hidden'): el.classList.add('hidden');
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
    const todoPriority = `${document.querySelector("#todoPriority").value} priority`;//change from value to textContent
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JrQztBQUNKOztBQUU5QjtBQUNPO0FBQ1A7OztBQUdBO0FBQ0EsSUFBSSwyQ0FBTTtBQUNWLElBQUksMkNBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsSUFBSSwyQ0FBTTs7QUFFVjtBQUNBLElBQUksMkNBQU07O0FBRVYsSUFBSSwyQ0FBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJrQztBQUNGOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBLElBQUksMkNBQU0sMkNBQTJDO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDJDQUFNO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN4Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDTTtBQUNRO0FBQ1I7QUFDZjs7QUFFckIsaURBQU87QUFDUCxpREFBTztBQUNQLDJDQUFJO0FBQ0oseURBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvZm9ybUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ib3R0b20tc2hhZG93OiAwcHggMXB4IGJsYWNrO1xufVxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI2JvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbn1cblxuI2xlZnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59XG5cbiNyaWdodCB7XG4gICAgZmxleDogMTtcbn1cblxuI2hlYWRlciB7XG4gICAgaGVpZ2h0OiAxMHZoO1xufVxuXG4jdG9kb0Zvcm0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvdHRvbS1zaGFkb3cpO1xufVxuXG4jdG9kb0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogN3B4O1xufVxuLnRvZG9ET00ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvdHRvbS1zaGFkb3cpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnRvZG9NYWluQ29udGVudC5oaWRkZW4sIC5mb3JtSW5Ub2RvLmhpZGRlbiwgLmV4cGFuZGVkLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG9Ub3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4udG9kb1RvcFJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuXG59XG5cbi50aXRsZSwgLmRlc2NyaXB0aW9uLCAuZHVlRGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV4cGFuZGVkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZmxvYXQ6dG9wO1xufVxuLmV4cGFuZGVkLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogLmRlc2NyaXB0aW9uLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0gKi9cblxuLmxvdy1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IHBhbGVnb2xkZW5yb2Qgc29saWQgMTVweDtcbn1cblxuLm1lZGl1bS1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IG9yYW5nZSBzb2xpZCAxNXB4O1xufVxuLmhpZ2gtcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiByZWQgc29saWQgMTVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLE9BQU87QUFDWDs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFROztBQUVaOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYm90dG9tLXNoYWRvdzogMHB4IDFweCBibGFjaztcXG59XFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI2JvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4jbGVmdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbiNyaWdodCB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxufVxcblxcbiN0b2RvRm9ybSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3R0b20tc2hhZG93KTtcXG59XFxuXFxuI3RvZG9Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDdweDtcXG59XFxuLnRvZG9ET00ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvdHRvbS1zaGFkb3cpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50b2RvTWFpbkNvbnRlbnQuaGlkZGVuLCAuZm9ybUluVG9kby5oaWRkZW4sIC5leHBhbmRlZC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb1RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcblxcbi50b2RvVG9wUmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG5cXG59XFxuXFxuLnRpdGxlLCAuZGVzY3JpcHRpb24sIC5kdWVEYXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBmbG9hdDp0b3A7XFxufVxcbi5leHBhbmRlZC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiAuZGVzY3JpcHRpb24uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiBwYWxlZ29sZGVucm9kIHNvbGlkIDE1cHg7XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogb3JhbmdlIHNvbGlkIDE1cHg7XFxufVxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IHJlZCBzb2xpZCAxNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG4vLyBzaG91bGQgaGFuZGxlIERPTSByZWxhdGVkIGZ1bmN0aW9uYWxpdHkuIFN1Y2ggYXMgY3JlYXRpbmcsIGNoYW5naW5nIGFuZCBkZWxldGluZyBET00gZWxlbWVudHMuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBcblxuXG4gICAgLy8gZGlzcGxheSBwcm9qZWN0IGFycmF5IG9uIGZpcnN0IGxvYWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdsb2FkSW5pdGlhbE9wdGlvbnMnLCBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMpO1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2xvYWRJbml0aWFsUHJvamVjdCcsIChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNoYW5nZUhlYWRlcihwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdFRvZG9zKHByb2plY3QudG9kb0FycmF5KTsgXG4gICAgICAgIHNldFByb2plY3RTZWxlY3RPcHRpb24ocHJvamVjdCk7XG4gICAgfSlcblxuICAgIC8vIHdoZW4gbmV3IHRvZG8gaXMgY3JlYXRlZCwgZGlzcGxheSBhbGwgdG9kb3NcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCduZXdUb2RvQ3JlYXRlZCcsIGRpc3BsYXlQcm9qZWN0VG9kb3MpXG5cbiAgICAvLyB3aGVuIGNyZWF0aW5nIG5ldyBwcm9qZWN0LCBkaXNwbGF5IGFsbCBwcm9qZWN0c1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucyk7XG5cbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgKHByb2plY3QpID0+IHtcbiAgICAgICAgY2hhbmdlSGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VG9kb3MocHJvamVjdC50b2RvQXJyYXkpOyBcbiAgICAgICAgc2V0UHJvamVjdFNlbGVjdE9wdGlvbihwcm9qZWN0KTtcbiAgICB9KVxuXG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY3JlYXRlRE9NUHJvcCA9IChlbFR5cGUsIHZhbHVlLCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb1Byb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsVHlwZSk7XG4gICAgICAgIHRvZG9Qcm9wLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIHRvZG9Qcm9wLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgLy8gaGlkZSBkZXNjcmlwdGlvbiBjbGFzcyBieSBkZWZhdWx0XG4gICAgICAgIGlmIChjbGFzc05hbWUgPT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdG9kb1Byb3AuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvZG9Qcm9wO1xuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlVG9kb0RPTSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9ET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCd0b2RvRE9NJyk7XG4gICAgICAgIHRvZG9ET00uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgdG9kby50b2RvTnVtYmVyKTtcblxuICAgICAgICAvLyBzZXRQcmlvcml0eUNsYXNzKHRvZG8sIHRvZG9ET00pO1xuXG4gICAgICAgIC8vIGNvbnN0IHRvZG9Ub3AgPSBjcmVhdGVET01Qcm9wKCdkaXYnLFwiXCIsXCJ0b2RvVG9wXCIpXG5cbiAgICAgICAgLy8gY29uc3QgdG9kb1RvcExlZnQgPSBjcmVhdGVET01Qcm9wKCdkaXYnLCBcIlwiLCBcInRvZG9Ub3BMZWZ0XCIpO1xuICAgICAgICAvLyB0b2RvVG9wLmFwcGVuZENoaWxkKHRvZG9Ub3BMZWZ0KVxuICAgICAgICAvLyB0b2RvVG9wTGVmdC5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby50aXRsZSwgJ3RpdGxlJykpO1xuXG4gICAgICAgIC8vIGNvbnN0IHRvZG9Ub3BSaWdodCA9IGNyZWF0ZURPTVByb3AoJ2RpdicsIFwiXCIsIFwidG9kb1RvcFJpZ2h0XCIpO1xuICAgICAgICAvLyB0b2RvVG9wLmFwcGVuZENoaWxkKHRvZG9Ub3BSaWdodClcbiAgICAgICAgLy8gdG9kb1RvcFJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLmR1ZURhdGUsICdkdWVEYXRlJykpO1xuICAgICAgICAvLyB0b2RvVG9wUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgJ0NoYW5nZScsICdjaGFuZ2UnKSk7XG4gICAgICAgIC8vIHRvZG9Ub3BSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdidXR0b24nLCAnRGVsZXRlJywgJ2RlbGV0ZScpKTtcbiAgICBcblxuICAgICAgICAvLyBjb25zdCBleHBhbmRlZCA9IGNyZWF0ZURPTVByb3AoJ2RpdicsXCJcIixcImV4cGFuZGVkXCIpXG4gICAgICAgIC8vIGV4cGFuZGVkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAvLyBleHBhbmRlZC5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby5wcmlvcml0eSwgJ3ByaW9yaXR5JykpO1xuICAgICAgICAvLyBleHBhbmRlZC5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby5kZXNjcmlwdGlvbiwgJ2Rlc2NyaXB0aW9uJykpO1xuXG4gICAgICAgIC8vIHRvZG9ET00uYXBwZW5kQ2hpbGQodG9kb1RvcCk7XG4gICAgICAgIC8vIHRvZG9ET00uYXBwZW5kQ2hpbGQoZXhwYW5kZWQpO1xuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5Ub2RvQ29udGVudCh0b2RvKSk7XG4gICAgICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybUluVG9kbygpKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRE9NKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNYWluVG9kb0NvbnRlbnQgPSAodG9kbykgPT4geyAgICAgICAgXG5cbiAgICAgICAgY29uc3QgdG9kb01haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9NYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RvTWFpbkNvbnRlbnQnKTtcbiAgICAgICAgc2V0UHJpb3JpdHlDbGFzcyh0b2RvLCB0b2RvTWFpbkNvbnRlbnQpO1xuICAgICAgICBjb25zdCB0b2RvVG9wID0gY3JlYXRlRE9NUHJvcCgnZGl2JyxcIlwiLFwidG9kb1RvcFwiKVxuXG4gICAgICAgIGNvbnN0IHRvZG9Ub3BMZWZ0ID0gY3JlYXRlRE9NUHJvcCgnZGl2JywgXCJcIiwgXCJ0b2RvVG9wTGVmdFwiKTtcbiAgICAgICAgdG9kb1RvcC5hcHBlbmRDaGlsZCh0b2RvVG9wTGVmdClcbiAgICAgICAgdG9kb1RvcExlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8udGl0bGUsICd0aXRsZScpKTtcblxuICAgICAgICBjb25zdCB0b2RvVG9wUmlnaHQgPSBjcmVhdGVET01Qcm9wKCdkaXYnLCBcIlwiLCBcInRvZG9Ub3BSaWdodFwiKTtcbiAgICAgICAgdG9kb1RvcC5hcHBlbmRDaGlsZCh0b2RvVG9wUmlnaHQpXG4gICAgICAgIHRvZG9Ub3BSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby5kdWVEYXRlLCAnZHVlRGF0ZScpKTtcbiAgICAgICAgdG9kb1RvcFJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsICdDaGFuZ2UnLCAnY2hhbmdlJykpO1xuICAgICAgICB0b2RvVG9wUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgJ0RlbGV0ZScsICdkZWxldGUnKSk7XG4gICAgXG5cbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBjcmVhdGVET01Qcm9wKCdkaXYnLFwiXCIsXCJleHBhbmRlZFwiKVxuICAgICAgICBleHBhbmRlZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZXhwYW5kZWQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8ucHJpb3JpdHksICdwcmlvcml0eScpKTtcbiAgICAgICAgZXhwYW5kZWQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8uZGVzY3JpcHRpb24sICdkZXNjcmlwdGlvbicpKTtcblxuICAgICAgICB0b2RvTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb1RvcCk7XG4gICAgICAgIHRvZG9NYWluQ29udGVudC5hcHBlbmRDaGlsZChleHBhbmRlZCk7XG4gICAgICAgIC8vIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RPTSk7XG5cbiAgICAgICAgcmV0dXJuIHRvZG9NYWluQ29udGVudDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcmlvcml0eUNsYXNzID0gKHRvZG8sIHRvZG9ET00pID0+IHtcbiAgICAgICAgc3dpdGNoKHRvZG8ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRm9ybUluVG9kbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGNyZWF0ZURPTVByb3AoJ2Zvcm0nLCBcIlwiLCAnZm9ybUluVG9kbycpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRE9NUHJvcCgnaW5wdXQnLCBcIlwiLCBcImZvcm1UaXRsZVwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgdGl0bGU6JylcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVET01Qcm9wKCdpbnB1dCcsIFwiXCIsIFwiZm9ybURlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyBkZXNjcmlwdGlvbjonKVxuICAgICAgICBjb25zdCBkYXRlID0gY3JlYXRlRE9NUHJvcCgnaW5wdXQnLCBcIlwiLCBcImZvcm1EYXRlXCIpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlRE9NUHJvcCgnc2VsZWN0JywgXCJcIiwgXCJmb3JtUHJpb3JpdHlcIik7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsIFwiTWFrZSBjaGFuZ2VzXCIsIFwiZm9ybVN1Ym1pdFwiKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgXCJDYW5jZWxcIiwgXCJmb3JtQ2FuY2VsXCIpO1xuXG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gY3JlYXRlRE9NUHJvcCgnb3B0aW9uJywgJ05vdCB1cmdlbnQnLCAnbG93JylcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpXG5cbiAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBjcmVhdGVET01Qcm9wKCdvcHRpb24nLCAnTm90IHRvbyB1cmdlbnQnLCAnbWVkaXVtJylcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpXG5cbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gY3JlYXRlRE9NUHJvcCgnb3B0aW9uJywgJ1VyZ2VudCcsICdoaWdoJylcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldFRvZG9Db250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHRvZG9Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VG9kb3ModG9kb0FycmF5KSB7XG4gICAgICAgIHJlc2V0VG9kb0NvbnRhaW5lcigpO1xuICAgICAgICB0b2RvQXJyYXkuZm9yRWFjaCgodG9kbykgPT4gY3JlYXRlVG9kb0RPTSh0b2RvKSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0U2VsZWN0XCIpO1xuICAgIFxuXG4gICAgLy8gY2FuIG9ubHkgYXNzaWduIG9uZSBpbnN0YW5jZSBvZiBhIE5vZGUsIHNvIG5lZWQgdG8gY3JlYXRlIG11bHRpcGxlIGluc3RhbmNlc1xuICAgIGNvbnN0IGNyZWF0ZU9wdGlvbkVsZW1lbnQgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRPcHRpb25FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHByb2plY3RTZWxlY3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGFzc2lnblByb2plY3RPcHRpb24gPSAocHJvamVjdCkgPT4ge1xuICAgICAgICAvLyBtYXkgbmVlZCB0byBzZXBhcmF0ZSBwcm9qZWN0IHNlbGVjdCBhbmQgdG9kbyBmb3JtIHByb2plY3Qgc2VsZWN0Li4uXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RJblRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uRWxlbWVudChwcm9qZWN0KSk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uRWxlbWVudChwcm9qZWN0KSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMocHJvamVjdEFycmF5KSB7XG4gICAgICAgIHJlc2V0T3B0aW9uRWxlbWVudHMoKTtcbiAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IGFzc2lnblByb2plY3RPcHRpb24ocHJvamVjdCkpXG4gICAgfVxuXG4gICAgLy8gd2hlbiBjcmVhdGluZyBhIHByb2plY3QsIG1ha2UgdGhlIHByb2plY3RTZWxlY3QgdmFsdWUgYmUgbWF0Y2hpbmcgUHJvamVjdC4uLiBcbiAgICBmdW5jdGlvbiBzZXRQcm9qZWN0U2VsZWN0T3B0aW9uKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RTZWxlY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0U2VsZWN0W2ldLnRleHRDb250ZW50ID09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBwcm9qZWN0U2VsZWN0W2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIHByb2plY3RTZWxlY3RJblRvZG9Gb3JtLnZhbHVlID0gcHJvamVjdFNlbGVjdFtpXS52YWx1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdFNlbGVjdC52YWx1ZVxuXG4gICAgfVxuXG4gICAgLy8gd2hlbiBjbGlja2luZyBvbiBwcm9qZWN0IHNlbGVjdHNcbiAgICBwcm9qZWN0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCk9PiB7XG4gICAgICAgIC8vIHNlbmQgdGhpcyBjb2RlIHRvIHByb2plY3QuanNcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goXCJnZXRQcm9qZWN0RnJvbVByb2plY3RTZWxlY3RcIiwgZ2V0U2VsZWN0ZWRQcm9qZWN0KCkpXG4gICAgfSlcbiAgICBcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1oZWFkZXJcIik7XG4gICAgY29uc3QgY2hhbmdlSGVhZGVyID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIC8vIGRlbGV0ZSB0b2RvIERPTVxuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcbiAgICAgICAgICAgIC8vIHB1Ymxpc2ggdGhlIGRhdGEgaW5kZXggb2YgdGhlIHRvZG8gRE9NLCB0byBwcm9qZWN0XG4gICAgICAgICAgICBwdWJTdWIucHVibGlzaCgnZ2V0VG9kb1RvTW9kaWZ5JywgZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gY2xpY2sgY2hhbmdlIHRvZG8gYnV0dG9uXG4gICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UnKSkge1xuICAgICAgICAgICAgY29uc3QgdG9kb0RPTSA9IChlLnRhcmdldC5jbG9zZXN0KCcudG9kb0RPTScpKTtcbiAgICAgICAgICAgIHRvZ2dsZU1haW5Ub2RvQ29udGVudCh0b2RvRE9NKTtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm1JblRvZG8odG9kb0RPTSk7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBmb3JtIHdoZXJlIGluaXRpYWwgdmFsdWVzIGFyZSB0aGF0IG9mIHRoZSB0b2RvIERPTSB0ZXh0XG4gICAgICAgICAgICAvLyBhbmQgd2hlbiBjbGlja2luZyBzdWJtaXQsIHNlbmQgdG9kbyBpbmRleCB0byBwcm9qZWN0LmpzIHRvIGdldCBjb3JyZXNwb25kaW5nIHRvZG8sIHNvIHRoYXQgaXQgY2FuIGJlIG1vZGlmaWVkXG4gICAgICAgICAgICAvLyB0aGVuIGJlIHNlbnQgdGhlIHByb2plY3Qgc28gdGhhdCBpdCBjYW4gYmUgZGlzcGxheWVkIGFnYWluXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gY2xpY2sgb24gY2FuY2VsIGJ1dHRvbiBpbiBmb3JtIGluIHRvZG9cbiAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZm9ybUNhbmNlbCcpKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvRE9NID0gKGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvRE9NJykpO1xuICAgICAgICAgICAgdG9nZ2xlTWFpblRvZG9Db250ZW50KHRvZG9ET00pO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybUluVG9kbyh0b2RvRE9NKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0b2RvRE9NLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtSW5Ub2RvJyk7XG4gICAgICAgICAgICByZXNldEZvcm0oZm9ybSk7XG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiByZXNldEZvcm0oZm9ybSkge1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWFpblRvZG9Db250ZW50KGVsKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBlbC5xdWVyeVNlbGVjdG9yKCcudG9kb01haW5Db250ZW50Jyk7XG4gICAgICAgIHRvZ2dsZUhpZGRlbihtYWluKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVGb3JtSW5Ub2RvKGVsKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBlbC5xdWVyeVNlbGVjdG9yKCcuZm9ybUluVG9kbycpO1xuICAgICAgICB0b2dnbGVIaWRkZW4oZm9ybSk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyBcbiAgICAvLyB3aGVuIGNsaWNraW5nIG9uIHRvZG8sIGV4cGFuZCBpdCBhbmQgaGlkZSBvdGhlciBleHBhbmRlZCB0b2Rvcy5cbiAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09ICdCVVRUT04nKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHRvZG9ET00gPSAoZS50YXJnZXQuY2xvc2VzdChcIi50b2RvRE9NXCIpKTtcbiAgICAgICAgaWYgKHRvZG9ET00pIHtcbiAgICAgICAgICAgIHRvZ2dsZUV4cGFuZFRvZG9BbmRDbG9zZU90aGVycyh0b2RvRE9NKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUV4cGFuZFRvZG9BbmRDbG9zZU90aGVycyhlbCkge1xuICAgICAgICByZW1vdmVDdXJyZW50Q2xpY2tlZCgpO1xuICAgICAgICBzZXRDdXJyZW50Q2xpY2tlZChlbCk7XG4gICAgICAgIGhpZGVBbGxUb2RvRXhwYW5zaW9ucygpO1xuICAgICAgICB0b2dnbGVFeHBhbmRUb2RvKGVsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDdXJyZW50Q2xpY2tlZCgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudENsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1jbGlja2VkJylcbiAgICAgICAgaWYgKGN1cnJlbnRDbGlja2VkKSB7XG4gICAgICAgICAgICBjdXJyZW50Q2xpY2tlZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWNsaWNrZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRDbGlja2VkKHRvZG9ET00pIHtcbiAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWNsaWNrZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlQWxsVG9kb0V4cGFuc2lvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFsbEV4cGFuZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leHBhbmRlZFwiKVxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIGFsbEV4cGFuZGVkKSB7XG4gICAgICAgICAgICBpZiAodG9kby5jbG9zZXN0KFwiLnRvZG9ET01cIikuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LWNsaWNrZWQnKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIXRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUV4cGFuZFRvZG8oZWwpIHtcbiAgICAgICAgY29uc3QgYm90dG9tID0gZWwucXVlcnlTZWxlY3RvcihcIi5leHBhbmRlZFwiKTtcbiAgICAgICAgdG9nZ2xlSGlkZGVuKGJvdHRvbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlSGlkZGVuKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPyBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTogZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgLy93aGVuIGNoYW5naW5nIHRvZG8sIHNlbmQgZm9ybSBpbnB1dCwgc2VuZCBET00gaW5kZXgsIHRoZW4gZGlzcGxheSBtYXRjaGluZyB0b2RvXG4gICAgXG5cbn0iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuLy9oYW5kbGVzIGZvcm0gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LiBzdWNoIGFzIHdoZW4gZm9ybXMgYXJlIHN1Ym1pdHRlZC5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtSGFuZGxlcigpIHtcblxuICAgIGNvbnN0IHJlc2V0Rm9ybSA9IChmb3JtKSA9PiB7XG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKVxuICAgIGNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9TdWJtaXRcIik7XG5cbiAgICBjb25zdCBnZXRUb2RvQXJncyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcmlvcml0eVwiKS52YWx1ZX0gcHJpb3JpdHlgOy8vY2hhbmdlIGZyb20gdmFsdWUgdG8gdGV4dENvbnRlbnRcbiAgICBjb25zdCB0b2RvQXJncyA9IFt0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eV1cbiAgICByZXR1cm4gdG9kb0FyZ3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VsZWN0ZWRQcm9qZWN0T3B0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3QudmFsdWU7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIHJlZmFjdG9yIHRvIHVzZSBkYXRhIGF0dHJpYnV0ZSBhbmQgaW5kZXguLi4gcGhvb2V5XG4gICAgfVxuXG4gICAgc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZ2V0UHJvamVjdEZyb21Ub2RvRm9ybScsIGdldFNlbGVjdGVkUHJvamVjdE9wdGlvbigpKS8vc2VuZCB0byBwcm9qZWN0LmpzXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIGdldFRvZG9BcmdzKCkpOyAvL3NlbmQgdG8gdG9kby5qc1xuICAgICAgICByZXNldEZvcm0odG9kb0Zvcm0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIilcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFN1Ym1pdCcpXG4gICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBwdWJTdWIgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtIGlucHV0JykudmFsdWUpXG4gICAgICAgIHJlc2V0Rm9ybShwcm9qZWN0Rm9ybSk7XG4gICAgfSlcbn0iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QoKSB7XG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG5cbiAgICAvLyBpcyBtYXRjaGluZ1Byb2plY3QgdmFyaWFibGUgZmxhd2VkP1xuICAgIGxldCBtYXRjaGluZ1Byb2plY3QgPSB7fTtcbiAgICAvL2dldFByb2plY3QgYW5kIHNlbmRUb2RvVG9Qcm9qZWN0VG9kb0FycmF5IG9jY3VyIGNvbnNlY3V0aXZlbHlcbiAgICAvLyBnZXQgcHJvamVjdCBmcm9tIHRvZG8gZm9ybTsgZmlyc3QgZ2V0IG1hdGNoaW5nIHByb2plY3QsIHRoZW4gd2FpdCBmb3IgdG9kbyB0byBiZSBhZGRlZCB0byB0aGUgcHJvamVjdFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2dldFByb2plY3RGcm9tVG9kb0Zvcm0nLChwcm9qZWN0TWF0Y2gpID0+IHsvL2R1bm5vIHdoYXQgdG8gY2FsbCBwcm9qZWN0TWF0Y2g7IHRoZSB0aGluZyB0aGF0IGkgcGFzcyB0byBmaW5kIHRoZSBjb3JyZWN0IHByb2plY3RcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5LmZpbmQoKHByb2plY3QpID0+IHtyZXR1cm4gcHJvamVjdC5uYW1lID09IHByb2plY3RNYXRjaH0pLy9hbHNvLCBtYXkgbmVlZCB0byB1c2UgZGF0YSBhdHRyaWJ1dGUsIHJhdGhlciB0aGFuIG5hbWUuIG9yIHVzZSBmb3JtIHZhb2xpZGF0aW9uIHRvIG5vdCB1c2Ugc2FtZSBuYW1lXG4gICAgICAgIHNldE1hdGNoaW5nUHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy9nZXQgcHJvamVjdCBmcm9tIHByb2plY3Qgc2VsZWN0OyBpbW1lZGlhdGVseSBwdWJsaXNoIHRvIGRpc3BsYXkgYXJyYXlcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0RnJvbVByb2plY3RTZWxlY3QnLChwcm9qZWN0TWF0Y2gpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5LmZpbmQoKHByb2plY3QpID0+IHtyZXR1cm4gcHJvamVjdC5uYW1lID09IHByb2plY3RNYXRjaH0pXG4gICAgICAgIHNldE1hdGNoaW5nUHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZGlzcGxheVNlbGVjdGVkUHJvamVjdCcsIG1hdGNoaW5nUHJvamVjdClcbiAgICB9KTtcblxuICAgIC8vYWRkIHRvZG8gdG8gcHJvamVjdCB0b2RvQXJyYXlcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdzZW5kVG9kb1RvUHJvamVjdFRvZG9BcnJheScsICh0b2RvKSA9PiB7XG4gICAgICAgIGFkZFRvZG9Ub1Byb2plY3RBcnJheShtYXRjaGluZ1Byb2plY3QsIHRvZG8pXG4gICAgICAgIC8vIHB1YlN1YiB0byBkaXNwbGF5IHRoZSB0b2Rvczsgc2VuZCB0byBkaXNwbGF5LmpzXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuICAgIH0pO1xuXG4gICAgLy8gc3Vic2NyaWJlIHRvIHdoZW4gcHJvamVjdGZvcm0gaXMgc3VibWl0dGVkXG4gICAgcHViU3ViLnN1YnNjcmliZSgncHJvamVjdEZvcm1TdWJtaXR0ZWQnLCAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7IFxuICAgICAgICBzZXRNYXRjaGluZ1Byb2plY3QobmV3UHJvamVjdClcblxuICAgICAgICAvLyB3aGVuIGEgbmV3IHByb2plY3QgaXMgY3JlYXRlZFxuICAgICAgICBwdWJTdWIucHVibGlzaCgncHJvamVjdEFkZGVkJywgcHJvamVjdEFycmF5KTsgLy9uZWVkZWQgdG8gZGlzcGxheSBhbGwgcHJvamVjdCBvcHRpb25zXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KSAvL25lZWRlZCB0byBzZXQgaGVhZGVyIGFuZCB0b2RvIHRvIHBhcnRpY3VsYXIgcHJvamVjdFxuICAgIH0pXG5cbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRUb2RvVG9Nb2RpZnknLCAodG9kb0luZGV4KT0+IHtcbiAgICAgICAgLy8gbW9kaWZpZXMgaW4gcGxhY2UsIG11dGF0aW5nIHRoZSBvcmlnaW5hbCBhcnJheS4gdGhpcyBpcyB3aGF0IHdlIHdhbnRcbiAgICAgICAgbWF0Y2hpbmdQcm9qZWN0LnRvZG9BcnJheS5zcGxpY2UoXG4gICAgICAgICAgICBtYXRjaGluZ1Byb2plY3QudG9kb0FycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS50b2RvTnVtYmVyID09IHRvZG9JbmRleCksIDEpXG5cbiAgICAgICAgLy8gbm93IGRpc3BsYXkgYWdhaW5cbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpXG4gICAgfSlcblxuXG4gICAgY29uc3Qgc2V0TWF0Y2hpbmdQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbWF0Y2hpbmdQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG4gICAgY29uc3QgYWRkVG9kb1RvUHJvamVjdEFycmF5ID0gKHByb2plY3QsIHRvZG8pID0+IHtcbiAgICAgICAgcHJvamVjdC50b2RvQXJyYXkucHVzaCh0b2RvKVxuICAgIH1cblxuICAgIGNvbnN0IGluY3JlYXNlUHJvamVjdHMgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KVxuICAgIH1cblxuICAgIGNvbnN0IGdldEFycmF5ID0gKCkgPT4gcHJvamVjdEFycmF5O1xuXG5cbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAgICAgdGhpcy50b2RvQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBpbmNyZWFzZVByb2plY3RzKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVVNFRFxuICAgICAgICBhZGRUb0RvKHRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LnB1c2godG9kbylcbiAgICAgICAgfVxuICAgICAgICAvLyBOT1QgVVNFRFxuICAgICAgICByZW1vdmVUb0RvKHRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LmZpbHRlcihlbCA9PiBlbCAhPSB0b2RvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVCBVU0VEIEFORCBERVZFTE9QXG4gICAgICAgIGNoYW5nZVRvRG8odG9kbykge1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOT1QgVVNFRCBBTkQgREVWRUxPUFxuICAgICAgICBjaGFuZ2VOYW1lKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGlzIHNob3VsZCBjcmVhdGUgYSBwcm9qZWN0IGFuZCBhZGQgaXQgdG8gcHJvamVjdEFycmF5LiBpcyB0aGlzIGNsZWFuIGNvZGU/XG5cbiAgICBjb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoJ015IEZpcnN0IFByb2plY3QnKTtcbiAgICAgICAgLy8gYWRkZWQgdGhpcyBiZWxvd1xuICAgICAgICBzZXRNYXRjaGluZ1Byb2plY3QodGVzdFByb2plY3QpO1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnbG9hZEluaXRpYWxPcHRpb25zJywgcHJvamVjdEFycmF5KTtcblxuICAgICAgICAvLyBhZGRlZCB0aGlzIGJlbG93XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdsb2FkSW5pdGlhbFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdCBvbiBmaXJzdCBsb2FkXG4gICAgcGFnZUxvYWQoKTtcbn1cblxuXG4iLCJleHBvcnQgY29uc3QgcHViU3ViID0ge1xuICAgIGV2ZW50czoge30sXG5cbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50LCBjYikge1xuICAgICAgICAvLyB3aGF0IGRvZXMgdGhpcy5ldmVudHNbZXZlbnRdIGxvb2sgbGlrZT9cbiAgICAgICAgY29uc29sZS5sb2coYHNvbWV0aGluZyBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldmVudH1gKVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF18fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2IpO1xuICAgIH0sXG5cbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzb21ldGhpbmcgdW5zdWJzY3JpYmVkIGZyb20gJHtldmVudH1gKVxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0uZmlsdGVyKGYgPT4gZiAhPSBjYilcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbWFraW5nIGEgYnJvYWRjYXN0IGFib3V0ICR7ZXZlbnR9IHdpdGggZGF0YWApO1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG59XG5cbiIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJztcblxuLy9tYXkgaGF2ZSB0byBlbmNhcHN1bGF0ZSBhbGwgb2YgdGhpcyBpbnRvIGEgZnVuY3Rpb25cblxuZnVuY3Rpb24gdG9kbygpIHtcblxuICAgIC8vIHB1YnN1YiBTVUJTQ1JJQkVcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIChhcmdzKSA9PiB7Ly9wcm9iYWJseSBjb3VsZCBkZXN0cnVjdHVyZSB0aGlzIHRiaFxuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcblxuICAgICAgICAvLyBpbiBmYWN0LCB3aGF0IGkgdGhpbmsgbmVlZHMgdG8gaGFwcGVuIGlzIHRvIHB1Ymxpc2ggdGhlIHRvZG8gdG8gYW4gZXZlbnQsIGFuZCBwcm9qZWN0IHdpbGwgc3Vic2NyaWJlIHRvIHB1dCB0aGF0IGluIHRvZG9hcnJheS5cbiAgICAgICAgLy8gYW5kIHRoZW4gdGhhdCB3aWxsIHB1Ymxpc2ggdG8gZGlzcGxheS5cbiAgICAgICAgLy8gTkVYVCwgSU1QTEVNRU5UIENIQU5HSU5HIFRPRE9TOyBDSEFOR0UgUFJPUEVSVFksIERFTEVURVxuICAgIH0pXG5cbiAgICBsZXQgdG9kb0NvdW50ZXIgPSAwO1xuXG4gICAgY29uc3QgaW5jcmVtZW50Q291bnRlciA9ICgpID0+IHtcbiAgICAgICAgdG9kb0NvdW50ZXIrK1xuICAgIH1cblxuXG4gICAgY2xhc3MgVG9kbyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50b2RvTnVtYmVyID0gdG9kb0NvdW50ZXI7XG4gICAgICAgIGluY3JlbWVudENvdW50ZXIoKTtcblxuICAgICAgICAvLyBtYXkgaGF2ZSB0byBtb3ZlIHRoaXMgZWxzZXdoZXJlLCBidXQgd2hlbiBuZXcgdG9kbyBpcyBjcmVhdGVkLCBhcHBlbmQgaXQgdG8gYSBwcm9qZWN0IHRvZG9BcnJheVxuICAgICAgICBwdWJTdWIucHVibGlzaCgnc2VuZFRvZG9Ub1Byb2plY3RUb2RvQXJyYXknLCB0aGlzKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UHJvcChwcm9wLCB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpc1twcm9wXSA9IHZhbHVlO1xuICAgICAgICB9IFxuICAgIH1cbn1cblxuZXhwb3J0IHt0b2RvfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGZvcm1IYW5kbGVyIH0gZnJvbSBcIi4vZm9ybUhhbmRsZXJcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZGlzcGxheSgpO1xucHJvamVjdCgpO1xudG9kbygpO1xuZm9ybUhhbmRsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=