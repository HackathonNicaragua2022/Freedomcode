import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Textexams({ title }) {
  return (
    <View style={styles.boxText}>
      <Text style={styles.text1}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxText: {
    alignItems: "center",
    top: "4%",
  },
  text1: {
    fontSize: 25,
  },
});
