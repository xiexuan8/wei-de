import request from '@/utils/request'

export function getHpMainInfo() {
  return request({
    url: '/api/api-produce/produce/getHpMainInfo',
    method: 'get'
  })
}

export function getHpTechParams() {
  return request({
    url: '/api/api-produce/produce/getHpTechParams',
    method: 'get'
  })
}

export function getProdLineInfo() {
  return request({
    url: '/api/api-produce/produce/getProdLineInfo',
    method: 'get'
  })
}

export function getHpDeviceByProdLine(prodLineCode) {
  return request({
    url: '/api/api-produce/produce/getHpDeviceByProdLine',
    method: 'get',
    params: { prodLineCode }
  })
}

export function getHpCurTemp(prodLineCode, machineCode) {
  return request({
    url: '/api/api-produce/produce/getHpCurTemp',
    method: 'get',
    params: { prodLineCode, machineCode }
  })
}

export function getHpCurPress(prodLineCode, machineCode) {
  return request({
    url: '/api/api-produce/produce/getHpCurPress',
    method: 'get',
    params: { prodLineCode, machineCode }
  })
}

export function getHpAdjust() {
  return request({
    url: '/api/api-produce/produce/getHpAdjust',
    method: 'get'
  })
}

export function getHpError() {
  return request({
    url: '/api/api-produce/produce/getHpError',
    method: 'get'
  })
}

export function getHpProdCheck() {
  return request({
    url: '/api/api-produce/produce/getHpProdCheck',
    method: 'get'
  })
}

export function getHtMainInfo() {
  return request({
    url: '/api/api-produce/produce/getHtMainInfo',
    method: 'get'
  })
}

export function getHtTechParams() {
  return request({
    url: '/api/api-produce/produce/getHtTechParams',
    method: 'get'
  })
}

export function getHtError() {
  return request({
    url: '/api/api-produce/produce/getHtError',
    method: 'get'
  })
}

export function getHtAdjust() {
  return request({
    url: '/api/api-produce/produce/getHtAdjust',
    method: 'get'
  })
}

export function getHtProdCheck() {
  return request({
    url: '/api/api-produce/produce/getHtProdCheck',
    method: 'get'
  })
}

export function getHtDeviceByProdLine(prodLineCode) {
  return request({
    url: '/api/api-produce/produce/getHtDeviceByProdLine',
    method: 'get',
    params: { prodLineCode }
  })
}

export function getHtCurTemp(prodLineCode, machineCode) {
  return request({
    url: '/api/api-produce/produce/getHtCurTemp',
    method: 'get',
    params: { prodLineCode, machineCode }
  })
}

export function getEmMainInfo() {
  return request({
    url: '/api/api-produce/produce/getEmMainInfo',
    method: 'get'
  })
}

export function getEmTechParams() {
  return request({
    url: '/api/api-produce/produce/getEmTechParams',
    method: 'get'
  })
}

export function getEmProdCheck() {
  return request({
    url: '/api/api-produce/produce/getEmProdCheck',
    method: 'get'
  })
}

export function getIgMainInfo() {
  return request({
    url: '/api/api-produce/produce/getIgMainInfo',
    method: 'get'
  })
}

export function getIgTechParams() {
  return request({
    url: '/api/api-produce/produce/getIgTechParams',
    method: 'get'
  })
}

export function getIgProdCheck() {
  return request({
    url: '/api/api-produce/produce/getIgProdCheck',
    method: 'get'
  })
}

export function getChMainInfo() {
  return request({
    url: '/api/api-produce/produce/getChMainInfo',
    method: 'get'
  })
}

export function getChTechParams() {
  return request({
    url: '/api/api-produce/produce/getChTechParams',
    method: 'get'
  })
}

export function getChProdCheck() {
  return request({
    url: '/api/api-produce/produce/getChProdCheck',
    method: 'get'
  })
}

export function getPunchMainInfo() {
  return request({
    url: '/api/api-produce/produce/getPunchMainInfo',
    method: 'get'
  })
}

export function getPunchTechParams() {
  return request({
    url: '/api/api-produce/produce/getPunchTechParams',
    method: 'get'
  })
}

export function getPunchProdCheck() {
  return request({
    url: '/api/api-produce/produce/getPunchProdCheck',
    method: 'get'
  })
}

export function getHpTechParamsByProdLine(prodLineCode, machineCode) {
  return request({
    url: '/api/api-produce/produce/getHpTechParamsByProdLine',
    method: 'get',
    params: { prodLineCode, machineCode }
  })
}
