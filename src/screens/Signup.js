import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Background from "../components/Background";
import { colors } from "../components/Constants";
import Field from "../components/Field";
import { Button } from "@rneui/themed";

const Signup = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "#153c4e",
            fontSize: 50,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Registrate
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: 10 }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "white",
            paddingTop: 100,
            height: 900,
            width: 460,
            borderTopLeftRadius: 130,
            alignItems: "center",
          }}
        >
          <Field placeholder="Correo/Usuario" keyboardType={"email-address"} />
          <Field placeholder="Contraseña" secureTextEntry={true} />
          <Field placeholder=" Confirmar contraseña" secureTextEntry={true} />

          <View style={{ width: "94%", alignItems: "center" }}>
            <Button
              onPress={() => alert("Account Created")}
              title="Registrarte"
              buttonStyle={{
                backgroundColor: colors.aqua,
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 30,
                height: 55,
              }}
              containerStyle={{
                width: 325,
                marginHorizontal: 50,
              }}
              titleStyle={{ fontWeight: "bold", fontSize: 18 }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                paddingHorizontal: 9,
              }}
            >
              Ya tienes una cuenta ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  color: colors.aqua,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Inicia Sesion
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
