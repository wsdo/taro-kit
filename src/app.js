import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.styl'

const store = configStore

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/me/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      borderStyle: "black",
      selectedColor: "#000000",
      backgroundColor: "#ffffff",
      color: "#c7c7c7",
      list: [
        {
          pagePath: "pages/index/index",
          selectedIconPath: "./common/image/tab/discover@highlight.png",
          iconPath: "./common/image/tab/discover.png",
          text: "发现"
        },
        {
          pagePath: "pages/me/index",
          selectedIconPath: "./common/image/tab/my@highlight.png",
          iconPath: "./common/image/tab/my.png",
          text: "我"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
