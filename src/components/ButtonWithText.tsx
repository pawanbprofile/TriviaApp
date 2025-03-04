import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Children, ReactNode} from 'react';
import Colors from '../utils/Colors';
import {fonts} from '../types/Constants';

type ButtonWithTextProps = {
  title: string;
  onPress: () => void;
  enabled?: boolean;
  children?: ReactNode;
};
const ButtonWithText = ({
  title,
  onPress,
  enabled = false,
  children,
}: ButtonWithTextProps) => {
  return (
    <TouchableOpacity
      disabled={!enabled}
      style={[
        styles.container,
        {backgroundColor: enabled ? Colors.easyColor : Colors.brown30},
      ]}
      onPress={onPress}>
      {children ? (
        children
      ) : (
        <Text
          style={[
            styles.title,
            {color: enabled ? Colors.vanilla : Colors.vanilla},
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonWithText;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.easyColor,
    padding: 12,
    minHeight: 54,
    borderRadius: 8,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.lato,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.vanilla,
    letterSpacing: 0.5,
  },
});
