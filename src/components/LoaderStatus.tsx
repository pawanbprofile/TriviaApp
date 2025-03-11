import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import {Flow} from 'react-native-animated-spinkit';

type LoaderStatusProps = {
  size?: number;
  color?: string;
  style?: ViewStyle;
};
const LoaderStatus = ({size, color, style}: LoaderStatusProps) => {
  return (
    <View style={[styles.container, {...style}]}>
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
