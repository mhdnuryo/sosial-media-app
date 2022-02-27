import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Preload from '../components/Preload';
import * as Router from 'react-router-dom';


function Message({value}){
  var {id} = Router.useParams()

  return (
    <div className="App Message">
      
    </div>
  )
}

export default Message