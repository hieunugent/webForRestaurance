import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import "../style/main.css";

const finalfood = [
    {
    foodName: "Spring Roll",
    price: 10,
    allOptions: [
      {
        optionName: "Size",
        optiondetail: "Large",
      },
      {
        optionName: "Protein",
        optiondetail: "Scrimp",
      },
      {
        optionName: "Source",
        optiondetail: "Traditional ",
      },
    ],

    currentPrice: 20,
  },
  {
    foodName: "egg Roll",
    price: 10,
    allOptions: [
      {
        optionName: "Size",
        optiondetail: "Small",
      },
      {
        optionName: "Protein",
        optiondetail: "pork",
      },
      {
        optionName: "Source",
        optiondetail: "Traditional",
      },
    ],

    currentPrice: 10,
  },
];

const FinalForm =(props)=> {
    return (
        <div className="">
           <Paper className="receiptPaper" elevation={0}>
                <Grid container direction="row"  >
                    <Grid xs={8} direction="column">
                        <h3>{props.foodName}</h3>

                        {props.allOptions.map((option,index)=> {
                            return (
                                <div key={index}> 
                                 <h4>{option.optionName}</h4>
                                 <h5>- {option.optiondetail}</h5>
                                 </div>
                            );
                        })}
                        
                    </Grid>
                    <Grid container xs={4} direction="row" spacing={1} >
                        <Grid item > <h3>${props.currentPrice}</h3> </Grid>
                        <Grid item className="colorItem"> <h3> <EditOutlinedIcon fontSize="small"  /></h3> </Grid>
                        <Grid item className="colorItem"> <h3> <DeleteForeverIcon fontSize="small" /></h3> </Grid>
                    </Grid>
         </Grid> 
                
        </Paper></div>

    );

}

export default function receiptForm(props) {
 
    return (
        <div>
        {finalfood.map((food, index) => {
            return (
              <div>
                <FinalForm 
                id={index} 
                value={food} 
                foodName={food.foodName}
                currentPrice={food.currentPrice}
                allOptions={food.allOptions}
                />
              </div>
            );

        })}
       </div>
       );

    // <div className="">
    //    <Paper className="receiptPaper" elevation={0}>
    //         <Grid container direction="row"  >
    //             <Grid xs={8} direction="column">
    //                 <h3> Name Food</h3>
    //                 <h4> Food Option</h4>
    //                 <h5>- your food Option</h5>
    //                 <h4> Food Option</h4>
    //                 <h5>- your food Option</h5>
    //                 <h4> Food Option</h4>
    //                 <h5>- your food Option</h5>
    //             </Grid>
    //             <Grid container xs={4} direction="row" spacing={1} >
    //                 <Grid item > <h3>$15</h3> </Grid>
    //                 <Grid item className="colorItem"> <h3> <EditOutlinedIcon fontSize="small"  /></h3> </Grid>
    //                 <Grid item className="colorItem"> <h3> <DeleteForeverIcon fontSize="small" /></h3> </Grid>
    //             </Grid>
    //  </Grid>

    // </Paper>

    // </div>
}
