const api = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/user/info',
  GetMyRelatedListPagination: 'http://10.194.30.82:8888/api/Navigation/GetMyRelatedList',
  LoadApprovalBasicInfo: 'http://10.194.30.82:8888/api/TradeNew/LoadApprovalBasicInfo',
  LoadFlowApproveOpinions: 'http://10.194.30.82:8888/api/TradeNew/LoadFlow_ApproveOpinions',
  LoadBApp_T11: 'http://10.194.30.82:8888/api/TradeNew/LoadBApp_T11',
  GetFormViewC_RPT: 'http://10.194.30.82:8888/api/TradeNew/GetFormViewC_RPT',
  LoadPublic_TA1_For_TA1: 'http://10.194.30.82:8888/api/TradeNew/LoadPublic_TA1_For_TA1',
  LoadPublic_TA11: 'http://10.194.30.82:8888/api/TradeNew/LoadPublic_TA11',
  LoadBApp_T113: 'http://10.194.30.82:8888/api/TradeNew/LoadBApp_T113',
  LoadPublic_T112: 'http://10.194.30.82:8888/api/TradeNew/LoadPublic_T112',
  LoadPublic_T1121: 'http://10.194.30.82:8888/api/TradeNew/LoadPublic_T1121',
  LoadPublic_T2121: 'http://10.194.30.82:8888/api/TradeNew/LoadPublic_T2121'
}
export default api
