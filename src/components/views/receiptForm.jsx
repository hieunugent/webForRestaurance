import React, {useState} from 'react'
import { Grid, Paper } from '@material-ui/core'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TotalAmount from './totalamountOrder';

import "../style/main.css";
import { formatDiagnostic } from 'typescript';

// const finalfood = [
//     {
//     foodName: "Spring Roll",
//     price: 10,
//     allOptions: [
//       {
//         optionName: "Size",
//         optiondetail: "Large",
//       },
//       {
//         optionName: "Protein",
//         optiondetail: "Scrimp",
//       },
//       {
//         optionName: "Source",
//         optiondetail: "Traditional ",
//       },
//     ],

//     currentPrice: 20,
//   },
//   {
//     foodName: "egg Roll",
//     price: 10,
//     allOptions: [
//       {
//         optionName: "Size",
//         optiondetail: "Small",
//       },
//       {
//         optionName: "Protein",
//         optiondetail: "pork",
//       },
//       {
//         optionName: "Source",
//         optiondetail: "Traditional",
//       },
//     ],

//     currentPrice: 10,
//   },
// ];

const FinalForm =(props)=> {
  const isOnion = ()=> {
    if (props.Onion === '' || props.Onion == null) {
      return "hide"
    }
    else{return ''}
  }
  const isSpicy = () => {
    if (props.Spicy === '' || props.Spicy == null) {
      return "hide"
    }
    else { return '' }
  }
  const isGarlic = () => {
    if (props.Garlic === '' || props.Garlic == null) {
      return "hide"
    }
    else { return '' }
  }
  const isMeat = () => {
    if (props.Meat === '' || props.Meat == null) {
      return "hide"
    }
    else { return '' }
  }
  const calPrice = ()=> {
    return (props.currentPrice * props.quantity)
  }

    return (
        <div className="">
           <Paper className="receiptPaper" elevation={0}>
                <Grid container direction="row"  >
                    <Grid xs={8} direction="column">
                        <h3>{props.foodName}</h3>
                        <h4> quantity: {props.quantity}</h4>
                        <h4 className={isOnion()}> Onion: {props.Onion}</h4>
                        <h4 className={isSpicy()} > Spicy: {props.Spicy}</h4>
                        <h4 className={isGarlic()}> Garlic: {props.Garlic}</h4>
                        <h4 className={isMeat()}> Meat: {props.Meat}</h4>
                        {/* {props.allOptions.map((option,index)=> {
                            return (
                                <div key={index}> 
                                 <h4>{option.OptionName}</h4>
                                 <h5>- {option.OptionDetail}</h5>
                                 </div>
                            );
                        })} */}
                        
                    </Grid>
                    <Grid container xs={4} direction="row" spacing={1} >
                        <Grid item > <h3>${calPrice()}</h3> </Grid>
                        <Grid item className="colorItem"> <h3> <EditOutlinedIcon fontSize="small"  /></h3> </Grid>
                        <Grid item className="colorItem"> <h3> <DeleteForeverIcon fontSize="small" /></h3> </Grid>
                    </Grid>
         </Grid> 
                
        </Paper></div>

    );

}

export default function receiptForm(props) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var total = 0;

   if(props.finalfood == null || props.finalfood==='' || props.finalfood.length === 0){
     return (
       <div>
         <h4 className="headlineEmpty"> your order is empty please order food</h4>
       </div>
     )
   }else{
    return (
      <>
      <h3> Your Order</h3>
      <div>
        {props.finalfood.map((food, index) => {
          total = total + (food.price * food.quantityOrder);
          return (
            <div>
              <FinalForm
                id={index}
                value={food}
                foodName={food.foodName}
                currentPrice={food.price}
                quantity = {food.quantityOrder}
                Onion = {food.Onion}
                Garlic = {food.Garlic}
                Spicy = {food.Spicy}
                Meat = {food.Meat}
                
                                                                              
              />
            </div>
          );

        })}
      </div>
      <div>
        <TotalAmount  total = {total}/>
      </div>
      </>
    );
   }
  }