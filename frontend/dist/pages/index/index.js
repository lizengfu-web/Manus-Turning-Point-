"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _interopRequireWildcard; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _interopRequireWildcard(e, t) {
  if ("function" == typeof WeakMap) var r = new WeakMap(),
    n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = {
        __proto__: null,
        "default": e
      };
    if (null === e || "object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) && "function" != typeof e) return f;
    if (o = t ? n : r) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);
    return f;
  })(e, t);
}


/***/ }),

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js */ "./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/user */ "./src/store/user.ts");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/auth */ "./src/api/auth.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");











function Index() {
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_7__.useUserStore)(),
    user = _useUserStore.user,
    setUser = _useUserStore.setUser;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
    _useState2 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    quote = _useState2[0],
    setQuote = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState4 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var quotes = ['失业不是终点，而是转折点。每一个停顿，都是为了更好的起跑。', '你的价值不由工作定义。这个时期，是重新认识自己的机会。', '很多成功的人，都曾经历过失业。这不是失败，这是成长的代价。', '焦虑是正常的，但它不会改变现状。不如把精力投入到能改变的事情上。', '失业期间最珍贵的不是金钱，而是时间。好好利用它。'];
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    // 随机选择一条寄语
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);

    // 检查登录状态
    if ((0,_api_auth__WEBPACK_IMPORTED_MODULE_8__.isLoggedIn)()) {
      var currentUser = (0,_api_auth__WEBPACK_IMPORTED_MODULE_8__.getCurrentUser)();
      setUser(currentUser);
    }
  }, []);

  // 测试后端连接
  var testConnection = /*#__PURE__*/function () {
    var _ref = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee() {
      var _yield$import, API_BASE_URL, result, _t;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setLoading(true);
            _context.n = 1;
            return Promise.resolve().then(function () {
              return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(__webpack_require__(/*! @/api/config */ "./src/api/config.ts"));
            });
          case 1:
            _yield$import = _context.v;
            API_BASE_URL = _yield$import.API_BASE_URL;
            console.log('正在测试连接:', API_BASE_URL);

            // 先测试根路径
            _context.n = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().request({
              url: "".concat(API_BASE_URL, "/"),
              method: 'GET',
              timeout: 5000
            });
          case 2:
            result = _context.v;
            console.log('连接测试成功:', result);
            if (!(result.statusCode === 200)) {
              _context.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().showToast({
              title: '连接成功！',
              icon: 'success',
              duration: 2000
            });
            _context.n = 4;
            break;
          case 3:
            throw new Error("HTTP ".concat(result.statusCode));
          case 4:
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            console.error('连接测试失败:', _t);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().showModal({
              title: '连接失败',
              content: "\u9519\u8BEF\u4FE1\u606F: ".concat(_t.errMsg || _t.message || '未知错误', "\n\n\u8BF7\u68C0\u67E5:\n1. \u540E\u7AEF\u670D\u52A1\u5668\u662F\u5426\u6B63\u5728\u8FD0\u884C\n2. API \u5730\u5740\u914D\u7F6E\u662F\u5426\u6B63\u786E\n3. \u624B\u673A\u548C\u7535\u8111\u662F\u5426\u5728\u540C\u4E00 WiFi"),
              showCancel: false
            });
          case 6:
            _context.p = 6;
            setLoading(false);
            return _context.f(6);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[0, 5, 6, 7]]);
    }));
    return function testConnection() {
      return _ref.apply(this, arguments);
    };
  }();

  // 微信登录（使用新的授权方式）
  var handleLogin = /*#__PURE__*/function () {
    var _ref2 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee2() {
      var _yield$Taro$login, code, result, _t2;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setLoading(true);

            // 获取微信登录 code
            _context2.n = 1;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().login();
          case 1:
            _yield$Taro$login = _context2.v;
            code = _yield$Taro$login.code;
            if (code) {
              _context2.n = 2;
              break;
            }
            throw new Error('获取登录凭证失败');
          case 2:
            _context2.n = 3;
            return (0,_api_auth__WEBPACK_IMPORTED_MODULE_8__.wxLogin)({
              code: code,
              userInfo: {
                nickName: '微信用户',
                avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
              }
            });
          case 3:
            result = _context2.v;
            setUser(result.user);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000
            });
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.error('登录失败:', _t2);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().showToast({
              title: _t2.message || '登录失败',
              icon: 'none',
              duration: 2000
            });
          case 5:
            _context2.p = 5;
            setLoading(false);
            return _context2.f(5);
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 4, 5, 6]]);
    }));
    return function handleLogin() {
      return _ref2.apply(this, arguments);
    };
  }();

  // 跳转到指南页
  var navigateToGuide = function navigateToGuide() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().navigateTo({
      url: '/pages/webview/index?url=/guide'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "index-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: "title",
        children: "\u8F6C\u89D2\u9A7F\u7AD9"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: "subtitle",
        children: "\u804C\u573A\u8F6C\u6298\u7684\u6E29\u6696\u9A7F\u7AD9"
      })]
    }), user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "user-card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "user-info",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
          className: "avatar",
          src: user.avatarUrl
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: "name",
            children: user.nickName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: "type",
            children: getUserTypeLabel(user.userType)
          })]
        })]
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "login-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: "login-tip",
        children: "\u767B\u5F55\u540E\u67E5\u770B\u4E2A\u6027\u5316\u63A8\u8350"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: "test-btn",
        onClick: testConnection,
        loading: loading,
        disabled: loading,
        style: {
          marginBottom: '10px',
          backgroundColor: '#10b981',
          color: '#fff'
        },
        children: loading ? '测试中...' : '测试连接'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: "login-btn",
        onClick: handleLogin,
        loading: loading,
        disabled: loading,
        children: loading ? '登录中...' : '微信登录'
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "quote-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "quote-icon",
        children: "\uD83D\uDCA1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "quote-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "quote-label",
          children: "\u4ECA\u65E5\u5BC4\u8BED"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "quote-text",
          children: quote
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "feature-grid",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "feature-item",
        onClick: navigateToGuide,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "feature-icon",
          children: "\uD83D\uDCD6"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-title",
          children: "\u653F\u7B56\u6307\u5357"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-desc",
          children: "\u5931\u4E1A\u91D1\u8BA1\u7B97\u3001\u7533\u9886\u653B\u7565"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "feature-item",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().navigateTo({
            url: '/pages/layoff/index'
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "feature-icon",
          children: "\u2696\uFE0F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-title",
          children: "\u88C1\u5458\u54A8\u8BE2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-desc",
          children: "\u6CD5\u5F8B\u6743\u76CA\u3001\u8865\u507F\u8BA1\u7B97"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "feature-item",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().navigateTo({
            url: '/pages/interview/index'
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "feature-icon",
          children: "\uD83C\uDFA4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-title",
          children: "\u6A21\u62DF\u9762\u8BD5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-desc",
          children: "\u9762\u8BD5\u8BAD\u7EC3\u3001\u6280\u80FD\u63D0\u5347"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "feature-item",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().switchTab({
            url: '/pages/opportunity/index'
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "feature-icon",
          children: "\uD83D\uDCBC"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-title",
          children: "\u526F\u4E1A\u673A\u4F1A"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-desc",
          children: "\u7075\u6D3B\u5C31\u4E1A\u3001\u521B\u4E1A\u5B75\u5316"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "feature-item",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().switchTab({
            url: '/pages/hole/index'
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "feature-icon",
          children: "\uD83D\uDCAC"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-title",
          children: "\u6811\u6D1E"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-desc",
          children: "\u503E\u8BC9\u5FC3\u58F0\u3001\u4E92\u76F8\u9F13\u52B1"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "feature-item",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().switchTab({
            url: '/pages/profile/index'
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "feature-icon",
          children: "\uD83D\uDC64"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-title",
          children: "\u6211\u7684"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "feature-desc",
          children: "\u4E2A\u4EBA\u4E2D\u5FC3\u3001\u8BBE\u7F6E"
        })]
      })]
    })]
  });
}
function getUserTypeLabel(userType) {
  var labels = {
    'short_term': '短期失业者',
    'long_term': '长期失业者',
    'recent_graduate': '应届毕业生',
    'career_transition': '职业转型者'
  };
  return labels[userType] || '用户';
}

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"转角驿站"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map