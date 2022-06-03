import { Route, Routes} from 'react-router-dom';

import React, { useState } from 'react';

import Home from './components/Home';

import Character from './components/Characters/character';
import Ships from './components/Ships/ships'
import Worlds from './components/Worlds/worlds'

function App() {

  
  

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= 'characters' element={<Character />}/>
        <Route path= 'ships' element={<Ships />} />
        <Route path= 'worlds' element={<Worlds />} />
      </Routes>
    </div>
  );
}

export default App;
