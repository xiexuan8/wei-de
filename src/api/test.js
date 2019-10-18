import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/api-produce/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/api-produce/user/getInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/api-produce/user/logout',
    method: 'get'
  })
}

export function getMaterial() {
  return request({
    url: '/api/api-produce/material/getMaterial',
    method: 'get'
  })
}

