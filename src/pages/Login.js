import React from 'react';

function Login(){
  return (
    <div className="App Login">
      <form action="/action_page.php">
        <fieldset>
          <legend>Login:</legend>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"><br/><br/>
          <label for="lname">Last name:</label>
           <input type="text" id="lname" name="lname"><br/><br/>
        </fieldset>
      </form> 
    </div>
  )
}

export default Login