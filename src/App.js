import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Protected from './pages/Protected';
import * as redux from 'react-redux';
import * as Router from 'react-router-dom';

function App() {
  const {value} = redux.useSelector(
  	(selector) => selector.user
  )

  return (
    <div className="App">
      <Router.Routes>
        <Router.Route 
          path="/" element={value ? <Home value={value} /> : <Login />}
        />
        <Router.Route
          path="/about" 
          element={
            <Protected value={value}>
              <About />
            </Protected>
          }
        />
      </Router.Routes>
    </div>
  );
}

export default App;
