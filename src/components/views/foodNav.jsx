import React from 'react'
import "../style/foodNav.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({


  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },



}));
export default function foodNav() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

    return (
      <>
      <div className={classes.sectionMobile}>
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
              <div  className="item-anchor-nav">
                Appetizers
              </div>
            </Link>
            <Link
              className="item-list-nav"
              activeClass="active"
              to="Dishes"
              spy={true}
              smooth={true}
              offset={-120}
              duration={20}
            >
              <div href="#Dishes" className="item-anchor-nav">
                Dishes
              </div>
            </Link>
            {/* <Link
              className="item-list-nav"
              activeClass="active"
              to="Noodle"
              spy={true}
              smooth={true}
              offset={-120}
              duration={20}
            >
              <div href="#Noodle" className="item-anchor-nav  ">
                Noodles
              </div>
            </Link>
            */}

            <Link
              className="item-list-nav"
              activeClass="active"
              to="Drinks"
              spy={true}
              smooth={true}
              offset={-120}
              duration={20}
            >
              <div href="#Drinks" className="item-anchor-nav ">
                Drinks
              </div>
            </Link>
          </ul>
        </nav>
      </div>

        <div className={classes.sectionDesktop}>
          <nav role="navigation" className="main-list-nav">
            <ul className="item-menu-nav-desktop">


              <Link
                className="item-list-nav"
                activeClass="active"
                to="FastFood"
                spy={TextareaAutosize}
                smooth={true}
                offset={-10}
                duration={2}
              >
                <div className="item-anchor-nav">
                  Appetizers
              </div>
              </Link>
              <Link
                className="item-list-nav"
                activeClass="active"
                to="Dishes"
                spy={true}
                smooth={true}
                offset={-10}
                duration={20}
              >
                <div href="#Dishes" className="item-anchor-nav">
                  Dishes
              </div>
              </Link>
              {/* <Link
              className="item-list-nav"
              activeClass="active"
              to="Noodle"
              spy={true}
              smooth={true}
              offset={-120}
              duration={20}
            >
              <div href="#Noodle" className="item-anchor-nav  ">
                Noodles
              </div>
            </Link>
            */}

              <Link
                className="item-list-nav"
                activeClass="active"
                to="Drinks"
                spy={true}
                smooth={true}
                offset={-10}
                duration={20}
              >
                <div href="#Drinks" className="item-anchor-nav ">
                  Drinks
              </div>
              </Link>
            </ul>
          </nav>
        </div>      


</>

    );
}
