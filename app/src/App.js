import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Look at this really cool spinny thing we have here. Visible update.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Everything is fine. Or is it? No, is fine. Wait it's not.
        </a>
        <a
          className="App-link"
          href="https://cerulean-iguana-839.azurestaticwebsites.net/.auth/login/aad"
        >
          Log in with Azure AD
        </a>

      </header>
    </div>
  );
}

export default App;
