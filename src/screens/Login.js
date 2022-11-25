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
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: "white",
            paddingTop: 100,
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 40, color: colors.aqua, fontWeight: "bold" }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>
          <Field placeholder="Email/Username" keyboardType={"email-address"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{ alignItems: "flex-end", width: "78%", paddingRight: 24 }}
          >
            <Text
              style={{ color: colors.aqua, fontWeight: "bold", fontSize: 16 }}
            >
              Forgot Password?
            </Text>
            <View style={{ width: "94%", alignItems: "center" }}>
              <Button
                onPress={() => alert("Logged in")}
                title="Login"
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
                Don't have an account ?
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
                  Signup
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
