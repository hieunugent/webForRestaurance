import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



import "./main.css"

export default function receiptForm() {
 
    return (
        <div className="">
        <Paper className="receiptPaper" >
                <Grid container direction="row" >
                    <Grid xs={8} direction="column">
                        <h3> Name Food</h3>
                        <h4> Food Option</h4>
                        <h5>- your food Option</h5>
                        <h4> Food Option</h4>
                        <h5>- your food Option</h5>
                        <h4> Food Option</h4>
                        <h5>- your food Option</h5>
                    </Grid>
                    <Grid container xs={4} direction="row" spacing={1} >
                        <Grid item > <h3>$15</h3> </Grid>
                        <Grid item className="colorItem"> <h3> <EditOutlinedIcon fontSize="small"  /></h3> </Grid>
                        <Grid item className="colorItem"> <h3> <DeleteForeverIcon fontSize="small" /></h3> </Grid>
                    </Grid>
                </Grid> 
                
        </Paper>
          
            
        </div>
    )
}
