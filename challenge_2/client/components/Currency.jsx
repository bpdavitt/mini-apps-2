import React from 'react';

const Currency = (props) => {

  return (
    <>
      <div>Currency Selector Here</div>
      <select id="currency-selector" onChange={(e)=>{props.currencyChange(e)}}>
        <option value ="USD">USD</option>
        <option value ="EUR">EUR</option>
        <option value ="GBP">GBP</option>
      </select>
    </>
  )
}

export default Currency;