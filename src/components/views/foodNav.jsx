import React from 'react'
import "../style/foodNav.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function foodNav() {
    

    return (
      <div>
        <nav role="navigation" className="main-list-nav">
          <ul className="item-menu-nav">


            <Link
              className="item-list-nav"
              activeClass="active"
              to="FastFood"
              spy={true}
              smooth={true}
              offset={-120}
              duration={2}
            >
              <div href="#FastFood" className="item-anchor-nav">
                Appetizers
              </div>
            </Link>
            <Link
              className="item-list-nav"
              activeClass="active"
              to="Dishes"
              spy={true}
              smooth={true}
              offset={-130}
              duration={2}
            >
              <div href="#Dishes" className="item-anchor-nav  ">
                Dishes
              </div>
            </Link>

           

            <Link
              className="item-list-nav"
              activeClass="active"
              to="Drinks"
              spy={true}
              smooth={true}
              offset={-120}
              duration={2}
            >
              <div href="#Drinks" className="item-anchor-nav ">
                Drinks
              </div>
            </Link>
          </ul>
        </nav>
      </div>
    );
}
