"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/ai/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/ai/index!./src/pages/ai/index.tsx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/ai/index!./src/pages/ai/index.tsx ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AI; }
/* harmony export */ });
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/chat */ "./src/services/chat.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");










function AI() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([{
      role: 'bot',
      content: '你好！我是转角驿站的 AI 助手，有什么可以帮你的吗？'
    }]),
    _useState2 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    messages = _useState2[0],
    setMessages = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState4 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState6 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var handleSend = /*#__PURE__*/function () {
    var _ref = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee() {
      var userMsg, res, _t;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(!inputValue.trim() || loading)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            userMsg = {
              role: 'user',
              content: inputValue
            };
            setMessages(function (prev) {
              return [].concat((0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [userMsg]);
            });
            setInputValue('');
            setLoading(true);
            _context.p = 2;
            _context.n = 3;
            return (0,_services_chat__WEBPACK_IMPORTED_MODULE_7__.sendMessage)(inputValue);
          case 3:
            res = _context.v;
            if (res.success) {
              setMessages(function (prev) {
                return [].concat((0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [{
                  role: 'bot',
                  content: res.reply
                }]);
              });
            } else {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
                title: res.message || '发送失败',
                icon: 'none'
              });
            }
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
              title: '网络错误',
              icon: 'none'
            });
          case 5:
            _context.p = 5;
            setLoading(false);
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
    }));
    return function handleSend() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "ai-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
      className: "chat-window",
      scrollY: true,
      scrollWithAnimation: true,
      children: [messages.map(function (msg, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "message-item ".concat(msg.role),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "content",
            children: msg.content
          })
        }, index);
      }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "message-item bot",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "content",
          children: "\u6B63\u5728\u601D\u8003..."
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "input-area",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Input, {
        className: "input",
        value: inputValue,
        onInput: function onInput(e) {
          return setInputValue(e.detail.value);
        },
        placeholder: "\u8F93\u5165\u6D88\u606F...",
        confirmType: "send",
        onConfirm: handleSend
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: "send-btn",
        onClick: handleSend,
        disabled: loading,
        children: "\u53D1\u9001"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/ai/index.tsx":
/*!********************************!*\
  !*** ./src/pages/ai/index.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_ai_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/ai/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/ai/index!./src/pages/ai/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_ai_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/ai/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_ai_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/services/chat.ts":
/*!******************************!*\
  !*** ./src/services/chat.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendMessage: function() { return /* binding */ sendMessage; }
/* harmony export */ });
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);




var sendMessage = /*#__PURE__*/function () {
  var _ref = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee(message) {
    var userId;
    return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          userId = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync('userId');
          return _context.a(2, (0,_utils_request__WEBPACK_IMPORTED_MODULE_2__.request)({
            url: '/chat/send',
            method: 'POST',
            data: {
              userId: userId,
              message: message
            }
          }));
      }
    }, _callee);
  }));
  return function sendMessage(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   request: function() { return /* binding */ request; }
/* harmony export */ });
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);




var BASE_URL = 'http://192.168.31.20:8080/api'; // 本地调试地址

var request = /*#__PURE__*/function () {
  var _ref = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee(options) {
    var url, _options$method, method, data, _options$header, header, token, res, _t;
    return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          url = options.url, _options$method = options.method, method = _options$method === void 0 ? 'GET' : _options$method, data = options.data, _options$header = options.header, header = _options$header === void 0 ? {} : _options$header; // 从本地缓存获取 token
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync('token');
          if (token) {
            header['Authorization'] = "Bearer ".concat(token);
          }
          _context.p = 1;
          _context.n = 2;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().request({
            url: "".concat(BASE_URL).concat(url),
            method: method,
            data: data,
            header: (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
              'Content-Type': 'application/json'
            }, header)
          });
        case 2:
          res = _context.v;
          if (!(res.statusCode >= 200 && res.statusCode < 300)) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.data);
        case 3:
          throw new Error(res.data.message || '请求失败');
        case 4:
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
            title: _t.message || '网络请求失败',
            icon: 'none'
          });
          throw _t;
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[1, 5]]);
  }));
  return function request(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/pages/ai/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map