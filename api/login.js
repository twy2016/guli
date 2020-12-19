import request from '@/utils/request'
import cookie from 'js-cookie'

export default {
  submitLogin(userInfo) {
    return request({
      url: `/ucenter/member/login`,
      method: 'post',
      data: userInfo
    })
  },
  getLoginInfo() {
    return request({
      url: `/ucenter/auth/getLoginInfo`,
      method: 'get',
      headers: {'token': cookie.get('guli_token')}
    })
  }
}
