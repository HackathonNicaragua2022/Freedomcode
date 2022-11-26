import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Btnexams({titleButton}) {
  return (
      <TouchableOpacity style={styles.stycolor}>
        <Text style={styles.examText}>{titleButton}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    stycolor: {
        backgroundColor: '#03FFC6',
        top: '5%',
        height:'8%',
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
    examText: {
        fontSize: 25,
    }
});
