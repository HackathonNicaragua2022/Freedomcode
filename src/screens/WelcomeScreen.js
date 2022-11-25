import { View, Text } from "react-native";
import React from "react";
import Background from "../components/Background";
import Btn from "../components/Btn";
import { colors } from "../components/Constants";

const WelcomeScreen = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 64 }}>Let's start</Text>
        <Text style={{ color: "white", fontSize: 64, marginBottom: 40 }}>
          Coding
        </Text>
        <Btn
          bgColor={colors.darkaqua}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor="white"
          textColor={colors.darkaqua}
          btnLabel="Signup"
          Press={() => props.navigation.navigate("Signup")}
        />
      </View>
    </Background>
  );
};

export default WelcomeScreen;