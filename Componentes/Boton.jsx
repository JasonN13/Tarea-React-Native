import React from 'react';
import { Button } from 'react-native';

const Boton = ({ title, onPress }) => {
  return <Button title={title} onPress={onPress} />;
};

export default Boton;
