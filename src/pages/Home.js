import React from 'react';
import * as redux from 'react-redux';
import * as Router from 'react-router-dom';
import * as user from '../redux/reducers/user'

function Home(){
  var dispatch = redux.useDispatch()
  var [searchParams,setSearchParams] = Router.useSearchParams()

  function logout(){
  	dispatch(user.logout())
  }


  return (
  	<div className="App Home">
      <h2>Home</h2>
      <button onClick={logout}>Sign out</button>
      <Router.Link to="/about">About</Router.Link>
    </div>
  )
}

export default Home