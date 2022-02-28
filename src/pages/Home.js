import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Last from '../components/Last';
import useSocket from '../custom_hooks/useSocket';
import * as Router from 'react-router-dom';

function Home({value}){
  var api = process.env.REACT_APP_API
  var [socket] = useSocket(
    api,value.id
  )

  return (
  	<div className="App Home">
      <Navbar />
      <Search />
      <Last 
        socket={socket}
        value={value} 
      />
    </div>
  )
}

export default Home