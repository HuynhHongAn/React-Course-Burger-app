import React, {Component} from 'react';
import {connect} from 'react-redux'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.props.ings}
          checkoutCanceled={this.checkoutCancelHandler}
          checkoutContinued={this.checkoutContinueHandler}/>
        <Route 
          path={this.props.match.path + '/contact-data'} 
          component={ContactData}></Route>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients
  }
}

export default connect(mapStateToProps)(Checkout);