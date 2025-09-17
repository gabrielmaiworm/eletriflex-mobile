import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FileInputProps {
    text: string;
    iconName: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
}

export default function FileInput({ text, iconName, onPress }: FileInputProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.text}>{text}</Text>
                <Ionicons name={iconName} size={24} color="#E59B5A" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#E59B5A',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 16,
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#E59B5A',
        fontSize: 14,
        fontWeight: '400',
        marginRight: 8,
    },
});
