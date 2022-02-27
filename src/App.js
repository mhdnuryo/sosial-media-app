import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Message from './pages/Message';
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
              <About 
                value={value} 
              />
            </Protected>
          }
        />
        <Router.Route
          path="/message/:id"
          element={
            <Protected value={value}>
              <Message 
                value={value}
              />
            </Protected>
          }
        />
      </Router.Routes>
    </div>
  );
}

export default App;
