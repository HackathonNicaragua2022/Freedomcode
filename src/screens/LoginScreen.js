import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Profilephoto from "../components/HeaderIcon";
import { Input, Button } from "@rneui/base";
import SocialIconsList from "../components/SocialIcons";

const LoginScreen = () => {
  return (
    <View>
      <LinearGradient
        colors={["rgba(6,246,222,1)", "rgba(7,74,67,1)"]}
        style={styles.background}
      >
        <Profilephoto />
        <View style={styles.bottomContainer}>
          <Input
            placeholder="Email"
            leftIcon={{ type: "materialicons", name: "email" }}
            leftIconContainerStyle={{ paddingHorizontal: 5 }}
          />
          <Input
            placeholder="Password"
            leftIcon={{ type: "materialicons", name: "lock" }}
            leftIconContainerStyle={{ paddingHorizontal: 5 }}
          />
          <Button
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["rgba(6,246,222,1)", "rgba(7,74,67,1)"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            containerStyle={{ paddingHorizontal: 6 }}
            buttonStyle={{ borderRadius: 10, height: 50 }}
            titleStyle={{ fontSize: 20 }}
          >
            Login
          </Button>
          <SocialIconsList />
        </View>
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
    paddingHorizontal: 15,
    paddingTop: 90,
  },
  logo: {
    width: 120,
    height: 120,
    left: "100%",
  },
});
