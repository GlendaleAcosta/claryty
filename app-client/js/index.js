import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
// import thunk from 'redux-thunk';
import '../styles/main.scss';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const middleware = applyMiddleware(reduxPromise);
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
