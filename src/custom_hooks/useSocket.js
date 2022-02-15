import React from 'react';
import io from 'socket.io-client';

function useSocket({REACT_APP_API}){
  const [Socket,setSocket] = React.useState(null);
 
  React.useEffect(() => {
  	const socket = io(
      REACT_APP_API
  	)
  	setSocket(socket)

    return () => {
      socket.close()
    }
  },[])

  return [Socket]
}

export default useSocket;