import React from 'react';
import useSocket from '../custom_hooks/useSocket';
import * as redux from 'react-redux';
import * as Router from 'react-router-dom';
import * as user from '../redux/reducers/user'

function Home({value}){
  var userId = React.createRef()
  var dispatch = redux.useDispatch()
  var api = process.env.REACT_APP_API
  var [socket] = useSocket(api,value)

  function logout(){
  	dispatch(user.logout())
  }

  function test(){
    socket.emit('test',userId.current.value)
  }

  return (
  	<div className="App Home">
      <h2>Home...</h2>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home