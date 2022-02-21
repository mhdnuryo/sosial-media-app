import React from 'react';
import Navbar from '../components/Navbar';
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


  return (
  	<div className="App Home">
      <Navbar />
      <Search />
    </div>
  )
}

export default Home