import Taro from '@tarojs/taro'
import { HTTP_STATUS, COMMON_STATUS, RESULT_STATUS } from '../const/status.js'
// import config from '../config/index.js'
import { logError } from '../utils'

const baseURL = "http://api.shudong.wang/v1/"
// Taro.request({
//   url: baseURL + '',
//   data: {
//     foo: 'foo',
//     bar: 10
//   },
//   header: {
//     'content-type': 'application/json'
//   }
// })
//   .then(res => console.log(res.data))
const token = ''
export default {
  baseOptions(params, method = 'GET') {
    let { url, data } = params
    // let token = getApp().globalData.token
    // if (!token) login()
    let contentType = 'application/x-www-form-urlencoded'
    contentType = params.contentType || contentType
    const option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: baseURL + url,
      data: data,
      method: method,
      header: { 'content-type': contentType, 'token': token },
      success(res) {
        return res
      },
      error(e) {
        logError('api', '请求接口出现问题', e)
      }
    }
    return Taro.request(option)
  },
  get(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option)
  },
  post: function (url, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  }
}
