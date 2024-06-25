// Action types
export const FETCH_JOKES_REQUEST = 'FETCH_JOKES_REQUEST';
export const FETCH_JOKES_SUCCESS = 'FETCH_JOKES_SUCCESS';
export const FETCH_JOKES_FAILURE = 'FETCH_JOKES_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Joke actions
export const fetchJokesRequest = () => ({
  type: FETCH_JOKES_REQUEST,
});

export const fetchJokesSuccess = (jokes) => ({
  type: FETCH_JOKES_SUCCESS,
  payload: jokes,
});

export const fetchJokesFailure = (error) => ({
  type: FETCH_JOKES_FAILURE,
  error,
});

export const fetchJokes = (endpoint) => {
  return async (dispatch) => {
    dispatch(fetchJokesRequest());
    try {
      const fetchedJokes = await getJokes(endpoint);
      dispatch(fetchJokesSuccess(fetchedJokes));
    } catch (error) {
      dispatch(fetchJokesFailure(error.toString()));
    }
  };
};

// Login actions
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const login = (credentials) => {
  return (dispatch) => {
    dispatch(loginRequest());
    // Simulate login process
    setTimeout(() => {
      if (credentials.username === 'user' && credentials.password === 'pass') {
        dispatch(loginSuccess({ username: credentials.username }));
      } else {
        dispatch(loginFailure('Invalid username or password'));
      }
    }, 1000);
  };
};

// You need to import the getJokes function from your services/jokeService.js
import { getJokes } from '../services/jokeService';
