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

#header {
    height: 5vh;
    padding: 20px 10px 20px;
    font-size: 40px;
    background-color: rgb(224, 68, 118);
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
    width: 350px;
    background-color: rgb(207, 217, 217);
    padding-left: 30px;
}

#left-top, #left-bottom {
    margin-top: 50px;
}

#left-top p, #left-bottom p {
    font-size: 20px;
}

#right {
    flex: 1;
    margin-left: 60px;
    margin-right: 60px;
}

#project-header {
    margin-top: 40px;
    font-size: 30px;
}

#add-todo-text {
    font-size: 20px;
}

#todoForm {
    display: flex;
    justify-content: space-between;
}
#todoForm input, #todoForm select, #todoForm button,
.formInTodo input, .formInTodo select, .formInTodo button {
    margin-right: 20px;
    height: 30px;
}

.formInTodo {
    padding-top: 20px;
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
    border-left: rgb(255, 254, 240) solid 15px;
}

.medium-priority {
    border-left: orange solid 15px;
}
.high-priority {
    border-left: red solid 15px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,eAAe;IACf,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,OAAO;IACP,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;;IAEI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI,oBAAoB;IACpB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,gCAAgC;IAChC,cAAc;IACd,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;;AAEZ;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;AACA;IACI,aAAa;AACjB;;AAEA;;GAEG;;AAEH;IACI,0CAA0C;AAC9C;;AAEA;IACI,8BAA8B;AAClC;AACA;IACI,2BAA2B;AAC/B","sourcesContent":[":root {\n    --bottom-shadow: 0px 1px black;\n}\n\n#header {\n    height: 5vh;\n    padding: 20px 10px 20px;\n    font-size: 40px;\n    background-color: rgb(224, 68, 118);\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n#body {\n    display: flex;\n    flex: 1;\n}\n\n#left {\n    width: 350px;\n    background-color: rgb(207, 217, 217);\n    padding-left: 30px;\n}\n\n#left-top, #left-bottom {\n    margin-top: 50px;\n}\n\n#left-top p, #left-bottom p {\n    font-size: 20px;\n}\n\n#right {\n    flex: 1;\n    margin-left: 60px;\n    margin-right: 60px;\n}\n\n#project-header {\n    margin-top: 40px;\n    font-size: 30px;\n}\n\n#add-todo-text {\n    font-size: 20px;\n}\n\n#todoForm {\n    display: flex;\n    justify-content: space-between;\n}\n#todoForm input, #todoForm select, #todoForm button,\n.formInTodo input, .formInTodo select, .formInTodo button {\n    margin-right: 20px;\n    height: 30px;\n}\n\n.formInTodo {\n    padding-top: 20px;\n}\n\n\n#todoForm {\n    padding-bottom: 30px;\n    box-shadow: var(--bottom-shadow);\n}\n\n#todoContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n.todoDOM {\n    cursor: pointer;\n    min-height: 80px;\n    box-shadow: var(--bottom-shadow);\n    overflow: auto;\n    background-color: aliceblue;\n    padding-right: 20px;\n    padding-left: 20px;\n}\n\n.todoMainContent.hidden, .formInTodo.hidden, .expanded.hidden {\n    display: none;\n}\n\n.todoTop {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 15px;\n}\n\n.todoTopRight {\n    display: flex;\n    gap: 5px;\n\n}\n\n.title, .description, .dueDate {\n    background-color: white;\n    padding: 5px;\n}\n\n.title {\n    font-size: 25px;\n}\n\n.expanded {\n    padding: 10px 10px 0px;\n    height: 100px;\n    float:top;\n}\n.expanded.hidden {\n    display: none;\n}\n\n/* .description.hidden {\n    display: none;\n} */\n\n.low-priority {\n    border-left: rgb(255, 254, 240) solid 15px;\n}\n\n.medium-priority {\n    border-left: orange solid 15px;\n}\n.high-priority {\n    border-left: red solid 15px;\n}"],"sourceRoot":""}]);
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

    // when deleting a project
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('projectDeleted', displayAllProjectOptions);

    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('displaySelectedProject', (project) => {
        changeHeader(project.name);
        displayProjectTodos(project.todoArray); 
        setProjectSelectOption(project);
    })

    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('clearDeletedProjectContent', () => {
        changeHeader('Deleted!');
        resetTodoContainer();
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
        setPriorityClass(todo,todoDOM);
        todoDOM.classList.add('todoDOM');
        todoDOM.setAttribute('data-index', todo.todoNumber);

        todoDOM.appendChild(createMainTodoContent(todo));
        todoDOM.appendChild(createFormInTodo());
        todoContainer.appendChild(todoDOM);
    }

    const createMainTodoContent = (todo) => {        

        const todoMainContent = document.createElement('div');
        todoMainContent.classList.add('todoMainContent');
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

        return todoMainContent;
    }

    const setPriorityClass = (todo, todoDOM) => {
        switch(todo.priority) {
            case 'low priority':
                todoDOM.classList.add('low-priority');
                break;
            case 'medium priority':
                todoDOM.classList.add('medium-priority');
                break;
            case 'high priority':
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
        // const date = createDOMProp('input', "", "formDate"); //new date input doesn't work
        // date.setAttribute('type', 'date');
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
        // form.appendChild(date);
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
        option.value = project.number;
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

    function getSelectedProjectIndex() {
        return projectSelect.value

    }

    // when clicking on choose project
    const chooseProject = document.querySelector('#chooseProject');
    chooseProject.addEventListener("click", () => {
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish("getProjectFromProjectSelect", getSelectedProjectIndex())
    })


    // delete project
    const deleteProject = document.querySelector('#deleteProject');
    deleteProject.addEventListener("click", () => {
        console.log(getSelectedProjectIndex());
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish("getProjectToDelete", getSelectedProjectIndex());
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
            _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('deleteTodo', e.target.closest('.todoDOM').getAttribute('data-index'));
        }
    })

    // click change todo button
    todoContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains('change')) {
            const todoDOM = (e.target.closest('.todoDOM'));
            toggleMainTodoContent(todoDOM);
            toggleFormInTodo(todoDOM);
        }
    })

    // click on form submit
    todoContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains('formSubmit')) {
            const todoDOM = (e.target.closest('.todoDOM'));
            _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('submitChangedTodo', [todoDOM.getAttribute('data-index'), getFormInput(todoDOM)]);
        }
    })

    function getFormInput(form) {
        const newTitle = form.querySelector(".formTitle").value;
        const newDescription = form.querySelector(".formDescription").value;
        const newPriority = form.querySelector(".formPriority").value;
        return {newTitle, newDescription, newPriority}
    }

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
        console.log(project.value);
        return project.value;
        // may need to refactor to use data attribute and index... phooey
    }

    submitTodo.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(getSelectedProjectOption());
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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");



function project() {

    let projectCounter = 0;

    class Project {
        constructor(name) {
            this.todoArray = [];
            this.name = name;
            this.number = projectCounter;
            increaseProjects(this);
            incrementCounter();
        }
    }

    const incrementCounter = () => {
        projectCounter++
    }

    let projectArray = [];

    if (localStorage.projectArray) {

    }

    let matchingProject = {};
    //getProject and sendTodoToProjectTodoArray occur consecutively
    // get project from todo form; first get matching project, then wait for todo to be added to the project
    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.subscribe('getProjectFromTodoForm',(projectIndex) => {
        const selectedProject = projectArray.find((project) => {return project.number == projectIndex})
        setMatchingProject(selectedProject);
    });

    //get project from project select; immediately publish to display array
    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.subscribe('getProjectFromProjectSelect',(projectIndex) => {
        const selectedProject = projectArray.find((project) => {return project.number == projectIndex})
        setMatchingProject(selectedProject);
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('displaySelectedProject', matchingProject)
    });

    //add todo to project todoArray
    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.subscribe('sendTodoToProjectTodoArray', (todo) => {
        addTodoToProjectArray(matchingProject, todo)
        // pubSub to display the todos; send to display.js
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('displaySelectedProject', matchingProject)
        // when making anychange, upload to local storage
        // pushToLocalStorage();
    });

    // subscribe to when projectform is submitted
    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 
        setMatchingProject(newProject)

        // when a new project is created
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('projectAdded', projectArray); //needed to display all project options
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
        // pushToLocalStorage();
    })

    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.subscribe('getProjectToDelete', (projectIndex) => {
        projectArray.forEach(item => console.log(item))
        deleteElement(projectArray, projectIndex);
        projectArray.forEach(item => console.log(item))
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('projectDeleted', projectArray); //reset project options
        // if projectIndex == matching project, then clear everything
        console.log('projIndex and matchingProj number')
        console.log(projectIndex)
        console.log(matchingProject.number)

        if (projectIndex == matchingProject.number) {
            _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('clearDeletedProjectContent')
        } else {
            _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
        }
        // pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
    })

    // 


    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.subscribe('deleteTodo', (todoIndex) => {
        // modifies in place, mutating the original array. this is what we want
        matchingProject.todoArray.forEach((todo) => {
            console.log(todo.number);
        })
        deleteElement(matchingProject.todoArray, todoIndex)
        // now display again
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('displaySelectedProject', matchingProject)
        // pushToLocalStorage();
    })

    // modify todo when the form for it is submitted
    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.subscribe('submitChangedTodo', ([todoIndex, {newTitle, newDescription, newPriority}]) => {
        let todoToChange = matchingProject.todoArray.find((todo) => {return todo.number == todoIndex});
        console.log(todoToChange);
        todoToChange.setProp('title', newTitle);
        todoToChange.setProp('description', newDescription);
        todoToChange.setProp('priority', newPriority);

        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('displaySelectedProject', matchingProject)
        // pushToLocalStorage();
    })

    const setMatchingProject = (project) => {
        matchingProject = project;
    }
    const addTodoToProjectArray = (project, todo) => {
        project.todoArray.push(todo)
    }

    const deleteElement = (array, index) => {
        array.splice(
            array.findIndex((item) => item.number == index),1)
    }

    const increaseProjects = (project) => {
        projectArray.push(project)
    }

    // when making any change to project, assign project Array to local Storage
    const pushToLocalStorage = () => {
        console.log(projectArray)

        localStorage.projectArray = JSON.stringify(projectArray)
        console.log(localStorage.projectArray);
        let test = JSON.parse(localStorage.projectArray);
        console.log(test)
    }

    const pageLoad = () => {
        //clear storage
        localStorage.clear();
        console.log(localStorage.projectArray);
        console.log(localStorage);
        let testProject = new Project('My First Project!');
        // added this below
        setMatchingProject(testProject);
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('loadInitialOptions', projectArray);

        // added this below
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('loadInitialProject', matchingProject);
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
        this.number = todoCounter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQU07QUFDZCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQU07QUFDZCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJDQUFNO0FBQ2xCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmtDO0FBQ0Y7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0EsSUFBSSwyQ0FBTSwyQ0FBMkM7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMkNBQU07QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNNO0FBQ1E7QUFDUjtBQUNmOztBQUVyQixpREFBTztBQUNQLGlEQUFPO0FBQ1AsMkNBQUk7QUFDSix5REFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9mb3JtSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWJvdHRvbS1zaGFkb3c6IDBweCAxcHggYmxhY2s7XG59XG5cbiNoZWFkZXIge1xuICAgIGhlaWdodDogNXZoO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCA2OCwgMTE4KTtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI2JvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbn1cblxuI2xlZnQge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMTcsIDIxNyk7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4jbGVmdC10b3AsICNsZWZ0LWJvdHRvbSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuI2xlZnQtdG9wIHAsICNsZWZ0LWJvdHRvbSBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNyaWdodCB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG5cbiNwcm9qZWN0LWhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbiNhZGQtdG9kby10ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiN0b2RvRm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4jdG9kb0Zvcm0gaW5wdXQsICN0b2RvRm9ybSBzZWxlY3QsICN0b2RvRm9ybSBidXR0b24sXG4uZm9ybUluVG9kbyBpbnB1dCwgLmZvcm1JblRvZG8gc2VsZWN0LCAuZm9ybUluVG9kbyBidXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5mb3JtSW5Ub2RvIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuXG4jdG9kb0Zvcm0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvdHRvbS1zaGFkb3cpO1xufVxuXG4jdG9kb0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogN3B4O1xufVxuLnRvZG9ET00ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvdHRvbS1zaGFkb3cpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnRvZG9NYWluQ29udGVudC5oaWRkZW4sIC5mb3JtSW5Ub2RvLmhpZGRlbiwgLmV4cGFuZGVkLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG9Ub3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4udG9kb1RvcFJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuXG59XG5cbi50aXRsZSwgLmRlc2NyaXB0aW9uLCAuZHVlRGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV4cGFuZGVkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZmxvYXQ6dG9wO1xufVxuLmV4cGFuZGVkLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogLmRlc2NyaXB0aW9uLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0gKi9cblxuLmxvdy1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IHJnYigyNTUsIDI1NCwgMjQwKSBzb2xpZCAxNXB4O1xufVxuXG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogb3JhbmdlIHNvbGlkIDE1cHg7XG59XG4uaGlnaC1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IHJlZCBzb2xpZCAxNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLE9BQU87QUFDWDs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7O0FBRVo7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ib3R0b20tc2hhZG93OiAwcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDY4LCAxMTgpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbiNsZWZ0IHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMTcsIDIxNyk7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuI2xlZnQtdG9wLCAjbGVmdC1ib3R0b20ge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4jbGVmdC10b3AgcCwgI2xlZnQtYm90dG9tIHAge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNyaWdodCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI2FkZC10b2RvLXRleHQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiN0b2RvRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI3RvZG9Gb3JtIGlucHV0LCAjdG9kb0Zvcm0gc2VsZWN0LCAjdG9kb0Zvcm0gYnV0dG9uLFxcbi5mb3JtSW5Ub2RvIGlucHV0LCAuZm9ybUluVG9kbyBzZWxlY3QsIC5mb3JtSW5Ub2RvIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZm9ybUluVG9kbyB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG5cXG4jdG9kb0Zvcm0ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm90dG9tLXNoYWRvdyk7XFxufVxcblxcbiN0b2RvQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcbi50b2RvRE9NIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3R0b20tc2hhZG93KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4udG9kb01haW5Db250ZW50LmhpZGRlbiwgLmZvcm1JblRvZG8uaGlkZGVuLCAuZXhwYW5kZWQuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9Ub3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbn1cXG5cXG4udG9kb1RvcFJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuXFxufVxcblxcbi50aXRsZSwgLmRlc2NyaXB0aW9uLCAuZHVlRGF0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmV4cGFuZGVkIHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZmxvYXQ6dG9wO1xcbn1cXG4uZXhwYW5kZWQuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogLmRlc2NyaXB0aW9uLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogcmdiKDI1NSwgMjU0LCAyNDApIHNvbGlkIDE1cHg7XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogb3JhbmdlIHNvbGlkIDE1cHg7XFxufVxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IHJlZCBzb2xpZCAxNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG4vLyBzaG91bGQgaGFuZGxlIERPTSByZWxhdGVkIGZ1bmN0aW9uYWxpdHkuIFN1Y2ggYXMgY3JlYXRpbmcsIGNoYW5naW5nIGFuZCBkZWxldGluZyBET00gZWxlbWVudHMuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheSgpIHtcblxuICAgIC8vIGRpc3BsYXkgcHJvamVjdCBhcnJheSBvbiBmaXJzdCBsb2FkXG4gICAgcHViU3ViLnN1YnNjcmliZSgnbG9hZEluaXRpYWxPcHRpb25zJywgZGlzcGxheUFsbFByb2plY3RPcHRpb25zKTtcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdsb2FkSW5pdGlhbFByb2plY3QnLCAocHJvamVjdCkgPT4ge1xuICAgICAgICBjaGFuZ2VIZWFkZXIocHJvamVjdC5uYW1lKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RUb2Rvcyhwcm9qZWN0LnRvZG9BcnJheSk7IFxuICAgICAgICBzZXRQcm9qZWN0U2VsZWN0T3B0aW9uKHByb2plY3QpO1xuICAgIH0pXG5cbiAgICAvLyB3aGVuIG5ldyB0b2RvIGlzIGNyZWF0ZWQsIGRpc3BsYXkgYWxsIHRvZG9zXG4gICAgcHViU3ViLnN1YnNjcmliZSgnbmV3VG9kb0NyZWF0ZWQnLCBkaXNwbGF5UHJvamVjdFRvZG9zKVxuXG4gICAgLy8gd2hlbiBjcmVhdGluZyBuZXcgcHJvamVjdCwgZGlzcGxheSBhbGwgcHJvamVjdHNcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0QWRkZWQnLCBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMpO1xuXG4gICAgLy8gd2hlbiBkZWxldGluZyBhIHByb2plY3RcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0RGVsZXRlZCcsIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucyk7XG5cbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgKHByb2plY3QpID0+IHtcbiAgICAgICAgY2hhbmdlSGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VG9kb3MocHJvamVjdC50b2RvQXJyYXkpOyBcbiAgICAgICAgc2V0UHJvamVjdFNlbGVjdE9wdGlvbihwcm9qZWN0KTtcbiAgICB9KVxuXG4gICAgcHViU3ViLnN1YnNjcmliZSgnY2xlYXJEZWxldGVkUHJvamVjdENvbnRlbnQnLCAoKSA9PiB7XG4gICAgICAgIGNoYW5nZUhlYWRlcignRGVsZXRlZCEnKTtcbiAgICAgICAgcmVzZXRUb2RvQ29udGFpbmVyKCk7XG4gICAgfSlcblxuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGNyZWF0ZURPTVByb3AgPSAoZWxUeXBlLCB2YWx1ZSwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9Qcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbFR5cGUpO1xuICAgICAgICB0b2RvUHJvcC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICB0b2RvUHJvcC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIC8vIGhpZGUgZGVzY3JpcHRpb24gY2xhc3MgYnkgZGVmYXVsdFxuICAgICAgICBpZiAoY2xhc3NOYW1lID09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRvZG9Qcm9wLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvUHJvcDtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG9ET00gPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB0b2RvRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNldFByaW9yaXR5Q2xhc3ModG9kbyx0b2RvRE9NKTtcbiAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCd0b2RvRE9NJyk7XG4gICAgICAgIHRvZG9ET00uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgdG9kby50b2RvTnVtYmVyKTtcblxuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5Ub2RvQ29udGVudCh0b2RvKSk7XG4gICAgICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybUluVG9kbygpKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRE9NKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNYWluVG9kb0NvbnRlbnQgPSAodG9kbykgPT4geyAgICAgICAgXG5cbiAgICAgICAgY29uc3QgdG9kb01haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9NYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RvTWFpbkNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdG9kb1RvcCA9IGNyZWF0ZURPTVByb3AoJ2RpdicsXCJcIixcInRvZG9Ub3BcIilcblxuICAgICAgICBjb25zdCB0b2RvVG9wTGVmdCA9IGNyZWF0ZURPTVByb3AoJ2RpdicsIFwiXCIsIFwidG9kb1RvcExlZnRcIik7XG4gICAgICAgIHRvZG9Ub3AuYXBwZW5kQ2hpbGQodG9kb1RvcExlZnQpXG4gICAgICAgIHRvZG9Ub3BMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLnRpdGxlLCAndGl0bGUnKSk7XG5cbiAgICAgICAgY29uc3QgdG9kb1RvcFJpZ2h0ID0gY3JlYXRlRE9NUHJvcCgnZGl2JywgXCJcIiwgXCJ0b2RvVG9wUmlnaHRcIik7XG4gICAgICAgIHRvZG9Ub3AuYXBwZW5kQ2hpbGQodG9kb1RvcFJpZ2h0KVxuICAgICAgICB0b2RvVG9wUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8uZHVlRGF0ZSwgJ2R1ZURhdGUnKSk7XG4gICAgICAgIHRvZG9Ub3BSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdidXR0b24nLCAnQ2hhbmdlJywgJ2NoYW5nZScpKTtcbiAgICAgICAgdG9kb1RvcFJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsICdEZWxldGUnLCAnZGVsZXRlJykpO1xuICAgIFxuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkID0gY3JlYXRlRE9NUHJvcCgnZGl2JyxcIlwiLFwiZXhwYW5kZWRcIilcbiAgICAgICAgZXhwYW5kZWQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGV4cGFuZGVkLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLnByaW9yaXR5LCAncHJpb3JpdHknKSk7XG4gICAgICAgIGV4cGFuZGVkLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLmRlc2NyaXB0aW9uLCAnZGVzY3JpcHRpb24nKSk7XG5cbiAgICAgICAgdG9kb01haW5Db250ZW50LmFwcGVuZENoaWxkKHRvZG9Ub3ApO1xuICAgICAgICB0b2RvTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZXhwYW5kZWQpO1xuXG4gICAgICAgIHJldHVybiB0b2RvTWFpbkNvbnRlbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJpb3JpdHlDbGFzcyA9ICh0b2RvLCB0b2RvRE9NKSA9PiB7XG4gICAgICAgIHN3aXRjaCh0b2RvLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlICdsb3cgcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgnbG93LXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtZWRpdW0gcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWdoIHByaW9yaXR5JzpcbiAgICAgICAgICAgICAgICB0b2RvRE9NLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUZvcm1JblRvZG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVET01Qcm9wKCdmb3JtJywgXCJcIiwgJ2Zvcm1JblRvZG8nKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZURPTVByb3AoJ2lucHV0JywgXCJcIiwgXCJmb3JtVGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IHRpdGxlOicpXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRE9NUHJvcCgnaW5wdXQnLCBcIlwiLCBcImZvcm1EZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgZGVzY3JpcHRpb246JylcbiAgICAgICAgLy8gY29uc3QgZGF0ZSA9IGNyZWF0ZURPTVByb3AoJ2lucHV0JywgXCJcIiwgXCJmb3JtRGF0ZVwiKTsgLy9uZXcgZGF0ZSBpbnB1dCBkb2Vzbid0IHdvcmtcbiAgICAgICAgLy8gZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZURPTVByb3AoJ3NlbGVjdCcsIFwiXCIsIFwiZm9ybVByaW9yaXR5XCIpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBjcmVhdGVET01Qcm9wKCdidXR0b24nLCBcIk1ha2UgY2hhbmdlc1wiLCBcImZvcm1TdWJtaXRcIik7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsIFwiQ2FuY2VsXCIsIFwiZm9ybUNhbmNlbFwiKTtcblxuICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGNyZWF0ZURPTVByb3AoJ29wdGlvbicsICdOb3QgdXJnZW50JywgJ2xvdycpXG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KVxuXG4gICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gY3JlYXRlRE9NUHJvcCgnb3B0aW9uJywgJ05vdCB0b28gdXJnZW50JywgJ21lZGl1bScpXG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KVxuXG4gICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGNyZWF0ZURPTVByb3AoJ29wdGlvbicsICdVcmdlbnQnLCAnaGlnaCcpXG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyBmb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRUb2RvQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICB0b2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdFRvZG9zKHRvZG9BcnJheSkge1xuICAgICAgICByZXNldFRvZG9Db250YWluZXIoKTtcbiAgICAgICAgdG9kb0FycmF5LmZvckVhY2goKHRvZG8pID0+IGNyZWF0ZVRvZG9ET00odG9kbykpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFNlbGVjdFwiKTtcbiAgICBcblxuICAgIC8vIGNhbiBvbmx5IGFzc2lnbiBvbmUgaW5zdGFuY2Ugb2YgYSBOb2RlLCBzbyBuZWVkIHRvIGNyZWF0ZSBtdWx0aXBsZSBpbnN0YW5jZXNcbiAgICBjb25zdCBjcmVhdGVPcHRpb25FbGVtZW50ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5udW1iZXI7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRPcHRpb25FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHByb2plY3RTZWxlY3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGFzc2lnblByb2plY3RPcHRpb24gPSAocHJvamVjdCkgPT4ge1xuICAgICAgICAvLyBtYXkgbmVlZCB0byBzZXBhcmF0ZSBwcm9qZWN0IHNlbGVjdCBhbmQgdG9kbyBmb3JtIHByb2plY3Qgc2VsZWN0Li4uXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RJblRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uRWxlbWVudChwcm9qZWN0KSk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uRWxlbWVudChwcm9qZWN0KSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMocHJvamVjdEFycmF5KSB7XG4gICAgICAgIHJlc2V0T3B0aW9uRWxlbWVudHMoKTtcbiAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IGFzc2lnblByb2plY3RPcHRpb24ocHJvamVjdCkpXG4gICAgfVxuXG4gICAgLy8gd2hlbiBjcmVhdGluZyBhIHByb2plY3QsIG1ha2UgdGhlIHByb2plY3RTZWxlY3QgdmFsdWUgYmUgbWF0Y2hpbmcgUHJvamVjdC4uLiBcbiAgICBmdW5jdGlvbiBzZXRQcm9qZWN0U2VsZWN0T3B0aW9uKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RTZWxlY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0U2VsZWN0W2ldLnRleHRDb250ZW50ID09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBwcm9qZWN0U2VsZWN0W2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIHByb2plY3RTZWxlY3RJblRvZG9Gb3JtLnZhbHVlID0gcHJvamVjdFNlbGVjdFtpXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdEluZGV4KCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdFNlbGVjdC52YWx1ZVxuXG4gICAgfVxuXG4gICAgLy8gd2hlbiBjbGlja2luZyBvbiBjaG9vc2UgcHJvamVjdFxuICAgIGNvbnN0IGNob29zZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hvb3NlUHJvamVjdCcpO1xuICAgIGNob29zZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goXCJnZXRQcm9qZWN0RnJvbVByb2plY3RTZWxlY3RcIiwgZ2V0U2VsZWN0ZWRQcm9qZWN0SW5kZXgoKSlcbiAgICB9KVxuXG5cbiAgICAvLyBkZWxldGUgcHJvamVjdFxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlUHJvamVjdCcpO1xuICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRQcm9qZWN0SW5kZXgoKSk7XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKFwiZ2V0UHJvamVjdFRvRGVsZXRlXCIsIGdldFNlbGVjdGVkUHJvamVjdEluZGV4KCkpO1xuICAgIH0pXG5cblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1oZWFkZXJcIik7XG4gICAgY29uc3QgY2hhbmdlSGVhZGVyID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIC8vIGRlbGV0ZSB0b2RvIERPTVxuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcbiAgICAgICAgICAgIC8vIHB1Ymxpc2ggdGhlIGRhdGEgaW5kZXggb2YgdGhlIHRvZG8gRE9NLCB0byBwcm9qZWN0XG4gICAgICAgICAgICBwdWJTdWIucHVibGlzaCgnZGVsZXRlVG9kbycsIGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvRE9NJykuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGNsaWNrIGNoYW5nZSB0b2RvIGJ1dHRvblxuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9ET00gPSAoZS50YXJnZXQuY2xvc2VzdCgnLnRvZG9ET00nKSk7XG4gICAgICAgICAgICB0b2dnbGVNYWluVG9kb0NvbnRlbnQodG9kb0RPTSk7XG4gICAgICAgICAgICB0b2dnbGVGb3JtSW5Ub2RvKHRvZG9ET00pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGNsaWNrIG9uIGZvcm0gc3VibWl0XG4gICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtU3VibWl0JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9ET00gPSAoZS50YXJnZXQuY2xvc2VzdCgnLnRvZG9ET00nKSk7XG4gICAgICAgICAgICBwdWJTdWIucHVibGlzaCgnc3VibWl0Q2hhbmdlZFRvZG8nLCBbdG9kb0RPTS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSwgZ2V0Rm9ybUlucHV0KHRvZG9ET00pXSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0Rm9ybUlucHV0KGZvcm0pIHtcbiAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtRGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLmZvcm1Qcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHtuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld1ByaW9yaXR5fVxuICAgIH1cblxuICAgIC8vIGNsaWNrIG9uIGNhbmNlbCBidXR0b24gaW4gZm9ybSBpbiB0b2RvXG4gICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm1DYW5jZWwnKSkge1xuICAgICAgICAgICAgY29uc3QgdG9kb0RPTSA9IChlLnRhcmdldC5jbG9zZXN0KCcudG9kb0RPTScpKTtcbiAgICAgICAgICAgIHRvZ2dsZU1haW5Ub2RvQ29udGVudCh0b2RvRE9NKTtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm1JblRvZG8odG9kb0RPTSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gdG9kb0RPTS5xdWVyeVNlbGVjdG9yKCcuZm9ybUluVG9kbycpO1xuICAgICAgICAgICAgcmVzZXRGb3JtKGZvcm0pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybShmb3JtKSB7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVNYWluVG9kb0NvbnRlbnQoZWwpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy50b2RvTWFpbkNvbnRlbnQnKTtcbiAgICAgICAgdG9nZ2xlSGlkZGVuKG1haW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUZvcm1JblRvZG8oZWwpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtSW5Ub2RvJyk7XG4gICAgICAgIHRvZ2dsZUhpZGRlbihmb3JtKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPIFxuICAgIC8vIHdoZW4gY2xpY2tpbmcgb24gdG9kbywgZXhwYW5kIGl0IGFuZCBoaWRlIG90aGVyIGV4cGFuZGVkIHRvZG9zLlxuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT0gJ0JVVFRPTicpIHJldHVybjtcbiAgICAgICAgY29uc3QgdG9kb0RPTSA9IChlLnRhcmdldC5jbG9zZXN0KFwiLnRvZG9ET01cIikpO1xuICAgICAgICBpZiAodG9kb0RPTSkge1xuICAgICAgICAgICAgdG9nZ2xlRXhwYW5kVG9kb0FuZENsb3NlT3RoZXJzKHRvZG9ET00pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlRXhwYW5kVG9kb0FuZENsb3NlT3RoZXJzKGVsKSB7XG4gICAgICAgIHJlbW92ZUN1cnJlbnRDbGlja2VkKCk7XG4gICAgICAgIHNldEN1cnJlbnRDbGlja2VkKGVsKTtcbiAgICAgICAgaGlkZUFsbFRvZG9FeHBhbnNpb25zKCk7XG4gICAgICAgIHRvZ2dsZUV4cGFuZFRvZG8oZWwpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ3VycmVudENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY2xpY2tlZCcpXG4gICAgICAgIGlmIChjdXJyZW50Q2xpY2tlZCkge1xuICAgICAgICAgICAgY3VycmVudENsaWNrZWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jbGlja2VkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50Q2xpY2tlZCh0b2RvRE9NKSB7XG4gICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jbGlja2VkJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFsbFRvZG9FeHBhbnNpb25zKCkge1xuICAgICAgICBjb25zdCBhbGxFeHBhbmRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwYW5kZWRcIilcbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiBhbGxFeHBhbmRlZCkge1xuICAgICAgICAgICAgaWYgKHRvZG8uY2xvc2VzdChcIi50b2RvRE9NXCIpLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1jbGlja2VkJykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCF0b2RvLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVFeHBhbmRUb2RvKGVsKSB7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuZXhwYW5kZWRcIik7XG4gICAgICAgIHRvZ2dsZUhpZGRlbihib3R0b20pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUhpZGRlbihlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpID8gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk6IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuLy9oYW5kbGVzIGZvcm0gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LiBzdWNoIGFzIHdoZW4gZm9ybXMgYXJlIHN1Ym1pdHRlZC5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtSGFuZGxlcigpIHtcblxuICAgIGNvbnN0IHJlc2V0Rm9ybSA9IChmb3JtKSA9PiB7XG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKVxuICAgIGNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9TdWJtaXRcIik7XG5cbiAgICBjb25zdCBnZXRUb2RvQXJncyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcmlvcml0eVwiKS52YWx1ZX0gcHJpb3JpdHlgOy8vY2hhbmdlIGZyb20gdmFsdWUgdG8gdGV4dENvbnRlbnRcbiAgICBjb25zdCB0b2RvQXJncyA9IFt0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eV1cbiAgICByZXR1cm4gdG9kb0FyZ3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VsZWN0ZWRQcm9qZWN0T3B0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC52YWx1ZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0LnZhbHVlO1xuICAgICAgICAvLyBtYXkgbmVlZCB0byByZWZhY3RvciB0byB1c2UgZGF0YSBhdHRyaWJ1dGUgYW5kIGluZGV4Li4uIHBob29leVxuICAgIH1cblxuICAgIHN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRQcm9qZWN0T3B0aW9uKCkpO1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZ2V0UHJvamVjdEZyb21Ub2RvRm9ybScsIGdldFNlbGVjdGVkUHJvamVjdE9wdGlvbigpKS8vc2VuZCB0byBwcm9qZWN0LmpzXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIGdldFRvZG9BcmdzKCkpOyAvL3NlbmQgdG8gdG9kby5qc1xuICAgICAgICByZXNldEZvcm0odG9kb0Zvcm0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIilcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFN1Ym1pdCcpXG4gICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBwdWJTdWIgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtIGlucHV0JykudmFsdWUpXG4gICAgICAgIHJlc2V0Rm9ybShwcm9qZWN0Rm9ybSk7XG4gICAgfSlcbn0iLCJpbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KCkge1xuXG4gICAgbGV0IHByb2plY3RDb3VudGVyID0gMDtcblxuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyID0gcHJvamVjdENvdW50ZXI7XG4gICAgICAgICAgICBpbmNyZWFzZVByb2plY3RzKHRoaXMpO1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5jcmVtZW50Q291bnRlciA9ICgpID0+IHtcbiAgICAgICAgcHJvamVjdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UucHJvamVjdEFycmF5KSB7XG5cbiAgICB9XG5cbiAgICBsZXQgbWF0Y2hpbmdQcm9qZWN0ID0ge307XG4gICAgLy9nZXRQcm9qZWN0IGFuZCBzZW5kVG9kb1RvUHJvamVjdFRvZG9BcnJheSBvY2N1ciBjb25zZWN1dGl2ZWx5XG4gICAgLy8gZ2V0IHByb2plY3QgZnJvbSB0b2RvIGZvcm07IGZpcnN0IGdldCBtYXRjaGluZyBwcm9qZWN0LCB0aGVuIHdhaXQgZm9yIHRvZG8gdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3RcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0RnJvbVRvZG9Gb3JtJywocHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RBcnJheS5maW5kKChwcm9qZWN0KSA9PiB7cmV0dXJuIHByb2plY3QubnVtYmVyID09IHByb2plY3RJbmRleH0pXG4gICAgICAgIHNldE1hdGNoaW5nUHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy9nZXQgcHJvamVjdCBmcm9tIHByb2plY3Qgc2VsZWN0OyBpbW1lZGlhdGVseSBwdWJsaXNoIHRvIGRpc3BsYXkgYXJyYXlcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0RnJvbVByb2plY3RTZWxlY3QnLChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5LmZpbmQoKHByb2plY3QpID0+IHtyZXR1cm4gcHJvamVjdC5udW1iZXIgPT0gcHJvamVjdEluZGV4fSlcbiAgICAgICAgc2V0TWF0Y2hpbmdQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KVxuICAgIH0pO1xuXG4gICAgLy9hZGQgdG9kbyB0byBwcm9qZWN0IHRvZG9BcnJheVxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3NlbmRUb2RvVG9Qcm9qZWN0VG9kb0FycmF5JywgKHRvZG8pID0+IHtcbiAgICAgICAgYWRkVG9kb1RvUHJvamVjdEFycmF5KG1hdGNoaW5nUHJvamVjdCwgdG9kbylcbiAgICAgICAgLy8gcHViU3ViIHRvIGRpc3BsYXkgdGhlIHRvZG9zOyBzZW5kIHRvIGRpc3BsYXkuanNcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpXG4gICAgICAgIC8vIHdoZW4gbWFraW5nIGFueWNoYW5nZSwgdXBsb2FkIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgLy8gcHVzaFRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gd2hlbiBwcm9qZWN0Zm9ybSBpcyBzdWJtaXR0ZWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0Rm9ybVN1Ym1pdHRlZCcsIChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTsgXG4gICAgICAgIHNldE1hdGNoaW5nUHJvamVjdChuZXdQcm9qZWN0KVxuXG4gICAgICAgIC8vIHdoZW4gYSBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLCBwcm9qZWN0QXJyYXkpOyAvL25lZWRlZCB0byBkaXNwbGF5IGFsbCBwcm9qZWN0IG9wdGlvbnNcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpIC8vbmVlZGVkIHRvIHNldCBoZWFkZXIgYW5kIHRvZG8gdG8gcGFydGljdWxhciBwcm9qZWN0XG4gICAgICAgIC8vIHB1c2hUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH0pXG5cbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0VG9EZWxldGUnLCAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGl0ZW0gPT4gY29uc29sZS5sb2coaXRlbSkpXG4gICAgICAgIGRlbGV0ZUVsZW1lbnQocHJvamVjdEFycmF5LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChpdGVtID0+IGNvbnNvbGUubG9nKGl0ZW0pKVxuICAgICAgICBwdWJTdWIucHVibGlzaCgncHJvamVjdERlbGV0ZWQnLCBwcm9qZWN0QXJyYXkpOyAvL3Jlc2V0IHByb2plY3Qgb3B0aW9uc1xuICAgICAgICAvLyBpZiBwcm9qZWN0SW5kZXggPT0gbWF0Y2hpbmcgcHJvamVjdCwgdGhlbiBjbGVhciBldmVyeXRoaW5nXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qSW5kZXggYW5kIG1hdGNoaW5nUHJvaiBudW1iZXInKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXgpXG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNoaW5nUHJvamVjdC5udW1iZXIpXG5cbiAgICAgICAgaWYgKHByb2plY3RJbmRleCA9PSBtYXRjaGluZ1Byb2plY3QubnVtYmVyKSB7XG4gICAgICAgICAgICBwdWJTdWIucHVibGlzaCgnY2xlYXJEZWxldGVkUHJvamVjdENvbnRlbnQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpIC8vbmVlZGVkIHRvIHNldCBoZWFkZXIgYW5kIHRvZG8gdG8gcGFydGljdWxhciBwcm9qZWN0XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpIC8vbmVlZGVkIHRvIHNldCBoZWFkZXIgYW5kIHRvZG8gdG8gcGFydGljdWxhciBwcm9qZWN0XG4gICAgfSlcblxuICAgIC8vIFxuXG5cbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdkZWxldGVUb2RvJywgKHRvZG9JbmRleCkgPT4ge1xuICAgICAgICAvLyBtb2RpZmllcyBpbiBwbGFjZSwgbXV0YXRpbmcgdGhlIG9yaWdpbmFsIGFycmF5LiB0aGlzIGlzIHdoYXQgd2Ugd2FudFxuICAgICAgICBtYXRjaGluZ1Byb2plY3QudG9kb0FycmF5LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8ubnVtYmVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgZGVsZXRlRWxlbWVudChtYXRjaGluZ1Byb2plY3QudG9kb0FycmF5LCB0b2RvSW5kZXgpXG4gICAgICAgIC8vIG5vdyBkaXNwbGF5IGFnYWluXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KVxuICAgICAgICAvLyBwdXNoVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9KVxuXG4gICAgLy8gbW9kaWZ5IHRvZG8gd2hlbiB0aGUgZm9ybSBmb3IgaXQgaXMgc3VibWl0dGVkXG4gICAgcHViU3ViLnN1YnNjcmliZSgnc3VibWl0Q2hhbmdlZFRvZG8nLCAoW3RvZG9JbmRleCwge25ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3UHJpb3JpdHl9XSkgPT4ge1xuICAgICAgICBsZXQgdG9kb1RvQ2hhbmdlID0gbWF0Y2hpbmdQcm9qZWN0LnRvZG9BcnJheS5maW5kKCh0b2RvKSA9PiB7cmV0dXJuIHRvZG8ubnVtYmVyID09IHRvZG9JbmRleH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvVG9DaGFuZ2UpO1xuICAgICAgICB0b2RvVG9DaGFuZ2Uuc2V0UHJvcCgndGl0bGUnLCBuZXdUaXRsZSk7XG4gICAgICAgIHRvZG9Ub0NoYW5nZS5zZXRQcm9wKCdkZXNjcmlwdGlvbicsIG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgdG9kb1RvQ2hhbmdlLnNldFByb3AoJ3ByaW9yaXR5JywgbmV3UHJpb3JpdHkpO1xuXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KVxuICAgICAgICAvLyBwdXNoVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9KVxuXG4gICAgY29uc3Qgc2V0TWF0Y2hpbmdQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbWF0Y2hpbmdQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG4gICAgY29uc3QgYWRkVG9kb1RvUHJvamVjdEFycmF5ID0gKHByb2plY3QsIHRvZG8pID0+IHtcbiAgICAgICAgcHJvamVjdC50b2RvQXJyYXkucHVzaCh0b2RvKVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUVsZW1lbnQgPSAoYXJyYXksIGluZGV4KSA9PiB7XG4gICAgICAgIGFycmF5LnNwbGljZShcbiAgICAgICAgICAgIGFycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5udW1iZXIgPT0gaW5kZXgpLDEpXG4gICAgfVxuXG4gICAgY29uc3QgaW5jcmVhc2VQcm9qZWN0cyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpXG4gICAgfVxuXG4gICAgLy8gd2hlbiBtYWtpbmcgYW55IGNoYW5nZSB0byBwcm9qZWN0LCBhc3NpZ24gcHJvamVjdCBBcnJheSB0byBsb2NhbCBTdG9yYWdlXG4gICAgY29uc3QgcHVzaFRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpXG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnByb2plY3RBcnJheSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSlcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLnByb2plY3RBcnJheSk7XG4gICAgICAgIGxldCB0ZXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJvamVjdEFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2codGVzdClcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgICAgICAgLy9jbGVhciBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UucHJvamVjdEFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgICAgICAgbGV0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoJ015IEZpcnN0IFByb2plY3QhJyk7XG4gICAgICAgIC8vIGFkZGVkIHRoaXMgYmVsb3dcbiAgICAgICAgc2V0TWF0Y2hpbmdQcm9qZWN0KHRlc3RQcm9qZWN0KTtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2xvYWRJbml0aWFsT3B0aW9ucycsIHByb2plY3RBcnJheSk7XG5cbiAgICAgICAgLy8gYWRkZWQgdGhpcyBiZWxvd1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnbG9hZEluaXRpYWxQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgbmV3IHByb2plY3Qgb24gZmlyc3QgbG9hZFxuICAgIHBhZ2VMb2FkKCk7XG59XG5cblxuIiwiZXhwb3J0IGNvbnN0IHB1YlN1YiA9IHtcbiAgICBldmVudHM6IHt9LFxuXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudCwgY2IpIHtcbiAgICAgICAgLy8gd2hhdCBkb2VzIHRoaXMuZXZlbnRzW2V2ZW50XSBsb29rIGxpa2U/XG4gICAgICAgIGNvbnNvbGUubG9nKGBzb21ldGhpbmcgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZlbnR9YClcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGNiKTtcbiAgICB9LFxuXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50LCBjYikge1xuICAgICAgICBjb25zb2xlLmxvZyhgc29tZXRoaW5nIHVuc3Vic2NyaWJlZCBmcm9tICR7ZXZlbnR9YClcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdLmZpbHRlcihmID0+IGYgIT0gY2IpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG1ha2luZyBhIGJyb2FkY2FzdCBhYm91dCAke2V2ZW50fSB3aXRoIGRhdGFgKTtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICAgICAgZihkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxufVxuXG4iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucyc7XG5cbi8vbWF5IGhhdmUgdG8gZW5jYXBzdWxhdGUgYWxsIG9mIHRoaXMgaW50byBhIGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHRvZG8oKSB7XG5cbiAgICAvLyBwdWJzdWIgU1VCU0NSSUJFXG4gICAgcHViU3ViLnN1YnNjcmliZSgndG9kb0Zvcm1TdWJtaXR0ZWQnLCAoYXJncykgPT4gey8vcHJvYmFibHkgY291bGQgZGVzdHJ1Y3R1cmUgdGhpcyB0YmhcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG5cbiAgICAgICAgLy8gaW4gZmFjdCwgd2hhdCBpIHRoaW5rIG5lZWRzIHRvIGhhcHBlbiBpcyB0byBwdWJsaXNoIHRoZSB0b2RvIHRvIGFuIGV2ZW50LCBhbmQgcHJvamVjdCB3aWxsIHN1YnNjcmliZSB0byBwdXQgdGhhdCBpbiB0b2RvYXJyYXkuXG4gICAgICAgIC8vIGFuZCB0aGVuIHRoYXQgd2lsbCBwdWJsaXNoIHRvIGRpc3BsYXkuXG4gICAgICAgIC8vIE5FWFQsIElNUExFTUVOVCBDSEFOR0lORyBUT0RPUzsgQ0hBTkdFIFBST1BFUlRZLCBERUxFVEVcbiAgICB9KVxuXG4gICAgbGV0IHRvZG9Db3VudGVyID0gMDtcblxuICAgIGNvbnN0IGluY3JlbWVudENvdW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRvZG9Db3VudGVyKytcbiAgICB9XG5cblxuICAgIGNsYXNzIFRvZG8ge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubnVtYmVyID0gdG9kb0NvdW50ZXI7XG4gICAgICAgIGluY3JlbWVudENvdW50ZXIoKTtcblxuICAgICAgICAvLyBtYXkgaGF2ZSB0byBtb3ZlIHRoaXMgZWxzZXdoZXJlLCBidXQgd2hlbiBuZXcgdG9kbyBpcyBjcmVhdGVkLCBhcHBlbmQgaXQgdG8gYSBwcm9qZWN0IHRvZG9BcnJheVxuICAgICAgICBwdWJTdWIucHVibGlzaCgnc2VuZFRvZG9Ub1Byb2plY3RUb2RvQXJyYXknLCB0aGlzKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UHJvcChwcm9wLCB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpc1twcm9wXSA9IHZhbHVlO1xuICAgICAgICB9IFxuICAgIH1cbn1cblxuZXhwb3J0IHt0b2RvfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGZvcm1IYW5kbGVyIH0gZnJvbSBcIi4vZm9ybUhhbmRsZXJcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZGlzcGxheSgpO1xucHJvamVjdCgpO1xudG9kbygpO1xuZm9ybUhhbmRsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=