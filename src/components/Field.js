import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { colors } from "./Constants";

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: "white",
        paddingHorizontal: 15,
        width: "70%",
        height: 50,
        marginBottom: 20,
        backgroundColor: colors.darkaqua,
        fontSize: 18,
      }}
      placeholderTextColor="white"
    ></TextInput>
  );
};

export default Field;
