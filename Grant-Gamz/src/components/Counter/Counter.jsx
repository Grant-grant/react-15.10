import './Counter.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  constructor (props){
   super(props);
  // 
   this.state={
	  counter:5,
  };
 }
 
  handleClick=(e)=>{
	const addition = event.target.name==="minus"?-1:1;
	this.setState((prevState)=>({
		...prevState,
		counter: prevState.counter+addition,
	}));	
 }
  
  render() {
	const {counter} = this.state;
	return (	
      <Fragment>	  
      <button name="minus" onClick={this.handleClick}>-</button>
	  {counter}
	  <button name="plus" onClick={this.handleClick}>+</button>
      </Fragment>
    )
  }
}