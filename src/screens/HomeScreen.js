import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Button, Menu, Provider as PaperProvider } from 'react-native-paper';

const endpoints = ['joke', 'drJoke', 'erJoke'];

const HomeScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Select Joke Type</Button>}
        >
          {endpoints.map((endpoint) => (
            <Menu.Item
              key={endpoint}
              onPress={() => {
                setSelectedEndpoint(endpoint);
                closeMenu();
              }}
              title={endpoint}
            />
          ))}
        </Menu>
        <Text style={styles.selectedText}>Selected: {selectedEndpoint}</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Joke', { endpoint: selectedEndpoint })}
          style={styles.generateButton}
        >
          Generate Jokes
        </Button>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  selectedText: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  generateButton: {
    marginTop: 20,
  },
});

export default HomeScreen;
