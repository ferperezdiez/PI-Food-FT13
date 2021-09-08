import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store.js';
import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';

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



