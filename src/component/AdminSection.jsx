import React, {useState} from 'react';
import UseFetch from './UseFetch';
import { primaryURL, age } from './Config';
import axios from 'axios';
import loader from '../images/loader-waiting.gif';
import { Link, useHistory } from 'react-router-dom';



function  AdminSection() {
  const history = useHistory();
  const [products, setProducts]= useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [clientId, setClientId] = useState('')
  const [shippedd, setShippedd] = useState(false)
  const [found, setFound] = useState(false);
  const [notFound, setNotFound] = useState(false)
  const [shipDate, setShipDate] = useState('')

    
    const url=`${primaryURL}/user/admin` ;
    const logout=`${primaryURL}/user/logout`

    const logMeOut=()=>{
      axios({
        method:'POST',
        url:logout,
        withCredentials:true,

      }).then((res)=>{
        console.log(res.status);
        if(res.status===200){
          history.push('/login')
        }
      })
    }
    
// console.log(detail);
    const handleSubmit=(e)=>{
      e.preventDefault();
      setError(false)
    setIsLoading(true)
    setProducts(null)
      console.log(clientId);
      axios ({
        method: 'POST',
        data:{clientId},
        withCredentials:true,
        url:url
    }
    ).then((res)=>{
      console.log(res);
      if(res.data==='not found'){
        setFound(false)
        setNotFound(true)
        setIsLoading(false)
        setError(false)
      }
      else if(res.data===`not authenticated`){
        
        alert(`You're not currently login. pls login!`)
            setTimeout(() => {
              history.push('/login')
            }, 1000);

      }
      else{
        setFound(true)
        setNotFound(false)
        setIsLoading(false)
        setError(false)
        setProducts(res.data)
      }
      // console.log(res.data);
      
      
      
    }).catch((err)=>{
      setIsLoading(false)
      setError(err.message)
      setProducts(false)
    })

    }    
    const detail=products && products.product;
    let text=`Item(s) has been shipped?`
    const url2=`${primaryURL}/confirmshipping`
  
    const shipped=`Shipped`
    const confirmShip=()=>{
      if(window.confirm(text)){
        setIsLoading(true)
        axios({
          method: 'POST',
          url: url2,
          withCredentials:true,
          data:{shipped,clientId}
        }).then((res)=>{
          console.log(res.data.date);
          
          if(res.status===200){
            setIsLoading(false)
            
            
            
           
            history.go('/adminsection')
          }
        })
        
      }else{
        history.push('/');
      }
    }
    const viewAll=()=>{
      history.push('/allorders')
    }
  return (
    <div style={{paddingTop:'20px', paddingBottom:'50px'}}>
    <div className="title">
    {/* <button onClick={viewAll} className="btn btn-success">view all ordered products</button> */}
   <button className='btn btn-success floater' onClick={logMeOut}>logout</button>
    <h1 style={{color:'#008037'}} >DASHBOARD</h1>
        
        <form onSubmit={handleSubmit} style={{paddingBottom:'30px'}}>
        <label>Enter Client ID:</label>
          <input style={{marginRight:'20px'}} type='text' name='clientId'  onChange={(e)=>{setClientId(e.target.value)}} value={clientId} placeholder="Enter Client ID"/>
          <button className="btn btn-success">submit</button>
        </form>
        {isLoading && <div><img src={loader}/></div>}
        {notFound && <div style={{color:'red'}}>UserID Not Found In The Database</div>}
        {found && products && <div>
          <table style={{width:'100%'}} >
            <tr style={{backgroundColor:"green", color:"white"}}>
              <th>orderID</th>
              <th>Name </th>
              <th>Address</th>
              <th>Email</th>
              <th>Product Details</th>
              <th>Amount</th>
              <th>Ordered Date</th>
              <th>Shipped Date</th>
              <th>Status</th>
              
            </tr>
            <tr>
              <td>{products.orderID}</td>
              <td>{products.lastName} {products.firstName}</td>
              <td>{products.address} {products.city} {products.country}</td>
              <td>{products.email}</td>
              
              <td>{detail.map((pro)=>{
                return (
                  <table className='insideT' style={{width: '100%'}}>
                    
                    <tr>
                      <td className='insideD'>{pro.name}</td>
                      <td className='insideD'>{pro.quantity}</td>
                      
                    </tr>
                  </table>
                )
              })}</td>
              <td>€{JSON.stringify(products.amountSpent).split(" ")}</td>
              <td>{products.date}</td>
              <td>{products.shipDate}</td>
              <td>{products.status ==='Shipped' ? <button  onClick={confirmShip} disabled id="shipped" className="btn btn-success">{products.status}</button>:<button onClick={confirmShip} id="shipped" className="btn btn-success">{products.status}</button> }</td>
            </tr>
          </table>
        </div>}

        <div style={{paddingTop:'60px'}} > <button onClick={viewAll} className="btn btn-success">view all ordered products</button></div>
        </div>
       
       
    </div>
  )
}

export default AdminSection