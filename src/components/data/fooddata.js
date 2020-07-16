
import springRoll from "../img/food/springroll.jpg"
import eggRoll from "../img/food/eggroll.jpg";
import frenchFries from "../img/food/frenchFries.jpg";
import pho from "../img/food/phopic1.jpg";
import bugger from "../img/food/bugger.jpg";
import phoGa from "../img/food/phoGa.jpg";
import miht from "../img/food/mi.jpg";

import pizza from "../img/food/pizza.jpg";

import taco from "../img/food/taco.jpg";
import frychicken from "../img/food/frychicken.jpg";
import blueHaiwaii from "../img/drinks/blueHaiwaii.jpg";
import hurricane from "../img/drinks/hurricane.jpg";
import malibu from "../img/drinks/malibu.jpg";
import yellowfever from "../img/drinks/yellowfever.jpg";
import soda from "../img/drinks/soda.jpg";
import coffee from "../img/drinks/coffee.jpg";
import boba from "../img/drinks/boba.jpg";


//option food link

import NoOnion from "../img/JapaneseFood/onionNo.jpg"
import onionSm from "../img/JapaneseFood/onionSm.jpg"
import onionLg from "../img/JapaneseFood/oninonLg.jpg"
import garlicSm from "../img/JapaneseFood/garlicSm.jpg"
import garlicMd from "../img/JapaneseFood/garlicMd.jpg"
import garlicLg from "../img/JapaneseFood/garlicLg.jpg"

import spicy1 from "../img/JapaneseFood/spicy1.jpg"
import spicy2 from "../img/JapaneseFood/spicy2.jpg"
import spicy3 from "../img/JapaneseFood/spicy3.jpg"
const optionList=[
  {
    optionTitle: "Onion Choice",
    optionKind:"Onion",
    freeitem:true,
    optionDetail:[
      {
        optionImage: NoOnion,
        optionName: "No Onion",
      },
      {
        optionImage: onionSm,
        optionName: "very little",
      }, 
      {
        optionImage: onionLg,
        optionName: "a Lot Onion",
      },
    ],
  },
  {
    optionTitle: "Garlic Choice",
    optionKind: "Garlic",
    freeitem: true,
    optionDetail: [
      {
        optionImage: garlicSm,
        optionName: "Small Amount",
      },
      {
        optionImage: garlicMd,
        optionName: "Medium Amount",
      },
      {
        optionImage: garlicLg,
        optionName: "Large Amount",
      },
    ],
  },
  {
    optionTitle: "Spicy Choice",
    optionKind: "Spicy",
    freeitem: true,
    optionDetail: [
      {
        optionImage: spicy1,
        optionName: "mild",
      },
      {
        optionImage: spicy2,
        optionName: "spicy",
      },
      {
        optionImage: spicy3,
        optionName: "Very spicy",
      },
    ],
  },

]


 const listFood = [
   {
     //  foodId: 1 ,
     foodType: "dish",
     foodName: "Spring Roll",
     foodDescription: "The discription of Food",
     foodPrice: "$10",
     foodImage: springRoll,
     foodOption:["Onion","Garlic","Spicy"],
     foodquantity: 0,
     price: 10,
   },

   {
     //  foodId: 2,
     foodType: "dish",
     foodName: "Egg Roll",
     foodDescription: "The discription of Food",
     foodPrice: "$10",
     foodImage: eggRoll,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 3,
     foodType: "fastfood",
     foodName: "French Fries",
     foodDescription: "The discription of Food",
     foodPrice: "$10",
     foodImage: frenchFries,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 4,
     foodType: "Noodle",
     foodName: "Pho",
     foodDescription: "The discription of Food",
     foodPrice: "$10",
     foodImage: pho,
     foodquantity: 0,
     price: 10,
   },

   {
     //  foodId: 4,
     foodType: "Noodle",
     foodName: "Pho Ga",
     foodDescription: "The discription of Food",
     foodPrice: "$10",
     foodImage: phoGa,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 4,
     foodType: "Noodle",
     foodName: "Mi Hoanh Thanh",
     foodDescription: "The discription of Food",
     foodPrice: "$10",
     foodImage: miht,
     foodquantity: 0,
     price: 10,
   },



   {
     //  foodId: 4,
     foodType: "fastfood",
     foodName: "Fried Chicken",
     foodDescription: "The discription of Food",
     foodPrice: "$10",
     foodImage: frychicken,
     foodquantity: 0,
     price: 10,
   },

   {
     //  foodId: 11,
     foodType: "fastfood",
     foodName: "Taco",
     foodDescription: "The discription of Food",
     foodPrice: "$10",
     foodImage: taco,
     foodquantity: 0,
     price: 10,
   },

   {
     //  foodId: 5,
     foodType: "fastfood",
     foodName: "Bugger",
     foodDescription: "The discription of Food",
     foodPrice: "$10",
     foodImage: bugger,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 6,
     foodType: "fastfood",
     foodName: "Pizza",
     foodDescription: "The discription of Food ",
     foodPrice: "$10",
     foodImage: pizza,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 7,
     foodType: "drinks",
     foodName: "Blue Haiwaii",
     foodDescription: "The discription of Drink",
     foodPrice: "$10",
     foodImage: blueHaiwaii,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 8,
     foodType: "drinks",
     foodName: "Huricane ",
     foodDescription: "The discription of Drink ",
     foodPrice: "$10",
     foodImage: hurricane,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 9,
     foodType: "drinks",
     foodName: "Malibu ",
     foodDescription: "The discription of Drink ",
     foodPrice: "$10",
     foodImage: malibu,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 10,
     foodType: "drinks",
     foodName: "Tropical Fruit",
     foodDescription: "The discription of Drink ",
     foodPrice: "$10",
     foodImage: yellowfever,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 10,
     foodType: "drinks",
     foodName: "Boba Tea",
     foodDescription: "The discription of Drink ",
     foodPrice: "$10",
     foodImage: boba,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 10,
     foodType: "drinks",
     foodName: "Soda Drinks",
     foodDescription: "The discription of Drink ",
     foodPrice: "$10",
     foodImage: soda,
     foodquantity: 0,
     price: 10,
   },
   {
     //  foodId: 10,
     foodType: "drinks",
     foodName: "coffee",
     foodDescription: "The discription of  Drink",
     foodPrice: "$10",
     foodImage: coffee,
     foodquantity: 0,
     price: 10,
   },
 ];

       export default listFood;
       export {optionList};