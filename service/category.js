import request from './network.js'

export function getCategory() {
  return request({
    url: 'api/wh/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: 'api/wh/subcategory',
    data: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: 'api/wh/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}