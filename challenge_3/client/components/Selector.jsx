import React from 'react';

const Selector = (props) => {
  return (
    <>
      <div id="select-container">
        <input type="number" placeholder="How many pins did you just wreck?" id="pin-selector"></input>
        <button id="pin-submit">Submit</button>
      </div>
    </>
  )
}

export default Selector;