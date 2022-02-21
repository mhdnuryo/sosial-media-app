import React from 'react';

function Navbar(){
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  )
}