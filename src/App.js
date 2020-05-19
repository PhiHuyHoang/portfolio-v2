import React from 'react';
import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Test from './components/Test';


function App() {
  return (
    <div className="App">
      {/* <header>
        <p>
          Hi, I am Hoang Phi, a DevOps engineer and a full-stack developer from Budapest. I do code stuffs.
        </p>
      </header>
      <About/> */}
      <Test/>
    </div>
  );
}

export default App;
