import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AtButton } from 'taro-ui';
import { View, Image, Text, Button } from '@tarojs/components';
import { navigateTo, useDidHide, useDidShow } from '@tarojs/taro';
import 'taro-ui/dist/style/components/button.scss'; // 按需引入组件样式
import styles from './index.module.scss';

const Index = () => {
  const init = async () => {
    console.log('请求 数据');
  };
  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  useDidShow(() => {
    console.log('componentDidShow');
  });

  useDidHide(() => {
    console.log('componentDidHide');
  });

  const goPage = () => {
    navigateTo({
      url: '/pages/home2/index',
    });
  };
  return (
    <View className={styles.indexBody}>
      <Image
        src='http://s.devland.cn/fa3f6cc819a8a316f924fb61c9478bfe.jpeg'
        className={styles.icon}></Image>
      <Text className={styles.desc}>前端指北</Text>
      <AtButton
        type='secondary'
        className={styles.routerLink}
        onClick={() => goPage()}>
        关注我
      </AtButton>

      {/* <AtButton type='primary'>I need Taro UI</AtButton>

      <Button className='add_btn' onClick={props.add}>
        +值
      </Button>
      <Button className='dec_btn' onClick={props.dec}>
        -减
      </Button>
      <Button className='dec_btn' onClick={goPage}>
        跳转home2页面
      </Button>
      <DemoTxt /> */}
    </View>
  );
};

export default connect(
  ({ common }: any) => ({
    common,
  }),
  (dispatch: any) => {
    return {
      add: dispatch.common?.increment,
      dec: dispatch.common?.dec,
      login: dispatch.common.login,
    };
  },
)(Index);
