import 'react-native-reanimated';

import { SvgComponent } from '@/components/SvgComponent';
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
      <View style={styles.whiteModal}>
        <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 10 }}>
          <SvgComponent variant="logo" width={150} height={150} />
        </View>
      </View>
      <View style={styles.imagemContainer}>
        <Image
          source={require('@/assets/images/image-01.png')}
          style={styles.imagemTopo}
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
  imagemContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  imagemTopo: {
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
  whiteModal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '83%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
}); 