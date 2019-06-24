import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => { //This is the value of keys, i.e: meat, cheese, salad and bacon.
      return [...Array(props.ingredients[igKey])].map((_, i) => { 
        //Array(3): Create an array with 3 empty object
        return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
      });
    });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;