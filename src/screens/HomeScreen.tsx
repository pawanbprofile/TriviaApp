import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import useStatusBar from '../hooks/useStatusBar';
import Colors from '../utils/Colors';
import Difficulty from '../components/Difficulty';
import {LEVEL} from '../types/Constants';
import {getLevels} from '../utils/helperFunctions';
import labels from '../types/labels';
import {useLogoutMutation} from '../api/AuthSlice';
import {AuthContext} from '../services/AuthContext';
import {useNavigation} from '@react-navigation/native';
const levels = getLevels();
const HomeScreen = () => {
  const navigation = useNavigation();
  useStatusBar('dark-content', Colors.bkColor);
  const handleLevelSelection = (level: LEVEL) => {
    navigation.replace('Questions', {level: level});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{labels.level_title}</Text>
      {!!levels &&
        levels.map(item => (
          <Difficulty
            testID={item.value}
            key={item.key}
            title={item.value}
            level={item.key}
            onPress={level => handleLevelSelection(level)}
          />
        ))}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bkColor,
    padding: 0,
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
    color: Colors.primaryText,
    fontFamily: 'Bebas Neue Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
