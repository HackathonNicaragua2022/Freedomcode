import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image, Button } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import ListCard from "../components/ListCard";

const HomeScreen = () => {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/home.jpg")}
          style={{ width: 360, height: 350 }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Button
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ["rgba(6,246,222,1)", "#7CB9E8"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          containerStyle={{ paddingHorizontal: 6, width: "90%" }}
          buttonStyle={{ borderRadius: 10, height: 50 }}
          titleStyle={{ fontSize: 20 }}
        >
          Iniciar Examen
        </Button>
        <ListCard></ListCard>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  box: {
    width: "47%",
    height: "20%",
    borderRadius: 10,
    elevation: 6,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
