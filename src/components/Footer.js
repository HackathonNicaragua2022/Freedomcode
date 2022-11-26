import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Afected() {
    return (

        <TouchableOpacity style={styles.copyright}>
        <AntDesign name="copyright" size={18} color="black" />
        <Text>
            Copyright FreedomCode
        </Text>
    </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    copyright: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '45%',
        top: '90%',
    },

});