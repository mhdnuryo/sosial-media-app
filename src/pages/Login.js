import React from 'react';

function Login(){
  return (
    <div className="App Login">
      <div className="container container-login">
        <form>
          <fieldset>
            <legend>Login :</legend>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" />
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Login