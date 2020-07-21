import React , {useState} from 'react';
import "./components/style/App.css";
import NavBar from "./components/views/navbar.jsx";
import Imageintro from './components/views/introImage';

import Footer from './components/views/footer';
import ListItems from './components/views/listitems';
import FoodNav from './components/views/foodNav'


function App() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [foodOrder, setNewOrder] = useState([]);
 

  console.log(foodOrder);

  return (
    <>
      <div className="navbarCss">
        <NavBar 
        foodOrder={foodOrder}
         />
      </div>
      <div className="backgroundImgae">
        <div className="mainContent">
          <div id="back-to-top">
            <Imageintro />
          </div>
          <div id="navbar">
            <FoodNav />
          </div>
          <div id="listitem">
            <ListItems 
              foodOrder={foodOrder}
              setNewOrder={setNewOrder}
            />
          </div>
        </div>
        <div id="myFooter">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
