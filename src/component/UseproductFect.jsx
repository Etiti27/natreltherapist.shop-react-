import React, {useState} from 'react';
import UseFetch from './UseFetch';
import loader from '../images/loader-waiting.gif';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
// import image1 from '../images/dailytoxelixir3.png';
// import image2 from '../images/hairoil.png';
import { primaryURL, age } from './Config';
import Carousel from 'react-bootstrap/Carousel';
// import imagee from '../images/'




function UseproductFect() {
  const [index, setIndex] = useState(0);
  const [modal, setModal]= useState(true);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
console.log(require(`../images/loader-waiting.gif`));
  // console.log(`${primaryURL}/data`);
  // console.log(age);
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
  const url=`${primaryURL}/data`;
  const url2=`http://localhost:3000/data`
  const cartURL=`${primaryURL}/addtocart`;
  const testCartURL=`http://localhost:3000/addtocart`
  const {isPending:isLoading, error, products}=UseFetch(url);
  // console.log(products);
  // const images=[
  //   image1,
  //   image2
  // ]

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

    axios ({
      
      url:cartURL,
      method: 'POST',
      data:allFeactures,
      withCredentials:true,
     
  }).then((res)=>{
      console.log(res);
      if(res.status===200){
        confirmation()
        // history.push("/cart")
      }
    })
  }

 

  

  return (
    <div>

{modal && <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>}


    {/* <div className="home-route"> */}
    {/* <div >{isLoading && <p className='loadingImage'> <img style={{width:'100%', height:'100%'}} className='loadingImage' src={loader} alt="Loadingimage"/> </p>} </div> */}
    {/* <div>{error && <p>{error}</p>}</div>  */}

   {/* {products && <div className="frontal"> <main style={{color:'#008037'}}>HAIR AND SKIN CARE PRODUCTS WITHOUT HARSH CHEMICAL INGREDIENTS</main></div>} */}
    {/* <section className="f-container">
    
      
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
                       <div onClick={handleCart}> <img src={images[i]}  alt="Hair elixir" className="image_1"/></div>
                        
                            
                              <form onSubmit={handleCart}>
                                <input type="hidden"   name="name" value={product.name} />
                                
                                  {product.salePrice ?
                                <input type="hidden"  name="salePrice" value={product.salePrice} /> 
                                  :
                                <input type="hidden"  name="price" value={product.price} /> 
                                }
                                <input type="hidden" name="quantity" value={product.quantity} />
                                <input type='hidden' name="image" value={product.image}  />
                                
                                <input type="hidden" name="id"  value={product._id}/>
                              
                              
                                <button>
                                <div className="buy_bt btn btn-success" ><AddShoppingCartIcon /> Buy Now </div>  
                                </button>
                                
                              </form>
                             
                              <div>
                              <h3  className="price_text1" > <span className="price_text sale-price">€{product.salePrice} &nbsp;</span><span className='price' style={{textDecoration:'line-through'}}>€{product.price}</span>  </h3>
                              
                              </div>     
                    
                    </div>
              </div>
           
          
        </div>
      </div>
    
  </div>
  )
})}
</section> */}
{/* beginning of new card */}


{/* // </div> */}
<div >{isLoading && <p className='loadingImage'> <img style={{width:'100%', height:'100%'}} className='loadingImage' src={loader} alt="Loadingimage"/> </p>} </div>
    <div>{error && <p>{error}</p>}</div> 

   {products && <div className="frontal"> <main style={{color:'#008037', display:"none"}}>HAIR AND SKIN CARE PRODUCTS WITHOUT HARSH CHEMICAL INGREDIENTS</main></div>}
<div className="row row-cols-1 row-cols-md-3 g-4">
{products && products.map((product, i)=>{
   
  return (<div key={product._id}>
  <div style={{marginTop:"20px"}} className="col">
    <div className="card h-100">
      {/* beginning of carousel */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={require(`../images/${product.image}`)} alt={product.name} className='imagee' style={{width:"100px", alignContent:"center"}} />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../images/${product.image}`)}
          alt="Second slide"
          style={{width:"200px", alignContent:"center"}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
       <Carousel.Item>
       {product.image2 ? <img src={require(`../images/${product.image2}`)} alt={product.name} className='imagee' style={{width:"100px", alignContent:"center"}} /> : <img src={require(`../images/${product.image}`)} alt={product.name} className='imagee' style={{width:"100px", alignContent:"center"}} />}
      

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
      {/* end of carousel */}
      {/* <img src={require(`../images/${product.image}`)} alt={product.name} className='imagee' style={{width:"200px", alignContent:"center"}} /> */}
     
      <div className="card-body">
        <h5 className="card-title bursh_text title">{product.name.toUpperCase()}</h5>
        <p className="card-text lorem_text">{product.desc.substring(0,250)}...<Link to={`/productdetails/${product.name}`} className="read-more" style={{fontWeight:"bold"}} >Read More</Link></p>
        {/* <p class="card-text">{product.moreDesc.substring(0,20)}...</p> */}
        <br/>
        <form onSubmit={handleCart}>
                                <input type="hidden"   name="name" value={product.name} />
                                
                                  {product.salePrice ?
                                <input type="hidden"  name="salePrice" value={product.salePrice} /> 
                                  :
                                <input type="hidden"  name="price" value={product.price} /> 
                                }
                                <input type="hidden" name="quantity" value={product.quantity} />
                                <input type='hidden' name="image" value={product.image}  />
                                
                                <input type="hidden" name="id"  value={product._id}/>
                              
                              
                                <button>
                                <div className="btn btn-success" ><AddShoppingCartIcon /> Buy Now </div>  
                                </button>
                                
                              </form>
                              <div>
                           {product.price ===undefined ?<h3  className="price_text1" > <span className="price_text sale-price">€{product.salePrice} &nbsp;</span>  </h3>: <h3  className="price_text1" > <span className="price_text sale-price">€{product.salePrice} &nbsp;</span><span className='price' style={{textDecoration:'line-through'}}>€{product.price}</span>  </h3> } 
                              
                              </div>
      </div>
    </div>
  </div>
 

  {/* begin */}
  <div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
 
  {/* end */}
  </div>)
})}


</div>
{/* end of new card */}
</div>
  )
}

export default UseproductFect