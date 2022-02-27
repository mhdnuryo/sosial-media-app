import React from 'react';
import io from 'socket.io-client';

function useSocket(api){
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
    console.log('connected')
  }

  Socket?.off('connect').on(
    'connect',onConnect
  )

  

  return [Socket]
}

export default useSocket;