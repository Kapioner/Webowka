import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { React, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginPanel() {

  const navigate = useNavigate();
  const location = useLocation();
  const inCollection = location.pathname === '/collection';
  return (
    <div className="app-container">
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px',
        borderBottom: '1px solid #eaeaea'
      }}>
        <h1 style={{ margin: 0 }}>Pokemon Card Collector</h1>
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }} onClick={() => {
  navigate('/');
}}>
                Login / Register
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <button style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }} onClick={() => navigate(inCollection ? '/' : '/collection')}>
      {inCollection ? 'Go Back' : 'Open Panel'}
    </button>
          </SignedIn>
        </div>
      </header>
      <main>
        <SignedOut>
          <h2> Please login in order to manage your collection and add new cards</h2>
        </SignedOut>
      </main>
    </div>
  )
}
