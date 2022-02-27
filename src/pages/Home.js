import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Last from '../components/Last';
import * as Router from 'react-router-dom';

function Home({value}){
  return (
  	<div className="App Home">
      <Navbar />
      <Search />
      <Last value={value} />
    </div>
  )
}

export default Home