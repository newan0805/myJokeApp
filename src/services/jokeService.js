import axios from 'axios';

const API_KEY = '1278587e15msh413a0e7d0a14f2cp1c5d87jsn4abca5b861d0';

const apiClient = axios.create({
  headers: {
    'X-RapidAPI-Host': 'jokes-always.p.rapidapi.com',
    'X-RapidAPI-Key': API_KEY,
  },
});

export const getJokes = async (endpoint) => {
  try {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      promises.push(apiClient.get(`https://jokes-always.p.rapidapi.com/${endpoint}`));
    }
    const responses = await Promise.all(promises);
    return responses.map(response => response.data.data); 
  } catch (error) {
    console.error(error);
    return [];
  }
};
