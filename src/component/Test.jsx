import React from 'react'
import UseFetch from './UseFetch'

function Test() {
    const url="http://localhost:3000/data"
    const {isPending:isLoading, error, products}=UseFetch(url);
    console.log(products);

  return (
    <div className="f-header" >
    <h1>our product</h1>
       <div className="f-container"> {products && products.map((product)=>{
            return(
                <div>
           <h1>{product.name}</h1>
           <p>{product._id}</p>
        </div>
            )
        })}
        </div>
    </div>
  )
}

export default Test