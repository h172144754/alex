import request from './network.js'

export function getMultiData() {
  return request({
    url: 'api/wh/home/multidata'
  })
} 

export function getProduct(type, page) {
  return request({
    url: 'api/wh/home/data',
    data: {
      type,
      page
    }
  })
}