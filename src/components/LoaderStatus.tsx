import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import {Flow} from 'react-native-animated-spinkit';

type LoaderStatusProps = {
  size: number;
  width?: number;
  height?: number;
  color?: string;
};
const LoaderStatus = ({width, height, size, color}: LoaderStatusProps) => {
  return (
    <View style={[styles.container, {width, height}]}>
      <Flow size={size ? size : 72} color={color ? color : Colors.positive} />
    </View>
  );
};

export default LoaderStatus;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
