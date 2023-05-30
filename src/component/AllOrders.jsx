import React, {useState, useEffect} from 'react';
import { primaryURL } from './Config';
import axios from 'axios';
import loader from '../images/loader-waiting.gif';
import goodMarkIcon from '../images/goodmarkicon.png';
import badMarkIcon from '../images/badmarkicon.png';
import { useHistory } from 'react-router-dom';

function AllOrders() {
    const history=useHistory();
    const [orders, setOrders]=useState([]);
    const [found, setFound] = useState(true);
    const [clientId, setClientId] = useState('');
    const url=`http://localhost:3000/allorders`;
    const url2=`${primaryURL}/allorders`;
    const url3=`${primaryURL}/confirmshipping`;
    const url4= 'http://localhost:3000/confirmshipping';
    const shipped=`Shipped`;
    
    const check=()=>{
        const getInput= document.getElementById('input').value;
        console.log(getInput);
    }
    
    const confirmShip=(e,clientId)=>{
        console.log(clientId);
        e.preventDefault();
      
        let text=`Item(s) has been shipped, confirm?`
        
      if(window.confirm(text)){
        
        setFound(false)
        axios({
          method: 'POST',
          url: url3,
          withCredentials:true,
          data:{shipped,clientId}
        }).then((res)=>{
          console.log(res);
          
          if(res.status===200){
            setFound(true)
            
            let message=` Status for "${clientId}" is successfully updated`
           alert(message)
           setTimeout(() => {
            history.replace('/allorders')
           }, 5000);
            
          }
        })
        
      }else{
        const message=`We could not update "${clientId}" status, please contact your developer`;
        alert(message)
        setTimeout(() => {
            history.go('/allorders'); 
        }, 5000);
        
      }
    }
    
        axios({
            method: 'GET',
            url:url2,
            withCredentials: true
        }).then((res)=>{
           setOrders(res.data)
           setFound(false)
        })
        
    
    
    // console.log(orders.length);
  return (
    <div>
    <div className="title">
<h1 onClick={check} style={{textDecoration:"underline"}}>ALL ORDERS</h1>
{found && <div><img src={loader}/></div>}
    </div>
<table style={{width:'100%'}}>
    
    {
    orders.length > 0  && orders.map((order) => {
        return <div>
        <tr style={{backgroundColor:"green", color:"white"}}>
    <th>UserID</th>
    <th>Name </th>
    <th>Address</th>
    <th>Email</th>
    <th>Product Details</th>
    <th>Amount</th>
    <th>Ordered Date</th>
    <th>Shipped Date</th>
    <th>Status</th>
    </tr>
    <tr >
    <td>{order.userID}</td>
    <td>{order.lastName} {order.firstName}</td>
    <td>{order.address} {order.city} {order.country}</td>
    <td>{order.email}</td>
    
    <td>{order.product.map((pro)=>{
                return (
                    
                  <table className="insideT" style={{width: '100%', border:"none"}}>
                    
                    <tr>
                      <td className="insideD" >{pro.name}</td>
                      <td className="insideD">{pro.quantity}</td>
                      
                    </tr>
                  </table>
                )
              })}</td>
              <td>€{order.amountSpent}.00</td>
    <td>{order.date}</td>
    <td>{order.shipDate}</td>
    
    <td>{order.status ==='Shipped' ? <div><button   disabled id="shipped" className="btn btn-success">{order.status} </button><img width="20%" height=""src={goodMarkIcon}/></div>:<div ><button onClick={(e)=>{confirmShip(e,order.userID)}} id="shipped" className="btn btn-success">{order.status}</button><img width="20%" height=""src={badMarkIcon} /></div> }</td> 
            
    </tr> 
    
        </div>
    })
   }
</table>
   
    </div>
  )
 
}

export default AllOrders