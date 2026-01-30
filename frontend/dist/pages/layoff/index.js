"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/layoff/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/layoff/index!./src/pages/layoff/index.tsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/layoff/index!./src/pages/layoff/index.tsx ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layoff; }
/* harmony export */ });
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");









var consultationItems = [{
  id: 1,
  title: '裁员法律权益',
  description: '了解你在裁员中的法律权益和保护',
  icon: '⚖️',
  category: 'legal'
}, {
  id: 2,
  title: '经济补偿金计算',
  description: '如何计算应得的经济补偿金',
  icon: '💰',
  category: 'compensation'
}, {
  id: 3,
  title: '裁员程序和流程',
  description: '企业裁员的标准程序和注意事项',
  icon: '📋',
  category: 'procedure'
}, {
  id: 4,
  title: '员工权利保护',
  description: '了解你在裁员中的各项权利',
  icon: '🛡️',
  category: 'rights'
}, {
  id: 5,
  title: '谈判技巧',
  description: '与公司谈判补偿的有效技巧',
  icon: '🤝',
  category: 'legal'
}, {
  id: 6,
  title: '社保和公积金处理',
  description: '裁员后社保和公积金如何处理',
  icon: '📊',
  category: 'compensation'
}];
function Layoff() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('all'),
    _useState2 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    selectedCategory = _useState2[0],
    setSelectedCategory = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState4 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    showChat = _useState4[0],
    setShowChat = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([{
      role: 'assistant',
      content: '你好！我是转角驿站的裁员咨询助手。我可以帮助你了解裁员相关的法律权益、补偿计算、程序流程等。请告诉我你想咨询的问题。'
    }]),
    _useState6 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    chatMessages = _useState6[0],
    setChatMessages = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
    _useState8 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
    inputValue = _useState8[0],
    setInputValue = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState0 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var filteredItems = selectedCategory === 'all' ? consultationItems : consultationItems.filter(function (item) {
    return item.category === selectedCategory;
  });
  var handleItemClick = function handleItemClick(item) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().navigateTo({
      url: "/pages/webview/index?url=/layoff/".concat(item.id)
    });
  };
  var handleSendMessage = /*#__PURE__*/function () {
    var _ref = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee() {
      var userMessage;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (inputValue.trim()) {
              _context.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().showToast({
              title: '请输入问题',
              icon: 'none'
            });
            return _context.a(2);
          case 1:
            try {
              setLoading(true);

              // 添加用户消息
              userMessage = inputValue;
              setChatMessages(function (prev) {
                return [].concat((0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [{
                  role: 'user',
                  content: userMessage
                }]);
              });
              setInputValue('');

              // 模拟 AI 回复（实际应该调用后端 API）
              setTimeout(function () {
                var responses = ['根据《劳动合同法》，企业进行经济性裁员时，应当提前30天通知员工或支付1个月工资作为代通知金。', '经济补偿金的计算标准是：按照员工在本单位工作的年限，每满一年支付一个月工资，最多支付12个月工资。', '裁员程序通常包括：制定裁员方案 → 通知工会 → 通知员工 → 协商 → 办理离职手续。', '在裁员过程中，你有权了解裁员原因、获得书面通知、进行协商、获得经济补偿等权利。', '与公司谈判时，建议准备好相关证据（工作年限证明、工资条等），了解法律规定的最低补偿标准。', '裁员后，企业应当为你办理社保转移手续，公积金可以申请提取或转移。'];
                var randomResponse = responses[Math.floor(Math.random() * responses.length)];
                setChatMessages(function (prev) {
                  return [].concat((0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [{
                    role: 'assistant',
                    content: randomResponse
                  }]);
                });
              }, 800);
            } finally {
              setLoading(false);
            }
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleSendMessage() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "layoff-page",
    children: !showChat ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "layoff-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "layoff-title",
          children: "\u88C1\u5458\u54A8\u8BE2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "layoff-subtitle",
          children: "\u4E86\u89E3\u4F60\u7684\u6743\u5229\uFF0C\u4FDD\u62A4\u4F60\u7684\u6743\u76CA"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
        className: "category-filter",
        scrollX: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "category-item",
          onClick: function onClick() {
            return setSelectedCategory('all');
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: selectedCategory === 'all' ? 'active' : '',
            children: "\u5168\u90E8"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "category-item",
          onClick: function onClick() {
            return setSelectedCategory('legal');
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: selectedCategory === 'legal' ? 'active' : '',
            children: "\u6CD5\u5F8B\u6743\u76CA"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "category-item",
          onClick: function onClick() {
            return setSelectedCategory('compensation');
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: selectedCategory === 'compensation' ? 'active' : '',
            children: "\u8865\u507F\u8BA1\u7B97"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "category-item",
          onClick: function onClick() {
            return setSelectedCategory('procedure');
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: selectedCategory === 'procedure' ? 'active' : '',
            children: "\u7A0B\u5E8F\u6D41\u7A0B"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "category-item",
          onClick: function onClick() {
            return setSelectedCategory('rights');
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: selectedCategory === 'rights' ? 'active' : '',
            children: "\u6743\u5229\u4FDD\u62A4"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
        className: "consultation-list",
        scrollY: true,
        children: filteredItems.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "consultation-card",
            onClick: function onClick() {
              return handleItemClick(item);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "card-header",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "card-icon",
                children: item.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
                className: "card-title-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                  className: "card-title",
                  children: item.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                  className: "card-description",
                  children: item.description
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "card-arrow",
              children: "\u2192"
            })]
          }, item.id);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "floating-buttons",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          className: "chat-button",
          onClick: function onClick() {
            return setShowChat(true);
          },
          children: "\uD83D\uDCAC AI \u54A8\u8BE2"
        })
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "chat-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "chat-title",
          children: "AI \u88C1\u5458\u54A8\u8BE2\u52A9\u624B"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          className: "close-button",
          onClick: function onClick() {
            return setShowChat(false);
          },
          children: "\u2715"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
        className: "chat-messages",
        children: chatMessages.map(function (msg, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "message ".concat(msg.role),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "message-content",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                children: msg.content
              })
            })
          }, index);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "chat-input-area",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "input-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
            type: "text",
            className: "chat-input",
            placeholder: "\u8F93\u5165\u4F60\u7684\u95EE\u9898...",
            value: inputValue,
            onChange: function onChange(e) {
              return setInputValue(e.target.value);
            },
            disabled: loading
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            className: "send-button",
            onClick: handleSendMessage,
            disabled: loading || !inputValue.trim(),
            children: loading ? '...' : '发送'
          })]
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/layoff/index.tsx":
/*!************************************!*\
  !*** ./src/pages/layoff/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_layoff_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/layoff/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/layoff/index!./src/pages/layoff/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_layoff_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/layoff/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_layoff_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/pages/layoff/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map