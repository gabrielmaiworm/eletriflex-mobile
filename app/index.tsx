import 'react-native-reanimated';

import { Stack } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

export default function InitialPage() {

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerShown: false,
        }} 
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/image-01.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA187',
  },
  logoContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
  logo: {
    width: '100%',
    height: '100%',
    maxWidth: 300,
  },
  loadingText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
}); 