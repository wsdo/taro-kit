import React from 'react';
import { connect } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import styles from './index.module.scss';

const home2 = () => {
  const preImage = () => {
    Taro.previewImage({
      urls: ['http://s.devland.cn/2fb4ddc0232eb758639be2890824da7c.jpeg'],
    });
  };

  return (
    <View className={styles.indexBody}>
      <Image
        onClick={() => preImage()}
        mode='widthFix'
        className={styles.qrcode}
        src='http://s.devland.cn/2fb4ddc0232eb758639be2890824da7c.jpeg'></Image>
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
    };
  },
)(home2);
