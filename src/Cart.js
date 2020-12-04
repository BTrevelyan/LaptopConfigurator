/* eslint-disable no-unused-vars */
import React from 'react';
import Body from './Body';
import App from './App';
import FEATURES from './Features';
import CartSummary from './CartSummary';
import CartSumTotal from './CartSumTotal';

function Cart(props){
  return (

        <section className="main__summary">
        <CartSummary summary={props.summary}/>
        <div className="summary__total">
            <CartSumTotal USCurrencyFormat={props.USCurrencyFormat} total={props.total}/>
        </div>
        </section>
 
  );
 }

export default Cart;