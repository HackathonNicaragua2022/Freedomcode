import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Exam() {
    return (

        <View>
            <View style={styles.container}>
                <View style={styles.arrow}>
                    <AntDesign name="caretleft" size={40} color="black" />
                </View>
            </View>

            <View style={styles.boxElements}>
                <View style={styles.boxText}>
                    <Text style={styles.text1}>
                        ETAPAS DEL EXAMEN
                    </Text>
                </View>

                <TouchableOpacity style={styles.boxs}>
                    <Text style={styles.examText}>
                        ANAMNESIS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxs}>
                    <Text style={styles.examText}>
                        EXAMEN CRUENTO E INCRUENTO
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxs}>
                    <Text style={styles.examText}>
                        EXPLORACION
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxs}>
                    <Text style={styles.examText}>
                        RESULTADOS
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.copyright}>
                    <AntDesign name="copyright" size={18} color="black" />
                    <Text>
                        Copyright FreedomCode
                    </Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    boxs: {
        backgroundColor: '#03FFC6',
        top: '5%',
        height: '8%',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '3%',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,

    },
    copyright: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '45%',
        top: '45%',
    },
    container: {
        top: '5%',
        marginBottom: '5%'
    },
    arrow: {
        left: '5%',
        top: '5%',
    },
    boxElements: {
        backgroundColor: '#fff',
        height: '100%',
        marginTop: '25%',
        alignItems: 'center',
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    box2: {
        alignItems: 'center',
        height: '100%',
    },
    boxText: {
        alignItems: 'center',
        top: '4%',


    },
    text1: {
        fontSize: 25,
    },

    examText: {
        fontSize: 25,
    }

});