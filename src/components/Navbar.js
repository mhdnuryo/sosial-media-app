import React from 'react';
import Dropdown from './Dropdown'

function Navbar(){
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo logo left">
            App
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="#" className="dropdown-trigger" data-target="dropdown">
                <i className="material-icons">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Dropdown />
    </>
  )
}

export default Navbar