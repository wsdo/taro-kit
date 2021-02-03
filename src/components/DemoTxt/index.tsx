import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

const DemoTxt = props => {
  return (
    <View>
      <Text className={styles.textBody}>子组件内容{props.common?.num}</Text>
    </View>
  );
};

export default connect(
  ({ common }: any) => ({
    common,
  }),
  null,
)(DemoTxt);
