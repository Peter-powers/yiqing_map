import request from './request.js';
const baseUrl = getApp().globalConf.url;
const globalData = getApp().globalData;

export function apiGetDecodedUserInfo(encryptedUserInfo) {
  return request({
    url: `${baseUrl}/getDecodedUserInfo`,
    method: 'POST',
    data: {
      'encryptedUserInfo': encryptedUserInfo
    }
  })
}

export function apiLogin(loginInfo) {
  return request({
    url: `${baseUrl}/login`,
    method: 'GET',
    data: {
      loginInfo: loginInfo
    }     
  })
}

export function apiPostClient(clientInfo) {
  return request({
    url: `${baseUrl}/client`,
    method: 'POST',
    data: {
      'clientInfo': clientInfo
    }
  })
}

export function apiGetClients() {
  return request({
    url: `${baseUrl}/clients`,
    method: 'GET'
  })
}

export function apiDeleteClient(clientInfo) {
  return request({
    url: `${baseUrl}/deleteClient`,
    method: 'GET',
    data: {
      clientInfo: clientInfo
    }    
  })
}

export function apiCheckPhone(clientInfo) {
  return request({
    url: `${baseUrl}/checkPhone`,
    method: 'POST',
    data: {
      'clientInfo': clientInfo
    }
  })
}

export function apiPostEmployee(employeeInfo) {
  return request({
    url: `${baseUrl}/employee`,
    method: 'POST',
    data: {
      'employeeInfo': employeeInfo
    }
  })
}

export function apiGetEmployees() {
  return request({
    url: `${baseUrl}/employees`,
    method: 'GET'
  })
}