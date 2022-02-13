import React from 'react';
import axios from 'axios';

function useFetch(url,method,data,timestamp){
  var [onInit,setOnInit] = React.useState(true)
  var [pending,setPending] = React.useState(false)
  var [result,setResult] = React.useState(null)
  var [error,setError] = React.useState(null)
  var [isCancel,setIsCancel] = React.useState(false)

  function afterInit(){
  	setOnInit(false)
  }

  async function fetch(cancelToken){
    try{
      var result = await axios({
        url,method,data,
        cancelToken
      })
      setResult(result.data)
    }
    catch(err){
      if(axios.isCancel(err)){
      	setIsCancel(true)
      }
      else{
        if(err.response){
          setError(
            err.response.data
          )
        }
        else{
          setError(
            err.message
          )
        }
      }
    }
    finally{
      if(!isCancel){
      	setPending(false)
      }
    }
  }
  
  function preFetch(cancelToken){
  	if(!onInit){
  	  setError(null)
      setResult(null)
      setPending(true)
      setIsCancel(false)
  	  fetch(cancelToken)
  	}
  }

  React.useEffect(() => afterInit(),[]);

  React.useEffect(() => {
    var CancelToken = axios.CancelToken;
    var source = CancelToken.source()
    preFetch(source.token)
    
    return () => source.cancel(
      'canceled by user'
    )
  },[url,timestamp])



  return [pending,result,error]
}

export default useFetch;