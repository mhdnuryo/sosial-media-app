import React from 'react';
import useSocket from '../custom_hooks/useSocket';

function About({value}){
  var api = process.env.REACT_APP_API; 
  var [socket] = useSocket(api,value)

  return (
    <div className="App About">
      <h2>About</h2>
    </div>
  )
}

export default About