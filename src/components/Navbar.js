import React from 'react';

function Navbar(){
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo left">
          <img 
            src="https://materializecss.com/images/yuna.jpg" 
            alt="logo" className="circle responsive-img" 
            height="55px" width="55px"
          />
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