import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Preload from '../components/Preload';
import useFetch from '../custom_hooks/useFetch';
import useSocket from '../custom_hooks/useSocket';
import * as Router from 'react-router-dom';


function Message({value}){
  var {id} = Router.useParams()
  var {REACT_APP_API} = process.env
  var [onInit,setOnInit] = React.useState(true)
  var [socket] = useSocket(REACT_APP_API,value.id)
  var [params,setParams] = Router.useSearchParams()
  var [requestObject,setRequestObject] = React.useState(null)
  var [requestResult,setRequestResult] = React.useState(null)
  var [pending,result,error] = useFetch(requestObject)

  var api = process.env.REACT_APP_API;

  var isUnread = params.get('isUnread')

  
  function afterInit(){
    setOnInit(false)
    if(!isUnread){
      setRequestObject({
        url : `${api}/message/all/${value.id}/${id}`,
        method : 'get'
      })
    }
  }

  function update(){
  	if(!onInit && isUnread){
  	  socket.emit('unreadUpdate',{
        sender : id,
        receiver : value.id
  	  })
  	}
  }

  function onResult(){
    if(!onInit){
      setRequestResult(result)
    }
  }


  socket?.off('updateIsDone').on('updateIsDone',
    () =>  setRequestObject({
      url : `${api}/message/all/${value.id}/${id}`,
      method : 'get'
    })
  )

  socket?.off('unreadUpdate').on('unreadUpdate', () => {
    var newResult = requestResult.map((record) => {
      record.message.unread = false;
      return record
    })

    setRequestResult(newResult)
  })

  React.useEffect(() => afterInit(),[])

  React.useEffect(() => update(),[socket])

  React.useEffect(() => onResult(),[result])
  


  return (
    <div className="App Message">
      <Navbar />
      {pending && (<Preload />)}
      <div class="container container-message">
      <div class="row">
        {requestResult?.map(({sender,message}) => {
          if(sender.id == value.id){
            return (
              <div class="col s6 offset-s6 pull-s6" key={message.id}>
                <div class="card-panel teal">
                  <span class="white-text">
                    {message.text}
                  </span>
                  {message.unread && (
                    <a class="secondary-content" href="#!">
                      <i class="material-icons black-text">done_all</i>
                    </a>
                  )}
                  {!message.unread && (
                    <a class="secondary-content" href="#!">
                      <i class="material-icons white-text">done_all</i>
                    </a>
                  )}
                </div>
              </div>
            )
          }
          return (
            <div class="col s6 offset-s6" key={message.id}>
              <div class="card-panel blue">
                <span class="white-text">
                  {message.text}
                </span>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default Message