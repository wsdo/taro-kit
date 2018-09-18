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
    // props.list()
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
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <Button className='dec_btn' onClick={this.props.list}>list</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        <View>
          {
            this.props.list.map((item, index) => {
              return <View key={index}>{item.title}</View>
            })
          }
        </View>
      </View >
    )
  }
}

export default Index
