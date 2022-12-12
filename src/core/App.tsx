import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreContext } from 'core/StoreContext';
import { Routes } from './Routes';
import '../App.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <StoreContext>
          <Routes />
        </StoreContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
