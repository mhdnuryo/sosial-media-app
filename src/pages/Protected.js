import React from 'react';
import * as redux from 'react-redux';
import * as Router from 'react-router-dom';

function Protected({children,value}){
  return value ? children : <Router.Navigate to ="/?alert=true" />
}

export default Protected