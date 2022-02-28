import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Preload from '../components/Preload';
import useSocket from '../custom_hooks/useSocket';
import * as Router from 'react-router-dom';


function Message({value}){
  var {id} = Router.useParams()
  var {REACT_APP_API} = process.env
  var [onInit,setOnInit] = React.useState(true)
  var [socket] = useSocket(REACT_APP_API,value.id)
  var [params,setParams] = Router.useSearchParams()

  var isUnread = params.get('isUnread')
  

  function afterInit(){
    setOnInit(false)
  }

  function update(){
  	if(!onInit && isUnread){
  	  socket.emit('unreadUpdate',{
        sender : id,
        receiver : value.id
  	  })
  	}
  }

  React.useEffect(() => afterInit(),[])
  React.useEffect(() => update(),[socket])

  return (
    <div className="App Message">
      <Navbar />
      <Preload />
    </div>
  )
}

export default Message