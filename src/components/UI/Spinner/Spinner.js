import React from 'react';
import classes from './Spinner.css';

const spinner = () => (
  <div style={{ textAlign: 'center' }}>
    <div className={classes.Loader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
);

export default spinner;