import React from 'react';

function Navbar(){
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo logo left">
          Logo
        </a>
        <ul id="nav-mobile" className="right">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar