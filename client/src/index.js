import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import App from './App';
// import './normalize.css';

import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <App />
    </Provider>
  </BrowserRouter>,
);
