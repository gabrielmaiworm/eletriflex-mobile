import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SvgComponent } from './SvgComponent';

interface CustomSplashScreenProps {
  isVisible: boolean;
}

export default function SplashScreen({ isVisible }: CustomSplashScreenProps) {
  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <SvgComponent variant='logo' width={280} height={140} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '80%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  }
}); 