import React, { Component } from 'react';
import { connect } from 'react-redux'

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {...};
  // }

  state = {
    purchasing: false,
    loading: false,
    error: null
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return (sum > 0);
    
  }


  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  }

  componentDidMount() {
    axios.get('/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data })
      })
      .catch(error => {
        this.setState({ error: error });
      });
  }

  render() {

    const disabledInfo = {
      ...this.props.ings
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    let burger = this.state.error ? <p style={{ textAlign: 'center', margin: '10px' }}>Ingredients can't be loaded! </p> : <Spinner />;
    if (this.props.ings) {
      orderSummary = (
        <OrderSummary
          totalPrice={this.props.price}
          ingredients={this.props.ings}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler} />
      );

      burger = (
        <Aux>
          <Burger ingredients={this.props.ings}></Burger>
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            price={this.props.price} />
        </Aux>
      );
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (name) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: name }),
    onIngredientRemoved: (name) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: name })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
