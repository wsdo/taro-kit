<!--
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-09-16 13:55:47
 * @LastEditors: starkwang
 * @LastEditTime: 2019-10-24 15:37:26
 * @Description: file content
 -->

## 可以 watch 这个项目，有更新，及时知道

> 项目会不断迭代，有需求欢迎 issue 如果能帮到你，那就给个 star 呗！

> 1 年前输出了一套 taro-kit 脚手架，有不少人加我微信，咨询一些问题，这段时间把这个脚手架升级后，总结并录制了课程，希望能帮助到大家，提高效率，节约时间。

CLI 工具安装首先，你需要使用 npm 或者 yarn 全局安装@tarojs/cli，或者直接使用 npx:

```js
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

## 项目更新：

> 2021 年 05 月 27 日 星期四

- 更新@tarojs/taro到：3.2.10
- 添加海报生成插件：[taro-weapp-poster](https://github.com/Clycheng/taro-weapp-poster)


> 2021 年 02 月 03 日 星期三

- 更新依赖到：3.0.26
- 更新.eslintrc
- 添加 babel 配置
- 添加 global.d.ts
- 添加 tsconfig
- 添加 yarn.lock 文件
- 更新 config 文件

## 更新生产依赖包：

- @babel/runtime: ^7.7.7,
- @rematch/core: ^1.4.0,
- @rematch/loading: ^1.2.1,
- @tarojs/components: 3.0.26,
- @tarojs/react: 3.0.26,
- @tarojs/runtime: 3.0.26,
- @tarojs/taro: 3.0.26,
- react: ^16.10.0,
- react-dom: ^16.10.0,
- react-redux: ^7.2.0,
- redux: ^4.0.0,
- redux-logger: ^3.0.6,
- redux-thunk: ^2.3.0,
- taro-ui: ^3.0.0-alpha.3

## 更新开发依赖包

- @babel/core: ^7.8.0,
- @tarojs/mini-runner: 3.0.26,
- @tarojs/webpack-runner: 3.0.26,
- @types/react: ^16.0.0,
- @types/react-redux: ^7.1.9,
- @types/webpack-env: ^1.13.6,
- @typescript-eslint/eslint-plugin: ^2.x,
- @typescript-eslint/parser: ^2.x,
- babel-preset-taro: 3.0.26,
- eslint: ^6.8.0,
- eslint-config-taro: 3.0.26,
- eslint-plugin-import: ^2.12.0,
- eslint-plugin-react: ^7.8.2,
- eslint-plugin-react-hooks: ^1.6.1,
- stylelint: 9.3.0,
- typescript: ^3.7.0

```
taro update project v版本号
```

> ![20210122111946](http://s.shudong.wang/note/20210122111946.png)

## 文章

- [【小程序 taro 最佳实践】http 请求封装（方便使用，增加 token，统一错误日志记录和上报）](https://segmentfault.com/a/1190000016533592)
- [【小程序 taro 最佳实践】异步 action 优雅实践(简化流程)](https://segmentfault.com/a/1190000016534001)
- [【taro 最佳实践】设置好基础开发字体尺寸](https://segmentfault.com/a/1190000016514478)

- [Taro 小程序，从 0 到 1 架构项目，打造自己的完美脚手架。 ](https://segmentfault.com/a/1190000019020009)

## 功能列表

- [x] 封装 api 请求方式
- [x] 更方便的创建 action：增加 createApiAction
- [x] 基础像素试着为 1 倍即：1px 会编译成 2rpx（小程序默认是 2 倍）符合习惯
- [x] 基础 demo 案列
- [x] 增加生成海报类

## 升级功能列表

- [x] 01.taro 从 0 到 1 项目架构课程介绍
- [x] 02.初始化项目流程介绍、目录设计
- [x] 03.让 alias 别名解决路径引用的烦恼
- [x] 04.请求 api 返回 redux 的状态流程
- [x] 05.封装 request get 请求，给 url 添加时间戳防止浏览器缓存
- [x] 06.封装 request post Content-Type 分类请求
- [x] 07.把 taro-advance 脚手架推送到私有仓库
- [x] 08.弱网请求失败时自动发起 api 重试
- [x] 09.异常日志上报封装设计思路
- [x] 10.异常日志上报封装，五种级别输出。
- [x] 11.上报收集日志平台系统介绍
- [x] 12.实战接入日志平台
- [x] 13.深度序列化错误 error 控制台上报
- [x] 14.登录流程讲解（前端和后端实现流程）
- [x] 15.登录实现详细讲解（token 附加到请求 header 头）
- [x] 16.用户授权后更新用户信息流程
- [x] 17.设计 createApiAction 自动 dispatch 优化开发体验
- [x] 18.改造 actionType 支持庞大业务
- [x] 19.Action 三种 ActionType 的集合
- [x] 20.简化 reducers 的 swich 繁琐操作
- [x] 21.增加 request 的状态
- [x] 22.课程总结
- [x] 23.添加 Prettier 格式化配置

> 这个可以让你的 Taro 小程序跑的更优雅一些

#### 升级后的项目仓库地址： 观看视频的同学加微信，发送你的 gitlab 账号，添加权限，你就看源代码了。

https://gitlab.com/itxishu/taro-advance.git

## 观看地址： cctalk 腾讯课堂 思否编程 segmentfault

> 上面都可以搜搜到，建议 cctalk 哈

#### 购买路径

在 https://shudong.wang 加我微信

https://www.cctalk.com/m/course/168709

https://segmentfault.com/ls/1650000018991514

## 适宜人群

- taro 小程序开发者
- 需要 taro 基础架构开发人员

## 课程说明

本次课程主要针对于，正在使用 taro 小程序框架的同学，通过课程，你可以学到，框架的 request 请求优雅封装，异常自动重试，日志异常上报， redux 的三剑客优雅的配合使用， reducer 的 swich 简化繁琐操作，增加 state 的请求前，请求成功和失败的状态等。从开始架构足以支撑庞大业务小程序项目

课程有问题可以在 https://shudong.wang 我的博客扎到我，添加微信咨询

![2019-04-28-22-09-17](http://s.shudong.wang/2019-04-28-22-09-17.png)

#### 课程主站

https://www.itxishu.com https://github.com/wsdo/qa

#### 关于

https://shudong.wang

#### 有问题加微信问吧

http://shudong.wang
