import React from 'react'
import "./foodNav.css"


export default function foodNav() {
    

    return (
        <div >
            <nav  role="navigation" className="main-list-nav">
            <ul className="item-menu-nav">
                    <li className="item-list-nav  ">
                        <a href="#Dishes" className="item-anchor-nav  ">
                            Dishes 
                    </a>
                    </li>
                    <li className="item-list-nav">
                        <a href="#Drinks" className="item-anchor-nav " >
                            Drinks
                    </a>
                    </li>
                    <li className="item-list-nav">
                        <a href="#FastFood" className="item-anchor-nav">
                         Appetizer
                    </a>
                    </li>  
                    <li className="item-list-nav">
                        <a href="#Dishes" className="item-anchor-nav  ">
                            Dishes
                    </a>
                    </li>
                    <li className="item-list-nav">
                        <a href="#Drinks" className="item-anchor-nav " >
                            Drinks
                    </a>
                    </li>
                    <li className="item-list-nav">
                        <a href="#Deserts" className="item-anchor-nav">
                            Deserts
                    </a>
                    </li>   
                       
            </ul>

            </nav>
        </div>
    )
}
