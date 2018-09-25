import { bindActionCreators } from 'redux'
import Taro from '@tarojs/taro'
import {
  ADD,
  LIST,
  MINUS
} from '../constants/counter'
import store from '../store'
import { createApiAction } from './index'
import api from '../service/api'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
// 异步的action
// export function list() {
//   return dispatch => {
//     Taro.request({
//       url: 'http://api.shudong.wang/v1/article/list',
//       data: {
//         foo: 'foo',
//         bar: 10
//       },
//       header: {
//         'content-type': 'application/json'
//       }
//     })
//     // .then(res => console.log(res.data))
//   }
// }
// function articleList(data) {
//   return { type: LIST, payload: data }
// }

// export function list() {
//   console.log('list')
//   return (dispatch) => {
//     // service.get('/v1/article/list')
//     //   .then((res) => {
//     //     dispatch(articleList(res.data.article))
//     //   })

//     Taro.request({
//       url: 'http://api.shudong.wang/v1/article/list',
//       data: {
//         foo: 'foo',
//         bar: 10
//       },
//       header: {
//         'content-type': 'application/json'
//       }
//     }).then((res) => {
//       dispatch(articleList(res.data.article))
//     })
//   }
// }


// export const list = createApiAction(LIST, params => Taro.request({
//   url: 'http://api.shudong.wang/v1/article/list',
//   data: params,
//   header: {
//     'content-type': 'application/json'
//   }
// }))
// export const list = createApiAction(LIST, params => api.get('news/list', params))
export const list = createApiAction(LIST, params => {
  console.log('list',params);
  return api.get('NervJS/taro/issues', params)
})

export default bindActionCreators({
  list,
  add,
  minus,
  asyncAdd
}, store.dispatch)
