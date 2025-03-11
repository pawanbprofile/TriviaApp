import {StyleSheet, View} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import Colors from '../utils/Colors';
import Question from '../components/Question';
import useStatusBar from '../hooks/useStatusBar';
import {useGetLatestTenQuestionsQuery} from '../api/TriviaSlice';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import ErrorStatus from '../components/ErrorStatus';
import LoaderStatus from '../components/LoaderStatus';
import {useNavigation, useRoute} from '@react-navigation/native';
import {LEVEL} from '../types/Constants';
const QuestionsScreen = () => {
  useStatusBar('dark-content', Colors.bkColor);
  const navigation = useNavigation();
  const {params} = useRoute();
  const level = useMemo(() => {
    switch (params?.level) {
      case LEVEL.EASY: {
        return 'easy';
      }
      case LEVEL.MEDIUM: {
        return 'medium';
      }
      case LEVEL.HARD: {
        return 'hard';
      }
      default: {
        return null;
      }
    }
  }, [params]);
  const {data, isError, isLoading} = useGetLatestTenQuestionsQuery(level);
  const swiperRef = useRef<any>(null);

  const levelColor = useMemo(() => {
    switch (params?.level) {
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
  }, [params]);

  if (isError) {
    return <ErrorStatus />;
  }
  if (isLoading) {
    return (
      <LoaderStatus
        style={{width: '100%', height: '100%'}}
        color={levelColor}
      />
    );
  }
  return (
    <View style={styles.container}>
      {!isLoading && !!data && (
        <SwiperFlatList
          data={data}
          ref={swiperRef}
          renderItem={({item, index}) => {
            return (
              <Question
                key={index}
                index={index + 1}
                count={data.length}
                question={item.question}
                correct_answer={item.correct_answer}
                options={item.answers}
                level={params?.level ? params?.level : undefined}
                handleNext={() => {
                  if (index >= 0 && index < 9) {
                    swiperRef.current.scrollToIndex({
                      index: index + 1,
                      animated: true,
                    });
                  } else {
                    navigation.replace('Home');
                  }
                }}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default QuestionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bkColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
