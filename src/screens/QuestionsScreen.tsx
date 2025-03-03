import {StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import Colors from '../utils/Colors';
import Question from '../components/Question';
import useStatusBar from '../hooks/useStatusBar';
import {useGetLatestTenQuestionsQuery} from '../api/TriviaSlice';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import ErrorStatus from '../components/ErrorStatus';
import LoaderStatus from '../components/LoaderStatus';
import {randomizeOptions} from '../utils/helperFunctions';
const QuestionsScreen = () => {
  useStatusBar('dark-content', Colors.bkColor);
  const {data, isError, isLoading} = useGetLatestTenQuestionsQuery('');
  const swiperRef = useRef<any>(null);
  if (isError) {
    return <ErrorStatus />;
  }
  if (isLoading) {
    return <LoaderStatus />;
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
