import React from 'react'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {optionList} from "../data/fooddata"
import "../style/main.css"
// import spicyl1 from '../img/JapaneseFood/TATSU-CHO-SPICY-1-small.jpg';
// import spicyl2 from '../img/JapaneseFood/TATSU-CHO-SPICY-2-small.jpg';

// import { Badge } from '@material-ui/core';
import "../style/optionSelectForm.css";
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
        marginRight: "1rem",
    },
    paper: {
        display:"flex",
        flexWrap:"nowrap",
        overflowX:"auto",
        padding: theme.spacing(1),
        width:'100%',
        height:'auto',
        margin: "auto",
        marginBottom: "10px",
        maxWidth: "100%",
        maxHeight: "auto",
        color: "hsl(0, 87 %, 3 %)",

    },

    image: {
        display: "block",
        width: theme.spacing(16),
        height: "auto",
        backgroundColor: "red",

    },
    img: {
        margin: 0,
        display: "flex",
        height: "80%",
        maxWidth: "100%",
        maxHeight: "100px",
        backgroundColor: "white",
        alignItems: "center",


    },
    nameOption: {
        maxHeight: "10px",
        width: "100%",
        maxWidth: "100%",
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
const OptionForm=(props)=> {
    const classes = useStyles();
    const isFree = ()=>{
        if(!(props.freeitem)) {
            return "hasPrice";
        }
    }
    return (
        <div className="items-node">

        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
                <Grid item className={classes.bottomLayer}>
                    <ButtonBase className={classes.image}>
                        <figure className={classes.img}>
                            <img
                                className={classes.img}
                                alt="complex"
                                src={props.optionImage}
                            />
                        </figure>
                        <div className= {isFree()} value={props.price}>{props.price}</div>
                    </ButtonBase>
                    <Typography
                        className={classes.nameOption}
                        gutterBottom
                        value={props.optionName}
                        variant="body1"
                        align="center"
                       
                        display="inline"
                        noWrap
                    >
                        {props.optionName}
                    </Typography>
                </Grid>
            </Paper>
            </div>
        </div>


    );
}


export default function optionSeclectForm() {
    return (
        <>

            <section id="Onion">
                <div className="section-option">
                    {optionList
                        .filter((list) => list.optionKind === "Onion")
                        .map((list, index) => {
                            return (
                                <div key={`${index}`} >
                                    <div className="outer-title-this-oder" >
                                        <div className="">
                                            <div className="">
                                                <h3 className="sectionTitle" value={list.optionTitle}>{list.optionTitle}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="itemOption">
                                        {list.optionDetail.map((item, index) => {
                                            return (
                                                <li key={`${index}-${item.optionName}`} className="itemDetail" >
                                                    <OptionForm
                                                        id={index}
                                                        value={item}
                                                        optionName={item.optionName}
                                                        optionImage={item.optionImage}
                                                        freeitem={list.freeitem}
                                                        onClick={onclick}
                                                    />
                                                </li>
                                            );

                                        })}  </ul>

                                </div>
                            );
                        })}
                </div>
            </section>
        </>
    );
}


