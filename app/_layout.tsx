import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import SplashScreen from '../components/SplashScreen';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'System': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    async function hideSplash() {
      if (loaded) {
        setTimeout(() => {
          setShowSplash(false);
        }, 3000);
      }
    }
    
    hideSplash();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <SplashScreen isVisible={showSplash} />
    </>
  );
}
