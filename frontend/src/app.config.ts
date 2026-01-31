export default {
  pages: [
    'pages/index/index',
    'pages/guide/index',
    'pages/ai/index',
    'pages/layoff/index',
    'pages/interview/index',
    'pages/opportunity/index',
    'pages/hole/index',
    'pages/profile/index',
    'pages/webview/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '转角驿站',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#8b5cf6',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/home.png',
        selectedIconPath: 'assets/images/home-active.png'
      },
      {
        pagePath: 'pages/opportunity/index',
        text: '机会',
        iconPath: 'assets/images/opportunity.png',
        selectedIconPath: 'assets/images/opportunity-active.png'
      },
      {
        pagePath: 'pages/hole/index',
        text: '树洞',
        iconPath: 'assets/images/hole.png',
        selectedIconPath: 'assets/images/hole-active.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: 'assets/images/profile.png',
        selectedIconPath: 'assets/images/profile-active.png'
      }
    ]
  }
};
