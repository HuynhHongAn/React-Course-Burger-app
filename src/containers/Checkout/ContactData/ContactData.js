import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      country: '',
      street: ''
    }
  }
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Please enter your contact data</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Name"/>
          <input className={classes.Input} type="text" name="email" placeholder="Email"/>
          <input className={classes.Input} type="text" name="country" placeholder="Country"/>
          <input className={classes.Input} type="text" name="street" placeholder="Street"/>
          <Button
            buttonType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
