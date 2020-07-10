import React from 'react'
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
// import springRoll from "../img/food/springroll.jpg"
import listFood from "../data/fooddata"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
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
}));


const ListForms =(props)=>{
     const classes = useStyles();
    return (
      <div >
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid xs={4} item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={props.foodImage}
                />
              </ButtonBase>
            </Grid>
            <Grid xs={8} item container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                   # {props.foodId}. 
                    {props.foodName}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {props.foodDescription}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">   
                  </Typography>
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
    );
}

export default function listitems() {

    const handelclick=(event)=>{
        console.log(event.target);
    }
    return(
        listFood.map((list, index) => {
            return(
                <div key={`${index}-${list.foodName}`}  >
                    <ListForms 
                        id= {index}
                        value= {list}
                        foodName = {list.foodName}
                        foodDescription = {list.foodDescription}
                        foodId = {list.foodId}
                        foodPrice = {list.foodPrice}
                        foodImage = {list.foodImage}
                        onClick = {handelclick}
                    />
                </div>
            );            
            }
        ));
    }
    

