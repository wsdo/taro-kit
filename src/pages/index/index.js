import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd, list } from '../../actions/counter'

import './index.styl'


// @connect(({ counter }) => ({
//   counter
// }),(dispatch) => ({
//   add() {
//     dispatch(add())
//   },
//   dec() {
//     dispatch(minus())
//   },
//   asyncAdd() {
//     dispatch(asyncAdd())
//   },
//   // list() {
//   //   dispatch(list())
//   // }
// }))
@connect(
  state => ({
    list: state.counter.list,
  }),
  (dispatch) => {
    console.log('dispatch', dispatch);
    return {
      list() {
        dispatch(list())
      }
    }
  },
)
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props) {
    super(props)
    console.log('props', props);
    // this.state = { date: new Date() }
    props.list()
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View className='news'>
          <View className='item'>
            <View className='desc'>
              <View className='title'></View>
              <View className='info'></View>
            </View>
            <View className='rightImage'>

            </View>
          </View>
          <View>
            {
              this.props.list.map((item, index) => {
                return <View className='item' key={index}>
                  <View className='info'>
                    <View className='title'>{item.title}</View>
                    <View className='footer'>
                      <View className='user'>{item.username}</View>
                      <View className='comment'>{item.username}</View>
                    </View>
                  </View>
                  <View className='rightImage'><Image calssName='img' src={item.image_url} /></View>
                </View>
              })
            }
          </View>
        </View>

      </View >
    )
  }
}

export default Index
