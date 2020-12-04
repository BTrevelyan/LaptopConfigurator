/* eslint-disable no-unused-vars */
import React from 'react';
import Body from './Body';
import App from './App';
import FEATURES from './Features';

function CartSummary(props){
    return (<div className="CartSummary">
        <h2>Your cart</h2>
        {props.summary}
        </div>
    );
}

export default CartSummary;