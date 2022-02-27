import React from 'react';
import io from 'socket.io-client';

function useSocket(api,id){
  const [Socket,setSocket] = React.useState(null);
 
  React.useEffect(() => {
  	const socket = io(
      api
  	)
  	setSocket(
      socket
    )
    return () => {
      socket.close()
    }
  },[])

  function onConnect(){
    Socket.emit('newId',id)
  }

  Socket?.off('connect').on(
    'connect',onConnect
  )

  Socket?.off('connect').on(
    'newId',(message) => {
      console.log(
        message
      )
    }
  )
  

  return [Socket]
}

export default useSocket;