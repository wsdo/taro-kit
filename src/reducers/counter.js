import { ADD, MINUS, LIST } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  list:[]
}

export default function counter (state = INITIAL_STATE, action) {
  console.log('action', action)
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
    case LIST:
      let data = state.list.concat(action.payload.data)
      // Object.assign(state.list, action.payload.data.news)
       return {
         ...state,
        //  list: action.payload.data.news
         list: data
       }
     default:
       return state
  }
}
