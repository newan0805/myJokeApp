const initialState = {
    jokes: [],
    loading: false,
  };
  
  const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_JOKES_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_JOKES_SUCCESS':
        return { ...state, loading: false, jokes: action.payload };
      case 'FETCH_JOKES_FAILURE':
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default jokesReducer;
  