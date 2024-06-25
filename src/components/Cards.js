import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const Cards = ({ joke }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Text variant="titleLarge" style={styles.text}>{joke}</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    width: '90%',
  },
  text: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Cards;
