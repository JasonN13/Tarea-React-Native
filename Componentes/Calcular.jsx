import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from './InputField';
import OperationButton from './OperationButton';

const Calcular = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operator) => {
    switch (operator) {
      case '+':
        setResult(Number(num1) + Number(num2));
        break;
      case '-':
        setResult(Number(num1) - Number(num2));
        break;
      case '*':
        setResult(Number(num1) * Number(num2));
        break;
      case '/':
        setResult(Number(num1) / Number(num2));
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Simple</Text>
      <InputField value={num1} onChangeText={setNum1} placeholder="Número 1" />
      <InputField value={num2} onChangeText={setNum2} placeholder="Número 2" />
      <View style={styles.buttonContainer}>
        <OperationButton title="+" onPress={() => calculate('+')} />
        <OperationButton title="-" onPress={() => calculate('-')} />
        <OperationButton title="*" onPress={() => calculate('*')} />
        <OperationButton title="/" onPress={() => calculate('/')} />
      </View>
      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
  },
});

export default Calcular;
