import React from 'react';

function Navbar(){
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo logo left">
          Logo
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="collapsible.html">
              <i className"material-icons">arrow_drop_down</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar