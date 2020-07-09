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
  GetMyRelatedListPagination: 'http://10.194.30.82:8888/api/Navigation/GetMyRelatedListPagination',
  LoadApprovalBasicInfo: 'http://10.194.30.82:8888/api/TradeNew/LoadApprovalBasicInfo',
  LoadFlowApproveOpinions: 'http://10.194.30.82:8888/api/TradeNew/LoadFlow_ApproveOpinions'
}
export default api
