import React from 'react';

const Search = (props) => {
  return (
    <>

        <input type="text" placeholder="Please enter a date" id="searchBox"
          onKeyUp={(e) => { props.handleSearchChange(e) }}
          onSubmit={(e) => { props.handleSearchSubmit(e) }}>
        </input>
        <button onClick={(e) => { props.handleSearchSubmit(e) }}>Search</button>
    </>
  )
}

export default Search;