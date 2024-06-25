import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import jokesReducer from './jokesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  jokes: jokesReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
