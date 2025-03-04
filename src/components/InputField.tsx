import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../types/Constants';
import Colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

type InputFieldProps = {
  placeHolder: string;
  isPassword?: boolean;
  value: string | null;
  onChangeText: (input: string) => void;
};
const InputField = ({
  placeHolder,
  isPassword = false,
  value,
  onChangeText,
}: InputFieldProps) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const handleSecurity = () => {
    setHidePassword(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={value ? value : ''}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeHolder}
        autoCorrect={false}
        underlineColorAndroid={'transparent'}
        secureTextEntry={isPassword && hidePassword}
      />
      {isPassword ? (
        <TouchableOpacity onPress={handleSecurity} style={styles.iconContainer}>
          <Icon
            name={hidePassword ? 'eye-off' : 'eye'}
            size={20}
            color={Colors.easyColor}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 20,
    letterSpacing: 0.5,
    fontFamily: fonts.lato,
    lineHeight: 22,
    color: Colors.easyColor,
    fontWeight: '600',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
});
