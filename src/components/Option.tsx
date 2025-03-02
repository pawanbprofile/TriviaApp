import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../utils/Colors';

type OptionProps = {
  title: string;
  index: number;
  handlePress: (index: number) => void;
};
const Option = ({title, index, handlePress}: OptionProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: isChecked ? Colors.easyColor : Colors.bkColor},
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
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
});
