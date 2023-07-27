import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer
});

export default reducers;

// This is the type definition for the state of the store
export type RootState = ReturnType<typeof reducers>;
