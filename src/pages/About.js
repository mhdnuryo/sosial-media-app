import React from 'react';
import useSocket from '../custom_hooks/useSocket';

function About(){
  var [socket] = useSocket(process.env)

  return (
    <div className="App About">
      <h2>About</h2>
    </div>
  )
}

export default About