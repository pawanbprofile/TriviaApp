import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import useStatusBar from '../hooks/useStatusBar';
import Colors from '../utils/Colors';
import Difficulty from '../components/Difficulty';
import {LEVEL} from '../types/Constants';
import {getLevels} from '../utils/helperFunctions';
import labels from '../types/labels';
const levels = getLevels();
const HomeScreen = () => {
  useStatusBar('dark-content', Colors.bkColor);
  const handleLevelSelection = (level: LEVEL) => {
    console.log(level);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{labels.level_title}</Text>
      {!!levels &&
        levels.map(item => (
          <Difficulty
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
