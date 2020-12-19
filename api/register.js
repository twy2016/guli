import request from '@/utils/request'

export default {
  sendCodeToMobile(mobile) {
    return request({
      url: `/ucenter/member/send/${mobile}`,
      method: 'get'
    })
  },
  submitRegister(formItem) {
    return request({
      url: `/ucenter/member/register`,
      method: 'post',
      data: formItem
    })
  }
}
