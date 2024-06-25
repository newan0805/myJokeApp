const initialState = {
    loggedIn: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, loggedIn: true, user: action.payload };
      case 'LOGOUT':
        return { ...state, loggedIn: false, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  