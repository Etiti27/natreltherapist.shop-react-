
import { useState,useEffect  } from 'react';
import axios from 'axios';

function UseFetch(url) {
    const [products, setProduct]= useState(null);
    const [isPending, setIsPending]= useState(true);
    const [error, setError]= useState(null);
    // const url='http://localhost:30001'


    
   
   useEffect(()=>{
    const abortCount= new AbortController()
        axios({
            url:url,
            withCredentials:true,
            method:'GET',  
        },{signal:abortCount.signal})
    .then((response)=>{
        
        if(response.status !==200){
            setIsPending(false)

            throw Error(`can't get resources from ${url}`)
            
        }
        else if(response.data){
            setProduct(response.data)
            setIsPending(false)
            setError(null)
        // console.log(data);
        }   
    })
    .catch((err)=>{
        if(err.message==="AbortError"){
            console.log(`fetch aborted`);
        }else{
        setError(err.message)
        setIsPending(false) 
        setProduct(null)
        }
        
    })
    return ()=>abortCount.abort()
    
    
        
   },[url])
    
  return {
    isPending, error, products
  }
}

export default UseFetch
