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
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ "./src/api/request.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/api/config.ts");





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
    var _params$code, result, _t;
    return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          console.log('[wxLogin] Starting login with code:', ((_params$code = params.code) === null || _params$code === void 0 ? void 0 : _params$code.substring(0, 10)) + '...');
          console.log('[wxLogin] API_BASE_URL:', _config__WEBPACK_IMPORTED_MODULE_4__.API_BASE_URL);

          // 使用封装好的 request 工具类
          _context.n = 1;
          return (0,_request__WEBPACK_IMPORTED_MODULE_2__.post)('/auth/login', params, true);
        case 1:
          result = _context.v;
          // 保存 token 和用户信息
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().setStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY, result.token);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().setStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.USER_INFO_KEY, result.user);
          console.log('[wxLogin] Login successful');
          return _context.a(2, result);
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error('[wxLogin] Error:', _t);
          throw _t;
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return _wxLogin.apply(this, arguments);
}
function getCurrentUser() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.USER_INFO_KEY);
}

/**
 * 退出登录
 */
function logout() {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().removeStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY);
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().removeStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.USER_INFO_KEY);
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().reLaunch({
    url: '/pages/index/index'
  });
}

/**
 * 检查是否已登录
 */
function isLoggedIn() {
  var token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY);
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
    var token, _t2;
    return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY);
          if (token) {
            _context2.n = 1;
            break;
          }
          throw new Error('未登录');
        case 1:
          _context2.n = 2;
          return get('/auth/user', null, true);
        case 2:
          return _context2.a(2, _context2.v);
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error('获取用户信息错误:', _t2);
          throw _t2;
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return _getUserInfo.apply(this, arguments);
}
function updateUserInfo(_x2) {
  return _updateUserInfo.apply(this, arguments);
}
function _updateUserInfo() {
  _updateUserInfo = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee3(userInfo) {
    var token, updatedUser, _t3;
    return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY);
          if (token) {
            _context3.n = 1;
            break;
          }
          throw new Error('未登录');
        case 1:
          _context3.n = 2;
          return (0,_request__WEBPACK_IMPORTED_MODULE_2__.post)('/auth/user/update', userInfo, true);
        case 2:
          updatedUser = _context3.v;
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().setStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.USER_INFO_KEY, updatedUser);
          return _context3.a(2, updatedUser);
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          console.error('编辑用户信息错误:', _t3);
          throw _t3;
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return _updateUserInfo.apply(this, arguments);
}

/***/ }),

/***/ "./src/api/config.ts":
/*!***************************!*\
  !*** ./src/api/config.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    var url, _options$method, method, data, _options$header, header, _options$showLoading, showLoading, _options$loadingText, loadingText, token, requestUrl, response, result, timeoutError, errorMsg, failError, _t;
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
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getStorageSync(_config__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY); // 确保路径拼接正确
          requestUrl = url.startsWith('http') ? url : "".concat(_config__WEBPACK_IMPORTED_MODULE_4__.API_BASE_URL).concat(url.startsWith('/') ? '' : '/').concat(url); // 发起请求
          _context.n = 2;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().request({
            url: requestUrl,
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
          if (!(result.success === true || result.code === 0 || result.code === 200)) {
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

/***/ "./src/pages/guide/data.ts":
/*!*********************************!*\
  !*** ./src/pages/guide/data.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GUIDES_DATA: function() { return /* binding */ GUIDES_DATA; }
/* harmony export */ });
var GUIDES_DATA = [{
  id: 'unemployment-claim',
  title: '失业保险金申领攻略',
  desc: '手把手教你如何在线申领失业金，包括所需材料和流程。',
  tag: '政策解读',
  content: "### 1. \u7533\u9886\u6761\u4EF6\n- \u5931\u4E1A\u524D\u7528\u4EBA\u5355\u4F4D\u548C\u672C\u4EBA\u5DF2\u7ECF\u7F34\u7EB3\u5931\u4E1A\u4FDD\u9669\u8D39\u6EE1\u4E00\u5E74\uFF1B\n- \u975E\u56E0\u672C\u4EBA\u610F\u613F\u4E2D\u65AD\u5C31\u4E1A\uFF08\u5982\u88AB\u8F9E\u9000\u3001\u5408\u540C\u5230\u671F\u7B49\uFF09\uFF1B\n- \u5DF2\u7ECF\u8FDB\u884C\u5931\u4E1A\u767B\u8BB0\uFF0C\u5E76\u6709\u6C42\u804C\u8981\u6C42\u3002\n\n### 2. \u7533\u9886\u6E20\u9053\n- **\u7EBF\u4E0A\u529E\u7406**\uFF1A\u53EF\u4EE5\u901A\u8FC7\u201C\u7535\u5B50\u793E\u4FDD\u5361\u201D\u5C0F\u7A0B\u5E8F\u3001\u56FD\u5BB6\u793E\u4F1A\u4FDD\u9669\u516C\u5171\u670D\u52A1\u5E73\u53F0\u6216\u5F53\u5730\u4EBA\u793E\u90E8\u95E8\u5B98\u7F51/APP\u529E\u7406\u3002\n- **\u7EBF\u4E0B\u529E\u7406**\uFF1A\u643A\u5E26\u8EAB\u4EFD\u8BC1\u3001\u793E\u4FDD\u5361\u524D\u5F80\u53C2\u4FDD\u5730\u793E\u4FDD\u7ECF\u529E\u673A\u6784\u3002\n\n### 3. \u9886\u53D6\u671F\u9650\n- \u7D2F\u8BA1\u7F34\u8D39\u6EE11\u5E74\u4E0D\u8DB35\u5E74\u7684\uFF0C\u9886\u53D6\u671F\u9650\u6700\u957F\u4E3A12\u4E2A\u6708\uFF1B\n- \u6EE15\u5E74\u4E0D\u8DB310\u5E74\u7684\uFF0C\u6700\u957F\u4E3A18\u4E2A\u6708\uFF1B\n- 10\u5E74\u4EE5\u4E0A\u7684\uFF0C\u6700\u957F\u4E3A24\u4E2A\u6708\u3002\n\n### 4. \u5F85\u9047\u6807\u51C6\n\u5931\u4E1A\u4FDD\u9669\u91D1\u6807\u51C6\u901A\u5E38\u4E3A\u5F53\u5730\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\u768480%-90%\u3002\u9886\u53D6\u671F\u95F4\uFF0C\u793E\u4FDD\u57FA\u91D1\u4F1A\u4EE3\u7F34\u57FA\u672C\u533B\u7597\u4FDD\u9669\u8D39\uFF0C\u4E2A\u4EBA\u65E0\u9700\u7F34\u7EB3\u3002"
}, {
  id: 'unemployment-calc',
  title: '失业金领取计算器',
  desc: '输入缴费年限，快速估算你可以领取的失业金总额及期限。',
  tag: '实用工具',
  isTool: true,
  path: '/pages/guide/calculator/index'
}, {
  id: 'social-security-strategy',
  title: '个人就业缴社保攻略',
  desc: '自由职业、灵活就业如何自己交社保？最全省钱攻略。',
  tag: '办事指南',
  isTool: true,
  path: '/pages/guide/social-security/index'
}, {
  id: 'unemployment-subsidy',
  title: '失业补助金与临时生活补助',
  desc: '针对不符合失业金领取条件的人员，还有哪些补助可以领？',
  tag: '福利补贴',
  content: "### \u4EC0\u4E48\u662F\u5931\u4E1A\u8865\u52A9\u91D1\uFF1F\n\u5931\u4E1A\u8865\u52A9\u91D1\u662F\u9488\u5BF9\u9886\u53D6\u5931\u4E1A\u4FDD\u9669\u91D1\u671F\u6EE1\u4ECD\u672A\u5C31\u4E1A\u7684\u5931\u4E1A\u4EBA\u5458\uFF0C\u4EE5\u53CA\u4E0D\u7B26\u5408\u9886\u53D6\u5931\u4E1A\u4FDD\u9669\u91D1\u6761\u4EF6\u7684\u53C2\u4FDD\u5931\u4E1A\u4EBA\u5458\u53D1\u653E\u7684\u4E34\u65F6\u6027\u8865\u8D34\u3002\n\n### \u7533\u9886\u6761\u4EF6\n- \u9886\u53D6\u5931\u4E1A\u4FDD\u9669\u91D1\u671F\u6EE1\u4ECD\u672A\u5C31\u4E1A\u7684\u5931\u4E1A\u4EBA\u5458\uFF1B\n- \u4E0D\u7B26\u5408\u9886\u53D6\u5931\u4E1A\u4FDD\u9669\u91D1\u6761\u4EF6\u7684\u53C2\u4FDD\u5931\u4E1A\u4EBA\u5458\uFF08\u5982\u7F34\u8D39\u4E0D\u6EE1\u4E00\u5E74\u6216\u4E3B\u52A8\u8F9E\u804C\uFF09\u3002\n\n### \u8865\u8D34\u6807\u51C6\n\u5177\u4F53\u6807\u51C6\u7531\u5404\u5730\u533A\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u786E\u5B9A\uFF0C\u901A\u5E38\u4F4E\u4E8E\u5931\u4E1A\u4FDD\u9669\u91D1\u3002\n\n### \u6CE8\u610F\u4E8B\u9879\n\u5931\u4E1A\u8865\u52A9\u91D1\u53EA\u80FD\u7533\u9886\u4E00\u6B21\uFF0C\u9886\u53D6\u671F\u95F4\u4E0D\u4EAB\u53D7\u5931\u4E1A\u4FDD\u9669\u5176\u4ED6\u5F85\u9047\uFF08\u5982\u4EE3\u7F34\u533B\u4FDD\uFF09\u3002"
}, {
  id: 'skill-subsidy',
  title: '技能提升补贴申领指南',
  desc: '在职或失业期间考取职业资格证书，最高可领2000元。',
  tag: '技能提升',
  content: "### \u8865\u8D34\u5BF9\u8C61\n\u4F9D\u6CD5\u53C2\u52A0\u5931\u4E1A\u4FDD\u9669\uFF0C\u7D2F\u8BA1\u7F34\u7EB3\u5931\u4E1A\u4FDD\u9669\u8D3936\u4E2A\u6708\uFF08\u90E8\u5206\u5730\u533A\u653E\u5BBD\u81F312\u4E2A\u6708\uFF09\u53CA\u4EE5\u4E0A\u7684\u4F01\u4E1A\u804C\u5DE5\u6216\u9886\u53D6\u5931\u4E1A\u91D1\u4EBA\u5458\u3002\n\n### \u8865\u8D34\u6807\u51C6\n- **\u521D\u7EA7\uFF08\u4E94\u7EA7\uFF09**\uFF1A1000\u5143\n- **\u4E2D\u7EA7\uFF08\u56DB\u7EA7\uFF09**\uFF1A1500\u5143\n- **\u9AD8\u7EA7\uFF08\u4E09\u7EA7\uFF09**\uFF1A2000\u5143\n\n### \u7533\u9886\u6D41\u7A0B\n\u53D6\u5F97\u8BC1\u4E66\u4E4B\u65E5\u8D7712\u4E2A\u6708\u5185\uFF0C\u901A\u8FC7\u5F53\u5730\u4EBA\u793E\u90E8\u95E8\u5B98\u7F51 or APP\u5728\u7EBF\u7533\u8BF7\u3002"
}, {
  id: 'startup-loan',
  title: '创业担保贷款政策',
  desc: '想创业资金不足？了解一下政府贴息的创业担保贷款。',
  tag: '创业支持',
  content: "### \u8D37\u6B3E\u5BF9\u8C61\n\u57CE\u9547\u767B\u8BB0\u5931\u4E1A\u4EBA\u5458\u3001\u5C31\u4E1A\u56F0\u96BE\u4EBA\u5458\u3001\u590D\u5458\u8F6C\u4E1A\u519B\u4EBA\u3001\u9AD8\u6821\u6BD5\u4E1A\u751F\u7B49\u3002\n\n### \u8D37\u6B3E\u989D\u5EA6\n- **\u4E2A\u4EBA**\uFF1A\u6700\u9AD8\u53EF\u7533\u8BF720\u4E07\u5143\u3002\n- **\u5408\u4F19\u521B\u4E1A**\uFF1A\u53EF\u6839\u636E\u5408\u4F19\u4EBA\u6570\u9002\u5F53\u63D0\u9AD8\u8D37\u6B3E\u989D\u5EA6\u3002\n\n### \u8D34\u606F\u653F\u7B56\n\u653F\u5E9C\u5C06\u6309\u89C4\u5B9A\u7ED9\u4E88\u8D34\u606F\u652F\u6301\uFF0C\u4E2A\u4EBA\u53EA\u9700\u627F\u62C5\u8F83\u4F4E\u6BD4\u4F8B\u7684\u5229\u606F\u3002\n\n### \u7533\u8BF7\u6761\u4EF6\n\u9664\u52A9\u5B66\u8D37\u6B3E\u3001\u6276\u8D2B\u8D37\u6B3E\u3001\u4F4F\u623F\u8D37\u6B3E\u3001\u8D2D\u8F66\u8D37\u6B3E\u30015\u4E07\u5143\u4EE5\u4E0B\u5C0F\u989D\u6D88\u8D39\u8D37\u6B3E\uFF08\u542B\u4FE1\u7528\u5361\u5206\u671F\uFF09\u5916\uFF0C\u7533\u8BF7\u4EBA\u53CA\u5176\u914D\u5076\u5E94\u65E0\u5176\u4ED6\u8D37\u6B3E\u8BB0\u5F55\u3002"
}];

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