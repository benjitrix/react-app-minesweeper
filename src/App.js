import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Menu from './Components/Menu'
import Home from './Components/Home'
import Minesweeper from './Components/Minesweeper'

import './App.css';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Menu />
        <Route exact={true} path='/' component={Home} />
        <Route path='/Minesweeper' component={Minesweeper} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
