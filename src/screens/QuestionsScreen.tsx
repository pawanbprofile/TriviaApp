import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import Question from '../components/Question';
import useStatusBar from '../hooks/useStatusBar';

const QuestionsScreen = () => {
  useStatusBar('dark-content', Colors.bkColor);
  return (
    <View style={styles.container}>
      <Question
        index={1}
        count={10}
        question={
          'What is the only planet in our solar system that rotates clockwise?'
        }
        options={['option 1', 'option 2', 'option 3', 'option 4']}
        handleNext={() => {}}
      />
    </View>
  );
};

export default QuestionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bkColor,
    justifyContent: 'center',
  },
});
