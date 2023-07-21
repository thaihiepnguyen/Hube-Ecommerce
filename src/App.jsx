import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './scss/App.scss';


export const BASE_URL = process.env.REACT_APP_API_URL;
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
