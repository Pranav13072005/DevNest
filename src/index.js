import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './Pages/About/AboutPage';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <AboutPage/>
  },
  {
    path: "signup",
    element: <Signup/>
  },
  {
    path: "login",
    element: <Login />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

