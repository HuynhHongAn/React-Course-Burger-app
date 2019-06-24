import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
  //...
  let attachdClasses = [classes.SideDrawer, classes.Close];
  if (props.open){
    attachdClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <BackDrop 
        show={props.open} 
        clicked={props.closed}/>
      <div className={attachdClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
    
  );
}

export default sideDrawer;