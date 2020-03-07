App({
  globalData: {},
  globalConf: {
    StatusBar: null,
    Custom: null,
    CustomBar: null,
    url: 'https://ncp.xuedaojia.net',
    AppID: 'wx798762e7a42acb20'
  },
  setStatusBar: function() {
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalConf.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalConf.Custom = capsule;
          this.globalConf.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalConf.CustomBar = e.statusBarHeight + 50;
        }
      }
    });
  },
  onLaunch: function() {
    this.setStatusBar();
  }
})
