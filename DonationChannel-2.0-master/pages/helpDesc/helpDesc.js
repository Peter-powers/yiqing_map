const app = getApp();
Page({
  data: {},
  _saveHelpInfo(e) {
    this.setData({
      value: e.detail.value
    })
  },
  saveHelpInfo() {
    console.log(this.data.value);
    let pages = getCurrentPages();
    let prePage = pages[pages.length - 2];
    prePage.setData({
      desc: this.data.value
    })
    wx.redirectTo({
      url: "../../pages/publishDemand/publishDemand"
    })
  }
})

