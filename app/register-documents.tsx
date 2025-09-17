import 'react-native-reanimated';

import ButtonPrimary from '@/components/ButtonPrimary';
import FileInput from '@/components/FileInput';
import Input from '@/components/Input';
import ModalDocuments from '@/components/ModalDocuments';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RegisterDocumentsPage() {
  const { registerType } = useLocalSearchParams<{ registerType: string }>();
  const [modalVisible, setModalVisible] = useState(false);

  function handleSubmit() {
    console.log('Formulário enviado');
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerShown: false,
        }} 
      />
      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imagemContainer}>
          <Image
            source={require('@/assets/images/image-02.png')}
            style={styles.imagemTopo}
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.whiteModal}>
          <View style={{ paddingTop: 40, paddingBottom: 10, flex: 1, justifyContent: 'space-between' }}>
            <View>
                <Text style={styles.title}>Dados complementares</Text>
                <Text style={styles.subtitle}>Estamos quase finalizando seu cadastro</Text>
                <FileInput 
                text="Enviar foto de perfil"
                iconName="image-outline"
                onPress={() => console.log('Documento selecionado')}
                />
                {registerType === 'tecnico' && (
                    <>
                        <FileInput 
                        text="Carteira CFT/CRT"
                        iconName="image-outline"
                        onPress={() => console.log('Documento selecionado')}
                        />
                        <FileInput 
                        text="Certidão de registro"
                        iconName="image-outline"
                        onPress={() => console.log('Documento selecionado')}
                        />
                        <Input
                            variant="default"
                            keyboardType="default"
                            placeholder="Validade da certidão de registro"
                            style={{ marginTop: 10 }}
                        />
                    </>
                )}
                <Input
                    variant="description"
                    placeholder="Fale um pouco sobre você"
                    keyboardType="default"
                    autoCapitalize="none"
                    style={{ marginVertical: 15, marginBottom: 20 }}
                />

            </View>
            <View>
                <ButtonPrimary
                    disabled={false}
                    title="Criar conta"
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
        </View>
      </ScrollView>
      
      <ModalDocuments 
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        userType={registerType as 'tecnico' | 'cliente'}
      />
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
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
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
    paddingBottom: 30
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
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    marginTop: -60,
  },
}); 