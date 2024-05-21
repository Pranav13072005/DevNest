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
import Courses from './Pages/Courses/Courses';
import Ourstory from './Pages/Ourstory/Ourstory';

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
  },
  {
    path: "courses",
    element: <Courses/>
  },
  {
    path: "ourstory",
    element: <Ourstory/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

