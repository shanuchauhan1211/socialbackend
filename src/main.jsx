import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <GoogleOAuthProvider clientId='703183788651-b0v1hfips8e0316v3sa4oc67slmebqv8.apps.googleusercontent.com'>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </GoogleOAuthProvider>
    </AuthProvider>
  </React.StrictMode>,
)
