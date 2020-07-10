import React from 'react';
import './App.css';
import NavBar from "./components/views/navbar.jsx";
import Imageintro from './components/views/introImage';

import Items from './components/views/item';
import ListItems from './components/views/listitems';
function App() {
  return (
    <>
      <div className="navbarCss">
        <NavBar />
      </div>
      <Imageintro />
      <div>
        <ListItems />
      </div>
     
    </>
  );
}

export default App;
