import React, {Component} from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate(){
    console.log('[OrderSummary.js] componentWillUpdate');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>)
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button clicked={this.props.purchaseCanceled} buttonType="Danger">CANCEL</Button>
        <Button clicked={this.props.purchaseContinued} buttonType="Success">CONTINUE</Button>
      </Aux>
    )
  }
  
};

export default OrderSummary;