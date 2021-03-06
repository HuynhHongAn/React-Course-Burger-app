import React from 'react';
import classes from './Burger.css';
import {withRouter} from 'react-router-dom';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => { //This is the value of keys, i.e: meat, cheese, salad and bacon.
      return [...Array(props.ingredients[igKey])].map((_, i) => { 
        //Array(3): Create an array with 3 empty object
        return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });

  if (transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default withRouter(burger);