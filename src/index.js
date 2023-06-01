import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import Main from './main';
import {BrowserRouter} from "react-router-dom" 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
      <ToastContainer/>
  </BrowserRouter>
  </Provider>

);

