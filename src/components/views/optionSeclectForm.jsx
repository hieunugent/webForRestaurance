/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {optionList} from "../data/fooddata"
import "../style/main.css"
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
        backgroundColor: "white",
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
    
    // console.log(props.optionKind);
    // console.log(props.OrderDetailList.Onion);
    const isFree = () => {
        if (!(props.freeitem)) {
            return "hasPrice";
        }
        else{
            return "hide"
        }
    }

    const isCLasses =()=> {
            if(props.OrderDetailList.Onion===props.optionName){
                return "isActives active";
            }
            else if(props.OrderDetailList.Garlic===props.optionName){
                return "isActives active";
            }
            else if (props.OrderDetailList.Spicy === props.optionName) {
                return "isActives active";
            }
            else if (props.OrderDetailList.Meat === props.optionName) {
                return "isActives active";
            }
            else{
                return "isActives"
            }



    }
    const handleClick = (event)=> {
       

        props.setOrderList((prevItem) => {
            return {
                ...prevItem,
                [props.optionKind]: props.optionName,
            };
        })
       //pass value to parent
        props.handleClickother(props.optionName);

    }

  
    return (
        <div  id={`${props.id}-${props.optionKind}`} key={props.id} className={isCLasses()}  onClick={handleClick}>
             <div className={classes.root}>
                <Paper className={classes.paper}  elevation={0}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <figure className={classes.img}>
                                <img
                                    className={classes.img}
                                    alt="complex"
                                    src={props.optionImage}
                                />
                            </figure>
                            <div className= {isFree()} value={props.priceitem}>+ ${props.priceitem}</div>
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


export default function optionSeclectForm(option) {
    const initialOpiton = {
        Onion: "very little",
        Garlic: "Medium Amount",
        Spicy: "spicy",
        Meat:"normal"
    }
    const [OrderDetailList, setOrderList] = useState(initialOpiton);
    const [addClasses, setClasses] = useState('isActives');
   
    const handleClick =(propsValue) => {
            
    }
   
  
    // console.log(OrderDetailList);
    
    return (
        <div>

            <Paper id="Onion " elevation={0}>
                <div className="section-Onion ">
                    {optionList
                        .filter((list) => (list.optionKind === "Onion" && option.foodType ==="Noodle" ))
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
                                    <ul className="itemOption1">
                                        {list.optionDetail.map((item, index) => {
                                            return (
                                                <li key={`${index}-${item.optionName}`} 
                                                    className='item-node' 
                                                    >
                                                   
                                                        <OptionForm
                                                            id={index}
                                                            value={item}
                                                            optionName={item.optionName}
                                                            optionImage={item.optionImage}
                                                            freeitem={list.freeitem}
                                                            priceitem={list.priceitem}
                                                            optionKind={list.optionKind}  
                                                            OrderDetailList={OrderDetailList}
                                                            setOrderList={setOrderList}
                                                            setClasses={setClasses}
                                                            handleClickother={handleClick}
                                                            addClasses={addClasses}
                                                         
                                                            
                                                        >
                    
                                                        </OptionForm>
                                                  
                                                    
                                                </li>
                                            );

                                        })}  </ul>
                                </div>
                            );
                        })}
                </div>
            </Paper>
            <Paper id="Garlic " elevation={0}>
                <div className="section-Garlic ">
                    {optionList
                        .filter((list) => (list.optionKind === "Garlic" && option.foodType === "Noodle"))
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
                                    <ul className="itemOption2 ">
                                        {list.optionDetail.map((item, index) => {
                                            return (
                                                <li key={`${index}-${item.optionName}`} className="item-node  " >
                                                    <OptionForm
                                                        id={index}
                                                        value={item}
                                                        optionName={item.optionName}
                                                        optionImage={item.optionImage}
                                                        freeitem={list.freeitem}
                                                        priceitem={item.priceitem}
                                                        optionKind={list.optionKind}
                                                        OrderDetailList={OrderDetailList}
                                                        setOrderList={setOrderList}
                                                        setClasses={setClasses}
                                                        handleClickother={handleClick}
                                                        addClasses={addClasses}
                                                        // onClick={onclick}
                                                    />
                                                </li>
                                            );

                                        })}  </ul>
                                </div>
                            );
                        })}
                </div>
            </Paper>
            <Paper id="Spicy" elevation={0}>
                <div className="section-Spicy ">
                    {optionList
                        .filter((list) => (list.optionKind === "Spicy" && option.foodType === "Noodle"))
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
                                    <ul className="itemOption3 ">
                                        {list.optionDetail.map((item, index) => {
                                            return (
                                                <li key={`${index}-${item.optionName}`} className="item-node " >
                                                    <OptionForm
                                                        id={index}
                                                        value={item}
                                                        optionName={item.optionName}
                                                        optionImage={item.optionImage}
                                                        freeitem={list.freeitem}
                                                        priceitem={list.priceitem}
                                                        optionKind={list.optionKind}
                                                        OrderDetailList={OrderDetailList}
                                                        setOrderList={setOrderList}
                                                        setClasses={setClasses}
                                                        handleClickother={handleClick}
                                                        addClasses={addClasses}
                                                        // onClick={onclick}
                                                    />
                                                </li>
                                            );

                                        })}  </ul>
                                </div>
                            );
                        })}
                </div>
            </Paper>
            <Paper id="Meat" elevation={0}>
                <div className="section-Meat ">
                    {optionList
                        .filter((list) => (list.optionKind === "Meat" && option.foodType === "Noodle" && option.foodName==="Pho"))
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
                                    <ul className="itemOption3 ">
                                        {list.optionDetail.map((item, index) => {
                                            return (
                                                <li key={`${index}-${item.optionName}`} className="item-node " >
                                                    <OptionForm
                                                        id={index}
                                                        value={item}
                                                        optionName={item.optionName}
                                                        optionImage={item.optionImage}
                                                        freeitem={item.freeitem}
                                                        priceitem={item.priceitem}
                                                        optionKind={list.optionKind}
                                                        OrderDetailList={OrderDetailList}
                                                        setOrderList={setOrderList}
                                                        setClasses={setClasses}
                                                        handleClickother={handleClick}
                                                        addClasses={addClasses}
                                                    // onClick={onclick}
                                                    />
                                                </li>
                                            );

                                        })}  </ul>
                                </div>
                            );
                        })}
                </div>
            </Paper>

        </div>
    );
}


