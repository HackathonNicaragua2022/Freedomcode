import { StyleSheet, View} from "react-native";
import Obs from "./exams/antecedent"

export default function App() {
  return (
    <View style={styles.container} >
      <Obs></Obs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
