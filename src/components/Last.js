import React from 'react';
import Preload from './Preload';
import useFetch from '../custom_hooks/useFetch';
import useSocket from '../custom_hooks/useSocket';
import * as Router from 'react-router-dom';


function Last({value,socket}){
  var [isRequestUpdate,setIsRequestUpdate] = React.useState(false)
  var [requestResult,setRequestResult] = React.useState(null)
  var [requestObject,setRequestObject] = React.useState(null)
  var [pending,result,error] = useFetch(requestObject)
  var [onInit,setOnInit] = React.useState(true)


  var api = process.env.REACT_APP_API

  function afterInit(){
    setOnInit(false)
    setRequestObject({
      url : `${api}/message/last/${value.id}`,
      method : 'get'
    })
  }

  function onResult(){
    if(!onInit){
      setRequestResult(result)
    }
  }

  function onRequestResult(){
    if(!onInit){
      var filter = requestResult.filter(
        ({sender}) => sender.id != value.id
      )
      if(filter.length>0 && !isRequestUpdate){
         setIsRequestUpdate(true)
         socket.emit('unread',filter)
      }
    }
  }

  socket?.off('unread').on('unread',([s,unread]) => {
    var [filter] = requestResult?.filter(
      ({sender}) => sender.id == s.id
    )
    var newResult = requestResult?.filter(
      ({sender}) => sender.id != s.id
    )
    if(unread > 0){
      filter.unread = unread;
      newResult.push(filter)
      setRequestResult(newResult)
    }
  })

  socket?.off('unreadUpdate').on('unreadUpdate',(id) => {
    var [filter] = requestResult?.filter(
      ({receiver}) => receiver.id == id
    )
    var newResult = requestResult?.filter(
      ({receiver}) => receiver.id != id
    )
    filter.message.unread = false
    newResult.push(filter)
    setRequestResult(newResult)
  })


  React.useEffect(() => afterInit(),[])
  React.useEffect(() => onResult(),[result])
  React.useEffect(() => onRequestResult(),[requestResult])

  if(pending){
    return(
      <Preload />
    )
  }
  
 return (
  <div className="lastMessage">
    <ul class="collection">
      {requestResult?.map(({sender,senderProfile,message,receiver,receiverProfile,unread}) => {
        var isUnread =  unread && unread > 0 ? true : false
        var dstId = sender.id == value.id ? receiver.id : sender.id;
        var url = sender.id == value.id ? `message/${dstId}` : `message/${dstId}?isUnread=${isUnread}`
        if(sender.id == value.id){
          return (
            <li class="collection-item avatar valign-wrapper" key={message.id}>
              <Router.Link to={url}>
                <img 
                  src={receiverProfile.profilePicture}
                  class="circle" alt="pp" 
                />
                <span class="title">{receiverProfile.firstName}</span>
                <p class="grey-text">{message.text}</p>
                {message.unread && (
                  <a class="secondary-content" href="#!">
                    <i class="material-icons grey-text">done_all</i>
                  </a>
                )}
                {!message.unread && (
                  <a class="secondary-content" href="#!">
                    <i class="material-icons">done_all</i>
                  </a>
                )}
              </Router.Link>
            </li> 
          )
        }
        return (
          <li class="collection-item avatar valign-wrapper" key={message.id}>
            <Router.Link to={url}>
              <img 
                src={senderProfile.profilePicture}
                class="circle" alt="pp" 
              />
              {unread && (
                <span class="new badge" data-badge-caption={unread}></span>
              )}
              <span class="title">{senderProfile.firstName}</span>
              <p class="grey-text">{message.text}</p>
            </Router.Link>
          </li> 
        )
      })}
    </ul>
  </div>
 )
  
}

export default Last