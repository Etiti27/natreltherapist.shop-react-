import React from 'react';
import UseFetch from './UseFetch';
import loader from '../images/loader-waiting.gif';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import image1 from '../images/dailytoxin.png';
import image2 from '../images/HairElixir3.png';
import { primaryURL, age } from './Config';




function UseproductFect() {
  console.log(`${primaryURL}/data`);
  console.log(age);
  let text=`Product added to Cart, Do you want to view the cart?`
// console.log(checker);
const confirmation=()=>{
  if(window.confirm(text)){
    history.push('/cart');
  }else{
    history.push('/');
  }
}
  const history = useHistory();
  const url=`${primaryURL}/data`
  const {isPending:isLoading, error, products}=UseFetch(url);
  console.log(products);
  const images=[
    image1,
    image2
  ]

  // console.log(images[1]);

  const handleCart=(e)=>{
    e.preventDefault();
    const allFeactures={
      name:e.target.name.value,
      id:e.target.id.value,
      salePrice:e.target.salePrice.value,
      quantity:e.target.quantity.value,
      image:e.target.image.value
    };


    axios.post(`${primaryURL}/addtocart`, allFeactures)
    .then((res)=>{
      if(res.status===200){
        confirmation()
        // history.push("/cart")
      }
    })
  }

 

  

  return (

    <div className="home-route">
    <div >{isLoading && <p className='loadingImage'> <img style={{width:'100%', height:'100%'}} className='loadingImage' src={loader} alt="Loadingimage"/> </p>} </div>
    <div>{error && <p>{error}</p>}</div> 

   {products && <div className="frontal"> <main style={{color:'#008037', fontSize:'2rem'}}>HAIR AND SKIN CARE PRODUCTS WITHOUT HARSH CHEMICAL INGREDIENTS</main></div>}
    <section className="f-container">
    
      
      {products && products.map((product, i)=>{    
        
  return ( 
  <div key={product._id}>
    
    
      
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
                                <input type='hidden' name="image" value={images[i]}  />
                                
                                <input type="hidden" name="id"  value={product._id}/>
                              
                              
                                <button>
                                <div className="buy_bt btn btn-success" ><AddShoppingCartIcon /> BUY NOW </div>  
                                </button>
                                
                              </form>
                             
                              <div>
                              <h3  className="price_text1 price"  style={{textDecoration:'line-through'}}> Price:  €{product.price}</h3>
                              <h3 className="price_text transitiona price1" > Sales Price: €{product.salePrice}</h3>
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