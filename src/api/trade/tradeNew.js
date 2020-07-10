import api from './../index'
import { axios } from '@/utils/request'

export function LoadFlowApproveOpinions (parameter) {
    return axios({
      url: api.LoadFlowApproveOpinions,
      method: 'post',
      data: parameter
    })
}

export function LoadBAppT11 (parameter) {
  return axios({
    url: api.LoadBApp_T11,
    method: 'post',
    data: parameter
  })
}

export function LoadApprovalBasicInfo (parameter) {
  return axios({
    url: api.LoadApprovalBasicInfo,
    method: 'post',
    data: parameter
  })
}

export function GetFormViewCRPT (parameter) {
  return axios({
    url: api.GetFormViewC_RPT,
    method: 'post',
    data: parameter
  })
}
