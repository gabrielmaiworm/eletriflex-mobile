import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RegisterTypeCardProps {
    title: string;
    subtitle: string;
    onAdvance: () => void;
}

export default function RegisterTypeCard({ title, subtitle, onAdvance }: RegisterTypeCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.content}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardSubtitle}>{subtitle}</Text>
                    <TouchableOpacity style={styles.button} onPress={onAdvance}>
                        <Text style={styles.buttonText}>Avançar</Text>
                        <Ionicons name="arrow-forward" size={12} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={require('@/assets/images/image-03.png')}
                style={styles.cardImage}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 60,
    },
    card: {
        backgroundColor: '#E59B5A',
        borderRadius: 20,
        padding: 20,
        paddingRight: 120,
        height: 170,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5
    },
    content: {
        height: '100%',
    },
    cardTitle: {
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: '500',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    cardSubtitle: {
        fontSize: 12,
        fontWeight: '400',
        color: '#FFFFFF',
        lineHeight: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#2D7D7D', // Verde/teal do botão
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 25,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 12,
        marginRight: 5,
    },
    cardImage: {
        position: 'absolute',
        top: -40,
        right: 10,
        width: 120,
        height: 180,
        zIndex: 10,
    },
});     