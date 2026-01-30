"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/opportunity/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/opportunity/index!./src/pages/opportunity/index.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/opportunity/index!./src/pages/opportunity/index.tsx ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Opportunity; }
/* harmony export */ });
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _api_opportunity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/opportunity */ "./src/api/opportunity.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");










function Opportunity() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
    _useState2 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    opportunities = _useState2[0],
    setOpportunities = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),
    _useState4 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];

  // 筛选和排序状态
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('default'),
    _useState6 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    sortType = _useState6[0],
    setSortType = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('all'),
    _useState8 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
    difficultyFilter = _useState8[0],
    setDifficultyFilter = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
    _useState0 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
    searchKeyword = _useState0[0],
    setSearchKeyword = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    loadOpportunities();
  }, []);
  var loadOpportunities = /*#__PURE__*/function () {
    var _ref = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])().m(function _callee() {
      var data, _t;
      return (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setLoading(true);
            _context.n = 1;
            return (0,_api_opportunity__WEBPACK_IMPORTED_MODULE_7__.getOpportunityList)();
          case 1:
            data = _context.v;
            setOpportunities(data);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default().showToast({
              title: _t.message || '加载失败',
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
    return function loadOpportunities() {
      return _ref.apply(this, arguments);
    };
  }();

  // 筛选和排序逻辑
  var filteredAndSortedOpportunities = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    var result = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(opportunities);

    // 1. 难度筛选
    if (difficultyFilter !== 'all') {
      result = result.filter(function (item) {
        return item.difficulty === difficultyFilter;
      });
    }

    // 2. 关键词搜索（标题或描述）
    if (searchKeyword.trim()) {
      var keyword = searchKeyword.toLowerCase();
      result = result.filter(function (item) {
        var _item$title, _item$description, _item$tags;
        return ((_item$title = item.title) === null || _item$title === void 0 ? void 0 : _item$title.toLowerCase().includes(keyword)) || ((_item$description = item.description) === null || _item$description === void 0 ? void 0 : _item$description.toLowerCase().includes(keyword)) || ((_item$tags = item.tags) === null || _item$tags === void 0 ? void 0 : _item$tags.some(function (tag) {
          return tag.toLowerCase().includes(keyword);
        }));
      });
    }

    // 3. 排序
    if (sortType === 'difficulty') {
      var difficultyOrder = {
        easy: 1,
        medium: 2,
        hard: 3
      };
      result.sort(function (a, b) {
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      });
    } else if (sortType === 'income') {
      // 按收入排序（假设收入格式为 "¥1000-3000/月"）
      result.sort(function (a, b) {
        var getIncomeValue = function getIncomeValue(income) {
          var match = income.match(/\d+/);
          return match ? parseInt(match[0]) : 0;
        };
        return getIncomeValue(b.income) - getIncomeValue(a.income);
      });
    }
    return result;
  }, [opportunities, difficultyFilter, searchKeyword, sortType]);
  var navigateToDetail = function navigateToDetail(id) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default().navigateTo({
      url: "/pages/webview/index?url=/opportunity/".concat(id)
    });
  };
  var getDifficultyColor = function getDifficultyColor(difficulty) {
    var colors = {
      easy: '#10b981',
      medium: '#f59e0b',
      hard: '#ef4444'
    };
    return colors[difficulty] || '#6b7280';
  };
  var getDifficultyLabel = function getDifficultyLabel(difficulty) {
    var labels = {
      easy: '简单',
      medium: '中等',
      hard: '困难'
    };
    return labels[difficulty] || difficulty;
  };

  // 处理排序选择
  var handleSortChange = function handleSortChange(e) {
    var sortOptions = ['default', 'income', 'difficulty'];
    setSortType(sortOptions[e.detail.value]);
  };

  // 处理难度筛选
  var handleDifficultyChange = function handleDifficultyChange(e) {
    var difficultyOptions = ['all', 'easy', 'medium', 'hard'];
    setDifficultyFilter(difficultyOptions[e.detail.value]);
  };
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "opportunity-page",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "loading",
        children: "\u52A0\u8F7D\u4E2D..."
      })
    });
  }
  var sortOptions = ['默认排序', '收入从高到低', '难度从低到高'];
  var difficultyOptions = ['全部难度', '简单', '中等', '困难'];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.ScrollView, {
    className: "opportunity-page",
    scrollY: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "title",
        children: "\u526F\u4E1A\u673A\u4F1A"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "subtitle",
        children: "\u53D1\u73B0\u9002\u5408\u4F60\u7684\u7075\u6D3B\u5C31\u4E1A\u673A\u4F1A"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "filter-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "filter-item",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Picker, {
          mode: "selector",
          range: difficultyOptions,
          onChange: handleDifficultyChange,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
            className: "picker",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
              className: "picker-text",
              children: difficultyOptions[['all', 'easy', 'medium', 'hard'].indexOf(difficultyFilter)]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
              className: "picker-arrow",
              children: "\u25BC"
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "filter-item",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Picker, {
          mode: "selector",
          range: sortOptions,
          onChange: handleSortChange,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
            className: "picker",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
              className: "picker-text",
              children: sortOptions[['default', 'income', 'difficulty'].indexOf(sortType)]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
              className: "picker-arrow",
              children: "\u25BC"
            })]
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "result-count",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        children: ["\u5171 ", filteredAndSortedOpportunities.length, " \u4E2A\u673A\u4F1A"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "opportunity-list",
      children: filteredAndSortedOpportunities.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "opportunity-card",
          onClick: function onClick() {
            return navigateToDetail(item.id);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
            className: "card-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
              className: "opportunity-title",
              children: item.title
            }), item.isRecommended && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
              className: "recommended-badge",
              children: "\u63A8\u8350"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
            className: "opportunity-desc",
            children: item.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
            className: "card-meta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
              className: "meta-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                className: "meta-label",
                children: "\u96BE\u5EA6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                className: "meta-value",
                style: {
                  color: getDifficultyColor(item.difficulty)
                },
                children: getDifficultyLabel(item.difficulty)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
              className: "meta-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                className: "meta-label",
                children: "\u6536\u5165"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                className: "meta-value income",
                children: item.income
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
              className: "meta-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                className: "meta-label",
                children: "\u65F6\u95F4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                className: "meta-value",
                children: item.timeCommitment
              })]
            })]
          }), item.tags && item.tags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
            className: "tags",
            children: item.tags.map(function (tag, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                className: "tag",
                children: tag
              }, index);
            })
          })]
        }, item.id);
      })
    }), filteredAndSortedOpportunities.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "empty",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        children: "\u6682\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u673A\u4F1A"
      })
    })]
  });
}

/***/ }),

/***/ "./src/api/opportunity.ts":
/*!********************************!*\
  !*** ./src/api/opportunity.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOpportunityList: function() { return /* binding */ getOpportunityList; }
/* harmony export */ });
/* unused harmony export getRecommendedOpportunities */
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.ts");

/**
 * 获取副业机会列表
 */
function getOpportunityList() {
  return (0,_request__WEBPACK_IMPORTED_MODULE_0__.get)('/api/trpc/opportunity.list');
}

/**
 * 获取推荐机会
 */
function getRecommendedOpportunities() {
  return (0,_request__WEBPACK_IMPORTED_MODULE_0__.get)('/api/trpc/opportunity.recommended');
}

/***/ }),

/***/ "./src/pages/opportunity/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/opportunity/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_opportunity_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/opportunity/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/opportunity/index!./src/pages/opportunity/index.tsx");


var config = {"navigationBarTitleText":"副业机会"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_opportunity_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/opportunity/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_opportunity_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/opportunity/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map