import React from 'react';
import io from 'socket.io-client';

function useSocket(api,value){
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
    Socket.emit('newId',value)
  }

  function onTest(){
    alert('test')
  }

  Socket?.off('connect').on(
    'connect',onConnect
  )

  Socket?.off('test').on(
    'test',onTest
  )

  return [Socket]
}

export default useSocket;