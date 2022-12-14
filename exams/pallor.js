import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Textexams from "../src/components/Textexams";
import Btnexams from "../src/components/Btnexams";
import Footer from "../src/components/Footer";
export default function Pallor(props) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => props.navigation.navigate("Reponse")}
        >
          <AntDesign name="caretleft" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.boxElements}>
        <View style={styles.boxText}>
          <Textexams
            title={" ¿El pie presenta palidez al elevalor y rubor al bajarlo?"}
          />
        </View>
        <Btnexams
          titleButton={"SI"}
          Pressable={() => props.navigation.navigate("Soplos")}
        />
        <Btnexams
          titleButton={"NO"}
          Pressable={() => props.navigation.navigate("Soplos")}
        />
        <Footer />
      </View>
    </View>
  );
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
  },
});
