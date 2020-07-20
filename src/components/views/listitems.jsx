import React, { useState } from 'react'
import Paper from "@material-ui/core/Paper";
import {  makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
// import springRoll from "../img/food/springroll.jpg"
import listFood from "../data/fooddata"
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import{Link} from "react-scroll";
import Slide from "@material-ui/core/Slide";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import OptionSelectionForm from "./optionSeclectForm";
import "../style/main.css";
import "../style/listitems.css";
import "../style/cart.css";
const useStyles = makeStyles((theme) => ({
  root: {
    
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(20),
    },
    alignItems: "center",
    marginLeft:"1rem",
    marginRight:"1rem",
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    marginBottom: "10px",
    maxWidth: "100%",
    maxHeight: "auto", 
    color: "hsl(0, 87 %, 3 %)",
    
  },

  paperorder: {
    display:"block",
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: 0,
    maxWidth: "100%",
    
  },
  image: {
    display:"block", 
    width: theme.spacing(16),
    height: "auto",
    backgroundColor:"red", 
   
  },
  img: {
    margin:0,
    display: "flex",
    height:"80%",
    maxWidth: "100%",
    maxHeight: "100px",
    backgroundColor:"green",
    alignItems: "center",


  },
  namefood:{
    maxHeight:"10px",
    width:"100%",
    maxWidth:"100%",
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

const ListForms =(props)=>{
  
       const classes = useStyles();
       const [quantityOrder, setQuantity] = useState(1);
       const [open, setOpen] = useState(false);
       const handleClickOpen = () => {
         setOpen(true);
       };

       const handleClose = () => {
         setOpen(false);
       };
       const initialOpiton = {
        Onion: "very little",
        Garlic: "Medium Amount",
        Spicy: "spicy",
        Meat: "normal"
       }
       const [OrderDetailList, setOrderList] = useState(initialOpiton);
       // console.log(OrderDetailList);


       const [foodOrder, setNewOrder] = useState([]);
      
  const addnewFoodList = (newItem) => {
    setNewOrder(prevList => {
      return [...prevList, newItem];
    });
  };
          const initialfoodDefault = {
          id: "",
          foodName: `${props.foodName}`,
          foodOption: "",
          price: `${props.price}`,
            };
         const [fooditem, setfooditem] = useState(initialfoodDefault);

         const saveOrder = (event) => {
         
          setOpen(false);
          setfooditem({
            ...fooditem, 
            foodOption: OrderDetailList
          });
           addnewFoodList(fooditem);
         
        };
 
        console.log(foodOrder);
         const addnewFood = (newFood) => {
           
         };
         const handleSubmit = (event) => {
           
         };      
      const addValue=()=>{
        if(quantityOrder<50){
          setQuantity(quantityOrder + 1);

        }
      }
      const minusValue=()=> {
        if(quantityOrder>1){
          setQuantity(quantityOrder - 1);

        }
      }
      const handleChange=()=> {
        setQuantity(quantityOrder);
      }
     
    return (
      <>
        {/* this section for mobile view */}

        {/* list food page */}
        <div onClick={handleClickOpen} className={classes.root}>
          <Paper className={classes.paper} elevation={0}>
            <Grid item className={classes.bottomLayer}>
              <ButtonBase className={classes.image}>
                <figure className={classes.img}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={props.foodImage}
                  />
                </figure>
                <div className="price">{props.foodPrice}</div>
              </ButtonBase>
              <Typography
                className={classes.namefood}
                gutterBottom
                variant="body1"
                align="center"
                display="inline"
                noWrap
              >
                # {props.foodId}.{props.foodName}
              </Typography>
            </Grid>
          </Paper>
        </div>

        {/* Order page */}
        <div className="dialog-section">
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
              <Paper className={classes.paperorder} elevation={0}>
                <Grid item xs container direction="column">
                  <Grid item>
                    <Typography variant="h2" name="price">
                      {props.foodPrice}
                    </Typography>
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
                  <Grid className="OptionSelectForm" >
                    

                    <OptionSelectionForm foodName={props.foodName} foodType={props.foodType} OrderDetailList={OrderDetailList} setOrderList={setOrderList}/>
                   
                    
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
              <button
                className="addbtnCart"
                ordername={props.foodName}
                orderquantity={quantityOrder}
                orderdetaillist={OrderDetailList}
                onClick={saveOrder}
                
              >
                Add to cart
              </button>
              <br />
              <button className="cancelbtn" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </Dialog>
        </div>
      </>
    );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
    
export default function listitems() {


    return (
      <div>
        <section>

        <section id="FastFood">
          <div className="outer-title-section">
            <div className="titlesection">
              <div className="inner-title-section">
                <h3 className="sectionTitle"> Appetizers</h3>
              </div>
            </div>
          </div>

          <div className="section-food">
            {listFood
              .filter((list) => list.foodType === "fastfood" )
              .map((list, index) => {
                return (
                  <div key={`${index}-${list.foodName}`} className="itemFood">
                    <ListForms
                      id={index}
                      value={list}
                      foodName={list.foodName}
                      foodType={list.foodType}
                      foodDescription={list.foodDescription}
                      foodId={list.foodId}
                      foodPrice={list.foodPrice}
                      foodImage={list.foodImage}
                      price={list.price}
                      foodOption={list.foodOption}
                      onClick={onclick}
                    /> 
                  </div>
                );
              })}
          </div>
        </section>
        
          <section id="Dishes">
            <div className="outer-title-section">
              <div className="titlesection">
                <div className="inner-title-section">
                  <h3 className="sectionTitle"> Main Dishes</h3>
                </div>
              </div>
            </div>

            <div className="section-food">
              {listFood
                .filter((list) => list.foodType === "dish" || list.foodType === "Noodle")
                .map((list, index) => {
                  return (
                    <div key={`${index}-${list.foodName}`} className="itemFood">
                      <ListForms
                        id={index}
                        value={list}
                        foodName={list.foodName}
                        price={list.price}
                        foodType={list.foodType}
                        foodOption={list.foodOption}
                        foodDescription={list.foodDescription}
                        foodId={list.foodId}
                        foodPrice={list.foodPrice}
                        foodImage={list.foodImage}
                        onClick={onclick}
                      />
                      
                    </div>
                  );
                })}
            </div>
          </section>
         

          <section id="Drinks">
         
            <div className="outer-title-section">
              <div className="titlesection">
                <div className="inner-title-section">
                  <h3 className="sectionTitle"> Drinks Options</h3>
                </div>
              </div>
            </div>

            <div className="section-food">
              {listFood
                .filter((list) => list.foodType === "drinks")
                .map((list, index) => {
                  return (
                    <div key={`${index}-${list.foodName}`} className="itemFood">
                      <ListForms
                        id={index}
                        value={list}
                        foodName={list.foodName}
                        foodType={list.foodType}
                        foodDescription={list.foodDescription}
                        foodId={list.foodId}
                        foodPrice={list.foodPrice}
                        foodImage={list.foodImage}
                        price={list.price}
                        foodOption={list.foodOption}
                        onClick={onclick}
                      />
                      
                    </div>
                  );
                })}
            </div>
          </section>
        </section>

      </div>
    );
    }
    

