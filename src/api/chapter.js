import request from '@/utils/request'
const api_name = '/eduservice/edu-chapter'
export default {
  getChapterList(courseId) {
    return request({
      url: `${api_name}?courseId=${courseId}`,
      method: 'get'
    })
  },
  save(Chapter) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: Chapter
    })
  },
  updateById(Chapter) {
    return request({
      url: `${api_name}/${Chapter.id}`,
      method: 'put',
      data: Chapter
    })
  },
  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  }
}
