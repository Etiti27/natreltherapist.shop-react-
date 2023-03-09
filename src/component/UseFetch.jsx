
import { useState,useEffect  } from 'react';
import axios from 'axios';

function UseFetch(url) {
    const [products, setProduct]= useState(null);
    const [isPending, setIsPending]= useState(true);
    const [error, setError]= useState(null);
    // const url='http://localhost:30001'


    
   
   useEffect(()=>{
    
        axios.get(url)
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
        setError(err.message)
        setIsPending(false)
        setProduct(null)
    })
    
    
        
   },[url])
    
  return {
    isPending, error, products
  }
}

export default UseFetch
