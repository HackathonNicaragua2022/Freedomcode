import { View } from "react-native";
import React from "react";
import { SocialIcon } from "@rneui/base";

const SocialIconsList = () => {
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "center", paddingTop: 10 }}
    >
      <SocialIcon
        iconSize={25}
        iconType="font-awesome"
        style={{ paddingHorizontal: 10 }}
        type="google"
      />
      <SocialIcon
        iconSize={25}
        iconType="font-awesome"
        style={{ paddingHorizontal: 10 }}
        type="facebook"
      />
      <SocialIcon
        iconSize={25}
        iconType="font-awesome"
        style={{ paddingHorizontal: 10 }}
        type="twitter"
      />
    </View>
  );
};

export default SocialIconsList;
