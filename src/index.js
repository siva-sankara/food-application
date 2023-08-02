import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from '../src/body components/mainpage/MainPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Order from './pages/Order';
import Banner from './body components/banner/Banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

