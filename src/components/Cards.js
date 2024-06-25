import { View, StyleSheet } from 'react-native';
import React from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';

const Cards = ({index, joke}) => {
  return (
    <Card key={index} style={styles.card}>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} key={index} />
      <Card.Content key={index}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" key={index}/> */}
        <Text variant="titleLarge" key={index} style={styles.text}>{joke}</Text>
        {/* <Text variant="bodyMedium">Card content</Text> */}
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
        <Button>Cancel</Button>
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
    },
  });

export default Cards;
