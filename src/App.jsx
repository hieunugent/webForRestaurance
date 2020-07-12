import React from 'react';
import './App.css';
import NavBar from "./components/views/navbar.jsx";
import Imageintro from './components/views/introImage';

import Items from './components/views/item';
import ListItems from './components/views/listitems';
import FoodNav from './components/views/foodNav'


function App() {


 

   

  return (
    <>
      <div className="navbarCss">
        <NavBar />
      </div>
      <div className="mainContent">
        <div id="back-to-top">
          <Imageintro />
        </div>
        <div id="navbar">
          <FoodNav />
        </div>
        <div id="listitem" >
          <ListItems />
        </div>
      </div>
      
     
    </>
  );
}

export default App;
