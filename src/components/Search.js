import React from 'react';

function Search(){
  return (
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search">
            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default Search