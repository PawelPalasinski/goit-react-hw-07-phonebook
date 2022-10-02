import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import './index.css';


import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import {apiSlice} from './features/api/apiSlice'


console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
