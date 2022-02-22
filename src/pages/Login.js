import React from 'react';
import useFetch from '../custom_hooks/useFetch'
import * as Router from 'react-router-dom';
import * as redux from 'react-redux';
import * as user from '../redux/reducers/user';


function Login(){
  var [searchParams,setSearchParams] = Router.useSearchParams()

  var [requestObject,setRequestObject] = React.useState(null)

  var [onInit,setOnInit] = React.useState(true)
  
  var [pending,result,error] = useFetch(
    requestObject
  )

  var [data,setData] = React.useState({
    username : '', password : ''
  })

  var api = process.env.REACT_APP_API;

  var dispatch = redux.useDispatch()


  function submit(e){
    e.preventDefault()
    setRequestObject({
      url : `${api}/login`,
      method : 'post',
      data : data
    })
  }

  function afterInit(){
    setOnInit(false)
  }

  function login(){
    if(!onInit){
      dispatch(user.signin(result))
    }
  }

  React.useEffect(() => afterInit(),[])
  
  React.useEffect(() => login(),[result])

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
          <button disabled={pending ? true : false}className="btn btn-info">Login</button>
        </form>
        {pending && (
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width:'100%'}}></div>
          </div>
        )}
        {error && (
          <div className="alert alert-danger text-center">
            {error}
          </div>
        )}
        {searchParams.get('alert') && !pending && !error && (
          <div className="alert alert-danger text-center">
            You must login first
          </div>
        )}  
        
        <a href="#">Lupa password</a>
        <a href="#">Belum punya akun? buat sekarang!</a>
        <Router.Link to="/about">About</Router.Link>
      </div>
    </div>

  )
}

export default Login

