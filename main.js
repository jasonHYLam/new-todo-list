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
        // todoContainer.appendChild(todoDOM);

        return todoMainContent;
    }

    const setPriorityClass = (todo, todoDOM) => {
        console.log('priority')
        console.log(todo.priority)

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

    if (localStorage.projectArray) {

    }
    //check if there is local storage
    //if local storage.projectArray is empty, don't do anything
    // if (localStorage.projectArray = []) {return}
    // else {projectArray = localStorage.projectArray};

    
    // when a change is made, asssign current projectArray to localStorage
    // localStorage;
    // let projectArray = [];

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
        // when making anychange, upload to local storage
        pushToLocalStorage();
    });

    // subscribe to when projectform is submitted
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 
        setMatchingProject(newProject)

        // when a new project is created
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('projectAdded', projectArray); //needed to display all project options
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
        pushToLocalStorage();
    })

    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('deleteTodo', (todoIndex) => {
        // modifies in place, mutating the original array. this is what we want
        matchingProject.todoArray.forEach((todo) => {
            console.log(todo.todoNumber);
        })
        matchingProject.todoArray.splice(
            matchingProject.todoArray.findIndex((item) => item.todoNumber == todoIndex), 1)
        // now display again
        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('displaySelectedProject', matchingProject)
        pushToLocalStorage();
    })

    // modify todo when the form for it is submitted
    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('submitChangedTodo', ([todoIndex, {newTitle, newDescription, newPriority}]) => {
        let todoToChange = matchingProject.todoArray.find((todo) => {return todo.todoNumber == todoIndex});
        console.log(todoToChange);
        todoToChange.setProp('title', newTitle);
        todoToChange.setProp('description', newDescription);
        todoToChange.setProp('priority', newPriority);

        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('displaySelectedProject', matchingProject)
        pushToLocalStorage();
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

    // when making any change to project, assign project Array to local Storage
    const pushToLocalStorage = () => {
        console.log(projectArray)

        localStorage.projectArray = JSON.stringify(projectArray)
        console.log(localStorage.projectArray);
        let test = JSON.parse(localStorage.projectArray);
        console.log(test)
    }

    class Project {
        constructor(name) {
            this.todoArray = [];
            this.name = name;
            increaseProjects(this);
        }
    }

    // this should create a project and add it to projectArray. is this clean code?
    // may need to modify this... 

    const pageLoad = () => {
        console.log(localStorage.projectArray);
        console.log(localStorage);
        let testProject = new Project('My First Project!');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwyQ0FBTTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDeENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ007QUFDUTtBQUNSO0FBQ2Y7O0FBRXJCLGlEQUFPO0FBQ1AsaURBQU87QUFDUCwyQ0FBSTtBQUNKLHlEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2Zvcm1IYW5kbGVyLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tYm90dG9tLXNoYWRvdzogMHB4IDFweCBibGFjaztcbn1cblxuI2hlYWRlciB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgcGFkZGluZzogMjBweCAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDY4LCAxMTgpO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xufVxuXG4jbGVmdCB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDIxNywgMjE3KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbiNsZWZ0LXRvcCwgI2xlZnQtYm90dG9tIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4jbGVmdC10b3AgcCwgI2xlZnQtYm90dG9tIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3JpZ2h0IHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNjBweDtcbn1cblxuI3Byb2plY3QtaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuI2FkZC10b2RvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3RvZG9Gb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiN0b2RvRm9ybSBpbnB1dCwgI3RvZG9Gb3JtIHNlbGVjdCwgI3RvZG9Gb3JtIGJ1dHRvbixcbi5mb3JtSW5Ub2RvIGlucHV0LCAuZm9ybUluVG9kbyBzZWxlY3QsIC5mb3JtSW5Ub2RvIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmZvcm1JblRvZG8ge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5cbiN0b2RvRm9ybSB7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm90dG9tLXNoYWRvdyk7XG59XG5cbiN0b2RvQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA3cHg7XG59XG4udG9kb0RPTSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm90dG9tLXNoYWRvdyk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4udG9kb01haW5Db250ZW50LmhpZGRlbiwgLmZvcm1JblRvZG8uaGlkZGVuLCAuZXhwYW5kZWQuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9kb1RvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi50b2RvVG9wUmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG5cbn1cblxuLnRpdGxlLCAuZGVzY3JpcHRpb24sIC5kdWVEYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZXhwYW5kZWQge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmbG9hdDp0b3A7XG59XG4uZXhwYW5kZWQuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiAuZGVzY3JpcHRpb24uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufSAqL1xuXG4ubG93LXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogcmdiKDI1NSwgMjU0LCAyNDApIHNvbGlkIDE1cHg7XG59XG5cbi5tZWRpdW0tcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiBvcmFuZ2Ugc29saWQgMTVweDtcbn1cbi5oaWdoLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogcmVkIHNvbGlkIDE1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsT0FBTztBQUNYOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztJQUNQLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTs7QUFFWjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJvdHRvbS1zaGFkb3c6IDBweCAxcHggYmxhY2s7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgcGFkZGluZzogMjBweCAxMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgNjgsIDExOCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI2xlZnQge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDIxNywgMjE3KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4jbGVmdC10b3AsICNsZWZ0LWJvdHRvbSB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbiNsZWZ0LXRvcCBwLCAjbGVmdC1ib3R0b20gcCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3JpZ2h0IHtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcXG59XFxuXFxuI3Byb2plY3QtaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4jYWRkLXRvZG8tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3RvZG9Gb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jdG9kb0Zvcm0gaW5wdXQsICN0b2RvRm9ybSBzZWxlY3QsICN0b2RvRm9ybSBidXR0b24sXFxuLmZvcm1JblRvZG8gaW5wdXQsIC5mb3JtSW5Ub2RvIHNlbGVjdCwgLmZvcm1JblRvZG8gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5mb3JtSW5Ub2RvIHtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcblxcbiN0b2RvRm9ybSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3R0b20tc2hhZG93KTtcXG59XFxuXFxuI3RvZG9Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDdweDtcXG59XFxuLnRvZG9ET00ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvdHRvbS1zaGFkb3cpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50b2RvTWFpbkNvbnRlbnQuaGlkZGVuLCAuZm9ybUluVG9kby5oaWRkZW4sIC5leHBhbmRlZC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb1RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcblxcbi50b2RvVG9wUmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG5cXG59XFxuXFxuLnRpdGxlLCAuZGVzY3JpcHRpb24sIC5kdWVEYXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBmbG9hdDp0b3A7XFxufVxcbi5leHBhbmRlZC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiAuZGVzY3JpcHRpb24uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiByZ2IoMjU1LCAyNTQsIDI0MCkgc29saWQgMTVweDtcXG59XFxuXFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiBvcmFuZ2Ugc29saWQgMTVweDtcXG59XFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogcmVkIHNvbGlkIDE1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5cbi8vIHNob3VsZCBoYW5kbGUgRE9NIHJlbGF0ZWQgZnVuY3Rpb25hbGl0eS4gU3VjaCBhcyBjcmVhdGluZywgY2hhbmdpbmcgYW5kIGRlbGV0aW5nIERPTSBlbGVtZW50cy5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5KCkge1xuXG4gICAgLy8gZGlzcGxheSBwcm9qZWN0IGFycmF5IG9uIGZpcnN0IGxvYWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdsb2FkSW5pdGlhbE9wdGlvbnMnLCBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMpO1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2xvYWRJbml0aWFsUHJvamVjdCcsIChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNoYW5nZUhlYWRlcihwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdFRvZG9zKHByb2plY3QudG9kb0FycmF5KTsgXG4gICAgICAgIHNldFByb2plY3RTZWxlY3RPcHRpb24ocHJvamVjdCk7XG4gICAgfSlcblxuICAgIC8vIHdoZW4gbmV3IHRvZG8gaXMgY3JlYXRlZCwgZGlzcGxheSBhbGwgdG9kb3NcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCduZXdUb2RvQ3JlYXRlZCcsIGRpc3BsYXlQcm9qZWN0VG9kb3MpXG5cbiAgICAvLyB3aGVuIGNyZWF0aW5nIG5ldyBwcm9qZWN0LCBkaXNwbGF5IGFsbCBwcm9qZWN0c1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucyk7XG5cbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgKHByb2plY3QpID0+IHtcbiAgICAgICAgY2hhbmdlSGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VG9kb3MocHJvamVjdC50b2RvQXJyYXkpOyBcbiAgICAgICAgc2V0UHJvamVjdFNlbGVjdE9wdGlvbihwcm9qZWN0KTtcbiAgICB9KVxuXG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY3JlYXRlRE9NUHJvcCA9IChlbFR5cGUsIHZhbHVlLCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb1Byb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsVHlwZSk7XG4gICAgICAgIHRvZG9Qcm9wLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIHRvZG9Qcm9wLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgLy8gaGlkZSBkZXNjcmlwdGlvbiBjbGFzcyBieSBkZWZhdWx0XG4gICAgICAgIGlmIChjbGFzc05hbWUgPT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdG9kb1Byb3AuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvZG9Qcm9wO1xuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlVG9kb0RPTSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9ET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2V0UHJpb3JpdHlDbGFzcyh0b2RvLHRvZG9ET00pO1xuICAgICAgICB0b2RvRE9NLmNsYXNzTGlzdC5hZGQoJ3RvZG9ET00nKTtcbiAgICAgICAgdG9kb0RPTS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCB0b2RvLnRvZG9OdW1iZXIpO1xuXG4gICAgICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQoY3JlYXRlTWFpblRvZG9Db250ZW50KHRvZG8pKTtcbiAgICAgICAgdG9kb0RPTS5hcHBlbmRDaGlsZChjcmVhdGVGb3JtSW5Ub2RvKCkpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9ET00pO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU1haW5Ub2RvQ29udGVudCA9ICh0b2RvKSA9PiB7ICAgICAgICBcblxuICAgICAgICBjb25zdCB0b2RvTWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb01haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG9NYWluQ29udGVudCcpO1xuICAgICAgICBjb25zdCB0b2RvVG9wID0gY3JlYXRlRE9NUHJvcCgnZGl2JyxcIlwiLFwidG9kb1RvcFwiKVxuXG4gICAgICAgIGNvbnN0IHRvZG9Ub3BMZWZ0ID0gY3JlYXRlRE9NUHJvcCgnZGl2JywgXCJcIiwgXCJ0b2RvVG9wTGVmdFwiKTtcbiAgICAgICAgdG9kb1RvcC5hcHBlbmRDaGlsZCh0b2RvVG9wTGVmdClcbiAgICAgICAgdG9kb1RvcExlZnQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8udGl0bGUsICd0aXRsZScpKTtcblxuICAgICAgICBjb25zdCB0b2RvVG9wUmlnaHQgPSBjcmVhdGVET01Qcm9wKCdkaXYnLCBcIlwiLCBcInRvZG9Ub3BSaWdodFwiKTtcbiAgICAgICAgdG9kb1RvcC5hcHBlbmRDaGlsZCh0b2RvVG9wUmlnaHQpXG4gICAgICAgIHRvZG9Ub3BSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdzcGFuJywgdG9kby5kdWVEYXRlLCAnZHVlRGF0ZScpKTtcbiAgICAgICAgdG9kb1RvcFJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsICdDaGFuZ2UnLCAnY2hhbmdlJykpO1xuICAgICAgICB0b2RvVG9wUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgJ0RlbGV0ZScsICdkZWxldGUnKSk7XG4gICAgXG5cbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBjcmVhdGVET01Qcm9wKCdkaXYnLFwiXCIsXCJleHBhbmRlZFwiKVxuICAgICAgICBleHBhbmRlZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZXhwYW5kZWQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8ucHJpb3JpdHksICdwcmlvcml0eScpKTtcbiAgICAgICAgZXhwYW5kZWQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8uZGVzY3JpcHRpb24sICdkZXNjcmlwdGlvbicpKTtcblxuICAgICAgICB0b2RvTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb1RvcCk7XG4gICAgICAgIHRvZG9NYWluQ29udGVudC5hcHBlbmRDaGlsZChleHBhbmRlZCk7XG4gICAgICAgIC8vIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RPTSk7XG5cbiAgICAgICAgcmV0dXJuIHRvZG9NYWluQ29udGVudDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcmlvcml0eUNsYXNzID0gKHRvZG8sIHRvZG9ET00pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByaW9yaXR5JylcbiAgICAgICAgY29uc29sZS5sb2codG9kby5wcmlvcml0eSlcblxuICAgICAgICBzd2l0Y2godG9kby5wcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSAnbG93IHByaW9yaXR5JzpcbiAgICAgICAgICAgICAgICB0b2RvRE9NLmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWVkaXVtIHByaW9yaXR5JzpcbiAgICAgICAgICAgICAgICB0b2RvRE9NLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlnaCBwcmlvcml0eSc6XG4gICAgICAgICAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVGb3JtSW5Ub2RvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gY3JlYXRlRE9NUHJvcCgnZm9ybScsIFwiXCIsICdmb3JtSW5Ub2RvJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVET01Qcm9wKCdpbnB1dCcsIFwiXCIsIFwiZm9ybVRpdGxlXCIpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyB0aXRsZTonKVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURPTVByb3AoJ2lucHV0JywgXCJcIiwgXCJmb3JtRGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IGRlc2NyaXB0aW9uOicpXG4gICAgICAgIC8vIGNvbnN0IGRhdGUgPSBjcmVhdGVET01Qcm9wKCdpbnB1dCcsIFwiXCIsIFwiZm9ybURhdGVcIik7IC8vbmV3IGRhdGUgaW5wdXQgZG9lc24ndCB3b3JrXG4gICAgICAgIC8vIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVET01Qcm9wKCdzZWxlY3QnLCBcIlwiLCBcImZvcm1Qcmlvcml0eVwiKTtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gY3JlYXRlRE9NUHJvcCgnYnV0dG9uJywgXCJNYWtlIGNoYW5nZXNcIiwgXCJmb3JtU3VibWl0XCIpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBjcmVhdGVET01Qcm9wKCdidXR0b24nLCBcIkNhbmNlbFwiLCBcImZvcm1DYW5jZWxcIik7XG5cbiAgICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBjcmVhdGVET01Qcm9wKCdvcHRpb24nLCAnTm90IHVyZ2VudCcsICdsb3cnKVxuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSlcblxuICAgICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGNyZWF0ZURPTVByb3AoJ29wdGlvbicsICdOb3QgdG9vIHVyZ2VudCcsICdtZWRpdW0nKVxuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSlcblxuICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBjcmVhdGVET01Qcm9wKCdvcHRpb24nLCAnVXJnZW50JywgJ2hpZ2gnKVxuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8gZm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIHJldHVybiBmb3JtO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0VG9kb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgdG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3RUb2Rvcyh0b2RvQXJyYXkpIHtcbiAgICAgICAgcmVzZXRUb2RvQ29udGFpbmVyKCk7XG4gICAgICAgIHRvZG9BcnJheS5mb3JFYWNoKCh0b2RvKSA9PiBjcmVhdGVUb2RvRE9NKHRvZG8pKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTZWxlY3RcIik7XG4gICAgXG5cbiAgICAvLyBjYW4gb25seSBhc3NpZ24gb25lIGluc3RhbmNlIG9mIGEgTm9kZSwgc28gbmVlZCB0byBjcmVhdGUgbXVsdGlwbGUgaW5zdGFuY2VzXG4gICAgY29uc3QgY3JlYXRlT3B0aW9uRWxlbWVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldE9wdGlvbkVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvclRvZG9cIik7XG4gICAgICAgIHByb2plY3RTZWxlY3RJblRvZG9Gb3JtLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgcHJvamVjdFNlbGVjdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgYXNzaWduUHJvamVjdE9wdGlvbiA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIHNlcGFyYXRlIHByb2plY3Qgc2VsZWN0IGFuZCB0b2RvIGZvcm0gcHJvamVjdCBzZWxlY3QuLi5cbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb25FbGVtZW50KHByb2plY3QpKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb25FbGVtZW50KHByb2plY3QpKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucyhwcm9qZWN0QXJyYXkpIHtcbiAgICAgICAgcmVzZXRPcHRpb25FbGVtZW50cygpO1xuICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4gYXNzaWduUHJvamVjdE9wdGlvbihwcm9qZWN0KSlcbiAgICB9XG5cbiAgICAvLyB3aGVuIGNyZWF0aW5nIGEgcHJvamVjdCwgbWFrZSB0aGUgcHJvamVjdFNlbGVjdCB2YWx1ZSBiZSBtYXRjaGluZyBQcm9qZWN0Li4uIFxuICAgIGZ1bmN0aW9uIHNldFByb2plY3RTZWxlY3RPcHRpb24ocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvclRvZG9cIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFNlbGVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RTZWxlY3RbaV0udGV4dENvbnRlbnQgPT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdFNlbGVjdC52YWx1ZSA9IHByb2plY3RTZWxlY3RbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0udmFsdWUgPSBwcm9qZWN0U2VsZWN0W2ldLnZhbHVlO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0U2VsZWN0LnZhbHVlXG5cbiAgICB9XG5cbiAgICAvLyB3aGVuIGNsaWNraW5nIG9uIHByb2plY3Qgc2VsZWN0c1xuICAgIHByb2plY3RTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKT0+IHtcbiAgICAgICAgLy8gc2VuZCB0aGlzIGNvZGUgdG8gcHJvamVjdC5qc1xuICAgICAgICBwdWJTdWIucHVibGlzaChcImdldFByb2plY3RGcm9tUHJvamVjdFNlbGVjdFwiLCBnZXRTZWxlY3RlZFByb2plY3QoKSlcbiAgICB9KVxuICAgIFxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWhlYWRlclwiKTtcbiAgICBjb25zdCBjaGFuZ2VIZWFkZXIgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgLy8gZGVsZXRlIHRvZG8gRE9NXG4gICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUnKSkge1xuICAgICAgICAgICAgLy8gcHVibGlzaCB0aGUgZGF0YSBpbmRleCBvZiB0aGUgdG9kbyBET00sIHRvIHByb2plY3RcbiAgICAgICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkZWxldGVUb2RvJywgZS50YXJnZXQuY2xvc2VzdCgnLnRvZG9ET00nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gY2xpY2sgY2hhbmdlIHRvZG8gYnV0dG9uXG4gICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UnKSkge1xuICAgICAgICAgICAgY29uc3QgdG9kb0RPTSA9IChlLnRhcmdldC5jbG9zZXN0KCcudG9kb0RPTScpKTtcbiAgICAgICAgICAgIHRvZ2dsZU1haW5Ub2RvQ29udGVudCh0b2RvRE9NKTtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm1JblRvZG8odG9kb0RPTSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gY2xpY2sgb24gZm9ybSBzdWJtaXRcbiAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm1TdWJtaXQnKSkge1xuICAgICAgICAgICAgY29uc3QgdG9kb0RPTSA9IChlLnRhcmdldC5jbG9zZXN0KCcudG9kb0RPTScpKTtcbiAgICAgICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdzdWJtaXRDaGFuZ2VkVG9kbycsIFt0b2RvRE9NLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpLCBnZXRGb3JtSW5wdXQodG9kb0RPTSldKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRGb3JtSW5wdXQoZm9ybSkge1xuICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtVGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLmZvcm1EZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICByZXR1cm4ge25ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3UHJpb3JpdHl9XG4gICAgfVxuXG4gICAgLy8gY2xpY2sgb24gY2FuY2VsIGJ1dHRvbiBpbiBmb3JtIGluIHRvZG9cbiAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZm9ybUNhbmNlbCcpKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvRE9NID0gKGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvRE9NJykpO1xuICAgICAgICAgICAgdG9nZ2xlTWFpblRvZG9Db250ZW50KHRvZG9ET00pO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybUluVG9kbyh0b2RvRE9NKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0b2RvRE9NLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtSW5Ub2RvJyk7XG4gICAgICAgICAgICByZXNldEZvcm0oZm9ybSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gcmVzZXRGb3JtKGZvcm0pIHtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1haW5Ub2RvQ29udGVudChlbCkge1xuICAgICAgICBjb25zdCBtYWluID0gZWwucXVlcnlTZWxlY3RvcignLnRvZG9NYWluQ29udGVudCcpO1xuICAgICAgICB0b2dnbGVIaWRkZW4obWFpbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlRm9ybUluVG9kbyhlbCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZWwucXVlcnlTZWxlY3RvcignLmZvcm1JblRvZG8nKTtcbiAgICAgICAgdG9nZ2xlSGlkZGVuKGZvcm0pO1xuICAgIH1cblxuICAgIC8vIFRPRE8gXG4gICAgLy8gd2hlbiBjbGlja2luZyBvbiB0b2RvLCBleHBhbmQgaXQgYW5kIGhpZGUgb3RoZXIgZXhwYW5kZWQgdG9kb3MuXG4gICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblxuICAgICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PSAnQlVUVE9OJykgcmV0dXJuO1xuICAgICAgICBjb25zdCB0b2RvRE9NID0gKGUudGFyZ2V0LmNsb3Nlc3QoXCIudG9kb0RPTVwiKSk7XG4gICAgICAgIGlmICh0b2RvRE9NKSB7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbmRUb2RvQW5kQ2xvc2VPdGhlcnModG9kb0RPTSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVFeHBhbmRUb2RvQW5kQ2xvc2VPdGhlcnMoZWwpIHtcbiAgICAgICAgcmVtb3ZlQ3VycmVudENsaWNrZWQoKTtcbiAgICAgICAgc2V0Q3VycmVudENsaWNrZWQoZWwpO1xuICAgICAgICBoaWRlQWxsVG9kb0V4cGFuc2lvbnMoKTtcbiAgICAgICAgdG9nZ2xlRXhwYW5kVG9kbyhlbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ3VycmVudENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY2xpY2tlZCcpXG4gICAgICAgIGlmIChjdXJyZW50Q2xpY2tlZCkge1xuICAgICAgICAgICAgY3VycmVudENsaWNrZWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jbGlja2VkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50Q2xpY2tlZCh0b2RvRE9NKSB7XG4gICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jbGlja2VkJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFsbFRvZG9FeHBhbnNpb25zKCkge1xuICAgICAgICBjb25zdCBhbGxFeHBhbmRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwYW5kZWRcIilcbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiBhbGxFeHBhbmRlZCkge1xuICAgICAgICAgICAgaWYgKHRvZG8uY2xvc2VzdChcIi50b2RvRE9NXCIpLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1jbGlja2VkJykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCF0b2RvLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVFeHBhbmRUb2RvKGVsKSB7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuZXhwYW5kZWRcIik7XG4gICAgICAgIHRvZ2dsZUhpZGRlbihib3R0b20pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUhpZGRlbihlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpID8gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk6IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuLy9oYW5kbGVzIGZvcm0gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LiBzdWNoIGFzIHdoZW4gZm9ybXMgYXJlIHN1Ym1pdHRlZC5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtSGFuZGxlcigpIHtcblxuICAgIGNvbnN0IHJlc2V0Rm9ybSA9IChmb3JtKSA9PiB7XG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKVxuICAgIGNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9TdWJtaXRcIik7XG5cbiAgICBjb25zdCBnZXRUb2RvQXJncyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcmlvcml0eVwiKS52YWx1ZX0gcHJpb3JpdHlgOy8vY2hhbmdlIGZyb20gdmFsdWUgdG8gdGV4dENvbnRlbnRcbiAgICBjb25zdCB0b2RvQXJncyA9IFt0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eV1cbiAgICByZXR1cm4gdG9kb0FyZ3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VsZWN0ZWRQcm9qZWN0T3B0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3QudmFsdWU7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIHJlZmFjdG9yIHRvIHVzZSBkYXRhIGF0dHJpYnV0ZSBhbmQgaW5kZXguLi4gcGhvb2V5XG4gICAgfVxuXG4gICAgc3VibWl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZ2V0UHJvamVjdEZyb21Ub2RvRm9ybScsIGdldFNlbGVjdGVkUHJvamVjdE9wdGlvbigpKS8vc2VuZCB0byBwcm9qZWN0LmpzXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIGdldFRvZG9BcmdzKCkpOyAvL3NlbmQgdG8gdG9kby5qc1xuICAgICAgICByZXNldEZvcm0odG9kb0Zvcm0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIilcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFN1Ym1pdCcpXG4gICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBwdWJTdWIgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtIGlucHV0JykudmFsdWUpXG4gICAgICAgIHJlc2V0Rm9ybShwcm9qZWN0Rm9ybSk7XG4gICAgfSlcbn0iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QoKSB7XG5cblxuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UucHJvamVjdEFycmF5KSB7XG5cbiAgICB9XG4gICAgLy9jaGVjayBpZiB0aGVyZSBpcyBsb2NhbCBzdG9yYWdlXG4gICAgLy9pZiBsb2NhbCBzdG9yYWdlLnByb2plY3RBcnJheSBpcyBlbXB0eSwgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAvLyBpZiAobG9jYWxTdG9yYWdlLnByb2plY3RBcnJheSA9IFtdKSB7cmV0dXJufVxuICAgIC8vIGVsc2Uge3Byb2plY3RBcnJheSA9IGxvY2FsU3RvcmFnZS5wcm9qZWN0QXJyYXl9O1xuXG4gICAgXG4gICAgLy8gd2hlbiBhIGNoYW5nZSBpcyBtYWRlLCBhc3NzaWduIGN1cnJlbnQgcHJvamVjdEFycmF5IHRvIGxvY2FsU3RvcmFnZVxuICAgIC8vIGxvY2FsU3RvcmFnZTtcbiAgICAvLyBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbiAgICBsZXQgbWF0Y2hpbmdQcm9qZWN0ID0ge307XG4gICAgLy9nZXRQcm9qZWN0IGFuZCBzZW5kVG9kb1RvUHJvamVjdFRvZG9BcnJheSBvY2N1ciBjb25zZWN1dGl2ZWx5XG4gICAgLy8gZ2V0IHByb2plY3QgZnJvbSB0b2RvIGZvcm07IGZpcnN0IGdldCBtYXRjaGluZyBwcm9qZWN0LCB0aGVuIHdhaXQgZm9yIHRvZG8gdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3RcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0RnJvbVRvZG9Gb3JtJywocHJvamVjdE1hdGNoKSA9PiB7Ly9kdW5ubyB3aGF0IHRvIGNhbGwgcHJvamVjdE1hdGNoOyB0aGUgdGhpbmcgdGhhdCBpIHBhc3MgdG8gZmluZCB0aGUgY29ycmVjdCBwcm9qZWN0XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RBcnJheS5maW5kKChwcm9qZWN0KSA9PiB7cmV0dXJuIHByb2plY3QubmFtZSA9PSBwcm9qZWN0TWF0Y2h9KS8vYWxzbywgbWF5IG5lZWQgdG8gdXNlIGRhdGEgYXR0cmlidXRlLCByYXRoZXIgdGhhbiBuYW1lLiBvciB1c2UgZm9ybSB2YW9saWRhdGlvbiB0byBub3QgdXNlIHNhbWUgbmFtZVxuICAgICAgICBzZXRNYXRjaGluZ1Byb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vZ2V0IHByb2plY3QgZnJvbSBwcm9qZWN0IHNlbGVjdDsgaW1tZWRpYXRlbHkgcHVibGlzaCB0byBkaXNwbGF5IGFycmF5XG4gICAgcHViU3ViLnN1YnNjcmliZSgnZ2V0UHJvamVjdEZyb21Qcm9qZWN0U2VsZWN0JywocHJvamVjdE1hdGNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RBcnJheS5maW5kKChwcm9qZWN0KSA9PiB7cmV0dXJuIHByb2plY3QubmFtZSA9PSBwcm9qZWN0TWF0Y2h9KVxuICAgICAgICBzZXRNYXRjaGluZ1Byb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpXG4gICAgfSk7XG5cbiAgICAvL2FkZCB0b2RvIHRvIHByb2plY3QgdG9kb0FycmF5XG4gICAgcHViU3ViLnN1YnNjcmliZSgnc2VuZFRvZG9Ub1Byb2plY3RUb2RvQXJyYXknLCAodG9kbykgPT4ge1xuICAgICAgICBhZGRUb2RvVG9Qcm9qZWN0QXJyYXkobWF0Y2hpbmdQcm9qZWN0LCB0b2RvKVxuICAgICAgICAvLyBwdWJTdWIgdG8gZGlzcGxheSB0aGUgdG9kb3M7IHNlbmQgdG8gZGlzcGxheS5qc1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZGlzcGxheVNlbGVjdGVkUHJvamVjdCcsIG1hdGNoaW5nUHJvamVjdClcbiAgICAgICAgLy8gd2hlbiBtYWtpbmcgYW55Y2hhbmdlLCB1cGxvYWQgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgICBwdXNoVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9KTtcblxuICAgIC8vIHN1YnNjcmliZSB0byB3aGVuIHByb2plY3Rmb3JtIGlzIHN1Ym1pdHRlZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpOyBcbiAgICAgICAgc2V0TWF0Y2hpbmdQcm9qZWN0KG5ld1Byb2plY3QpXG5cbiAgICAgICAgLy8gd2hlbiBhIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWRcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RBZGRlZCcsIHByb2plY3RBcnJheSk7IC8vbmVlZGVkIHRvIGRpc3BsYXkgYWxsIHByb2plY3Qgb3B0aW9uc1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZGlzcGxheVNlbGVjdGVkUHJvamVjdCcsIG1hdGNoaW5nUHJvamVjdCkgLy9uZWVkZWQgdG8gc2V0IGhlYWRlciBhbmQgdG9kbyB0byBwYXJ0aWN1bGFyIHByb2plY3RcbiAgICAgICAgcHVzaFRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSlcblxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2RlbGV0ZVRvZG8nLCAodG9kb0luZGV4KSA9PiB7XG4gICAgICAgIC8vIG1vZGlmaWVzIGluIHBsYWNlLCBtdXRhdGluZyB0aGUgb3JpZ2luYWwgYXJyYXkuIHRoaXMgaXMgd2hhdCB3ZSB3YW50XG4gICAgICAgIG1hdGNoaW5nUHJvamVjdC50b2RvQXJyYXkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kby50b2RvTnVtYmVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgbWF0Y2hpbmdQcm9qZWN0LnRvZG9BcnJheS5zcGxpY2UoXG4gICAgICAgICAgICBtYXRjaGluZ1Byb2plY3QudG9kb0FycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS50b2RvTnVtYmVyID09IHRvZG9JbmRleCksIDEpXG4gICAgICAgIC8vIG5vdyBkaXNwbGF5IGFnYWluXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KVxuICAgICAgICBwdXNoVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9KVxuXG4gICAgLy8gbW9kaWZ5IHRvZG8gd2hlbiB0aGUgZm9ybSBmb3IgaXQgaXMgc3VibWl0dGVkXG4gICAgcHViU3ViLnN1YnNjcmliZSgnc3VibWl0Q2hhbmdlZFRvZG8nLCAoW3RvZG9JbmRleCwge25ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3UHJpb3JpdHl9XSkgPT4ge1xuICAgICAgICBsZXQgdG9kb1RvQ2hhbmdlID0gbWF0Y2hpbmdQcm9qZWN0LnRvZG9BcnJheS5maW5kKCh0b2RvKSA9PiB7cmV0dXJuIHRvZG8udG9kb051bWJlciA9PSB0b2RvSW5kZXh9KTtcbiAgICAgICAgY29uc29sZS5sb2codG9kb1RvQ2hhbmdlKTtcbiAgICAgICAgdG9kb1RvQ2hhbmdlLnNldFByb3AoJ3RpdGxlJywgbmV3VGl0bGUpO1xuICAgICAgICB0b2RvVG9DaGFuZ2Uuc2V0UHJvcCgnZGVzY3JpcHRpb24nLCBuZXdEZXNjcmlwdGlvbik7XG4gICAgICAgIHRvZG9Ub0NoYW5nZS5zZXRQcm9wKCdwcmlvcml0eScsIG5ld1ByaW9yaXR5KTtcblxuICAgICAgICBwdWJTdWIucHVibGlzaCgnZGlzcGxheVNlbGVjdGVkUHJvamVjdCcsIG1hdGNoaW5nUHJvamVjdClcbiAgICAgICAgcHVzaFRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IHNldE1hdGNoaW5nUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIG1hdGNoaW5nUHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuICAgIGNvbnN0IGFkZFRvZG9Ub1Byb2plY3RBcnJheSA9IChwcm9qZWN0LCB0b2RvKSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb0FycmF5LnB1c2godG9kbylcbiAgICB9XG5cblxuICAgIGNvbnN0IGluY3JlYXNlUHJvamVjdHMgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KVxuICAgIH1cblxuICAgIC8vIHdoZW4gbWFraW5nIGFueSBjaGFuZ2UgdG8gcHJvamVjdCwgYXNzaWduIHByb2plY3QgQXJyYXkgdG8gbG9jYWwgU3RvcmFnZVxuICAgIGNvbnN0IHB1c2hUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0QXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5wcm9qZWN0QXJyYXkpO1xuICAgICAgICBsZXQgdGVzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3RBcnJheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3QpXG4gICAgfVxuXG4gICAgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5ID0gW107XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgaW5jcmVhc2VQcm9qZWN0cyh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoaXMgc2hvdWxkIGNyZWF0ZSBhIHByb2plY3QgYW5kIGFkZCBpdCB0byBwcm9qZWN0QXJyYXkuIGlzIHRoaXMgY2xlYW4gY29kZT9cbiAgICAvLyBtYXkgbmVlZCB0byBtb2RpZnkgdGhpcy4uLiBcblxuICAgIGNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UucHJvamVjdEFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgICAgICAgbGV0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoJ015IEZpcnN0IFByb2plY3QhJyk7XG4gICAgICAgIC8vIGFkZGVkIHRoaXMgYmVsb3dcbiAgICAgICAgc2V0TWF0Y2hpbmdQcm9qZWN0KHRlc3RQcm9qZWN0KTtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2xvYWRJbml0aWFsT3B0aW9ucycsIHByb2plY3RBcnJheSk7XG5cbiAgICAgICAgLy8gYWRkZWQgdGhpcyBiZWxvd1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnbG9hZEluaXRpYWxQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgbmV3IHByb2plY3Qgb24gZmlyc3QgbG9hZFxuICAgIHBhZ2VMb2FkKCk7XG59XG5cblxuIiwiZXhwb3J0IGNvbnN0IHB1YlN1YiA9IHtcbiAgICBldmVudHM6IHt9LFxuXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudCwgY2IpIHtcbiAgICAgICAgLy8gd2hhdCBkb2VzIHRoaXMuZXZlbnRzW2V2ZW50XSBsb29rIGxpa2U/XG4gICAgICAgIGNvbnNvbGUubG9nKGBzb21ldGhpbmcgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZlbnR9YClcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGNiKTtcbiAgICB9LFxuXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50LCBjYikge1xuICAgICAgICBjb25zb2xlLmxvZyhgc29tZXRoaW5nIHVuc3Vic2NyaWJlZCBmcm9tICR7ZXZlbnR9YClcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdLmZpbHRlcihmID0+IGYgIT0gY2IpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG1ha2luZyBhIGJyb2FkY2FzdCBhYm91dCAke2V2ZW50fSB3aXRoIGRhdGFgKTtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICAgICAgZihkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxufVxuXG4iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucyc7XG5cbi8vbWF5IGhhdmUgdG8gZW5jYXBzdWxhdGUgYWxsIG9mIHRoaXMgaW50byBhIGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHRvZG8oKSB7XG5cbiAgICAvLyBwdWJzdWIgU1VCU0NSSUJFXG4gICAgcHViU3ViLnN1YnNjcmliZSgndG9kb0Zvcm1TdWJtaXR0ZWQnLCAoYXJncykgPT4gey8vcHJvYmFibHkgY291bGQgZGVzdHJ1Y3R1cmUgdGhpcyB0YmhcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG5cbiAgICAgICAgLy8gaW4gZmFjdCwgd2hhdCBpIHRoaW5rIG5lZWRzIHRvIGhhcHBlbiBpcyB0byBwdWJsaXNoIHRoZSB0b2RvIHRvIGFuIGV2ZW50LCBhbmQgcHJvamVjdCB3aWxsIHN1YnNjcmliZSB0byBwdXQgdGhhdCBpbiB0b2RvYXJyYXkuXG4gICAgICAgIC8vIGFuZCB0aGVuIHRoYXQgd2lsbCBwdWJsaXNoIHRvIGRpc3BsYXkuXG4gICAgICAgIC8vIE5FWFQsIElNUExFTUVOVCBDSEFOR0lORyBUT0RPUzsgQ0hBTkdFIFBST1BFUlRZLCBERUxFVEVcbiAgICB9KVxuXG4gICAgbGV0IHRvZG9Db3VudGVyID0gMDtcblxuICAgIGNvbnN0IGluY3JlbWVudENvdW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRvZG9Db3VudGVyKytcbiAgICB9XG5cblxuICAgIGNsYXNzIFRvZG8ge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMudG9kb051bWJlciA9IHRvZG9Db3VudGVyO1xuICAgICAgICBpbmNyZW1lbnRDb3VudGVyKCk7XG5cbiAgICAgICAgLy8gbWF5IGhhdmUgdG8gbW92ZSB0aGlzIGVsc2V3aGVyZSwgYnV0IHdoZW4gbmV3IHRvZG8gaXMgY3JlYXRlZCwgYXBwZW5kIGl0IHRvIGEgcHJvamVjdCB0b2RvQXJyYXlcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3NlbmRUb2RvVG9Qcm9qZWN0VG9kb0FycmF5JywgdGhpcylcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFByb3AocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfSBcbiAgICB9XG59XG5cbmV4cG9ydCB7dG9kb307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBmb3JtSGFuZGxlciB9IGZyb20gXCIuL2Zvcm1IYW5kbGVyXCI7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmRpc3BsYXkoKTtcbnByb2plY3QoKTtcbnRvZG8oKTtcbmZvcm1IYW5kbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9