import React from 'react';
import GooglePayButton from './GooglePayButton';
import './App.css';

function App() {
  return (
    <React.Fragment>
      
    <div className="App">
      <header className="App-header">
        <h1>Google Pay UPI Payment Gateway</h1>
      </header>
      <main>
        <GooglePayButton />
      </main>
    </div>
    </React.Fragment>
  );
}

export default App;
