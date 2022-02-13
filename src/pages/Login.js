import React from 'react';
import useFetch from '../custom_hooks/useFetch'
import * as Router from 'react-router-dom';
import * as redux from 'react-redux';
import * as user from '../redux/reducers/user';


function Login(){
  var [onInit,setOnInit] = React.useState(true)

  var [timestamp,setTimestamp] = React.useState(null)

  var api = process.env.REACT_APP_API;

  var [url,setUrl] = React.useState('')

  var [data,setData] = React.useState({
    username : '', password : ''
  })

  var [pending,result,error] = useFetch(
    url,'post',data,timestamp
  )

  var dispatch = redux.useDispatch()

  function submit(e){
    e.preventDefault()
    setUrl(`${api}/login`)
    setTimestamp(Date.now())
  }

  function afterInit(){
    setOnInit(false)
  }

  function login(){
    if(!onInit){
      dispatch(user.login(
        result
      ))
    }
  }

  React.useEffect(() => login(),[result])

  React.useEffect(() => afterInit(),[])
  
  return (
    <div className="App Login">
      <div className="container container-login">
        <h2>Login</h2>
        <form className="login-form" onSubmit={submit}>
          <input type="text" placeholder="username" onChange={({target}) => {
            setData({username : target.value, password:data.password})
          }} />
          <input type="password" placeholder="password" onChange={({target}) => {
            setData({username : data.username, password : target.value})
          }} />
          <button className="btn btn-danger">Login</button>
        </form>
        {pending && (
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width:'100%'}}></div>
          </div>
        )}
        {error && (
          <p>{error}</p>
        )}
        
        <a href="#">Lupa password</a>
        <a href="#">Belum punya akun? buat sekarang!</a>
        <Router.Link to="/about">About</Router.Link>
      </div>
    </div>

  )
}

export default Login

