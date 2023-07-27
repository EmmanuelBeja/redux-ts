import { Provider } from 'react-redux';
import store from '../store/store';
import RepositoriesList from './RepositoriesList';

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;