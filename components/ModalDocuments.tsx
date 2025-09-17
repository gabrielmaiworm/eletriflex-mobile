import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Dimensions,
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface ModalDocumentsProps {
  visible: boolean;
  onClose: () => void;
  userType: 'tecnico' | 'cliente';
}

const { height } = Dimensions.get('window');

export default function ModalDocuments({ visible, onClose, userType }: ModalDocumentsProps) {
  const getModalContent = () => {
    if (userType === 'tecnico') {
      return {
        title: 'Documentos de Técnico Enviados',
        subtitle: 'Enviaremos um e-mail assim que estiver tudo certo',
      };
    } else {
      return {
        title: 'Documentos de Cliente Enviados',
        subtitle: 'Enviaremos um e-mail assim que estiver tudo certo',
      };
    }
  };

  const { title, subtitle } = getModalContent();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity 
          style={styles.backdrop} 
          activeOpacity={1} 
          onPress={onClose}
        />
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.topTitle}>
                <Image 
                    source={require('@/assets/images/icon-doc-check.png')}
                    style={styles.iconDocCheck}
                    resizeMode="contain"
                />
                <Text style={styles.modalTitle}>Documentos enviados</Text>
            </View>
            <View style={styles.firstCard}>
                <Ionicons name="checkmark-circle" size={25} color="#DA7013" />
                <Text style={styles.firstCardText}>Desfrute do aplicativo enquanto finalizamos tudo para você</Text>
            </View>
            <Text style={styles.modalSubtitle}>{subtitle}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  firstCard: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#DA7013',
    borderRadius: 20,
    padding: 10,
    gap: 10,
  },
  firstCardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#DA7013',
    lineHeight: 22,
  },
  iconDocCheck: {
    width: 20,
    height: 20,
    marginBottom: 12,
  },
  topTitle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
    flexDirection: 'row',
    gap: 8,
  },
  modalContainer: {
    height: height * 0.5, // Metade da tela
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#323232',
    textAlign: 'center',
    marginBottom: 12,
  },
  modalSubtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
});
