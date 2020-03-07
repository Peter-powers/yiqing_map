/*
 * @Func: 使用Promise封装wx.request
 * @Input: Object
 * 
 */
const app = getApp();
const request = options => {
  return new Promise((resolve, reject) => {
    options.data = Object.assign({}, {"globalData": app.globalData}, options.data);
    wx.request({
      header: { 'Content-Type': 'application/json' },
      ...options,
      success: function(res) {
        if(res.data.errMsg === 'ok') {
          resolve(res.data)
        } if(res.data.errMsg === 'noPermission') {
          wx.showToast({
            title: '您没有该权限!'
          })
        }
        else {
          reject(res.data)
        }
      },
      fail: function(res) {
        reject(res.data)
      }
    })
  })
}

export default request;
