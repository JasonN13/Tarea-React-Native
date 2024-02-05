import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Entrada = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Entrada;
