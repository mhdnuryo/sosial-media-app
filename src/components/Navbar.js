import React from 'react';
import M from 'materialize-css';

import React from 'react'
import * as redux from 'react-redux';
import * as user from '../redux/reducers/user'

function Navbar(){
  var dispatch = redux.useDispatch()

  function signOut(e){
  	e.preventDefault()
  	dispatch(user.signout)
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo logo left">
            App
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="#">
              <i className="material-icons">arrow_drop_down</i>
            </a>
          </li>
          <li>
            <a href="#" onClick={signOut} >
              <i className="material-icons">close</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
     
  )
}

export default Navbar