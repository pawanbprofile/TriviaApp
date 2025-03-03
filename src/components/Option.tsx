import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/Entypo';
type OptionProps = {
  title: string;
  index: number;
  isCorrectAnswer: boolean;
  handlePress: (index: number) => void;
};
const Option = ({title, index, handlePress, isCorrectAnswer}: OptionProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isChecked
            ? isCorrectAnswer
              ? Colors.easyColor
              : Colors.negative
            : Colors.bkColor,
        },
      ]}
      onPress={() => {
        setIsChecked(prevstate => !prevstate);
        handlePress(index);
      }}>
      <Text
        numberOfLines={2}
        style={[
          styles.title,
          {color: isChecked ? Colors.vanilla : Colors.primaryText},
        ]}>
        {title}
      </Text>
      {isChecked && (
        <View style={styles.iconContainer}>
          <Icon
            name={isCorrectAnswer ? 'check' : 'cross'}
            size={16}
            color={isCorrectAnswer ? Colors.positive : Colors.negative}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 54,
    padding: 12,
    borderRadius: 8,
    borderColor: Colors.brown,
    borderWidth: 1,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  iconContainer: {
    borderRadius: 10,
    width: 20,
    height: 20,
    backgroundColor: Colors.vanilla,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
