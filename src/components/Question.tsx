import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import Option from './Option';
import Icon from 'react-native-vector-icons/FontAwesome';

type QuestionProps = {
  index: number;
  count: number;
  question: string;
  options: string[];
  handleNext: () => void;
};

const Question = ({
  count,
  index,
  question,
  options,
  handleNext,
}: QuestionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{`Question # ${index}`}</Text>
      </View>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.optionsContainer}>
        {!!options &&
          options.map((item, position) => (
            <Option
              title={item}
              index={position}
              handlePress={(index: number) => {
                console.log(`option ${index} selected`);
              }}
            />
          ))}

        <View style={styles.nextContainer}>
          <TouchableOpacity style={styles.nextAction} onPress={handleNext}>
            <Icon name={'long-arrow-right'} size={32} color={Colors.vanilla} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 8,
    padding: 20,
  },
  indexContainer: {
    width: '100%',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  index: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.primaryText,
    fontFamily: 'Bebas Neue Regular',
  },
  question: {
    fontSize: 20,
    fontFamily: 'Bebas Neue Regular',
    textAlign: 'justify',
    textAlignVertical: 'top',
    marginVertical: 12,
  },
  optionsContainer: {
    flex: 1,
    width: '100%',
    marginVertical: 8,
  },
  optionRow: {
    width: '100%',
    flexDirection: 'row',
  },
  option: {
    width: '100%',
    minHeight: 54,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'justify',
    textAlignVertical: 'center',
    marginTop: 8,
    padding: 6,
    borderRadius: 6,
    borderWidth: 1,
  },
  nextContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
  },
  nextAction: {
    borderRadius: 8,
    backgroundColor: Colors.positive,
    paddingVertical: 10,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
