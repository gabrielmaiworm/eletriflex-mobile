import 'react-native-reanimated';

import ButtonPrimary from '@/components/ButtonPrimary';
import Input from '@/components/Input';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function RegisterAddressPage() {
  const { registerType } = useLocalSearchParams<{ registerType: string }>();

  function handleSubmit() {
    router.push({ pathname: '/register-documents', params: { registerType } });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerShown: false,
        }} 
      />
      <View style={styles.whiteModal}>
        <View style={{ marginTop: 120, marginBottom: 10 }}>
            <Text style={styles.title}>Endereço</Text>
            <Text style={styles.subtitle}>Seus dados residênciais</Text>
            <Input
                variant="default"
                placeholder="CEP"
                keyboardType="numeric"
                autoCapitalize="none"
                style={{ marginVertical: 10, marginTop: 30 }}
            />
            <Input
                variant="default"
                placeholder="Estado"
                keyboardType="default"
                autoCapitalize="none"
                style={{ marginVertical: 10 }}
            />
            <Input
                variant="default"
                placeholder="Cidade"
                keyboardType="default"
                autoCapitalize="none"
                style={{ marginVertical: 10 }}
            />
            <Input
                variant="default"
                placeholder="Logradouro"
                keyboardType="default"
                autoCapitalize="none"
                style={{ marginVertical: 10 }}
            />
            <Input
                variant="default"
                placeholder="Número"
                keyboardType="numeric"
                autoCapitalize="none"
                style={{ marginVertical: 10, marginBottom: 20 }}
            />
            <ButtonPrimary
                disabled={false}
                title="Avançar"
                backgroundColor="#E59B5A"
                onPress={handleSubmit}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 10 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#d3d3d3' }} />
                <Text style={{ color: '#d3d3d3', fontSize: 14, fontWeight: '400', marginHorizontal: 16, fontStyle: 'italic' }}>Eletriflex</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: '#d3d3d3' }} />
            </View>
        </View>
      </View>

      <View style={styles.imagemContainer}>
        <Image
          source={require('@/assets/images/image-02.png')}
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
    zIndex: 1
  },
  imagemTopo: {
    width: '100%',
    height: '100%',
    maxWidth: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DA7013'
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#8F8F8F',
  },
  linkContainer: {
    flexDirection: 'row',
  },
  link: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E59B5A',
    marginLeft: 10,
  },
  whiteModal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '92%',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
}); 