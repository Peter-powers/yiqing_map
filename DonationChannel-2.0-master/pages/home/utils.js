//医院详情字段->医院地图标记字段
export function hospital2marker(hospitals) {
  let markers = [];
  hospitals.map((item) => {
    let marker = {
      iconPath: "../../images/map/location-blue.png",
      width: 30,
      height: 30,
      id: parseInt(item.id),
      longitude: parseFloat(item.location.lon).toFixed(5)-0,
      latitude: parseFloat(item.location.lat).toFixed(5)-0    
    }
    markers.push(marker);
  })
  return markers;
}

//个人求助信息 -> 地图标记
export function personal2marker(personals) {
  let markers = [];
  personals.map((item) => {
    let marker = {
      iconPath: "../../images/map/sos_high.png",
      width: 30,
      height: 30,
      id: parseInt(item.id),
      longitude: parseFloat(item.latitude).toFixed(5)-0,
      latitude: parseFloat(item.longitude).toFixed(5)-0      
    }
    markers.push(marker);
  })
  return markers;
}
