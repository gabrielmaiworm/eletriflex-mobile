import React from 'react';
import {
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
} from 'react-native';

interface ButtonPrimaryProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number;
  fontSize?: number;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  title,
  backgroundColor = '#E59B5A',
  textColor = '#FFFFFF',
  borderRadius = 30,
  fontSize = 16,
  buttonStyle,
  textStyle,
  disabled = false,
  ...props
}) => {
  const finalBackgroundColor = disabled ? '#E0E0E0' : backgroundColor;
  const finalTextColor = disabled ? '#8F8F8F' : textColor;

  const buttonStyles = [
    styles.button,
    {
      backgroundColor: finalBackgroundColor,
      borderRadius,
    },
    buttonStyle,
  ];

  const titleStyles = [
    styles.text,
    {
      color: finalTextColor,
      fontSize,
    },
    textStyle,
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles} 
      {...props} 
      activeOpacity={disabled ? 1 : 0.8}
      disabled={disabled}
    >
      <Text style={titleStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  text: {
    fontWeight: '400', // Regular
    textAlign: 'center',
  },
});

export default ButtonPrimary;
