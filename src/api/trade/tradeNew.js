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

export function LoadPublicTA1ForTA1 (parameter) {
  return axios({
    url: api.LoadPublic_TA1_For_TA1,
    method: 'post',
    data: parameter
  })
}

export function LoadPublicTA11 (parameter) {
  return axios({
    url: api.LoadPublic_TA11,
    method: 'post',
    data: parameter
  })
}

export function LoadBAppT113 (parameter) {
  return axios({
    url: api.LoadBApp_T113,
    method: 'post',
    data: parameter
  })
}

export function LoadPublicT112 (parameter) {
  return axios({
    url: api.LoadPublic_T112,
    method: 'post',
    data: parameter
  })
}

export function LoadPublicT1121 (parameter) {
  return axios({
    url: api.LoadPublic_T1121,
    method: 'post',
    data: parameter
  })
}

export function LoadPublicT2121 (parameter) {
  return axios({
    url: api.LoadPublic_T2121,
    method: 'post',
    data: parameter
  })
}

export function LoadBAppT21GC (parameter) {
  return axios({
    url: api.LoadBApp_T21_GC,
    method: 'post',
    data: parameter
  })
}

export function LoadBAppA091BAppT21 (parameter) {
  return axios({
    url: api.LoadBApp_A091_BApp_T21,
    method: 'post',
    data: parameter
  })
}

export function LoadAttach (parameter) {
  return axios({
    url: api.LoadAttach,
    method: 'post',
    data: parameter
  })
}

export function LoadAttachDetail (parameter) {
  return axios({
    url: api.LoadAttachDetail,
    method: 'post',
    data: parameter
  })
}

export function ShowPublicT112GetT112 (parameter) {
  return axios({
    url: api.ShowPublicT112_GetT112,
    method: 'post',
    data: parameter
  })
}

export function LoadPublicTA9 (parameter) {
  return axios({
    url: api.LoadPublic_TA9,
    method: 'post',
    data: parameter
  })
}

export function LoadPublicTA91 (parameter) {
  return axios({
    url: api.LoadPublic_TA91,
    method: 'post',
    data: parameter
  })
}
