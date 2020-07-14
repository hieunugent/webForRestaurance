import React from 'react'
import { Grid, Paper } from '@material-ui/core'




import "../style/main.css";

export default function receiptForm() {

    return (
        <div className="receiptTotal">
            <Paper className="" >
              <Grid container xs direction="row" justify="flex-end" >
                    <Grid >  
                    <div className="alignment-data">
                        <h5>Subtotal </h5>
                        <h5>Tax(9.5%)</h5>
                        <h3>Total</h3>
                    </div>   
                        
                     </Grid>
                    <Grid  >
                        <div className="alignment-data">

                        <h5>15.00 </h5>
                        <h5>1.43</h5>
                        <h3>16.43</h3>
                        </div>   

                     </Grid>
                </Grid>

            </Paper>


        </div>
    )
}
