import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
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
  console.log('question ', question);
  const width = useWindowDimensions().width;
  return (
    <View style={[styles.container, {width: width}]}>
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
            {index < 9 ? (
              <Icon
                name={'long-arrow-right'}
                size={32}
                color={Colors.vanilla}
              />
            ) : (
              <Text style={styles.submit}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
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
    width: '100%',
    fontSize: 20,
    fontFamily: 'Bebas Neue Regular',
    textAlign: 'justify',
    textAlignVertical: 'center',
    height: 100,
    color: Colors.primaryText,
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
  submit: {
    fontSize: 20,
    color: Colors.vanilla,
    fontWeight: '600',
    fontFamily: 'Bebas Neue Regular',
  },
});
