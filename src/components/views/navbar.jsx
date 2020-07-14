import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import PolymerIcon from '@material-ui/icons/Polymer';
//import MoreIcon from '@material-ui/icons/MoreVert';
import Slide from "@material-ui/core/Slide";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Dialog } from '@material-ui/core';
import OrderDetails from './receiptForm';
import TotalAmount from './totalamountOrder';
import "./main.css";


const useStyles = makeStyles((theme) => ({
    root:{
      backgroundColor:"hsl(0, 100%, 20%)",
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Transitioncard = React.forwardRef(function Transitioncard(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
export default function Navbar() {
    
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
   
    // const handleMobileMenuOpen = (event) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
       
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  const [openCart, setcartOpen] = useState(false);
  const handleOpenCart = () => {
    setcartOpen(true);
  }
  const handleCloseCart = () => {
    setcartOpen(false);
  };
 
    return (
      <div className={classes.grow}>
        <AppBar className={classes.root} position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              href="#back-to-top"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <PolymerIcon fontSize="large" />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Your Restaurant
            </Typography>
          
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleOpenCart} >
                <Badge badgeContent={4} color="secondary" >
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
              <div>
                <Dialog
                  fullScreen
                  open={openCart}
                  onClose={handleCloseCart}
                  TransitionComponent={Transitioncard}
                >
                  <OrderDetails />
                  <TotalAmount />

                  <div>
                    <button className="makepaymentBtn" onClick={handleCloseCart}>
                      Make Payment
                       </button>
                    <br />
                    <button className="continueShopBtn" onClick={handleCloseCart}>
                      Continues Shopping
                       </button>
                  </div>

                </Dialog>
              </div>

          
            </div>
            <div className={classes.sectionMobile}>
            <div>
                <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleOpenCart}>
                  <Badge badgeContent={3} color="secondary"  >
                    <AddShoppingCartIcon />
                  </Badge>
                </IconButton>
                <div>
                  <Dialog
                    fullScreen
                    open={openCart}
                    onClose={handleCloseCart}
                    TransitionComponent={Transitioncard}
                  > 
                       <OrderDetails/>
                        <TotalAmount/>
                       
                       <div>
                      <button className="makepaymentBtn" onClick={handleCloseCart}>
                        Make Payment
                       </button>
                      <br />
                      <button className="continueShopBtn" onClick={handleCloseCart}>
                        Continues Shopping
                       </button>
                       </div>
                  
                  </Dialog>
                </div>

            </div>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        
        

      </div>
    
      
    );
}
