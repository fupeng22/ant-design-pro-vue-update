import api from './../index'
import { axios } from '@/utils/request'

export function LoadFlowApproveOpinions (parameter) {
    return axios({
      url: api.LoadFlowApproveOpinions,
      method: 'post',
      data: parameter
    })
}
