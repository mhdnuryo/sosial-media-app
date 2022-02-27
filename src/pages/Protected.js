import React from 'react';
import * as Router from 'react-router-dom';

function Protected({children,value}){
  return value ? children : <Router.Navigate to ="/" />
}

export default Protected