import React, {useEffect, useState} from 'react'
import UseFetch from './UseFetch'
import loader from '../images/loader-waiting.gif'
import hairElixir from "../images/HairElixir.jpeg"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios"



function UseproductFect() {
    const history= useHistory()
    const [names, setName]=useState('')
    const [price, setPrice]=useState("")
    const [salePrice, setSalePrice]= useState("")
    const [desc, setDesc]= useState('')
    const [moreDesc, setMoreDesc]= useState('')
    const [quantity, setQuantity]= useState(1)
    const [id, setId]= useState('')
    const [image, setImage]= useState('')
    
      
      const url="http://localhost:3000/data"
      const {isPending:isLoading, error, products}=UseFetch(url);

      useEffect(() => {
        products && products.map((product)=>{
            setPrice(product.productPrice)
            setSalePrice(product.productSalePrice)
            setName(product.productName)
            setDesc(product.productDescription)
            setMoreDesc(product.productMoreDescription)
            setQuantity(1)
            setId(product._id)
            setImage(hairElixir)

            return {price, salePrice, names, desc, moreDesc, quantity, id, image}
        })
         
      }, );
const handleCart=(e)=>{
    e.preventDefault();
    const productFeatures={
        price, salePrice, names, quantity, id,image
    }
    console.log(productFeatures);
    axios.post('http://localhost:3000/addToCart', productFeatures)
    .then((response)=>{
      console.log(response);
    })
  }

  return (
    <div>
         <div>
          <div>{isLoading && <p> <img src={loader} alt="Loadingimage"/> </p>} </div>
          
          <div>{error && <p>{error}</p>}</div>
          <div class="product_section layout_padding">
   
   <div class="container">
  
      <div class="row">
         <div class="col-sm-12">       
           <div >
          <h1 class="product_taital title">Our Products</h1>
           <div class="col-lg col-sm">
                    <div className="product_box">
                       <h3 className="bursh_text title">{names}</h3>
                       <p className="lorem_text">{desc} </p>
                       <p>{moreDesc}</p> <span><Link to="/productdetails" className="btn btn-light read-more">Read More</Link></span>
                       <img src={hairElixir} alt="Hair elixir" className="image_1"/>
                       <div className="">
                          <div className="buy_bt">
                    <div className="flex">
                     <form onSubmit={handleCart} >
                     
                       <input type="hidden"   name="name" value={names} />
                       {salePrice ?
                        <input type="hidden"  name="price" value={salePrice} /> 
                        :
                        <input type="hidden"  name="price" value={price} /> 
                        }
                        <input type="hidden" name="quantity" value={quantity} />
                        <input type="hidden" name="image" value={image}/>
                        <input type="hidden" name="id"  value={id}/>

                        
                        <button className='btn  addtocartbutton ' >
                        
                                 <AddShoppingCartIcon color='primary'/>
                             
                             </button>
                            {/* <button >add to cart</button> */}
                     </form>
                     
                  
                      <div>
                          <h3 className="price_text" > Price:  <span style={{textDecoration:'line-through'}}>£{price}</span></h3>
                          <h3 className="price_text" > Sales Price: £{salePrice}</h3>
                          </div>
                    
                          
                         
                          
                   
                    </div>
                             
                           
                               
                             
                          </div>
                         
                         
                          
                       </div>
                    </div>
                 </div>
       
         


        
         </div>
 
            

            
         </div>
      </div>
     
      </div>
      
      </div>
          </div>
    </div>
  )
}

export default UseproductFect