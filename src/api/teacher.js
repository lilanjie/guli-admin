import request from '@/utils/request'

const api_name = '/eduservice/edu-teacher'

export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  getListTeacher() {
    return request({
      url: `/eduservice/edu-teacher/findAll`,
      method: 'get'
    })
  },
  removeById(teacherId) {
    return request({
      url: `${api_name}/${teacherId}`,
      method: 'delete'
    })
  },
  save(teacher) {
    return request({
      url: api_name,
      method: 'post',
      data: teacher
    })
  },
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },
  updateById(teacher) {
    return request({
      url: `${api_name}/${teacher.id}`,
      method: 'put',
      data: teacher
    })
  }

}
