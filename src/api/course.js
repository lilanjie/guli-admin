import request from '@/utils/request'
const api_name = '/eduservice/edu-course'
export default {
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: courseInfo
    })
  },
  getCourseInfo(courseId) {
    return request({
      url: `${api_name}/${courseId}`,
      method: 'get'
    })
  },
  updateCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/${courseInfo.id}`,
      method: 'put',
      data: courseInfo
    })
  }

}
