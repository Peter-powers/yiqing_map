import request from '../../utils/request.js';
import { apiGetClients, apiGetEmployees } from '../../utils/api.js';
const app = getApp();
Page({
  data: {},
  enterAllOrders() {
    wx.navigateTo({
      url: '../allOrders/allOrders'
    })
  },
  enterMemberCardInfo() {
    wx.navigateTo({
      url: '../memberCardInfo/memberCardInfo'
    })
  }   
})