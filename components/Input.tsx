import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

interface InputProps extends TextInputProps {
  variant?: 'default' | 'password' | 'description';
  borderRadius?: number;
  borderColor?: string;
  placeholderTextColor?: string;
  textColor?: string;
}

const Input: React.FC<InputProps> = ({
  variant = 'default',
  borderRadius = 30,
  borderColor = '#E0E0E0',
  placeholderTextColor = '#8F8F8F',
  textColor = '#8F8F8F',
  style,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputStyles = [
    styles.input,
    variant === 'description' && styles.descriptionInput,
    {
      borderRadius,
      borderColor,
      color: textColor
    },
    style,
  ];

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={inputStyles}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={variant === 'password' && !isPasswordVisible}
        multiline={variant === 'description'}
        numberOfLines={variant === 'description' ? 4 : 1}
        textAlignVertical={variant === 'description' ? 'top' : 'center'}
      />
      {variant === 'password' && (
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={togglePasswordVisibility}
          activeOpacity={0.7}
        >
          <Ionicons
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color={placeholderTextColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 56,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '100',
  },
  descriptionInput: {
    height: 120, // Aproximadamente 4 linhas
    paddingTop: 16,
    textAlignVertical: 'top',
  },
  eyeButton: {
     position: 'absolute',
     right: 16,
     top: '50%',
     transform: [{ translateY: -15 }],
     justifyContent: 'center',
     alignItems: 'center',
     padding: 4,
  },
});

export default Input;
