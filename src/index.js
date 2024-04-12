import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage';
import ProfilePage from './Components/ProfilePage';
import WhatBringsPage from './Components/WhatBringsPage';
import VerifyEmailPage from './Components/VerifyEmailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <SignUpPage />
      },
      {
        path: "profile",
        element: <ProfilePage />
      },
      {
        path: "what-brings-you-here",
        element: <WhatBringsPage />
      },
      {
        path: "verify-email",
        element: <VerifyEmailPage />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

