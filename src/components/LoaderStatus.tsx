import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import {Flow} from 'react-native-animated-spinkit';

const LoaderStatus = () => {
  return (
    <View style={styles.container}>
      <Flow size={72} color={Colors.positive} />
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
