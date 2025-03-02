import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Colors from '../utils/Colors';
import Question from '../components/Question';
import useStatusBar from '../hooks/useStatusBar';
import {useGetLatestTenQuestionsQuery} from '../api/TriviaSlice';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const QuestionsScreen = () => {
  useStatusBar('dark-content', Colors.bkColor);
  const {data, error, loading} = useGetLatestTenQuestionsQuery('');
  const swiperRef = useRef<any>(null);
  return (
    <View style={styles.container}>
      {!loading && !!data && (
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
                options={[...item.incorrect_answers, item.correct_answer]}
                handleNext={() => {
                  if (swiperRef.current && index < 9) {
                    swiperRef.current.scrollToIndex({
                      index: index + 1,
                      animated: true,
                    });
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
