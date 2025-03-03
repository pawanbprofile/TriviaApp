import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import {Flow} from 'react-native-animated-spinkit';

const ErrorStatus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>Something went wrong</Text>
      <Flow size={32} color={Colors.negative} />
    </View>
  );
};

export default ErrorStatus;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  error: {
    fontSize: 24,
    color: Colors.negative,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 12,
  },
});
