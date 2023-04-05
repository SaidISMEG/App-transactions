import React from 'react';
import { View, Text } from 'react-native';

export default function TransactionDisplay(props) {
  const { date, amount, type, description, image } = props.formData;

  return (
    <View>
      <Text>Date: {date}</Text>
      <Text>Amount: {amount}</Text>
      <Text>Type: {type}</Text>
      <Text>Description: {description}</Text>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
