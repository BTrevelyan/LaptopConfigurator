/* eslint-disable no-unused-vars */
import React from 'react';
import Body from './Body';
import App from './App';
import FEATURES from './Features';

function CartSumTotal(props){

return (<div>
<div className="summary__total__label">Total</div>
            <div className="summary__total__value">
            {props.USCurrencyFormat.format(props.total)}
            </div></div>);
}
export default CartSumTotal;