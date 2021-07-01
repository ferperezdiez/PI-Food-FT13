import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
    <App/>      
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);



