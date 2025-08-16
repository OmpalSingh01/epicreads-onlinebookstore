import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../src/App.jsx'
import AuthProvider from './context/AuthProvider.jsx';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <AuthProvider provider>
  <div className='dark:bg-slate-900 dark:text-white'>
  <App />
  </div>
  </AuthProvider>
 </BrowserRouter>
    
  
);
