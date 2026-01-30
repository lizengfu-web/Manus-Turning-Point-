"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/auth.ts":
/*!*************************!*\
  !*** ./src/api/auth.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentUser: function() { return /* binding */ getCurrentUser; },
/* harmony export */   getUserInfo: function() { return /* binding */ getUserInfo; },
/* harmony export */   isLoggedIn: function() { return /* binding */ isLoggedIn; },
/* harmony export */   logout: function() { return /* binding */ logout; },
/* harmony export */   updateUserInfo: function() { return /* binding */ updateUserInfo; },
/* harmony export */   wxLogin: function() { return /* binding */ wxLogin; }
/* harmony export */ });
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/api/config.ts");




/**
 * 微信登录
 */
function wxLogin(_x) {
  return _wxLogin.apply(this, arguments);
}

/**
 * 获取当前用户信息
 */
function _wxLogin() {
  _wxLogin = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee(params) {
    var _params$code, response, result, errorMsg, _t;
    return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          console.log('[wxLogin] Starting login with code:', ((_params$code = params.code) === null || _params$code === void 0 ? void 0 : _params$code.substring(0, 10)) + '...');
          console.log('[wxLogin] API_BASE_URL:', _config__WEBPACK_IMPORTED_MODULE_3__.API_BASE_URL);

          // 使用标准 HTTP POST 请求
          _context.n = 1;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
            url: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__.API_BASE_URL, "/auth/login"),
            method: 'POST',
            data: params,
            header: {
              'Content-Type': 'application/json'
            }
          });
        case 1:
          response = _context.v;
          console.log('[wxLogin] Response status:', response.statusCode);
          console.log('[wxLogin] Response data:', response.data);
          if (!(response.statusCode === 200 && response.data.success)) {
            _context.n = 2;
            break;
          }
          result = response.data.data; // 保存 token 和用户信息
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setStorageSync(_config__WEBPACK_IMPORTED_MODULE_3__.TOKEN_KEY, result.token);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setStorageSync(_config__WEBPACK_IMPORTED_MODULE_3__.USER_INFO_KEY, result.user);
          console.log('[wxLogin] Login successful');
          return _context.a(2, result);
        case 2:
          errorMsg = response.data.error || '登录失败';
          console.error('[wxLogin] Login failed:', errorMsg);
          throw new Error(errorMsg);
        case 3:
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.error('[wxLogin] Error:', _t);
          throw _t;
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[0, 4]]);
  }));
  return _wxLogin.apply(this, arguments);
}
function getCurrentUser() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_3__.USER_INFO_KEY);
}

/**
 * 退出登录
 */
function logout() {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().removeStorageSync(_config__WEBPACK_IMPORTED_MODULE_3__.TOKEN_KEY);
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().removeStorageSync(_config__WEBPACK_IMPORTED_MODULE_3__.USER_INFO_KEY);
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().reLaunch({
    url: '/pages/index/index'
  });
}

/**
 * 检查是否已登录
 */
function isLoggedIn() {
  var token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_3__.TOKEN_KEY);
  return !!token;
}

/**
 * 获取用户信息
 */
function getUserInfo() {
  return _getUserInfo.apply(this, arguments);
}

/**
 * 编辑用户信息
 */
function _getUserInfo() {
  _getUserInfo = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee2() {
    var token, response, _t2;
    return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_3__.TOKEN_KEY);
          if (token) {
            _context2.n = 1;
            break;
          }
          throw new Error('未登录');
        case 1:
          _context2.n = 2;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
            url: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__.API_BASE_URL, "/auth/user"),
            method: 'GET',
            header: {
              'Authorization': "Bearer ".concat(token)
            }
          });
        case 2:
          response = _context2.v;
          if (!(response.statusCode === 200 && response.data.success)) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, response.data.data);
        case 3:
          throw new Error(response.data.error || '获取用户信息失败');
        case 4:
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t2 = _context2.v;
          console.error('获取用户信息错误:', _t2);
          throw _t2;
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return _getUserInfo.apply(this, arguments);
}
function updateUserInfo(_x2) {
  return _updateUserInfo.apply(this, arguments);
}
function _updateUserInfo() {
  _updateUserInfo = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee3(userInfo) {
    var token, response, updatedUser, _t3;
    return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_3__.TOKEN_KEY);
          if (token) {
            _context3.n = 1;
            break;
          }
          throw new Error('未登录');
        case 1:
          _context3.n = 2;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().request({
            url: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__.API_BASE_URL, "/auth/user/update"),
            method: 'POST',
            data: userInfo,
            header: {
              'Authorization': "Bearer ".concat(token),
              'Content-Type': 'application/json'
            }
          });
        case 2:
          response = _context3.v;
          if (!(response.statusCode === 200 && response.data.success)) {
            _context3.n = 3;
            break;
          }
          // 更新本地存储
          updatedUser = response.data.data;
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setStorageSync(_config__WEBPACK_IMPORTED_MODULE_3__.USER_INFO_KEY, updatedUser);
          return _context3.a(2, updatedUser);
        case 3:
          throw new Error(response.data.error || '编辑用户信息失败');
        case 4:
          _context3.n = 6;
          break;
        case 5:
          _context3.p = 5;
          _t3 = _context3.v;
          console.error('编辑用户信息错误:', _t3);
          throw _t3;
        case 6:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 5]]);
  }));
  return _updateUserInfo.apply(this, arguments);
}

/***/ }),

/***/ "./src/api/config.ts":
/*!***************************!*\
  !*** ./src/api/config.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_BASE_URL: function() { return /* binding */ API_BASE_URL; },
/* harmony export */   REQUEST_TIMEOUT: function() { return /* binding */ REQUEST_TIMEOUT; },
/* harmony export */   TOKEN_KEY: function() { return /* binding */ TOKEN_KEY; },
/* harmony export */   USER_INFO_KEY: function() { return /* binding */ USER_INFO_KEY; },
/* harmony export */   WEB_BASE_URL: function() { return /* binding */ WEB_BASE_URL; }
/* harmony export */ });
// API 配置
// 本地开发：使用本地 IP 地址（不能使用 localhost）
// 请将 YOUR_LOCAL_IP 替换为您电脑的局域网 IP 地址
var API_BASE_URL = 'http://192.168.31.20:8080/api';
var WEB_BASE_URL = 'http://192.168.31.20:8080';

// 请求超时时间
var REQUEST_TIMEOUT = 30000;

// Token 存储 key
var TOKEN_KEY = 'auth_token';

// 用户信息存储 key
var USER_INFO_KEY = 'user_info';

/***/ }),

/***/ "./src/api/request.ts":
/*!****************************!*\
  !*** ./src/api/request.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get: function() { return /* binding */ get; },
/* harmony export */   post: function() { return /* binding */ post; }
/* harmony export */ });
/* unused harmony exports request, put, del, trpcMutation */
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/api/config.ts");





/**
 * 网络请求封装
 */
function request(_x) {
  return _request.apply(this, arguments);
}

/**
 * GET 请求
 */
function _request() {
  _request = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee(options) {
    var url, _options$method, method, data, _options$header, header, _options$showLoading, showLoading, _options$loadingText, loadingText, token, response, result, timeoutError, errorMsg, failError, _t;
    return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          url = options.url, _options$method = options.method, method = _options$method === void 0 ? 'GET' : _options$method, data = options.data, _options$header = options.header, header = _options$header === void 0 ? {} : _options$header, _options$showLoading = options.showLoading, showLoading = _options$showLoading === void 0 ? false : _options$showLoading, _options$loadingText = options.loadingText, loadingText = _options$loadingText === void 0 ? '加载中...' : _options$loadingText; // 显示加载提示
          if (showLoading) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showLoading({
              title: loadingText,
              mask: true
            });
          }
          _context.p = 1;
          // 获取 token
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY); // 发起请求
          _context.n = 2;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().request({
            url: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__.API_BASE_URL).concat(url),
            method: method,
            data: data,
            header: (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
              'Content-Type': 'application/json',
              'Authorization': token ? "Bearer ".concat(token) : ''
            }, header),
            timeout: _config__WEBPACK_IMPORTED_MODULE_4__.REQUEST_TIMEOUT
          });
        case 2:
          response = _context.v;
          // 隐藏加载提示
          if (showLoading) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().hideLoading();
          }
          result = response.data; // 处理响应
          if (!(response.statusCode === 200)) {
            _context.n = 6;
            break;
          }
          if (!(result.code === 0 || result.code === 200)) {
            _context.n = 3;
            break;
          }
          return _context.a(2, result.data);
        case 3:
          if (!(result.code === 401)) {
            _context.n = 4;
            break;
          }
          // 未登录或 token 失效
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().removeStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
            title: '请先登录',
            icon: 'none',
            duration: 2000
          });
          // 跳转到登录页
          setTimeout(function () {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().reLaunch({
              url: '/pages/index/index'
            });
          }, 2000);
          throw new Error('未登录');
        case 4:
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
            title: result.message || '请求失败',
            icon: 'none',
            duration: 2000
          });
          throw new Error(result.message || '请求失败');
        case 5:
          _context.n = 7;
          break;
        case 6:
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
            title: '网络请求失败',
            icon: 'none',
            duration: 2000
          });
          throw new Error('网络请求失败');
        case 7:
          _context.n = 11;
          break;
        case 8:
          _context.p = 8;
          _t = _context.v;
          // 隐藏加载提示
          if (showLoading) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().hideLoading();
          }

          // 处理错误
          console.error('API 请求错误:', _t);
          if (!_t.errMsg) {
            _context.n = 10;
            break;
          }
          if (!_t.errMsg.includes('timeout')) {
            _context.n = 9;
            break;
          }
          timeoutError = new Error('请求超时，请检查网络');
          throw timeoutError;
        case 9:
          if (!_t.errMsg.includes('fail')) {
            _context.n = 10;
            break;
          }
          // 提供更详细的错误信息
          errorMsg = '网络连接失败';
          if (_t.errMsg.includes('request:fail')) {
            errorMsg = '无法连接到服务器，请检查：\n1. 网络连接\n2. 服务器地址配置\n3. 微信开发者工具中关闭域名校验';
          }
          failError = new Error(errorMsg);
          throw failError;
        case 10:
          throw _t;
        case 11:
          return _context.a(2);
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _request.apply(this, arguments);
}
function get(url, data) {
  var showLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return request({
    url: url,
    method: 'GET',
    data: data,
    showLoading: showLoading
  });
}

/**
 * POST 请求
 */
function post(url, data) {
  var showLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return request({
    url: url,
    method: 'POST',
    data: data,
    showLoading: showLoading
  });
}

/**
 * PUT 请求
 */
function put(url, data) {
  var showLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return request({
    url: url,
    method: 'PUT',
    data: data,
    showLoading: showLoading
  });
}

/**
 * DELETE 请求
 */
function del(url, data) {
  var showLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return request({
    url: url,
    method: 'DELETE',
    data: data,
    showLoading: showLoading
  });
}

/**
 * tRPC 请求封装（支持 mutation）
 */
function trpcMutation(_x2, _x3) {
  return _trpcMutation.apply(this, arguments);
}
function _trpcMutation() {
  _trpcMutation = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee2(procedure, input) {
    var showLoading,
      token,
      response,
      result,
      firstResult,
      _args2 = arguments,
      _t2;
    return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          showLoading = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
          if (showLoading) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showLoading({
              title: '加载中...',
              mask: true
            });
          }
          _context2.p = 1;
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY); // tRPC 使用 batch 格式
          _context2.n = 2;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().request({
            url: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__.API_BASE_URL, "/api/trpc/").concat(procedure, "?batch=1"),
            method: 'POST',
            data: {
              "0": input
            },
            header: {
              'Content-Type': 'application/json',
              'Authorization': token ? "Bearer ".concat(token) : ''
            },
            timeout: _config__WEBPACK_IMPORTED_MODULE_4__.REQUEST_TIMEOUT
          });
        case 2:
          response = _context2.v;
          if (showLoading) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().hideLoading();
          }
          if (!(response.statusCode === 200)) {
            _context2.n = 5;
            break;
          }
          result = response.data; // tRPC batch 响应格式是数组
          if (!(Array.isArray(result) && result[0])) {
            _context2.n = 4;
            break;
          }
          firstResult = result[0];
          if (!(firstResult.result && firstResult.result.data)) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, firstResult.result.data.json || firstResult.result.data);
        case 3:
          if (!firstResult.error) {
            _context2.n = 4;
            break;
          }
          throw new Error(firstResult.error.message || '请求失败');
        case 4:
          return _context2.a(2, result);
        case 5:
          throw new Error("HTTP ".concat(response.statusCode));
        case 6:
          _context2.n = 8;
          break;
        case 7:
          _context2.p = 7;
          _t2 = _context2.v;
          if (showLoading) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().hideLoading();
          }
          console.error('tRPC 请求错误:', _t2);
          throw _t2;
        case 8:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 7]]);
  }));
  return _trpcMutation.apply(this, arguments);
}

/***/ }),

/***/ "./src/store/user.ts":
/*!***************************!*\
  !*** ./src/store/user.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUserStore: function() { return /* binding */ useUserStore; }
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

var useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)(function (set) {
  return {
    user: null,
    isLoggedIn: false,
    setUser: function setUser(user) {
      return set({
        user: user,
        isLoggedIn: !!user
      });
    },
    clearUser: function clearUser() {
      return set({
        user: null,
        isLoggedIn: false
      });
    }
  };
});

/***/ })

}]);
//# sourceMappingURL=common.js.map