import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './src/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {  HashRouter  } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app/assets/css/global.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <App />
    <ToastContainer autoClose={2000} />
  </HashRouter >
);

reportWebVitals();
