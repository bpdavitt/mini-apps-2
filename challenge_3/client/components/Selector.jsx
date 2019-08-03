import React from 'react';

const Selector = (props) => {
  return (
    <>
      <div id="select-container">
        <input type="number"
          placeholder="How many pins did you just wreck?"
          id="pin-selector"
          onKeyUp={(e)=>{props.handleChange(e)}}></input>
        <button id="pin-submit" onClick={(e)=>{props.handleSubmit(e)}}>Submit</button>
      </div>
    </>
  )
}

export default Selector;