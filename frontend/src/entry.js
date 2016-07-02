import { Provider } from 'react-redux';
import ShoppingPage from './components/ShoppingPage';
import store from './store/store.js';

ReactDOM.render(
  <Provider store={store}>
    <ShoppingPage />
  </Provider>,
  document.getElementById('root')
);