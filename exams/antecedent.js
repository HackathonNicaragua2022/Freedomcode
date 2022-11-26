import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Textexams from '../src/components/Textexams';
import Btnexams from '../src/components/Btnexams';
import Footer from '../src/components/Footer';
export default function Antecedent() {
    return (

        <View>
      <View style={styles.container}>
        <View style={styles.arrow}>
          <AntDesign name="caretleft" size={40} color="black" />
        </View>
      </View>

      <View style={styles.boxElements}>
        <View style={styles.boxText}>
          <Textexams title={"¿Tiene antecedentes con amputaciones o ulceración previas?"} />
        </View>

        <Btnexams titleButton={"SI"} />
        <Btnexams titleButton={"NO"} />
        <Footer />
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      top: "5%",
      marginBottom: "5%",
    },
    arrow: {
      left: "5%",
      top: "5%",
    },
    boxElements: {
      backgroundColor: "#fff",
      height: "100%",
      marginTop: "25%",
      alignItems: "center",
      borderTopStartRadius: 40,
      borderTopEndRadius: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    }
  });
