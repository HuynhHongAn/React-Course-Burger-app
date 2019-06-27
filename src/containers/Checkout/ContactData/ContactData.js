import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest Delivery'},
            {value: 'cheapest', displayValue: 'Cheapest Delivery'}
          ]
        },
        value: ''
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
      
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });

  }

  render() {
    let form = (
      <form>
          <Input elementType="..." elementConfig="..." value="..." />
          <Input inputtype="input" type="text" name="email" placeholder="Email"/>
          <Input inputtype="input" type="text" name="country" placeholder="Country"/>
          <Input inputtype="input" type="text" name="street" placeholder="Street"/>
          <Button
            clicked={this.orderHandler}
            buttonType="Success">ORDER</Button>
      </form>
    );
    if (this.state.loading){
      form = <Spinner/>
    }
    return (
      <div className={classes.ContactData}>
        <h4>Please enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
