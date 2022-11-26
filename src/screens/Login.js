import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Background from "../components/Background";
import { colors } from "../components/Constants";
import Field from "../components/Field";
import { Button } from "@rneui/themed";

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "#153c4e",
            fontSize: 50,
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Inicio de Sesión
        </Text>
        <View
          style={{
            backgroundColor: "white",
            paddingTop: 100,
            height: "100%",
            width: 460,
            borderTopLeftRadius: 130,
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 40, color: colors.aqua, fontWeight: "bold" }}
          >
            Bienvenido
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Inicia sesion en tu cuenta
          </Text>
          <Field placeholder="Correo/Usuario" keyboardType={"email-address"} />
          <Field placeholder="Contraseña" secureTextEntry={true} />
          <View
            style={{ alignItems: "flex-end", width: "78%", paddingRight: 24 }}
          >
            <Text
              style={{ color: colors.aqua, fontWeight: "bold", fontSize: 16 }}
            >
              Olvidaste tu contraseña?
            </Text>
            <View style={{ width: "94%", alignItems: "center" }}>
              <Button
                onPress={() => alert("Logged in")}
                title="Iniciar Sesion"
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
                  marginTop: 195,
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
                No tienes una cuenta ?
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Signup")}
              >
                <Text
                  style={{
                    color: colors.aqua,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Registrate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
