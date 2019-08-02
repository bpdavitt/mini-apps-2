import React from 'react';

const Event = (props) => {
  return (
    <div className="event">
      <div>Date: {props.event.date}</div>
      <div>Event: {props.event.description}</div>
    </div>
  )
}

export default Event;