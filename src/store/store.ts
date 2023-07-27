import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducers from './reducer';
import { loadState, saveState } from './persistStore'

const loggerMiddleware = createLogger()
const persistedState = loadState()

const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

store.subscribe(() => {
  saveState(store.getState())
})

export default store;