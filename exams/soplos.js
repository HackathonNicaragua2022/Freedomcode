import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Textexams from "../src/components/Textexams";
import Btnexams from "../src/components/Btnexams";
import Footer from "../src/components/Footer";
export default function Soplos(props) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => props.navigation.navigate("Pallor")}
        >
          <AntDesign name="caretleft" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.boxElements}>
        <View style={styles.boxText}>
          <Textexams title={"SOPLOS"} />
          <Textexams title={" ¿La obstrucción rebasa el 50% del calibre?"} />
        </View>
        <Btnexams
          titleButton={"SI"}
          Pressable={() => props.navigation.navigate("Capillary")}
        />
        <Btnexams
          titleButton={"NO"}
          Pressable={() => props.navigation.navigate("Capillary")}
        />
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stycolor: {
    backgroundColor: "#03FFC6",
    top: "5%",
    height: "8%",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "3%",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  copyright: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
    top: "75%",
  },
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
  box2: {
    alignItems: "center",
    height: "100%",
  },
  boxText: {
    alignItems: "center",
    top: "4%",
  },
  text1: {
    fontSize: 25,
  },

  examText: {
    fontSize: 25,
  },
});
