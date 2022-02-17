import React from 'react';
import io from 'socket.io-client';

function useSocket(api,value){
  const [Socket,setSocket] = React.useState(null);
 
  React.useEffect(() => {
  	const socket = io(
      api
  	)
  	setSocket(socket)

    return () => {
      socket.close()
    }
  },[])

  function connect(){
    console.log('connected...')
    Socket.emit('create',value)
  }

  Socket?.off('connect').on(
    'connect', () => connect()
  )
  
  Socket?.off('test').on('test',
    () => alert('test')
  )

  return [Socket]
}

export default useSocket;