import { Route, Routes} from 'react-router-dom';

import React, { useState } from 'react';

import Home from './components/Home';

import './styles.css'
import Character from './components/Characters/character';

function App() {


  const [value, setValue] = useState()

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= {value} element={<Character />}/>
      </Routes>
    </div>
  );
}

export default App;
