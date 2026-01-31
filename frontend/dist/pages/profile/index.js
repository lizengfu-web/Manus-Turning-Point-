"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/profile/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./src/pages/profile/index.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./src/pages/profile/index.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Profile; }
/* harmony export */ });
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/user */ "./src/store/user.ts");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/auth */ "./src/api/auth.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _components_PrivacyAgreementModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/PrivacyAgreementModal */ "./src/components/PrivacyAgreementModal.tsx");
/* harmony import */ var _constants_privacy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/constants/privacy */ "./src/constants/privacy.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");














function Profile() {
  var _useUserStore = (0,_store_user__WEBPACK_IMPORTED_MODULE_7__.useUserStore)(),
    user = _useUserStore.user,
    setUser = _useUserStore.setUser,
    clearUser = _useUserStore.clearUser;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
    _useState2 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    isEditing = _useState2[0],
    setIsEditing = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
    _useState4 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
    _useState6 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
    showPrivacyModal = _useState6[0],
    setShowPrivacyModal = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null),
    _useState8 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
    pendingLogin = _useState8[0],
    setPendingLogin = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
      nickName: '',
      avatarUrl: '',
      openId: '',
      userType: '',
      province: '',
      city: '',
      workYears: 0
    }),
    _useState0 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
    userInfo = _useState0[0],
    setUserInfo = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
      nickName: '',
      province: '',
      city: '',
      workYears: 0
    }),
    _useState10 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState1, 2),
    editForm = _useState10[0],
    setEditForm = _useState10[1];

  // 加载用户信息
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    if (user) {
      loadUserInfo();
    }
  }, [user]);
  var loadUserInfo = /*#__PURE__*/function () {
    var _ref = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee() {
      var info, _t;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setLoading(true);
            _context.n = 1;
            return (0,_api_auth__WEBPACK_IMPORTED_MODULE_8__.getUserInfo)();
          case 1:
            info = _context.v;
            setUserInfo(info);
            setEditForm({
              nickName: info.nickName || '',
              province: info.province || '',
              city: info.city || '',
              workYears: info.workYears || 0
            });
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
              title: _t.message || '加载用户信息失败',
              icon: 'none'
            });
          case 3:
            _context.p = 3;
            setLoading(false);
            return _context.f(3);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2, 3, 4]]);
    }));
    return function loadUserInfo() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleLogin = /*#__PURE__*/function () {
    var _ref2 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee2() {
      var loginRes, _loginRes, code, userProfileInfo, _yield$Taro$getUserPr, _userInfo, _t2, _t3, _t4;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            console.log('[Profile] Starting login...');

            // 检查是否已同意隐私协议
            if ((0,_constants_privacy__WEBPACK_IMPORTED_MODULE_11__.hasAgreedPrivacyPolicy)()) {
              _context2.n = 9;
              break;
            }
            console.log('[Profile] User has not agreed to privacy policy, showing modal');
            _context2.p = 1;
            _context2.n = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().login();
          case 2:
            loginRes = _context2.v;
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error('[Profile] Taro.login System Error:', _t2);
            throw new Error('微信登录服务暂时不可用');
          case 4:
            _loginRes = loginRes, code = _loginRes.code;
            console.log('[Profile] Got code:', (code === null || code === void 0 ? void 0 : code.substring(0, 10)) + '...');

            // 尝试获取用户信息（可能会失败，但不影响登录）
            userProfileInfo = {
              nickName: '微信用户',
              avatarUrl: ''
            };
            _context2.p = 5;
            _context2.n = 6;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().getUserProfile({
              desc: '用于完善用户资料'
            });
          case 6:
            _yield$Taro$getUserPr = _context2.v;
            _userInfo = _yield$Taro$getUserPr.userInfo;
            userProfileInfo = {
              nickName: _userInfo.nickName,
              avatarUrl: _userInfo.avatarUrl
            };
            console.log('[Profile] Got user profile');
            _context2.n = 8;
            break;
          case 7:
            _context2.p = 7;
            _t3 = _context2.v;
            // 用户拒绝授权，使用默认值
            console.log('[Profile] User denied profile access or System Error');
          case 8:
            // 保存登录信息，等待用户同意隐私协议
            setPendingLogin({
              code: code,
              userInfo: userProfileInfo
            });
            setShowPrivacyModal(true);
            return _context2.a(2);
          case 9:
            _context2.n = 10;
            return performLogin();
          case 10:
            _context2.n = 12;
            break;
          case 11:
            _context2.p = 11;
            _t4 = _context2.v;
            console.error('[Profile] Login error:', _t4);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
              title: _t4.message || '登录失败',
              icon: 'none',
              duration: 3000
            });
          case 12:
            return _context2.a(2);
        }
      }, _callee2, null, [[5, 7], [1, 3], [0, 11]]);
    }));
    return function handleLogin() {
      return _ref2.apply(this, arguments);
    };
  }();
  var performLogin = /*#__PURE__*/function () {
    var _ref3 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee3(code, userProfileInfo) {
      var loginCode, loginUserInfo, _loginCode, loginRes, _yield$Taro$getUserPr2, _userInfo2, result, _t5, _t6, _t7;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            loginCode = code;
            loginUserInfo = userProfileInfo;
            if (loginCode) {
              _context3.n = 8;
              break;
            }
            console.log('[Profile] Getting new code...');
            _context3.p = 1;
            _context3.n = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().login();
          case 2:
            loginRes = _context3.v;
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t5 = _context3.v;
            console.error('[Profile] Taro.login System Error:', _t5);
            throw new Error('微信登录服务暂时不可用');
          case 4:
            loginCode = loginRes.code;
            console.log('[Profile] Got code:', ((_loginCode = loginCode) === null || _loginCode === void 0 ? void 0 : _loginCode.substring(0, 10)) + '...');

            // 尝试获取用户信息
            loginUserInfo = {
              nickName: '微信用户',
              avatarUrl: ''
            };
            _context3.p = 5;
            _context3.n = 6;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().getUserProfile({
              desc: '用于完善用户资料'
            });
          case 6:
            _yield$Taro$getUserPr2 = _context3.v;
            _userInfo2 = _yield$Taro$getUserPr2.userInfo;
            loginUserInfo = {
              nickName: _userInfo2.nickName,
              avatarUrl: _userInfo2.avatarUrl
            };
            console.log('[Profile] Got user profile');
            _context3.n = 8;
            break;
          case 7:
            _context3.p = 7;
            _t6 = _context3.v;
            console.log('[Profile] User denied profile access or System Error');
          case 8:
            console.log('[Profile] Calling wxLogin...');
            _context3.n = 9;
            return (0,_api_auth__WEBPACK_IMPORTED_MODULE_8__.wxLogin)({
              code: loginCode,
              userInfo: loginUserInfo
            });
          case 9:
            result = _context3.v;
            console.log('[Profile] Login successful');
            setUser(result.user);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
              title: '登录成功',
              icon: 'success'
            });
            _context3.n = 11;
            break;
          case 10:
            _context3.p = 10;
            _t7 = _context3.v;
            console.error('[Profile] Login error:', _t7);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
              title: _t7.message || '登录失败',
              icon: 'none',
              duration: 3000
            });
          case 11:
            return _context3.a(2);
        }
      }, _callee3, null, [[5, 7], [1, 3], [0, 10]]);
    }));
    return function performLogin(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handlePrivacyAgree = /*#__PURE__*/function () {
    var _ref4 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee4() {
      var _t8;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            console.log('[Profile] User agreed to privacy policy');
            // 保存同意状态
            (0,_constants_privacy__WEBPACK_IMPORTED_MODULE_11__.savePrivacyPolicyAgreement)();
            setShowPrivacyModal(false);

            // 继续登录流程
            if (!pendingLogin) {
              _context4.n = 2;
              break;
            }
            _context4.n = 1;
            return performLogin(pendingLogin.code, pendingLogin.userInfo);
          case 1:
            setPendingLogin(null);
          case 2:
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t8 = _context4.v;
            console.error('[Profile] Error handling privacy agreement:', _t8);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
              title: '处理协议失败',
              icon: 'none'
            });
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    return function handlePrivacyAgree() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handlePrivacyDisagree = function handlePrivacyDisagree() {
    console.log('[Profile] User disagreed to privacy policy');
    setShowPrivacyModal(false);
    setPendingLogin(null);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
      title: '您已拒绝隐私协议，无法继续登录',
      icon: 'none'
    });
  };
  var handleLogout = /*#__PURE__*/function () {
    var _ref5 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee5() {
      var _yield$Taro$showModal, confirm, _t9;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showModal({
              title: '提示',
              content: '确定要退出登录吗？'
            });
          case 1:
            _yield$Taro$showModal = _context5.v;
            confirm = _yield$Taro$showModal.confirm;
            if (confirm) {
              (0,_api_auth__WEBPACK_IMPORTED_MODULE_8__.logout)();
              clearUser();
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
                title: '已退出登录',
                icon: 'success'
              });
            }
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t9 = _context5.v;
          case 3:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 2]]);
    }));
    return function handleLogout() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleEditChange = function handleEditChange(field, value) {
    setEditForm((0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editForm), {}, (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, value)));
  };
  var handleSaveEdit = /*#__PURE__*/function () {
    var _ref6 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee6() {
      var updated, _t0;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            setLoading(true);
            _context6.n = 1;
            return (0,_api_auth__WEBPACK_IMPORTED_MODULE_8__.updateUserInfo)({
              nickName: editForm.nickName,
              province: editForm.province,
              city: editForm.city,
              workYears: editForm.workYears
            });
          case 1:
            updated = _context6.v;
            setUserInfo(updated);
            setIsEditing(false);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
              title: '信息更新成功',
              icon: 'success'
            });
            _context6.n = 3;
            break;
          case 2:
            _context6.p = 2;
            _t0 = _context6.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
              title: _t0.message || '更新失败',
              icon: 'none'
            });
          case 3:
            _context6.p = 3;
            setLoading(false);
            return _context6.f(3);
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 2, 3, 4]]);
    }));
    return function handleSaveEdit() {
      return _ref6.apply(this, arguments);
    };
  }();
  var navigateToWebView = function navigateToWebView(path) {
    if (!user) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().showToast({
        title: '请先登录',
        icon: 'none'
      });
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default().navigateTo({
      url: "/pages/webview/index?url=".concat(path)
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_PrivacyAgreementModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      visible: showPrivacyModal,
      onAgree: handlePrivacyAgree,
      onDisagree: handlePrivacyDisagree
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "profile-page",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "header",
        children: user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "user-info",
          children: [userInfo.avatarUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
            className: "avatar",
            src: userInfo.avatarUrl,
            mode: "aspectFill"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "avatar-placeholder",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              children: "\uD83D\uDC64"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: "nickname",
            children: userInfo.nickName || '用户'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: "openid",
            children: ["ID: ", userInfo.openId]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: "role",
            children: userInfo.userType === 'admin' ? '管理员' : '普通用户'
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "login-prompt",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: "prompt-text",
            children: "\u767B\u5F55\u540E\u4F53\u9A8C\u66F4\u591A\u529F\u80FD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            className: "login-btn",
            onClick: handleLogin,
            children: "\u5FAE\u4FE1\u767B\u5F55"
          })]
        })
      }), user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "menu-list",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "menu-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "section-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "section-title",
              children: "\u4E2A\u4EBA\u4FE1\u606F"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              className: "edit-btn",
              onClick: function onClick() {
                if (isEditing) {
                  setEditForm({
                    nickName: userInfo.nickName || '',
                    province: userInfo.province || '',
                    city: userInfo.city || '',
                    workYears: userInfo.workYears || 0
                  });
                }
                setIsEditing(!isEditing);
              },
              children: isEditing ? '取消' : '编辑'
            })]
          }), isEditing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "edit-form",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "form-label",
                children: "\u6635\u79F0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Input, {
                className: "form-input",
                value: editForm.nickName,
                placeholder: "\u8BF7\u8F93\u5165\u6635\u79F0",
                onInput: function onInput(e) {
                  return handleEditChange('nickName', e.detail.value);
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "form-label",
                children: "\u6240\u5728\u7701\u4EFD"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Input, {
                className: "form-input",
                value: editForm.province,
                placeholder: "\u8BF7\u8F93\u5165\u7701\u4EFD",
                onInput: function onInput(e) {
                  return handleEditChange('province', e.detail.value);
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "form-label",
                children: "\u6240\u5728\u57CE\u5E02"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Input, {
                className: "form-input",
                value: editForm.city,
                placeholder: "\u8BF7\u8F93\u5165\u57CE\u5E02",
                onInput: function onInput(e) {
                  return handleEditChange('city', e.detail.value);
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "form-label",
                children: "\u5DE5\u4F5C\u5E74\u9650"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Input, {
                className: "form-input",
                type: "number",
                value: String(editForm.workYears),
                placeholder: "\u8BF7\u8F93\u5165\u5DE5\u4F5C\u5E74\u9650",
                onInput: function onInput(e) {
                  return handleEditChange('workYears', Number(e.detail.value));
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              className: "save-btn",
              onClick: handleSaveEdit,
              loading: loading,
              children: "\u4FDD\u5B58\u4FEE\u6539"
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "info-display",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "info-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "info-label",
                children: "\u6240\u5728\u5730"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "info-value",
                children: [userInfo.province, " ", userInfo.city || '未设置']
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "info-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "info-label",
                children: "\u5DE5\u4F5C\u5E74\u9650"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
                className: "info-value",
                children: [userInfo.workYears, " \u5E74"]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "menu-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "menu-item",
            onClick: function onClick() {
              return navigateToWebView('https://help.manus.im');
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "menu-text",
              children: "\u5E2E\u52A9\u4E0E\u53CD\u9988"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "menu-arrow",
              children: ">"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "menu-item",
            onClick: function onClick() {
              return navigateToWebView('https://manus.im/about');
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "menu-text",
              children: "\u5173\u4E8E\u6211\u4EEC"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "menu-arrow",
              children: ">"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          className: "logout-btn",
          onClick: handleLogout,
          children: "\u9000\u51FA\u767B\u5F55"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/components/PrivacyAgreementModal.tsx":
/*!**************************************************!*\
  !*** ./src/components/PrivacyAgreementModal.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PrivacyAgreementModal; }
/* harmony export */ });
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");






function PrivacyAgreementModal(_ref) {
  var visible = _ref.visible,
    onAgree = _ref.onAgree,
    onDisagree = _ref.onDisagree;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState2 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    scrolled = _useState2[0],
    setScrolled = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState4 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    agreed = _useState4[0],
    setAgreed = _useState4[1];
  var handleScroll = function handleScroll(e) {
    var _e$detail = e.detail,
      scrollTop = _e$detail.scrollTop,
      scrollHeight = _e$detail.scrollHeight,
      clientHeight = _e$detail.clientHeight;
    // 当滚动到底部时，允许同意
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setScrolled(true);
    }
  };
  var handleAgree = function handleAgree() {
    if (!scrolled) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '请先阅读完整协议',
        icon: 'none'
      });
      return;
    }
    if (!agreed) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '请勾选同意协议',
        icon: 'none'
      });
      return;
    }
    onAgree();
  };
  if (!visible) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: "privacy-modal-overlay",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "privacy-modal",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "privacy-modal-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
          className: "privacy-modal-title",
          children: "\u7528\u6237\u9690\u79C1\u534F\u8BAE"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
          className: "privacy-modal-subtitle",
          children: "\u8BF7\u9605\u8BFB\u5E76\u540C\u610F\u4EE5\u4E0B\u6761\u6B3E"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.ScrollView, {
        className: "privacy-modal-content",
        scrollY: true,
        onScroll: handleScroll,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "privacy-content-text",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "1. \u9690\u79C1\u4FDD\u62A4\u627F\u8BFA"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u8F6C\u89D2\u9A7F\u7AD9\uFF08\u4EE5\u4E0B\u7B80\u79F0\"\u672C\u5E94\u7528\"\uFF09\u5C0A\u91CD\u5E76\u4FDD\u62A4\u6240\u6709\u7528\u6237\u7684\u9690\u79C1\u3002\u6211\u4EEC\u627F\u8BFA\u6309\u7167\u672C\u9690\u79C1\u534F\u8BAE\u7684\u89C4\u5B9A\u6536\u96C6\u3001\u4F7F\u7528\u548C\u4FDD\u62A4\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "2. \u4FE1\u606F\u6536\u96C6"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u672C\u5E94\u7528\u6536\u96C6\u4EE5\u4E0B\u4FE1\u606F\uFF1A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "privacy-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u5FAE\u4FE1\u8D26\u6237\u4FE1\u606F\uFF08\u6635\u79F0\u3001\u5934\u50CF\u3001OpenID\uFF09"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u4E2A\u4EBA\u8D44\u6599\uFF08\u7701\u4EFD\u3001\u57CE\u5E02\u3001\u5DE5\u4F5C\u5E74\u9650\uFF09"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u4F7F\u7528\u884C\u4E3A\u6570\u636E\uFF08\u6D4F\u89C8\u8BB0\u5F55\u3001\u70B9\u8D5E\u3001\u8BC4\u8BBA\uFF09"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u8BBE\u5907\u4FE1\u606F\uFF08\u8BBE\u5907\u578B\u53F7\u3001\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\uFF09"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "3. \u4FE1\u606F\u4F7F\u7528"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u6211\u4EEC\u6536\u96C6\u7684\u4FE1\u606F\u5C06\u7528\u4E8E\u4EE5\u4E0B\u76EE\u7684\uFF1A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "privacy-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u63D0\u4F9B\u548C\u6539\u8FDB\u5E94\u7528\u670D\u52A1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u4E2A\u6027\u5316\u5185\u5BB9\u63A8\u8350"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u7528\u6237\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u8D26\u6237\u5B89\u5168"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u6570\u636E\u5206\u6790\u548C\u7EDF\u8BA1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u6CD5\u5F8B\u5408\u89C4\u548C\u7EA0\u7EB7\u89E3\u51B3"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "4. \u4FE1\u606F\u4FDD\u62A4"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u672C\u5E94\u7528\u91C7\u53D6\u4EE5\u4E0B\u63AA\u65BD\u4FDD\u62A4\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "privacy-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u4F7F\u7528\u52A0\u5BC6\u6280\u672F\u4F20\u8F93\u654F\u611F\u6570\u636E"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u9650\u5236\u5458\u5DE5\u8BBF\u95EE\u4E2A\u4EBA\u4FE1\u606F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u5B9A\u671F\u5B89\u5168\u5BA1\u8BA1\u548C\u66F4\u65B0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u9075\u5B88\u56FD\u5BB6\u6570\u636E\u4FDD\u62A4\u6CD5\u89C4"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "5. \u4FE1\u606F\u5171\u4EAB"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u9664\u4EE5\u4E0B\u60C5\u51B5\u5916\uFF0C\u672C\u5E94\u7528\u4E0D\u4F1A\u4E0E\u7B2C\u4E09\u65B9\u5171\u4EAB\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "privacy-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u83B7\u5F97\u60A8\u7684\u660E\u786E\u540C\u610F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u6CD5\u5F8B\u8981\u6C42\u6216\u653F\u5E9C\u90E8\u95E8\u8981\u6C42"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u4E0E\u670D\u52A1\u63D0\u4F9B\u5546\u5171\u4EAB\uFF08\u53D7\u4FDD\u5BC6\u534F\u8BAE\u7EA6\u675F\uFF09"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "6. \u7528\u6237\u6743\u5229"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u60A8\u6709\u6743\uFF1A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "privacy-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u8BBF\u95EE\u548C\u67E5\u770B\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u66F4\u6B63\u4E0D\u51C6\u786E\u7684\u4E2A\u4EBA\u4FE1\u606F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u5220\u9664\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u64A4\u56DE\u540C\u610F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u83B7\u53D6\u4E2A\u4EBA\u4FE1\u606F\u526F\u672C"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "7. \u6570\u636E\u4FDD\u7559"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u6211\u4EEC\u4EC5\u5728\u5FC5\u8981\u671F\u95F4\u5185\u4FDD\u7559\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002\u5F53\u4FE1\u606F\u4E0D\u518D\u9700\u8981\u65F6\uFF0C\u6211\u4EEC\u5C06\u5B89\u5168\u5220\u9664\u6216\u533F\u540D\u5904\u7406\u3002"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "8. \u672A\u6210\u5E74\u4EBA\u4FDD\u62A4"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u672C\u5E94\u7528\u4E0D\u5411\u672A\u6EE1 18 \u5C81\u7684\u672A\u6210\u5E74\u4EBA\u6536\u96C6\u4E2A\u4EBA\u4FE1\u606F\u3002\u5982\u53D1\u73B0\u6536\u96C6\u4E86\u672A\u6210\u5E74\u4EBA\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u5C06\u7ACB\u5373\u5220\u9664\u3002"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "9. \u534F\u8BAE\u66F4\u65B0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u672C\u5E94\u7528\u53EF\u80FD\u4F1A\u4E0D\u5B9A\u671F\u66F4\u65B0\u672C\u9690\u79C1\u534F\u8BAE\u3002\u66F4\u65B0\u540E\u7684\u534F\u8BAE\u5C06\u5728\u5E94\u7528\u5185\u53D1\u5E03\uFF0C\u60A8\u7EE7\u7EED\u4F7F\u7528\u5E94\u7528\u5373\u8868\u793A\u540C\u610F\u66F4\u65B0\u540E\u7684\u534F\u8BAE\u3002"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "10. \u8054\u7CFB\u6211\u4EEC"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u5982\u60A8\u5BF9\u672C\u9690\u79C1\u534F\u8BAE\u6709\u4EFB\u4F55\u7591\u95EE\u6216\u5EFA\u8BAE\uFF0C\u8BF7\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8054\u7CFB\u6211\u4EEC\uFF1A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "privacy-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u90AE\u7BB1\uFF1Asupport@manus.im"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u5FAE\u4FE1\u516C\u4F17\u53F7\uFF1A\u8F6C\u89D2\u9A7F\u7AD9"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "11. \u670D\u52A1\u6761\u6B3E"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u4F7F\u7528\u672C\u5E94\u7528\u5373\u8868\u793A\u60A8\u540C\u610F\u9075\u5B88\u4EE5\u4E0B\u670D\u52A1\u6761\u6B3E\uFF1A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "privacy-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u60A8\u627F\u8BFA\u63D0\u4F9B\u771F\u5B9E\u3001\u51C6\u786E\u7684\u4E2A\u4EBA\u4FE1\u606F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u60A8\u4E0D\u5F97\u53D1\u5E03\u8FDD\u6CD5\u3001\u9A9A\u6270\u3001\u8BFD\u8C24\u6216\u5546\u4E1A\u5BA3\u4F20\u5185\u5BB9"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u60A8\u4E0D\u5F97\u8FDB\u884C\u4EFB\u4F55\u5F62\u5F0F\u7684\u7F51\u7EDC\u653B\u51FB\u6216\u6EE5\u7528"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u672C\u5E94\u7528\u4FDD\u7559\u5220\u9664\u8FDD\u89C4\u5185\u5BB9\u548C\u7981\u7528\u8D26\u6237\u7684\u6743\u5229"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "privacy-list-item",
                children: "\u2022 \u672C\u5E94\u7528\u5BF9\u7528\u6237\u56E0\u8FDD\u53CD\u672C\u6761\u6B3E\u9020\u6210\u7684\u635F\u5931\u4E0D\u627F\u62C5\u8D23\u4EFB"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-title",
              children: "12. \u514D\u8D23\u58F0\u660E"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u672C\u5E94\u7528\u6309\"\u73B0\u72B6\"\u63D0\u4F9B\u670D\u52A1\u3002\u6211\u4EEC\u4E0D\u4FDD\u8BC1\u670D\u52A1\u4E0D\u4F1A\u4E2D\u65AD\u6216\u4E0D\u4F1A\u51FA\u73B0\u9519\u8BEF\u3002\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u672C\u5E94\u7528\u53CA\u5176\u6240\u6709\u8005\u3001\u5458\u5DE5\u3001\u4EE3\u7406\u4EBA\u4E0D\u5BF9\u4EFB\u4F55\u95F4\u63A5\u3001\u9644\u5E26\u3001\u7279\u6B8A\u6216\u540E\u679C\u6027\u635F\u5BB3\u8D1F\u8D23\u3002"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-section privacy-section-last",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-section-content",
              children: "\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A2026 \u5E74 1 \u6708 29 \u65E5"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "privacy-modal-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "privacy-checkbox-group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "privacy-checkbox ".concat(agreed ? 'checked' : ''),
            onClick: function onClick() {
              return setAgreed(!agreed);
            },
            children: agreed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "privacy-checkbox-icon",
              children: "\u2713"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "privacy-checkbox-label",
            children: "\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u300A\u7528\u6237\u9690\u79C1\u534F\u8BAE\u300B\u548C\u300A\u670D\u52A1\u6761\u6B3E\u300B"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "privacy-button-group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            className: "privacy-button privacy-button-cancel",
            onClick: onDisagree,
            children: "\u4E0D\u540C\u610F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            className: "privacy-button privacy-button-agree ".concat(scrolled && agreed ? 'enabled' : 'disabled'),
            onClick: handleAgree,
            disabled: !scrolled || !agreed,
            children: "\u540C\u610F\u5E76\u7EE7\u7EED"
          })]
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/constants/privacy.ts":
/*!**********************************!*\
  !*** ./src/constants/privacy.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasAgreedPrivacyPolicy: function() { return /* binding */ hasAgreedPrivacyPolicy; },
/* harmony export */   savePrivacyPolicyAgreement: function() { return /* binding */ savePrivacyPolicyAgreement; }
/* harmony export */ });
/* unused harmony exports PRIVACY_AGREEMENT_KEY, PRIVACY_AGREEMENT_VERSION, PRIVACY_AGREEMENT_TIMESTAMP_KEY, clearPrivacyPolicyAgreement, getPrivacyPolicyAgreementTime */
/**
 * 隐私协议相关常量
 */

var PRIVACY_AGREEMENT_KEY = 'privacy_agreement_agreed';
var PRIVACY_AGREEMENT_VERSION = '1.0.0';
var PRIVACY_AGREEMENT_TIMESTAMP_KEY = 'privacy_agreement_timestamp';

/**
 * 检查用户是否已同意隐私协议
 */
function hasAgreedPrivacyPolicy() {
  try {
    var agreed = localStorage.getItem(PRIVACY_AGREEMENT_KEY);
    return agreed === 'true';
  } catch (_unused) {
    return false;
  }
}

/**
 * 保存用户隐私协议同意状态
 */
function savePrivacyPolicyAgreement() {
  try {
    localStorage.setItem(PRIVACY_AGREEMENT_KEY, 'true');
    localStorage.setItem(PRIVACY_AGREEMENT_TIMESTAMP_KEY, new Date().toISOString());
  } catch (error) {
    console.error('Failed to save privacy policy agreement:', error);
  }
}

/**
 * 清除隐私协议同意状态
 */
function clearPrivacyPolicyAgreement() {
  try {
    localStorage.removeItem(PRIVACY_AGREEMENT_KEY);
    localStorage.removeItem(PRIVACY_AGREEMENT_TIMESTAMP_KEY);
  } catch (error) {
    console.error('Failed to clear privacy policy agreement:', error);
  }
}

/**
 * 获取隐私协议同意时间
 */
function getPrivacyPolicyAgreementTime() {
  try {
    return localStorage.getItem(PRIVACY_AGREEMENT_TIMESTAMP_KEY);
  } catch (_unused2) {
    return null;
  }
}

/***/ }),

/***/ "./src/pages/profile/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/profile/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./src/pages/profile/index.tsx");


var config = {"navigationBarTitleText":"我的"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/profile/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/profile/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map