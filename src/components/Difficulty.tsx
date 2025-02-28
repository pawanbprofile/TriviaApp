import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import Colors from '../utils/Colors';
import {LEVEL} from '../types/Constants';

type DifficultyProps = {
  title: string;
  onPress: (id: LEVEL) => void;
  level: LEVEL;
};

const Difficulty = ({title, level, onPress}: DifficultyProps) => {
  const backgroundColor = useMemo(() => {
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
    <TouchableOpacity
      style={[styles.container, {backgroundColor: backgroundColor}]}
      onPress={() => onPress(level)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Difficulty;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.brown,
    marginTop: 8,
  },
  title: {
    fontSize: 22,
    color: Colors.vanilla,
    letterSpacing: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Bebas Neue Regular',
  },
});
