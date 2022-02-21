import React from 'react';
import Search from '../components/Search';
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
      <Search />
    </div>
  )
}

export default Home