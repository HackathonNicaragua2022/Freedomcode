import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";

export default function App() {
  return (
    <View style={styles.container}>
      <Text h1 h1Style={{ fontSize: 24 }}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
