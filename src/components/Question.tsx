import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Colors from '../utils/Colors';
import Option from './Option';
import Icon from 'react-native-vector-icons/FontAwesome';
import {randomizeOptions} from '../utils/helperFunctions';
import * as ProgressBar from 'react-native-progress';
import {LEVEL} from '../types/Constants';
import * as he from 'he';
import {ScoreContext} from '../services/ScoreContext';

type QuestionProps = {
  index: number;
  count: number;
  question: string;
  options: string[];
  correct_answer: string;
  level?: LEVEL;
  handleNext: () => void;
};

const Question = ({
  count,
  index,
  question,
  options,
  correct_answer,
  level,
  handleNext,
}: QuestionProps) => {
  const width = useWindowDimensions().width;
  const [highlightCorrectOption, setHighlightCorrectOption] =
    useState<boolean>(false);
  const {score} = useContext(ScoreContext);
  const levelColor = useMemo(() => {
    switch (level) {
      case LEVEL.EASY: {
        return Colors.easyColor;
      }
      case LEVEL.MEDIUM: {
        return Colors.mediumColor;
      }
      case LEVEL.HARD: {
        return Colors.hardColor;
      }
      default: {
        return Colors.easyColor;
      }
    }
  }, [level]);
  return (
    <View style={[styles.container, {width: width}]}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{`Question # ${index}`}</Text>
        <Text style={styles.score}>{`Score : ${score}`}</Text>
      </View>
      <ProgressBar.Bar
        progress={index / count}
        width={width - 40}
        borderWidth={0}
        color={levelColor}
        unfilledColor={Colors.brown30}
        animated={true}
        animationType={'spring'}
      />
      <Text style={styles.question}>{he.decode(question)}</Text>
      <View style={styles.optionsContainer}>
        {!!options &&
          options.map((item, position) => (
            <Option
              key={position}
              title={item}
              score={score}
              isCorrectAnswer={
                correct_answer?.toLocaleLowerCase() ===
                item?.toLocaleLowerCase()
              }
              highlighCorrectOption={highlightCorrectOption}
              index={position}
              handlePress={(index: number) => {
                console.log(`option ${index} selected`);
                setHighlightCorrectOption(true);
              }}
            />
          ))}

        <View style={styles.nextContainer}>
          <TouchableOpacity
            disabled={!highlightCorrectOption}
            style={[
              styles.nextAction,
              {
                backgroundColor: highlightCorrectOption
                  ? levelColor
                  : Colors.brown30,
              },
            ]}
            onPress={handleNext}>
            {index <= 9 ? (
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  index: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.primaryText,
    fontFamily: 'Bebas Neue Regular',
  },
  score: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.primaryText,
    fontFamily: 'Bebas Neue Regular',
    textAlign: 'right',
    textAlignVertical: 'center',
    height: 100,
    flex: 1,
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
