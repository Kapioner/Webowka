import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { React, useState } from "react";

export default function LoginPanel() {
  const [activeView, setActiveView] = useState('main');
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
              }} onClick={() => setActiveView('main')}>
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
              }} onClick={() => setActiveView('collection')}>
                Open Panel
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
