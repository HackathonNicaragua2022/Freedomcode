import { StyleSheet, View, StatusBar } from "react-native";
import IMCalculator from "./src/screens/IMCalculator";

export default function App() {
  return (
    <View style={styles.container}>
      <IMCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
