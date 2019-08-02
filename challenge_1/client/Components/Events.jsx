import React from 'react';
import Event from './Event.jsx';
import ReactPaginate from 'react-paginate';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.displayed = props.events.slice(0,10);
  }

  render () {
    return (
      <>
        {this.displayed.map(event => {
          return <Event event={event}></Event>
        })}
      </>
    )
  }
}

export default Events;