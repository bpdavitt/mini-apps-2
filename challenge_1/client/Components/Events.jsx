import React from 'react';
import Event from './Event.jsx';
import ReactPaginate from 'react-paginate';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: props.events.slice(0,10)
    }
    this.perPage = 10;
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick (data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.perPage);

    this.setState({displayed: this.props.events.slice(offset, offset + 10)});
  }

  render () {
    return (
      <div className="eventList">
        {this.state.displayed.map((event, i) => {
          return <Event event={event} key={'event:' + i}></Event>
        })}
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName='react-paginate'
          pageCount={Math.ceil(this.props.events.length/this.perPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          pageClassName='react-paginate'
          previousClassName = 'react-paginate'
          nextClassName = 'react-paginate'
          activeClassName = 'paginate-selected'
        />
      </div>
    )
  }
}

export default Events;