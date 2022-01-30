import React from 'react';

function Login(){
  return (
    <div className="App Login">
      <div className"container container-login">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fas fa-user-circle"></i>
                </span>
              </div>
              <input 
                type="text"
                class="form-control" 
                placeholder="Username" 
                aria-label="Username" 
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login