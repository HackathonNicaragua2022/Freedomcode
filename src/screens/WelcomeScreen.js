import { View, Text } from "react-native";
import React from "react";
import Background from "../components/Background";
import Btn from "../components/Btn";
import { colors } from "../components/Constants";

const WelcomeScreen = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 50 }}>Comenzemos</Text>
        <Text style={{ color: "white", fontSize: 47, marginBottom: 40 }}>
          Con su examen
        </Text>
        <View style={{ marginLeft: -10 }}>
          <Btn
            bgColor={colors.darkaqua}
            textColor="white"
            btnLabel="Iniciar Sesión"
            Press={() => props.navigation.navigate("Login")}
          />
          <Btn
            bgColor="white"
            textColor={colors.darkaqua}
            btnLabel="Registrarse"
            Press={() => props.navigation.navigate("Signup")}
          />
        </View>
      </View>
    </Background>
  );
};

export default WelcomeScreen;
