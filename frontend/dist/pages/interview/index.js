"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/interview/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/interview/index!./src/pages/interview/index.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/interview/index!./src/pages/interview/index.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Interview; }
/* harmony export */ });
/* harmony import */ var E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");






var interviewSessions = [{
  id: 1,
  title: '自我介绍',
  description: '学习如何在面试中进行有效的自我介绍',
  icon: '👤',
  difficulty: 'easy',
  duration: 5,
  questionCount: 3
}, {
  id: 2,
  title: '职业发展规划',
  description: '讨论你的职业目标和发展方向',
  icon: '🎯',
  difficulty: 'medium',
  duration: 10,
  questionCount: 5
}, {
  id: 3,
  title: '技能展示',
  description: '展示你的专业技能和工作经验',
  icon: '💼',
  difficulty: 'medium',
  duration: 15,
  questionCount: 6
}, {
  id: 4,
  title: '压力面试',
  description: '应对高难度的压力面试问题',
  icon: '⚡',
  difficulty: 'hard',
  duration: 20,
  questionCount: 8
}, {
  id: 5,
  title: '行为面试',
  description: '回答基于行为的面试问题（STAR 法则）',
  icon: '🌟',
  difficulty: 'medium',
  duration: 15,
  questionCount: 7
}, {
  id: 6,
  title: '技术面试',
  description: '准备技术相关的面试问题',
  icon: '💻',
  difficulty: 'hard',
  duration: 25,
  questionCount: 10
}];
var difficultyColors = {
  easy: '#10b981',
  medium: '#f59e0b',
  hard: '#ef4444'
};
var difficultyLabels = {
  easy: '简单',
  medium: '中等',
  hard: '困难'
};
function Interview() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('all'),
    _useState2 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    selectedDifficulty = _useState2[0],
    setSelectedDifficulty = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState4 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    currentSession = _useState4[0],
    setCurrentSession = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
    _useState6 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    currentQuestion = _useState6[0],
    setCurrentQuestion = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState8 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
    sessionQuestions = _useState8[0],
    setSessionQuestions = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState0 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
    recording = _useState0[0],
    setRecording = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
    _useState10 = (0,E_Manus_Turning_Point_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState1, 2),
    recordingTime = _useState10[0],
    setRecordingTime = _useState10[1];
  var filteredSessions = selectedDifficulty === 'all' ? interviewSessions : interviewSessions.filter(function (session) {
    return session.difficulty === selectedDifficulty;
  });
  var handleStartSession = function handleStartSession(session) {
    // 模拟生成问题
    var questions = generateQuestions(session.id, session.questionCount);
    setSessionQuestions(questions);
    setCurrentSession(session);
    setCurrentQuestion(0);
    setRecording(false);
    setRecordingTime(0);
  };
  var generateQuestions = function generateQuestions(sessionId, count) {
    var _questionBank$session;
    var questionBank = {
      1: [{
        question: '请用 2-3 分钟介绍一下你自己',
        tips: ['包括你的基本信息', '突出你的核心竞争力', '说明你为什么适合这个职位']
      }, {
        question: '你的工作经历中最有成就感的项目是什么？',
        tips: ['使用 STAR 法则', '强调你的贡献和成果', '说明学到的经验']
      }, {
        question: '你为什么离开上一份工作？',
        tips: ['保持积极态度', '避免批评前公司', '说明你的成长和新的目标']
      }],
      2: [{
        question: '你的职业目标是什么？',
        tips: ['明确具体的目标', '说明如何实现', '与公司的发展方向相关']
      }, {
        question: '你认为自己在 5 年后会是什么样子？',
        tips: ['展示你的雄心', '说明具体的发展路径', '与职位相关']
      }, {
        question: '你如何看待职业发展中的挑战？',
        tips: ['展示学习态度', '说明应对方法', '强调持续成长']
      }, {
        question: '你想在我们公司学到什么？',
        tips: ['表现出对公司的了解', '说明具体的学习目标', '展示你的热情']
      }, {
        question: '你如何平衡工作和生活？',
        tips: ['展示时间管理能力', '说明你的优先级', '强调工作效率']
      }],
      3: [{
        question: '请介绍一个你最引以为豪的项目',
        tips: ['详细描述项目背景', '说明你的具体角色', '强调成果和影响']
      }, {
        question: '你如何处理工作中的复杂问题？',
        tips: ['说明你的问题解决方法', '举具体例子', '强调逻辑思维']
      }, {
        question: '你的技能中哪些最适合这个职位？',
        tips: ['列举相关技能', '举例说明应用', '与职位要求匹配']
      }, {
        question: '你如何学习新技能？',
        tips: ['说明学习方法', '举例说明成果', '强调持续学习']
      }, {
        question: '你在团队中的角色是什么？',
        tips: ['说明你的贡献', '强调协作能力', '举具体例子']
      }, {
        question: '你遇到过的最大挑战是什么？',
        tips: ['说明挑战的背景', '说明你如何应对', '强调学到的经验']
      }],
      4: [{
        question: '为什么我们应该雇用你而不是其他候选人？',
        tips: ['突出你的独特优势', '说明你的价值', '避免自大']
      }, {
        question: '你如何应对失败？',
        tips: ['举具体例子', '说明学到的经验', '强调改进和成长']
      }, {
        question: '你如何处理与同事的冲突？',
        tips: ['说明你的沟通方式', '强调团队合作', '举具体例子']
      }, {
        question: '你的弱点是什么？',
        tips: ['诚实但积极', '说明改进方法', '避免关键职位要求']
      }, {
        question: '你如何在压力下工作？',
        tips: ['说明你的应对方法', '举例说明成果', '强调稳定性']
      }, {
        question: '你对我们公司的了解有多少？',
        tips: ['说明你的研究', '提出相关问题', '展示真诚兴趣']
      }, {
        question: '你期望的薪资是多少？',
        tips: ['做好市场调研', '根据经验合理定价', '保持灵活']
      }, {
        question: '你有什么问题要问我们？',
        tips: ['准备好问题', '展示你的兴趣', '问关于职位和公司的问题']
      }],
      5: [{
        question: '请描述一个你解决复杂问题的经历',
        tips: ['使用 STAR 法则', '说明情境、任务、行动、结果', '强调你的思考过程']
      }, {
        question: '你如何在团队中推动创新？',
        tips: ['举具体例子', '说明你的贡献', '强调团队合作']
      }, {
        question: '请讲述一个你从失败中学到的经历',
        tips: ['诚实地说明失败', '强调学到的经验', '说明改进措施']
      }, {
        question: '你如何处理时间压力和多任务工作？',
        tips: ['说明你的优先级管理', '举具体例子', '强调效率']
      }, {
        question: '请描述一个你展现领导力的情况',
        tips: ['说明你的影响力', '举具体例子', '强调团队成果']
      }, {
        question: '你如何与不同风格的人合作？',
        tips: ['说明你的适应能力', '举具体例子', '强调沟通技巧']
      }, {
        question: '请讲述一个你改进流程或系统的经历',
        tips: ['说明原始问题', '说明你的改进方案', '强调成果']
      }],
      6: [{
        question: '请解释你最熟悉的技术或框架',
        tips: ['说明基本原理', '举实际应用例子', '说明优缺点']
      }, {
        question: '你如何解决一个复杂的技术问题？',
        tips: ['说明你的调试方法', '举具体例子', '强调问题解决能力']
      }, {
        question: '请设计一个系统来解决这个问题',
        tips: ['说明你的设计思路', '讨论权衡方案', '考虑可扩展性']
      }, {
        question: '你如何保证代码质量？',
        tips: ['说明你的最佳实践', '讨论测试策略', '强调代码审查']
      }, {
        question: '请讲述一个你优化性能的经历',
        tips: ['说明原始问题', '说明你的优化方案', '强调性能提升']
      }, {
        question: '你如何学习新的技术？',
        tips: ['说明你的学习方法', '举具体例子', '强调实践能力']
      }, {
        question: '你在开源项目中的贡献是什么？',
        tips: ['说明你的参与项目', '说明你的贡献', '强调学习收获']
      }, {
        question: '你如何处理技术债务？',
        tips: ['说明你的认识', '说明处理方法', '强调平衡']
      }, {
        question: '请讲述一个你解决并发问题的经历',
        tips: ['说明问题的复杂性', '说明你的解决方案', '强调深度理解']
      }, {
        question: '你对系统设计的理解是什么？',
        tips: ['说明关键概念', '举实际例子', '讨论权衡']
      }]
    };
    return ((_questionBank$session = questionBank[sessionId]) === null || _questionBank$session === void 0 ? void 0 : _questionBank$session.slice(0, count)) || [];
  };
  var handleStartRecording = function handleStartRecording() {
    setRecording(true);
    setRecordingTime(0);

    // 模拟计时
    var timer = setInterval(function () {
      setRecordingTime(function (prev) {
        return prev + 1;
      });
    }, 1000);
    setTimeout(function () {
      clearInterval(timer);
      setRecording(false);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '已保存你的回答',
        icon: 'success'
      });
    }, 30000); // 30 秒后自动停止
  };
  var handleStopRecording = function handleStopRecording() {
    setRecording(false);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '已保存你的回答',
      icon: 'success'
    });
  };
  var handleNextQuestion = function handleNextQuestion() {
    if (currentQuestion < sessionQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setRecording(false);
      setRecordingTime(0);
    } else {
      handleFinishSession();
    }
  };
  var handleFinishSession = function handleFinishSession() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '完成面试',
      content: '恭喜！你已完成本次模拟面试。系统将生成你的表现评估报告。',
      confirmText: '查看报告',
      cancelText: '返回',
      success: function success(res) {
        if (res.confirm) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
            url: "/pages/webview/index?url=/interview/".concat(currentSession === null || currentSession === void 0 ? void 0 : currentSession.id, "/report")
          });
        } else {
          setCurrentSession(null);
        }
      }
    });
  };
  if (currentSession && sessionQuestions.length > 0) {
    var question = sessionQuestions[currentQuestion];
    var progress = (currentQuestion + 1) / sessionQuestions.length * 100;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "interview-session",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "progress-bar",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "progress-fill",
          style: {
            width: "".concat(progress, "%")
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "session-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "back-button",
          onClick: function onClick() {
            return setCurrentSession(null);
          },
          children: "\u25C0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
          className: "session-title",
          children: currentSession.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
          className: "question-counter",
          children: [currentQuestion + 1, "/", sessionQuestions.length]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.ScrollView, {
        className: "question-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "question-box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "question-number",
            children: ["\u95EE\u9898 ", currentQuestion + 1]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "question-text",
            children: question.question
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "tips-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "tips-title",
              children: "\uD83D\uDCA1 \u56DE\u7B54\u63D0\u793A"
            }), question.tips.map(function (tip, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
                className: "tip-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                  className: "tip-text",
                  children: ["\u2022 ", tip]
                })
              }, index);
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "recording-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "recording-title",
            children: "\u8BF7\u5F00\u59CB\u4F60\u7684\u56DE\u7B54"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "recording-subtitle",
            children: "\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u5F00\u59CB\u5F55\u97F3\uFF08\u6700\u957F 30 \u79D2\uFF09"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "recording-display",
            children: recording ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
                className: "recording-indicator",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
                  className: "pulse"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                  children: "\u5F55\u97F3\u4E2D..."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "recording-time",
                children: [Math.floor(recordingTime / 60), ":", String(recordingTime % 60).padStart(2, '0')]
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "recording-prompt",
              children: "\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u5F00\u59CB"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "recording-buttons",
            children: !recording ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              className: "record-button",
              onClick: handleStartRecording,
              children: "\uD83C\uDFA4 \u5F00\u59CB\u5F55\u97F3"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              className: "stop-button",
              onClick: handleStopRecording,
              children: "\u23F9\uFE0F \u505C\u6B62\u5F55\u97F3"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "session-footer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "next-button",
          onClick: handleNextQuestion,
          disabled: recording,
          children: currentQuestion === sessionQuestions.length - 1 ? '完成面试' : '下一题'
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: "interview-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "interview-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: "interview-title",
        children: "\u6A21\u62DF\u9762\u8BD5"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: "interview-subtitle",
        children: "\u901A\u8FC7\u5B9E\u6218\u7EC3\u4E60\u63D0\u5347\u4F60\u7684\u9762\u8BD5\u6280\u80FD"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.ScrollView, {
      className: "difficulty-filter",
      scrollX: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "filter-item",
        onClick: function onClick() {
          return setSelectedDifficulty('all');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
          className: selectedDifficulty === 'all' ? 'active' : '',
          children: "\u5168\u90E8"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "filter-item",
        onClick: function onClick() {
          return setSelectedDifficulty('easy');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
          className: selectedDifficulty === 'easy' ? 'active' : '',
          children: "\u7B80\u5355"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "filter-item",
        onClick: function onClick() {
          return setSelectedDifficulty('medium');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
          className: selectedDifficulty === 'medium' ? 'active' : '',
          children: "\u4E2D\u7B49"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "filter-item",
        onClick: function onClick() {
          return setSelectedDifficulty('hard');
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
          className: selectedDifficulty === 'hard' ? 'active' : '',
          children: "\u56F0\u96BE"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.ScrollView, {
      className: "session-list",
      scrollY: true,
      children: filteredSessions.map(function (session) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "session-card",
          onClick: function onClick() {
            return handleStartSession(session);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "card-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "card-icon",
              children: session.icon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "card-info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "card-title",
                children: session.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "card-description",
                children: session.description
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "card-meta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "meta-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "meta-label",
                children: "\u96BE\u5EA6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "meta-value difficulty",
                style: {
                  color: difficultyColors[session.difficulty]
                },
                children: difficultyLabels[session.difficulty]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "meta-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "meta-label",
                children: "\u65F6\u957F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "meta-value",
                children: [session.duration, " \u5206\u949F"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "meta-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "meta-label",
                children: "\u9898\u76EE"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                className: "meta-value",
                children: [session.questionCount, " \u9898"]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            className: "card-action",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
              className: "action-text",
              children: "\u5F00\u59CB\u7EC3\u4E60 \u2192"
            })
          })]
        }, session.id);
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/interview/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/interview/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_interview_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/interview/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/interview/index!./src/pages/interview/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_interview_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/interview/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_interview_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/pages/interview/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map