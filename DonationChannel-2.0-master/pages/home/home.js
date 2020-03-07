// import { apiGetEmployees, apiGetClients } from '../../utils/api.js';
const mockData = require('../../utils/mockData.js').default;
const personnalData = require('../../utils/personnalData.js').default;
const QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
import { hospital2marker, personal2marker } from 'utils.js';

let mapSDK;
const app = getApp();
Page({
  data: {
    markers: [],    
    mapLevelIsLeft: true,
    hasNextPage: true,
    hasPreviousPage: false ,
    pageCount: 3,
    pageNo: 1,
    totalCount: 113,
    initialLocation: {
      longitude: mockData.initialLocation.longitude,
      latitude: mockData.initialLocation.latitude
    },
    currentHospital: null,
    currentPersonal: null,
    //记得对象转数组
    totalDemands: {
      '12导心电图机': 1,
      '75%酒精': 98050,
      '84消毒液': 3250,
      'N95口罩': 4078230,
      '一次性医用乳胶手套': 4784820,
      '一次性医用外科口罩': 4906530,
      '一次性医用帽': 74000,
      '一次性医用手套': 98000,
      '一次性医用橡胶手套': 41000,
      '一次性医用防护服': 11254180,
      '一次性手术衣': 40000,
      '医用帽': 2820720,
      '医用紫外线消毒车': 20,
      '医用防护服': 208100,
      '心电监护仪': 10,
      '快速手消毒液': 19100,
      '快速检测试剂盒': 300000,
      '手持测温仪': 10,
      '手术衣': 1608150,
      '无创呼吸机': 10,
      '有创呼吸机': 10,
      '正压隔离衣': 102500,
      '消毒凝胶': 500,
      '消毒药品': 20,
      '移动DR': 1,
      '移动彩超': 1,
      '空气消毒仪': 10,
      '过氧化氢': 50,
      '防护眼镜': 454660,
      '防护设备': 60,
      '防护面罩': 44800,
      '防水围裙': 100,
      '防污染鞋套': 105000,
      '除颤仪': 1
    },
    hospitals: mockData.hospitals,
    personalDatas: personnalData
  },
  //地图缩放/平移时
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(this.data.mapLevelIsLeft);
    if(this.data.mapLevelIsLeft) {
      console.log('enter hos');
      this.setData({
        currentHospital: this.data.hospitals.find((hospital) => e.detail.markerId == hospital.id)
      })
    } else {
      console.log('enter pers');
      this.setData({
        currentPersonal: this.data.personalDatas.find((personal) => e.detail.markerId == personal.id)
      })      
    }
  },
  changeMapContent(){
    this.setData({
      markers: !this.data.mapLevelIsLeft ? hospital2marker(mockData.hospitals) : personal2marker(personnalData),
      mapLevelIsLeft: !this.data.mapLevelIsLeft
    })
  },
  onLoad() {
    // 实例化API核心类
    mapSDK = new QQMapWX({
      key: 'LTSBZ-2Y7CP-VWLDA-VWFX5-DZ4TK-35FEW'
    });
  },
  //应当为获取数据后再执行这里
  onShow: function() {
    
    //异步获取hospitals和personals,然后
    this.setData({
      markers: hospital2marker(mockData.hospitals),
      currentHospital: mockData.hospitals[0],
      currentPersonal: personnalData[0],
      hospitals: mockData.hospitals,
      personalDatas: personnalData
    })
  },
  genPoster: function() {
    console.log('此时生成可本地保存的海报');
  }
})