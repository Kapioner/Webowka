import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicExample from "./SearchMenu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClerkProvider } from '@clerk/clerk-react';
import LoginPanel from './LoginPanel';
import CollectionPage from './CollectionPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());*/

const PUBLISHABLE_KEY = "pk_test_ZGVsaWNhdGUtZG9lLTgwLmNsZXJrLmFjY291bnRzLmRldiQ"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
      <div style={{
    margin: '20px auto',
    maxWidth: '1600px',
    borderRadius: '12px',
    padding: '20px',
  }}>
        <LoginPanel />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
        </div>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
