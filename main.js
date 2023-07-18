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
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBTTtBQUNkLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBTTtBQUNkLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQU07QUFDbEI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJDQUFNO0FBQ2xCO0FBQ0EsS0FBSzs7QUFF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Ozs7O0FDekJrQztBQUNGOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBLElBQUksMkNBQU0sMkNBQTJDO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDJDQUFNO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN4Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDTTtBQUNRO0FBQ1I7QUFDZjs7QUFFckIsaURBQU87QUFDUCxpREFBTztBQUNQLDJDQUFJO0FBQ0oseURBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvZm9ybUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ib3R0b20tc2hhZG93OiAwcHggMXB4IGJsYWNrO1xufVxuXG4jaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDV2aDtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMjBweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgNjgsIDExOCk7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG59XG5cbiNsZWZ0IHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjE3LCAyMTcpO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuI2xlZnQtdG9wLCAjbGVmdC1ib3R0b20ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbiNsZWZ0LXRvcCBwLCAjbGVmdC1ib3R0b20gcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jcmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuXG4jcHJvamVjdC1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4jYWRkLXRvZG8tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jdG9kb0Zvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI3RvZG9Gb3JtIGlucHV0LCAjdG9kb0Zvcm0gc2VsZWN0LCAjdG9kb0Zvcm0gYnV0dG9uLFxuLmZvcm1JblRvZG8gaW5wdXQsIC5mb3JtSW5Ub2RvIHNlbGVjdCwgLmZvcm1JblRvZG8gYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZm9ybUluVG9kbyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cblxuI3RvZG9Gb3JtIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3R0b20tc2hhZG93KTtcbn1cblxuI3RvZG9Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDdweDtcbn1cbi50b2RvRE9NIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3R0b20tc2hhZG93KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi50b2RvTWFpbkNvbnRlbnQuaGlkZGVuLCAuZm9ybUluVG9kby5oaWRkZW4sIC5leHBhbmRlZC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvVG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLnRvZG9Ub3BSaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcblxufVxuXG4udGl0bGUsIC5kZXNjcmlwdGlvbiwgLmR1ZURhdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5leHBhbmRlZCB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGZsb2F0OnRvcDtcbn1cbi5leHBhbmRlZC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIC5kZXNjcmlwdGlvbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59ICovXG5cbi5sb3ctcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiByZ2IoMjU1LCAyNTQsIDI0MCkgc29saWQgMTVweDtcbn1cblxuLm1lZGl1bS1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IG9yYW5nZSBzb2xpZCAxNXB4O1xufVxuLmhpZ2gtcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiByZWQgc29saWQgMTVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxvQkFBb0I7SUFDcEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFROztBQUVaOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYm90dG9tLXNoYWRvdzogMHB4IDFweCBibGFjaztcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCA2OCwgMTE4KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI2JvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4jbGVmdCB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjE3LCAyMTcpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbiNsZWZ0LXRvcCwgI2xlZnQtYm90dG9tIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI2xlZnQtdG9wIHAsICNsZWZ0LWJvdHRvbSBwIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jcmlnaHQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcbn1cXG5cXG4jcHJvamVjdC1oZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbiNhZGQtdG9kby10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jdG9kb0Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiN0b2RvRm9ybSBpbnB1dCwgI3RvZG9Gb3JtIHNlbGVjdCwgI3RvZG9Gb3JtIGJ1dHRvbixcXG4uZm9ybUluVG9kbyBpbnB1dCwgLmZvcm1JblRvZG8gc2VsZWN0LCAuZm9ybUluVG9kbyBidXR0b24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmZvcm1JblRvZG8ge1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuXFxuI3RvZG9Gb3JtIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvdHRvbS1zaGFkb3cpO1xcbn1cXG5cXG4jdG9kb0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogN3B4O1xcbn1cXG4udG9kb0RPTSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWluLWhlaWdodDogODBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm90dG9tLXNoYWRvdyk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnRvZG9NYWluQ29udGVudC5oaWRkZW4sIC5mb3JtSW5Ub2RvLmhpZGRlbiwgLmV4cGFuZGVkLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvVG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxuLnRvZG9Ub3BSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcblxcbn1cXG5cXG4udGl0bGUsIC5kZXNjcmlwdGlvbiwgLmR1ZURhdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5leHBhbmRlZCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZsb2F0OnRvcDtcXG59XFxuLmV4cGFuZGVkLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIC5kZXNjcmlwdGlvbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gKi9cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IHJnYigyNTUsIDI1NCwgMjQwKSBzb2xpZCAxNXB4O1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IG9yYW5nZSBzb2xpZCAxNXB4O1xcbn1cXG4uaGlnaC1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiByZWQgc29saWQgMTVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuLy8gc2hvdWxkIGhhbmRsZSBET00gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LiBTdWNoIGFzIGNyZWF0aW5nLCBjaGFuZ2luZyBhbmQgZGVsZXRpbmcgRE9NIGVsZW1lbnRzLlxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG5cbiAgICAvLyBkaXNwbGF5IHByb2plY3QgYXJyYXkgb24gZmlyc3QgbG9hZFxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2xvYWRJbml0aWFsT3B0aW9ucycsIGRpc3BsYXlBbGxQcm9qZWN0T3B0aW9ucyk7XG4gICAgcHViU3ViLnN1YnNjcmliZSgnbG9hZEluaXRpYWxQcm9qZWN0JywgKHByb2plY3QpID0+IHtcbiAgICAgICAgY2hhbmdlSGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VG9kb3MocHJvamVjdC50b2RvQXJyYXkpOyBcbiAgICAgICAgc2V0UHJvamVjdFNlbGVjdE9wdGlvbihwcm9qZWN0KTtcbiAgICB9KVxuXG4gICAgLy8gd2hlbiBuZXcgdG9kbyBpcyBjcmVhdGVkLCBkaXNwbGF5IGFsbCB0b2Rvc1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ25ld1RvZG9DcmVhdGVkJywgZGlzcGxheVByb2plY3RUb2RvcylcblxuICAgIC8vIHdoZW4gY3JlYXRpbmcgbmV3IHByb2plY3QsIGRpc3BsYXkgYWxsIHByb2plY3RzXG4gICAgcHViU3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgZGlzcGxheUFsbFByb2plY3RPcHRpb25zKTtcblxuICAgIC8vIHdoZW4gZGVsZXRpbmcgYSBwcm9qZWN0XG4gICAgcHViU3ViLnN1YnNjcmliZSgncHJvamVjdERlbGV0ZWQnLCBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMpO1xuXG4gICAgcHViU3ViLnN1YnNjcmliZSgnZGlzcGxheVNlbGVjdGVkUHJvamVjdCcsIChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNoYW5nZUhlYWRlcihwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdFRvZG9zKHByb2plY3QudG9kb0FycmF5KTsgXG4gICAgICAgIHNldFByb2plY3RTZWxlY3RPcHRpb24ocHJvamVjdCk7XG4gICAgfSlcblxuXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGNyZWF0ZURPTVByb3AgPSAoZWxUeXBlLCB2YWx1ZSwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9Qcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbFR5cGUpO1xuICAgICAgICB0b2RvUHJvcC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICB0b2RvUHJvcC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIC8vIGhpZGUgZGVzY3JpcHRpb24gY2xhc3MgYnkgZGVmYXVsdFxuICAgICAgICBpZiAoY2xhc3NOYW1lID09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRvZG9Qcm9wLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvUHJvcDtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZVRvZG9ET00gPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB0b2RvRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNldFByaW9yaXR5Q2xhc3ModG9kbyx0b2RvRE9NKTtcbiAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCd0b2RvRE9NJyk7XG4gICAgICAgIHRvZG9ET00uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgdG9kby50b2RvTnVtYmVyKTtcblxuICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5Ub2RvQ29udGVudCh0b2RvKSk7XG4gICAgICAgIHRvZG9ET00uYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybUluVG9kbygpKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRE9NKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNYWluVG9kb0NvbnRlbnQgPSAodG9kbykgPT4geyAgICAgICAgXG5cbiAgICAgICAgY29uc3QgdG9kb01haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9NYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RvTWFpbkNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdG9kb1RvcCA9IGNyZWF0ZURPTVByb3AoJ2RpdicsXCJcIixcInRvZG9Ub3BcIilcblxuICAgICAgICBjb25zdCB0b2RvVG9wTGVmdCA9IGNyZWF0ZURPTVByb3AoJ2RpdicsIFwiXCIsIFwidG9kb1RvcExlZnRcIik7XG4gICAgICAgIHRvZG9Ub3AuYXBwZW5kQ2hpbGQodG9kb1RvcExlZnQpXG4gICAgICAgIHRvZG9Ub3BMZWZ0LmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLnRpdGxlLCAndGl0bGUnKSk7XG5cbiAgICAgICAgY29uc3QgdG9kb1RvcFJpZ2h0ID0gY3JlYXRlRE9NUHJvcCgnZGl2JywgXCJcIiwgXCJ0b2RvVG9wUmlnaHRcIik7XG4gICAgICAgIHRvZG9Ub3AuYXBwZW5kQ2hpbGQodG9kb1RvcFJpZ2h0KVxuICAgICAgICB0b2RvVG9wUmlnaHQuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NUHJvcCgnc3BhbicsIHRvZG8uZHVlRGF0ZSwgJ2R1ZURhdGUnKSk7XG4gICAgICAgIHRvZG9Ub3BSaWdodC5hcHBlbmRDaGlsZChjcmVhdGVET01Qcm9wKCdidXR0b24nLCAnQ2hhbmdlJywgJ2NoYW5nZScpKTtcbiAgICAgICAgdG9kb1RvcFJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsICdEZWxldGUnLCAnZGVsZXRlJykpO1xuICAgIFxuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkID0gY3JlYXRlRE9NUHJvcCgnZGl2JyxcIlwiLFwiZXhwYW5kZWRcIilcbiAgICAgICAgZXhwYW5kZWQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGV4cGFuZGVkLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLnByaW9yaXR5LCAncHJpb3JpdHknKSk7XG4gICAgICAgIGV4cGFuZGVkLmFwcGVuZENoaWxkKGNyZWF0ZURPTVByb3AoJ3NwYW4nLCB0b2RvLmRlc2NyaXB0aW9uLCAnZGVzY3JpcHRpb24nKSk7XG5cbiAgICAgICAgdG9kb01haW5Db250ZW50LmFwcGVuZENoaWxkKHRvZG9Ub3ApO1xuICAgICAgICB0b2RvTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZXhwYW5kZWQpO1xuXG4gICAgICAgIHJldHVybiB0b2RvTWFpbkNvbnRlbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJpb3JpdHlDbGFzcyA9ICh0b2RvLCB0b2RvRE9NKSA9PiB7XG4gICAgICAgIHN3aXRjaCh0b2RvLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlICdsb3cgcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgnbG93LXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtZWRpdW0gcHJpb3JpdHknOlxuICAgICAgICAgICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWdoIHByaW9yaXR5JzpcbiAgICAgICAgICAgICAgICB0b2RvRE9NLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUZvcm1JblRvZG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVET01Qcm9wKCdmb3JtJywgXCJcIiwgJ2Zvcm1JblRvZG8nKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZURPTVByb3AoJ2lucHV0JywgXCJcIiwgXCJmb3JtVGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IHRpdGxlOicpXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRE9NUHJvcCgnaW5wdXQnLCBcIlwiLCBcImZvcm1EZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgZGVzY3JpcHRpb246JylcbiAgICAgICAgLy8gY29uc3QgZGF0ZSA9IGNyZWF0ZURPTVByb3AoJ2lucHV0JywgXCJcIiwgXCJmb3JtRGF0ZVwiKTsgLy9uZXcgZGF0ZSBpbnB1dCBkb2Vzbid0IHdvcmtcbiAgICAgICAgLy8gZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZURPTVByb3AoJ3NlbGVjdCcsIFwiXCIsIFwiZm9ybVByaW9yaXR5XCIpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBjcmVhdGVET01Qcm9wKCdidXR0b24nLCBcIk1ha2UgY2hhbmdlc1wiLCBcImZvcm1TdWJtaXRcIik7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGNyZWF0ZURPTVByb3AoJ2J1dHRvbicsIFwiQ2FuY2VsXCIsIFwiZm9ybUNhbmNlbFwiKTtcblxuICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGNyZWF0ZURPTVByb3AoJ29wdGlvbicsICdOb3QgdXJnZW50JywgJ2xvdycpXG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KVxuXG4gICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gY3JlYXRlRE9NUHJvcCgnb3B0aW9uJywgJ05vdCB0b28gdXJnZW50JywgJ21lZGl1bScpXG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KVxuXG4gICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGNyZWF0ZURPTVByb3AoJ29wdGlvbicsICdVcmdlbnQnLCAnaGlnaCcpXG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyBmb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRUb2RvQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICB0b2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdFRvZG9zKHRvZG9BcnJheSkge1xuICAgICAgICByZXNldFRvZG9Db250YWluZXIoKTtcbiAgICAgICAgdG9kb0FycmF5LmZvckVhY2goKHRvZG8pID0+IGNyZWF0ZVRvZG9ET00odG9kbykpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFNlbGVjdFwiKTtcbiAgICBcblxuICAgIC8vIGNhbiBvbmx5IGFzc2lnbiBvbmUgaW5zdGFuY2Ugb2YgYSBOb2RlLCBzbyBuZWVkIHRvIGNyZWF0ZSBtdWx0aXBsZSBpbnN0YW5jZXNcbiAgICBjb25zdCBjcmVhdGVPcHRpb25FbGVtZW50ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5udW1iZXI7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRPcHRpb25FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0SW5Ub2RvRm9ybS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHByb2plY3RTZWxlY3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGFzc2lnblByb2plY3RPcHRpb24gPSAocHJvamVjdCkgPT4ge1xuICAgICAgICAvLyBtYXkgbmVlZCB0byBzZXBhcmF0ZSBwcm9qZWN0IHNlbGVjdCBhbmQgdG9kbyBmb3JtIHByb2plY3Qgc2VsZWN0Li4uXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RJblRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uRWxlbWVudChwcm9qZWN0KSk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uRWxlbWVudChwcm9qZWN0KSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsUHJvamVjdE9wdGlvbnMocHJvamVjdEFycmF5KSB7XG4gICAgICAgIHJlc2V0T3B0aW9uRWxlbWVudHMoKTtcbiAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IGFzc2lnblByb2plY3RPcHRpb24ocHJvamVjdCkpXG4gICAgfVxuXG4gICAgLy8gd2hlbiBjcmVhdGluZyBhIHByb2plY3QsIG1ha2UgdGhlIHByb2plY3RTZWxlY3QgdmFsdWUgYmUgbWF0Y2hpbmcgUHJvamVjdC4uLiBcbiAgICBmdW5jdGlvbiBzZXRQcm9qZWN0U2VsZWN0T3B0aW9uKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdEluVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RGb3JUb2RvXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RTZWxlY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0U2VsZWN0W2ldLnRleHRDb250ZW50ID09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBwcm9qZWN0U2VsZWN0W2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIHByb2plY3RTZWxlY3RJblRvZG9Gb3JtLnZhbHVlID0gcHJvamVjdFNlbGVjdFtpXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdEluZGV4KCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdFNlbGVjdC52YWx1ZVxuXG4gICAgfVxuXG4gICAgLy8gd2hlbiBjbGlja2luZyBvbiBjaG9vc2UgcHJvamVjdFxuICAgIGNvbnN0IGNob29zZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hvb3NlUHJvamVjdCcpO1xuICAgIGNob29zZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goXCJnZXRQcm9qZWN0RnJvbVByb2plY3RTZWxlY3RcIiwgZ2V0U2VsZWN0ZWRQcm9qZWN0SW5kZXgoKSlcbiAgICB9KVxuXG5cbiAgICAvLyBkZWxldGUgcHJvamVjdFxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlUHJvamVjdCcpO1xuICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRQcm9qZWN0SW5kZXgoKSk7XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKFwiZ2V0UHJvamVjdFRvRGVsZXRlXCIsIGdldFNlbGVjdGVkUHJvamVjdEluZGV4KCkpO1xuICAgIH0pXG5cblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1oZWFkZXJcIik7XG4gICAgY29uc3QgY2hhbmdlSGVhZGVyID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIC8vIGRlbGV0ZSB0b2RvIERPTVxuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcbiAgICAgICAgICAgIC8vIHB1Ymxpc2ggdGhlIGRhdGEgaW5kZXggb2YgdGhlIHRvZG8gRE9NLCB0byBwcm9qZWN0XG4gICAgICAgICAgICBwdWJTdWIucHVibGlzaCgnZGVsZXRlVG9kbycsIGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvRE9NJykuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGNsaWNrIGNoYW5nZSB0b2RvIGJ1dHRvblxuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9ET00gPSAoZS50YXJnZXQuY2xvc2VzdCgnLnRvZG9ET00nKSk7XG4gICAgICAgICAgICB0b2dnbGVNYWluVG9kb0NvbnRlbnQodG9kb0RPTSk7XG4gICAgICAgICAgICB0b2dnbGVGb3JtSW5Ub2RvKHRvZG9ET00pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGNsaWNrIG9uIGZvcm0gc3VibWl0XG4gICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtU3VibWl0JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9ET00gPSAoZS50YXJnZXQuY2xvc2VzdCgnLnRvZG9ET00nKSk7XG4gICAgICAgICAgICBwdWJTdWIucHVibGlzaCgnc3VibWl0Q2hhbmdlZFRvZG8nLCBbdG9kb0RPTS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSwgZ2V0Rm9ybUlucHV0KHRvZG9ET00pXSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0Rm9ybUlucHV0KGZvcm0pIHtcbiAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtRGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLmZvcm1Qcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHtuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld1ByaW9yaXR5fVxuICAgIH1cblxuICAgIC8vIGNsaWNrIG9uIGNhbmNlbCBidXR0b24gaW4gZm9ybSBpbiB0b2RvXG4gICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm1DYW5jZWwnKSkge1xuICAgICAgICAgICAgY29uc3QgdG9kb0RPTSA9IChlLnRhcmdldC5jbG9zZXN0KCcudG9kb0RPTScpKTtcbiAgICAgICAgICAgIHRvZ2dsZU1haW5Ub2RvQ29udGVudCh0b2RvRE9NKTtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm1JblRvZG8odG9kb0RPTSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gdG9kb0RPTS5xdWVyeVNlbGVjdG9yKCcuZm9ybUluVG9kbycpO1xuICAgICAgICAgICAgcmVzZXRGb3JtKGZvcm0pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybShmb3JtKSB7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVNYWluVG9kb0NvbnRlbnQoZWwpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy50b2RvTWFpbkNvbnRlbnQnKTtcbiAgICAgICAgdG9nZ2xlSGlkZGVuKG1haW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUZvcm1JblRvZG8oZWwpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtSW5Ub2RvJyk7XG4gICAgICAgIHRvZ2dsZUhpZGRlbihmb3JtKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPIFxuICAgIC8vIHdoZW4gY2xpY2tpbmcgb24gdG9kbywgZXhwYW5kIGl0IGFuZCBoaWRlIG90aGVyIGV4cGFuZGVkIHRvZG9zLlxuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT0gJ0JVVFRPTicpIHJldHVybjtcbiAgICAgICAgY29uc3QgdG9kb0RPTSA9IChlLnRhcmdldC5jbG9zZXN0KFwiLnRvZG9ET01cIikpO1xuICAgICAgICBpZiAodG9kb0RPTSkge1xuICAgICAgICAgICAgdG9nZ2xlRXhwYW5kVG9kb0FuZENsb3NlT3RoZXJzKHRvZG9ET00pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlRXhwYW5kVG9kb0FuZENsb3NlT3RoZXJzKGVsKSB7XG4gICAgICAgIHJlbW92ZUN1cnJlbnRDbGlja2VkKCk7XG4gICAgICAgIHNldEN1cnJlbnRDbGlja2VkKGVsKTtcbiAgICAgICAgaGlkZUFsbFRvZG9FeHBhbnNpb25zKCk7XG4gICAgICAgIHRvZ2dsZUV4cGFuZFRvZG8oZWwpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ3VycmVudENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY2xpY2tlZCcpXG4gICAgICAgIGlmIChjdXJyZW50Q2xpY2tlZCkge1xuICAgICAgICAgICAgY3VycmVudENsaWNrZWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jbGlja2VkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50Q2xpY2tlZCh0b2RvRE9NKSB7XG4gICAgICAgIHRvZG9ET00uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jbGlja2VkJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFsbFRvZG9FeHBhbnNpb25zKCkge1xuICAgICAgICBjb25zdCBhbGxFeHBhbmRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwYW5kZWRcIilcbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiBhbGxFeHBhbmRlZCkge1xuICAgICAgICAgICAgaWYgKHRvZG8uY2xvc2VzdChcIi50b2RvRE9NXCIpLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1jbGlja2VkJykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCF0b2RvLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVFeHBhbmRUb2RvKGVsKSB7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuZXhwYW5kZWRcIik7XG4gICAgICAgIHRvZ2dsZUhpZGRlbihib3R0b20pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUhpZGRlbihlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpID8gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk6IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuLy9oYW5kbGVzIGZvcm0gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LiBzdWNoIGFzIHdoZW4gZm9ybXMgYXJlIHN1Ym1pdHRlZC5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtSGFuZGxlcigpIHtcblxuICAgIGNvbnN0IHJlc2V0Rm9ybSA9IChmb3JtKSA9PiB7XG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKVxuICAgIGNvbnN0IHN1Ym1pdFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9TdWJtaXRcIik7XG5cbiAgICBjb25zdCBnZXRUb2RvQXJncyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9UaXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcmlvcml0eVwiKS52YWx1ZX0gcHJpb3JpdHlgOy8vY2hhbmdlIGZyb20gdmFsdWUgdG8gdGV4dENvbnRlbnRcbiAgICBjb25zdCB0b2RvQXJncyA9IFt0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eV1cbiAgICByZXR1cm4gdG9kb0FyZ3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VsZWN0ZWRQcm9qZWN0T3B0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0Rm9yVG9kb1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC52YWx1ZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0LnZhbHVlO1xuICAgICAgICAvLyBtYXkgbmVlZCB0byByZWZhY3RvciB0byB1c2UgZGF0YSBhdHRyaWJ1dGUgYW5kIGluZGV4Li4uIHBob29leVxuICAgIH1cblxuICAgIHN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coZ2V0U2VsZWN0ZWRQcm9qZWN0T3B0aW9uKCkpO1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZ2V0UHJvamVjdEZyb21Ub2RvRm9ybScsIGdldFNlbGVjdGVkUHJvamVjdE9wdGlvbigpKS8vc2VuZCB0byBwcm9qZWN0LmpzXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIGdldFRvZG9BcmdzKCkpOyAvL3NlbmQgdG8gdG9kby5qc1xuICAgICAgICByZXNldEZvcm0odG9kb0Zvcm0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEZvcm1cIilcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFN1Ym1pdCcpXG4gICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBwdWJTdWIgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RGb3JtU3VibWl0dGVkJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtIGlucHV0JykudmFsdWUpXG4gICAgICAgIHJlc2V0Rm9ybShwcm9qZWN0Rm9ybSk7XG4gICAgfSlcbn0iLCJpbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgcHViU3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KCkge1xuXG4gICAgbGV0IHByb2plY3RDb3VudGVyID0gMDtcblxuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9BcnJheSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyID0gcHJvamVjdENvdW50ZXI7XG4gICAgICAgICAgICBpbmNyZWFzZVByb2plY3RzKHRoaXMpO1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5jcmVtZW50Q291bnRlciA9ICgpID0+IHtcbiAgICAgICAgcHJvamVjdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UucHJvamVjdEFycmF5KSB7XG5cbiAgICB9XG5cbiAgICBsZXQgbWF0Y2hpbmdQcm9qZWN0ID0ge307XG4gICAgLy9nZXRQcm9qZWN0IGFuZCBzZW5kVG9kb1RvUHJvamVjdFRvZG9BcnJheSBvY2N1ciBjb25zZWN1dGl2ZWx5XG4gICAgLy8gZ2V0IHByb2plY3QgZnJvbSB0b2RvIGZvcm07IGZpcnN0IGdldCBtYXRjaGluZyBwcm9qZWN0LCB0aGVuIHdhaXQgZm9yIHRvZG8gdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3RcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0RnJvbVRvZG9Gb3JtJywocHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RBcnJheS5maW5kKChwcm9qZWN0KSA9PiB7cmV0dXJuIHByb2plY3QubnVtYmVyID09IHByb2plY3RJbmRleH0pXG4gICAgICAgIHNldE1hdGNoaW5nUHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy9nZXQgcHJvamVjdCBmcm9tIHByb2plY3Qgc2VsZWN0OyBpbW1lZGlhdGVseSBwdWJsaXNoIHRvIGRpc3BsYXkgYXJyYXlcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0RnJvbVByb2plY3RTZWxlY3QnLChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5LmZpbmQoKHByb2plY3QpID0+IHtyZXR1cm4gcHJvamVjdC5udW1iZXIgPT0gcHJvamVjdEluZGV4fSlcbiAgICAgICAgc2V0TWF0Y2hpbmdQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0JywgbWF0Y2hpbmdQcm9qZWN0KVxuICAgIH0pO1xuXG4gICAgLy9hZGQgdG9kbyB0byBwcm9qZWN0IHRvZG9BcnJheVxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3NlbmRUb2RvVG9Qcm9qZWN0VG9kb0FycmF5JywgKHRvZG8pID0+IHtcbiAgICAgICAgYWRkVG9kb1RvUHJvamVjdEFycmF5KG1hdGNoaW5nUHJvamVjdCwgdG9kbylcbiAgICAgICAgLy8gcHViU3ViIHRvIGRpc3BsYXkgdGhlIHRvZG9zOyBzZW5kIHRvIGRpc3BsYXkuanNcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpXG4gICAgICAgIC8vIHdoZW4gbWFraW5nIGFueWNoYW5nZSwgdXBsb2FkIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgLy8gcHVzaFRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gd2hlbiBwcm9qZWN0Zm9ybSBpcyBzdWJtaXR0ZWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0Rm9ybVN1Ym1pdHRlZCcsIChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTsgXG4gICAgICAgIHNldE1hdGNoaW5nUHJvamVjdChuZXdQcm9qZWN0KVxuXG4gICAgICAgIC8vIHdoZW4gYSBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLCBwcm9qZWN0QXJyYXkpOyAvL25lZWRlZCB0byBkaXNwbGF5IGFsbCBwcm9qZWN0IG9wdGlvbnNcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpIC8vbmVlZGVkIHRvIHNldCBoZWFkZXIgYW5kIHRvZG8gdG8gcGFydGljdWxhciBwcm9qZWN0XG4gICAgICAgIC8vIHB1c2hUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH0pXG5cbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdnZXRQcm9qZWN0VG9EZWxldGUnLCAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGl0ZW0gPT4gY29uc29sZS5sb2coaXRlbSkpXG4gICAgICAgIGRlbGV0ZUVsZW1lbnQocHJvamVjdEFycmF5LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChpdGVtID0+IGNvbnNvbGUubG9nKGl0ZW0pKVxuICAgICAgICBwdWJTdWIucHVibGlzaCgncHJvamVjdERlbGV0ZWQnLCBwcm9qZWN0QXJyYXkpOyAvL3Jlc2V0IHByb2plY3Qgb3B0aW9uc1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnZGlzcGxheVNlbGVjdGVkUHJvamVjdCcsIG1hdGNoaW5nUHJvamVjdCkgLy9uZWVkZWQgdG8gc2V0IGhlYWRlciBhbmQgdG9kbyB0byBwYXJ0aWN1bGFyIHByb2plY3RcbiAgICB9KVxuXG4gICAgLy8gXG5cblxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2RlbGV0ZVRvZG8nLCAodG9kb0luZGV4KSA9PiB7XG4gICAgICAgIC8vIG1vZGlmaWVzIGluIHBsYWNlLCBtdXRhdGluZyB0aGUgb3JpZ2luYWwgYXJyYXkuIHRoaXMgaXMgd2hhdCB3ZSB3YW50XG4gICAgICAgIG1hdGNoaW5nUHJvamVjdC50b2RvQXJyYXkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kby5udW1iZXIpO1xuICAgICAgICB9KVxuICAgICAgICBkZWxldGVFbGVtZW50KG1hdGNoaW5nUHJvamVjdC50b2RvQXJyYXksIHRvZG9JbmRleClcbiAgICAgICAgLy8gbm93IGRpc3BsYXkgYWdhaW5cbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpXG4gICAgICAgIC8vIHB1c2hUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH0pXG5cbiAgICAvLyBtb2RpZnkgdG9kbyB3aGVuIHRoZSBmb3JtIGZvciBpdCBpcyBzdWJtaXR0ZWRcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCdzdWJtaXRDaGFuZ2VkVG9kbycsIChbdG9kb0luZGV4LCB7bmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdQcmlvcml0eX1dKSA9PiB7XG4gICAgICAgIGxldCB0b2RvVG9DaGFuZ2UgPSBtYXRjaGluZ1Byb2plY3QudG9kb0FycmF5LmZpbmQoKHRvZG8pID0+IHtyZXR1cm4gdG9kby5udW1iZXIgPT0gdG9kb0luZGV4fSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9Ub0NoYW5nZSk7XG4gICAgICAgIHRvZG9Ub0NoYW5nZS5zZXRQcm9wKCd0aXRsZScsIG5ld1RpdGxlKTtcbiAgICAgICAgdG9kb1RvQ2hhbmdlLnNldFByb3AoJ2Rlc2NyaXB0aW9uJywgbmV3RGVzY3JpcHRpb24pO1xuICAgICAgICB0b2RvVG9DaGFuZ2Uuc2V0UHJvcCgncHJpb3JpdHknLCBuZXdQcmlvcml0eSk7XG5cbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2Rpc3BsYXlTZWxlY3RlZFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpXG4gICAgICAgIC8vIHB1c2hUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBzZXRNYXRjaGluZ1Byb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBtYXRjaGluZ1Byb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbiAgICBjb25zdCBhZGRUb2RvVG9Qcm9qZWN0QXJyYXkgPSAocHJvamVjdCwgdG9kbykgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9BcnJheS5wdXNoKHRvZG8pXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlRWxlbWVudCA9IChhcnJheSwgaW5kZXgpID0+IHtcbiAgICAgICAgYXJyYXkuc3BsaWNlKFxuICAgICAgICAgICAgYXJyYXkuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLm51bWJlciA9PSBpbmRleCksMSlcbiAgICB9XG5cbiAgICBjb25zdCBpbmNyZWFzZVByb2plY3RzID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdClcbiAgICB9XG5cbiAgICAvLyB3aGVuIG1ha2luZyBhbnkgY2hhbmdlIHRvIHByb2plY3QsIGFzc2lnbiBwcm9qZWN0IEFycmF5IHRvIGxvY2FsIFN0b3JhZ2VcbiAgICBjb25zdCBwdXNoVG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSlcblxuICAgICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdEFycmF5ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UucHJvamVjdEFycmF5KTtcbiAgICAgICAgbGV0IHRlc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qZWN0QXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZXN0KVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgICAgICAvL2NsZWFyIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5wcm9qZWN0QXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuICAgICAgICBsZXQgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdCgnTXkgRmlyc3QgUHJvamVjdCEnKTtcbiAgICAgICAgLy8gYWRkZWQgdGhpcyBiZWxvd1xuICAgICAgICBzZXRNYXRjaGluZ1Byb2plY3QodGVzdFByb2plY3QpO1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnbG9hZEluaXRpYWxPcHRpb25zJywgcHJvamVjdEFycmF5KTtcblxuICAgICAgICAvLyBhZGRlZCB0aGlzIGJlbG93XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdsb2FkSW5pdGlhbFByb2plY3QnLCBtYXRjaGluZ1Byb2plY3QpO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdCBvbiBmaXJzdCBsb2FkXG4gICAgcGFnZUxvYWQoKTtcbn1cblxuXG4iLCJleHBvcnQgY29uc3QgcHViU3ViID0ge1xuICAgIGV2ZW50czoge30sXG5cbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50LCBjYikge1xuICAgICAgICAvLyB3aGF0IGRvZXMgdGhpcy5ldmVudHNbZXZlbnRdIGxvb2sgbGlrZT9cbiAgICAgICAgY29uc29sZS5sb2coYHNvbWV0aGluZyBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldmVudH1gKVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF18fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2IpO1xuICAgIH0sXG5cbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzb21ldGhpbmcgdW5zdWJzY3JpYmVkIGZyb20gJHtldmVudH1gKVxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0uZmlsdGVyKGYgPT4gZiAhPSBjYilcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbWFraW5nIGEgYnJvYWRjYXN0IGFib3V0ICR7ZXZlbnR9IHdpdGggZGF0YWApO1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG59XG5cbiIsImltcG9ydCB7IHB1YlN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJztcblxuLy9tYXkgaGF2ZSB0byBlbmNhcHN1bGF0ZSBhbGwgb2YgdGhpcyBpbnRvIGEgZnVuY3Rpb25cblxuZnVuY3Rpb24gdG9kbygpIHtcblxuICAgIC8vIHB1YnN1YiBTVUJTQ1JJQkVcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCd0b2RvRm9ybVN1Ym1pdHRlZCcsIChhcmdzKSA9PiB7Ly9wcm9iYWJseSBjb3VsZCBkZXN0cnVjdHVyZSB0aGlzIHRiaFxuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcblxuICAgICAgICAvLyBpbiBmYWN0LCB3aGF0IGkgdGhpbmsgbmVlZHMgdG8gaGFwcGVuIGlzIHRvIHB1Ymxpc2ggdGhlIHRvZG8gdG8gYW4gZXZlbnQsIGFuZCBwcm9qZWN0IHdpbGwgc3Vic2NyaWJlIHRvIHB1dCB0aGF0IGluIHRvZG9hcnJheS5cbiAgICAgICAgLy8gYW5kIHRoZW4gdGhhdCB3aWxsIHB1Ymxpc2ggdG8gZGlzcGxheS5cbiAgICAgICAgLy8gTkVYVCwgSU1QTEVNRU5UIENIQU5HSU5HIFRPRE9TOyBDSEFOR0UgUFJPUEVSVFksIERFTEVURVxuICAgIH0pXG5cbiAgICBsZXQgdG9kb0NvdW50ZXIgPSAwO1xuXG4gICAgY29uc3QgaW5jcmVtZW50Q291bnRlciA9ICgpID0+IHtcbiAgICAgICAgdG9kb0NvdW50ZXIrK1xuICAgIH1cblxuXG4gICAgY2xhc3MgVG9kbyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5udW1iZXIgPSB0b2RvQ291bnRlcjtcbiAgICAgICAgaW5jcmVtZW50Q291bnRlcigpO1xuXG4gICAgICAgIC8vIG1heSBoYXZlIHRvIG1vdmUgdGhpcyBlbHNld2hlcmUsIGJ1dCB3aGVuIG5ldyB0b2RvIGlzIGNyZWF0ZWQsIGFwcGVuZCBpdCB0byBhIHByb2plY3QgdG9kb0FycmF5XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdzZW5kVG9kb1RvUHJvamVjdFRvZG9BcnJheScsIHRoaXMpXG4gICAgICAgIH1cblxuICAgICAgICBzZXRQcm9wKHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH0gXG4gICAgfVxufVxuXG5leHBvcnQge3RvZG99OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZm9ybUhhbmRsZXIgfSBmcm9tIFwiLi9mb3JtSGFuZGxlclwiO1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5kaXNwbGF5KCk7XG5wcm9qZWN0KCk7XG50b2RvKCk7XG5mb3JtSGFuZGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==