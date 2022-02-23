import React from 'react'
import M from 'materialize-css';
import * as redux from 'react-redux';
import * as user from '../redux/reducers/user';

function Navbar(){
  var dispatch = redux.useDispatch();
  
  function signOut(e){
  	e.preventDefault();
  	dispatch(user.signOut());
  }

  return ( 
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo logo left">Logo</a>
      <ul id="nav-mobile" class="right">
        <li>
          <a href="#" onClick={signOut}>
            <i class="material-icons">power_settings_new</i>
          </a>
        </li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar