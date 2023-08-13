import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './scss/App.scss';
import WebFont from 'webfontloader'
export const BASE_URL = process.env.REACT_APP_API_URL;


const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'Roboto']
      }
    })
  }, [])
  return <RouterProvider router={router} />;
};

export default App;
