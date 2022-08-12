import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [tuPeso, setTupeso] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [result, setResult] = useState("");

  const calculateIMC = () => {
    const estatura = parseFloat(tamaño) / 100;
    const peso = parseFloat(tuPeso);

    const imc = peso / (estatura * estatura);
    if (imc < 18.5) {
      return setResult(
        'Tu IMC: ' + imc +': Deberias Comer mas'
      );
    } else if (imc > 18.5 && imc < 24.9) {
      return setResult(
        'Tu IMC: ' + imc + ': Te ves bien'
      );
    } else if (imc > 25.0 && imc < 29.9) {
      return setResult(
        'Tu IMC: ' + imc + ': Deberias dejar de comer'
      );
    } else if (imc > 30.0) {
      return setResult(
        'Tu IMC: ' + imc +  ': Has ejercicio tienes obecidad'
      );
    }
  };

  return (
    <View style={styles.firtscontainer}>
      <Text style={styles.tittle}>Calculadora de IMC</Text>
      <View style={styles.secondContainer}>
        <Text style={styles.text}>Ingrese su peso</Text>
        <TextInput
          style={styles.input}
          value={tuPeso}
          keyboardType="number-pad"
          onChangeText={(e) => setTupeso(e)}
        />

        <Text style={styles.text}>
          Ingrese su tamaño
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={tamaño}
          onChangeText={(e) => setTamaño(e)}
        />
      </View>
      <Button
        title="Calcular"
        onPress={() => calculateIMC()}
      />
      <TextInput
        style={styles.mostrarResultado}
        value={result}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  firtscontainer: {
    flex: 6,
    backgroundColor: "#C6BFDA",
    alignItems: "center",
    paddingTop: 60,
  },
  secondContainer: {
    width: 420,
    height: "30%",
    backgroundColor: "#c5f1",
    justifyContent: "center",
    alignItems: "center",
  },
  tittle: {
    color: "#0C0B0C",
    fontSize: 45

  },
  text: {
    color: "#0C0B0C",
    fontSize: 20,
  },
  input: {
    height: 40,
    width: "60%",
    backgroundColor: "#D793E3",
    fontSize: 17,
    borderRadius: 15,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  mostrarResultado: {
    height: 120,
    width: 420,
    backgroundColor: "#D793E3",
    color: "#000",
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
