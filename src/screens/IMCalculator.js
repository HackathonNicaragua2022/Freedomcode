import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Input, Image } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default class IMCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { peso: "", altura: "", info: "", resultado: 0 };
    this.calculaIMC = this.calculaIMC.bind(this);
  }
  calculaIMC() {
    let imc = this.state.peso / (this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado = imc;
    if (s.resultado < 18.5) {
      s.info = "Delgado";
    } else if (s.resultado < 24.9) {
      s.info = "Normal";
    } else if (s.resultado < 29.9) {
      s.info = "Sobrepeso";
    } else if (s.resultado < 39.9) {
      s.info = "Obesidad";
    } else if (s.resultado > 39.9) {
      s.info = "Obesidad Grave";
    }
    this.setState(s);
  }

  clear = () => {
    this.setState({
      peso: "",
      altura: "",
      resultado: 0,
      info: "",
    });
  };

  render() {
    return (
      <SafeAreaView style={{ margin: 10 }}>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text h4 h4Style={{ textAlign: "center" }}>
            Calculadora de IMC
          </Text>
        </View>
        <Text style={styles.text}> Altura (m)</Text>
        <Input
          inputStyle={styles.textInput}
          onChangeText={(altura) => this.setState({ altura })}
          value={this.state.altura}
          placeholder="Ejemplo: 1.60"
          keyboardType={"numeric"}
          leftIcon={{ type: "material-community", name: "human-male-height" }}
        />
        <Text style={styles.text}> Peso (kg)</Text>
        <Input
          inputStyle={styles.textInput}
          onChangeText={(peso) => this.setState({ peso })}
          value={this.state.peso}
          placeholder="Ejemplo: 61.0"
          keyboardType={"numeric"}
          leftIcon={{ type: "font-awesome-5", name: "weight-hanging" }}
        />
        <Separator />
        <Button
          onPress={this.calculaIMC}
          title="Calcular"
          accessibilityLabel="Calcular IMC"
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ["#006A4E", "#4FFFB0"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
        />
        <Separator />
        <Button
          onPress={this.clear}
          title="Limpiar"
          accessibilityLabel="limpiar los valores"
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ["#FF033E", "#F44336"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
        />
        <Separator />

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.input}>
              IMC: {this.state.resultado.toFixed(2)}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.input}>Estado: {this.state.info}</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "45%",
          }}
        >
          <Image
            source={require("../assets/imc.png")}
            style={{ width: 250, height: 250 }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 20,
  },
  separator: {
    marginVertical: 8,
  },
  textInput: {
    height: 30,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 20,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    paddingLeft: 10,
  },
});
