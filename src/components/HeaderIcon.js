import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Profilephoto = () => {
  return (
    <View
      style={{
        alignItems: "center",
        top: 100,
        justifyContent: "center",
        left: 8,
      }}
    >
      <Image style={styles.avatar} source={require("../assets/foot.png")} />
    </View>
  );
};

export default Profilephoto;
const styles = StyleSheet.create({
  avatar: {
    width: 200,
    height: 175,
  },
});
