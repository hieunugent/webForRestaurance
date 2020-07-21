import React from 'react'
import { Grid, Paper } from '@material-ui/core'




import "../style/main.css";
const BillingForm=(props)=> {
    function taxsCal(amount, rate) {
      return amount * rate;
    }
    function totalAmount(amount, rate){
        return (amount*rate)+amount;
    }
    return (
      <div className="alignment-data">
        <h5>{props.currentBill}</h5>
        <h5>{taxsCal(props.currentBill, props.Taxrate)}</h5>
        <h3>{totalAmount(props.currentBill, props.Taxrate)}</h3>
      </div>
    );
}
export default function receiptForm(props) {
    function taxsCal(amount, rate){
        return (
            amount*rate);
        
    }
function totalAmount(amount, rate) {
  return amount * rate + amount;
}
    return (
      <div className="receiptTotal">
        <Paper className="">
          <Grid container xs direction="row" justify="flex-end">
            <Grid>
              <div className="alignment-data">
                <h5>Subtotal </h5>
                <h5>Tax(9.5%)</h5>
                <h3>Total</h3>
              </div>
            </Grid>
            <Grid>
              <div className="alignment-data">
                <h5>$ {props.total} </h5>
                <h5>$ {taxsCal(props.total,0.095)}</h5>
                <h3>$ {totalAmount(props.total,0.095)}</h3>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
}
