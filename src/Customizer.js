/* eslint-disable no-unused-vars */
import React from 'react';
import Body from './Body';
import App from './App';
import FEATURES from './Features';

function Customizer(props){
    return (<form className="main__form">
    <h2>Customize your laptop</h2>
    {props.features}
  </form>
  );
}

export default Customizer;