
## 可以watch 这个项目，有更新，及时知道

> 项目会不断迭代，有需求欢迎issue
> 如果能帮到你，那就给个star呗！

## 文章
* [【小程序taro最佳实践】http请求封装（方便使用，增加token，统一错误日志记录和上报）](https://segmentfault.com/a/1190000016533592)
* [【小程序taro 最佳实践】异步action优雅实践(简化流程)](https://segmentfault.com/a/1190000016534001)
* [【taro最佳实践】设置好基础开发字体尺寸](https://segmentfault.com/a/1190000016514478)

## 功能列表
* [x] 封装api请求方式
* [x] 更方便的创建action：增加createApiAction
* [x] 基础像素试着为1倍即：1px 会编译成 2rpx（小程序默认是2倍）符合习惯
* [x] 基础demo案列
* [x] 增加生成海报类


#### 生成海报使用方式
```dom
        <view className='posterWrapper' style='width:{{posterWidth}}px;height:{{posterHeight}}px;' catchtap='prevent'>
          <canvas className='poster' width='{{posterWidth* 2}}' height='{{posterHeight * 2}}' canvas-id='poster' style='width:{{posterWidth}}px;height:{{posterHeight}}px;'></canvas>
        </view>
```
```js

  constructor(props) {
    super(props)
    this.state = {
      posterWidth: '375',
      posterHeight: '500',
      posterInfo: {
        tempBg: 'xxx.png'
      },
      offset: 1,
    }
    let config = {
      id: 'poster',
      background: {
        image: this.state.posterInfo.tempBg,
        width: this.state.posterWidth,
        height: this.state.posterHeight,
      }
    }
    console.log(config)
    this.poster = new Poster(config)

    // console.log(this.poster)
  }

  genPoster = () => {
    const that = this
    this.poster.drawBackground()
    this.poster.ctx.draw(true, function () {
      console.log('poster', '海报绘制完成')
      that.poster.generateTempImage()
    })
  }
```


## 用法
```
npm i

npm start
```
## 更优雅的创建action
> 未封装前
```
function articleList(data) {
  return { type: LIST, payload: data }
}

export function list() {
  console.log('list')
  return (dispatch) => {
    // service.get('/v1/article/list')
    //   .then((res) => {
    //     dispatch(articleList(res.data.article))
    //   })

    Taro.request({
      url: 'http://api.shudong.wang/v1/article/list',
      data: {
        foo: 'foo',
        bar: 10
      },
      header: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      dispatch(articleList(res.data.article))
    })
  }
}
```
![2018-09-25-15-50-45](http://img.shudong.wang/2018-09-25-15-50-45.png)
> 封装后请求api的使用方式
```
export const list = createApiAction(LIST, params => api.get('news/list', params))
```
![2018-09-25-15-51-45](http://img.shudong.wang/2018-09-25-15-51-45.png)
