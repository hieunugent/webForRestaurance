import React, { useState } from 'react'
import Paper from "@material-ui/core/Paper";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
// import springRoll from "../img/food/springroll.jpg"
import listFood from "../data/fooddata"
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";

import { TextField } from '@material-ui/core';
import Slide from "@material-ui/core/Slide";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./main.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "2px",
    maxWidth: "auto",
    color: "hsl(0, 87 %, 3 %)",
   
  },

  paperorder: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: 0,
    maxWidth: "auto",
  },
  image: {
    width: "auto",
    height: "auto",
  
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "90%",
    maxHeight: "100%",
    
    
  },

  appBar: {
    position: "relative",
    backgroundColor: "hsl(0, 100%, 20%)",
  },
  title: {

    marginLeft: theme.spacing(10),
    marginRight: "auto",
    flex: 1,
  },
  closeDialogbtn: {
    marginRight: "0.5%",
  },
  bottomLayer:{
    zIndex:"1",
  },
  
}));


const ListForms =(props)=>{
      const classes = useStyles();
      const [quantityOrder, setQuantity] = useState(1);



      const addValue=()=>{
        setQuantity(quantityOrder+1);
      }
      const minusValue=()=> {
        setQuantity(quantityOrder - 1);
      }
      const handleChange=()=> {
        setQuantity(quantityOrder);
      }
      const [open, setOpen] = useState(false);
      const handleClickOpen = () => {
        console.log("want to order");
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
      
      const handleSubmit = (event)=>{
         setOpen(false);
          console.log(event.target);

      };



    return (
      <>
        {/* list food page */}
        <div onClick={handleClickOpen} >
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid xs={4} item className={classes.bottomLayer}>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={props.foodImage}
                  />
                </ButtonBase>
              </Grid>
              <Grid xs={8} item container>
                <Grid item xs={10} container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      # {props.foodId}.{props.foodName}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {props.foodDescription}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    ></Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      style={{ cursor: "pointer" }}
                    ></Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">{props.foodPrice}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        {/* Order page */}
        <div>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <Button
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <ArrowBackIcon />
                  back
                </Button>
                <Typography
                  variant="h6"
                  className={classes.title}
                  name="foodName"
                  value={props.foodName}
                >
                  # {props.foodId}.{props.foodName}
                </Typography>
                {/* <div className={classes.closeDialogbtn}>
                  <Button autoFocus color="inherit" onClick={handleClose}>
                    <HighlightOffIcon />
                  </Button>
                </div> */}
              </Toolbar>
            </AppBar>

            <div>
              <img
                className="imageModify"
                src={props.foodImage}
                alt="backgroundLogo"
              />
            </div>
            <div className="ordercss">
              <Paper className={classes.paperorder}>
                <Grid item xs container direction="column">
                  <Grid item>
                    <Typography variant="h2">{props.foodPrice}</Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {props.foodDescription}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      style={{ cursor: "pointer" }}
                    ></Typography>
                  </Grid>
                </Grid>

                <div>
                  <label htmlFor="quantity" className="required">
                    Quantity
                  </label>
                  <br />
                  <div className="inputAmountCss">
                    <button id="decButton" onClick={minusValue}>
                      -
                    </button>
                   
                      <input
                      className="inputfieldcss"
                        type="number"
                        name="quantity"
                        step="1"
                        min="1"
                        value={quantityOrder}
                        onChange={handleChange}
                      />
                
                    <button id="incButton" onClick={addValue}>
                      +
                    </button>
                  </div>
                </div>
              </Paper>
              <button className="addbtnCart" onClick={handleSubmit}>
                Add to cart
              </button>
              <button className="cancelbtn" onClick={handleClose}>
                Cancel
              </button>
            </div>

            {/* <ListItem button>
              <ListItemText
                primary="Default notification ringtone"
                secondary="Tethys"
              />
            </ListItem> */}
          </Dialog>
        </div>
      </>
    );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function listitems() {
           
    return(
      <>
        <section >
        <div className="outer-title-section">
          <div id="Dishes" className="titlesection">
            <div className="inner-title-section">

            <h3 className="sectionTitle"> Main Dishes</h3>
            </div>
          </div>
        </div>
          
          <div  className="section-food"> 
            {listFood.filter(list => list.foodType === "dish").map((list, index) => {
              return (
                <div key={`${index}-${list.foodName}`} >
                  <ListForms
                    id={index}
                    value={list}
                    foodName={list.foodName}
                    foodDescription={list.foodDescription}
                    foodId={list.foodId}
                    foodPrice={list.foodPrice}
                    foodImage={list.foodImage}
                    onClick={onclick}
                  />

                </div>
              );
            }
            )}
          </div>
          <div className="outer-title-section">

          <div id="Drinks" className="titlesection">
            <div className="inner-title-section">
            <h3 className="sectionTitle"> Drinks Options</h3>
            </div>
            </div>
          </div>
     
          <div  className="section-food">
         
          {listFood.filter(list => list.foodType === "drinks").map((list, index) => {
            return (
              <div key={`${index}-${list.foodName}`} >
                <ListForms
                  id={index}
                  value={list}
                  foodName={list.foodName}
                  foodDescription={list.foodDescription}
                  foodId={list.foodId}
                  foodPrice={list.foodPrice}
                  foodImage={list.foodImage}
                  onClick={onclick}
                />

              </div>
            );
          }
          )}
          </div>

          <div className="outer-title-section">

          <div id="FastFood" className="titlesection">
          <div  className="inner-title-section">
              <h3 className="sectionTitle"> Fast Food</h3>
          </div>
           
            </div>

          </div>
          <div  className="section-food">
          {listFood.filter(list => list.foodType === "fastfood").map((list, index) => {
            return (
              <div key={`${index}-${list.foodName}`} >
                <ListForms
                  id={index}
                  value={list}
                  foodName={list.foodName}
                  foodDescription={list.foodDescription}
                  foodId={list.foodId}
                  foodPrice={list.foodPrice}
                  foodImage={list.foodImage}
                  onClick={onclick}
                />

              </div>
            );
          }
          )}
          </div>
        </section>
    </>
        
        );
    }
    

