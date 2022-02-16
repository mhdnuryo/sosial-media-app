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


  Socket?.off('connect').on('connect',
    () => console.log('connected')
  )

  Socket?.off('test').on('test',
    (val) => alert(val)
  )

  return [Socket]
}

export default useSocket;