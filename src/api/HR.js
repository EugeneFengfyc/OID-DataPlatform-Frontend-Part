import request from '@/utils/request'

export function getProjectName() {
  return request({
    url: '/HR/projectName',
    method: 'get'
  })
}

export function listHR(params) {
  return request({
    url: '/HR/list',
    method: 'get',
    params
  })
}
