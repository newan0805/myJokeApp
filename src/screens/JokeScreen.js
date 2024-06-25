import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getJokes } from '../services/jokeService';
import Cards from '../components/Cards';

const JokeScreen = ({ route }) => {
  const { endpoint } = route.params;
  const dispatch = useDispatch();
  const { jokes, loading } = useSelector(state => state.jokes);

  const fetchJokes = async () => {
    dispatch({ type: 'FETCH_JOKES_REQUEST' });
    try {
      const fetchedJokes = await getJokes(endpoint);
      dispatch({ type: 'FETCH_JOKES_SUCCESS', payload: fetchedJokes });
    } catch (error) {
      dispatch({ type: 'FETCH_JOKES_FAILURE', error });
    }
  };

  useEffect(() => {
    fetchJokes();
  }, [endpoint]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button mode="contained" onPress={fetchJokes} style={styles.reloadButton}>
        Reload Jokes
      </Button>
      <View style={styles.jokesContainer}>
        {loading ? (
          <ActivityIndicator animating={true} />
        ) : (
          jokes.map((joke, index) => (
            <Cards key={index} joke={joke} />
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  reloadButton: {
    marginBottom: 20,
    width: '90%',
  },
  jokesContainer: {
    alignItems: 'center',
    width: '100%',
  },
});

export default JokeScreen;
