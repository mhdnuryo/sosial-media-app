import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import useSocket from '../custom_hooks/useSocket';

function Home({value}){
  var userId = React.createRef()
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