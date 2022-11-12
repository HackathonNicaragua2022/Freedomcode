import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Profilephoto from "../components/HeaderIcon";

const LoginScreen = () => {
  return (
    <View>
      <LinearGradient
        colors={["rgba(6,246,222,1)", "rgba(7,74,67,1)"]}
        style={styles.background}
      >
        <Profilephoto />
        <View style={styles.bottomContainer}></View>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    height: "100%",
  },
  bottomContainer: {
    backgroundColor: "white",
    height: "50%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    top: "30%",
  },
  logo: {
    width: 120,
    height: 120,
    left: "100%",
  },
});
