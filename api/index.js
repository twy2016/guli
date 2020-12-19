import request from '@/utils/request'
export default {
  getCourseList() {
    return request({
      url: `/eduservice/index/courseList`,
      method: 'get'
    })
  },
  getTeacherList() {
    return request({
      url: `/eduservice/index/teacherList`,
      method: 'get'
    })
  }
}
