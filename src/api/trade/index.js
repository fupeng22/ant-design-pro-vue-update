import api from './../index'
import { axios } from '@/utils/request'

export function GetMyRelatedListPagination (parameter) {
  return axios({
    url: api.GetMyRelatedListPagination + '?' + parameter,
    method: 'post',
    data: null
  })
}
export function LoadApprovalBasicInfo (parameter) {
    return axios({
      url: api.LoadApprovalBasicInfo,
      method: 'post',
      data: parameter
    })
}
