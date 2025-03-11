import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';

type ProgressViewProps = {
  questionIndex: number;
  max_count?: number;
};

const ProgressView = ({questionIndex, max_count = 10}: ProgressViewProps) => {
  const width = useWindowDimensions().width;
  console.log('array', new Array(max_count));
  return (
    <View style={styles.container}>
      {new Array(max_count).fill(1).map((item, index) => (
        <View style={styles.brick} />
      ))}
    </View>
  );
};

export default ProgressView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 12,
    backgroundColor: 'black',
    marginTop: 12,
    paddingHorizontal: 12,
  },
  brick: {
    height: 12,
    width: 40,
    backgroundColor: 'red',
    borderRadius: 4,
    marginRight: 4,
  },
});
