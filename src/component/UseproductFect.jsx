import React from 'react'
import UseFetch from './UseFetch'
import loader from '../images/loader-waiting.gif'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import axios from 'axios';
import image1 from '../images/HairElixir3.png';
import image2 from '../images/dailytoxin.png'




function UseproductFect() {
  const url="http://localhost:3000/data"
  const {isPending:isLoading, error, products}=UseFetch(url);
  const images=[
    image1,
    image2
  ]

  console.log(images[1]);

  const handleCart=(e)=>{
    e.preventDefault();
    const allFeactures={
      name:e.target.name.value,
      id:e.target.id.value,
      salePrice:e.target.salePrice.value,
      quantity:e.target.quantity.value
    };
console.log(allFeactures);

    axios.post('http://localhost:3000/addtocart', allFeactures)
    .then((res)=>{
      console.log(res.status);
    })
  }

 

  

  return (
    <div className="home-route">
    

   <div className="frontal"> <main style={{color:'white'}}>HAIR AND SKIN CARE PRODUCTS WITHOUT HARSH CHEMICAL INGREDIENTS</main></div>
    <section className="f-container">
      {products && products.map((product, i)=>{    
        
  return ( 
  <div key={product._id}>
    
    
      <div>{isLoading && <p> <img src={loader} alt="Loadingimage"/> </p>} </div> 
      <div>{error && <p>{error}</p>}</div>
      <div className="layout_padding">
        <div className="container">
          
                   

                  
                  
                    <div className="col">
                      <div className="product_box card shadow-sm card-body">
                        <h3 className="bursh_text title">{product.name}</h3>
                        <p className="lorem_text">{product.desc} </p>
                        <p className="lorem_text">{product.moreDesc.substring(0,100)}...</p> 
                        <div className=""><Link to={`/productdetails/${product.name}`} className="btn btn-light read-more">Read More</Link></div>
                        <img src={images[i]} alt="Hair elixir" className="image_1"/>
                            
                              <form onSubmit={handleCart}>
                                <input type="hidden"   name="name" value={product.name} />
                                
                                  {product.salePrice ?
                                <input type="hidden"  name="salePrice" value={product.salePrice} /> 
                                  :
                                <input type="hidden"  name="price" value={product.price} /> 
                                }
                                <input type="hidden" name="quantity" value={product.quantity} />
                                <input type='hidden'name='image' value={images[i]}  />
                                
                                <input type="hidden" name="id"  value={product._id}/>
                              
                              
                                <button>
                                <div className="buy_bt btn btn-success" ><AddShoppingCartIcon /> <span className="transitional"> BUY NOW </span></div>  
                                </button>
                                
                              </form>
                             
                              <div>
                              <h3  className="price_text1 price"  style={{textDecoration:'line-through'}}> Price:  €{product.price}</h3>
                              <h3 className="price_text transitional price1" > Sales Price: €{product.salePrice}</h3>
                              </div>     
                    
                    </div>
              </div>
           
          
        </div>
      </div>
    
  </div>
  )
})}
</section>
</div>
  )
}

export default UseproductFect