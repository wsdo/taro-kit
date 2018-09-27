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
  (dispatch) => ({
    getList(params) {
      dispatch(list(params))
    }
  })
)
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props) {
    super(props)
    console.log('props', props);
    // this.state = { date: new Date() }
    // let params = {
    //   page: 2, per_page: 2
    // }
    this.state = {
      page: 1, per_page: 10
    }
    if (Object.keys(props).length === 0) return
    props.getList(this.state)
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillMount() {
    console.log('thisprops', this.props);
    this.props.getList(this.state)
  }
  componentWillUnmount() {

  }

  componentDidShow() { }

  componentDidHide() { }

  onShareAppMessage() {
    return {
      title: '蜂窝煤',
      path: '/pages/index/index',
      imageUrl: '../../common/image/share.png'
    }
  }
  onReachBottom() {
    console.log('触发到底部了')
    this.setState({
      page: this.state.page + 1
    })
    const { page, per_page } = this.state
    let params = {
      page: this.state.page + 1, per_page: per_page
    }
    console.log(this.props, 'onReachBottom')
    this.props.getList(params)
  }
  render() {
    return (
      <View className='index'>
        <View className='data'>数据列表</View>
        <View className='news'>
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
      </View >
    )
  }
}

export default Index
