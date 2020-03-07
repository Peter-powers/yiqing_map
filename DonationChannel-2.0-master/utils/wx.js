// import request from './request.js';
// const globalData = getApp().globalData;

// export function wxGetSystemInfo(loginInfo) {
//   return request({
//     url: `${baseUrl}/login`,
//     method: 'GET',
//     data: {
//       loginInfo: loginInfo
//     }     
//   })
// }

//将wx内置的异步api都promise化
const promisify = (api) => {
    return (options, ...params) => {
        return new Promise((resolve, reject) => {
            api(Object.assign({}, options, { success: resolve, fail: reject }), ...params);
        });
    }
};

// function wxGetSetting = promisify(wx.getSetting);

export function wxGetUserInfo() {
  return new Promise((resolve, reject) => {
   wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              console.log('ok');
              console.log(res);
              resolve(res);
            }
          })
        } else {
          console.log('no');
          reject();
        }
      }
    })    
  })
}

export function wxGetSystemInfo() {
  return new Promise((resolve, reject) => {
    wx.getSystemInfo({
      success: e => {
        console.log(e);
        let statusBarData = {};
        statusBarData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          statusBarData.Custom = capsule;
          statusBarData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          statusBarData.CustomBar = e.statusBarHeight + 50;
        }
        resolve(statusBarData);
      }
    });
  })
}

export function wxGetSystemInfoSync() {
  console.log('3');
  return new Promise((resolve, reject) => {
    try {
      const res = wx.getSystemInfoSync();
      console.log(res);

      let statusBarData = {};
      statusBarData.StatusBar = res.statusBarHeight;
      let capsule = wx.getMenuButtonBoundingClientRect();
      if (capsule) {
        statusBarData.Custom = capsule;
        statusBarData.CustomBar = capsule.bottom + capsule.top - res.statusBarHeight;
      } else {
        statusBarData.CustomBar = res.statusBarHeight + 50;
      }
      resolve(statusBarData);
    } catch (e) {
      reject();
    }
  })
}