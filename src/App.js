
// import './App.css';
import Home from './component/ineffectiveComponents/Home';
import Nav from './component/Nav';



import Banner from './component/Banner';

import About from './component/About';
import CustomerReview from './component/ineffectiveComponents/CustomerReview';

import Copyright from './component/Copyright';
import CheckLink from './component/ineffectiveComponents/Link';
import BannerDetail from './component/BannerDetail';
import ProductDetail from './component/ProductDetail';
// import Button from '@mui/material-next/Button';
import AboutUs from './component/AboutUs';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import ProductFetch from './component/ProductFetch';
import UseproductFect from './component/UseproductFect';
import Cart from './component/Cart';
import Forms from './component/ineffectiveComponents/Formik';
import Payment from "./component/ineffectiveComponents/Payment"
import StripeSuccess from './component/StripeSuccess';
import Test from './component/Test';
import FoundSearch from './component/FoundSearch';
import Contact from './component/Contact';
import Contactfailed from './component/Contactfailed';
import Contactsuccess from './component/Contactsuccess';
import { FastField } from 'formik';
import Failed from './component/Failed';
import Register from './component/Register';
import Login from './component/Login';
import AdminSection from './component/AdminSection';

import DescriptionAlerts from './component/DescriptionAlerts';
import AllOrders from './component/AllOrders';
import NewNav from './component/NewNav';
// import 'bootstrap/dist/css/bootstrap.css';









// import "./css/App.css"

// 


function App() {

  
  return (
    <div className="App">
   <Router>
      <Nav />
      <Switch>
      <Route  exact path="/" className="home-route">
      {/* <Banner /> */}
      <UseproductFect />
     
      {/* <About /> */}
      </Route>
      
    
      
      
      {/* <CustomerReview /> */}
      {/* <Footer /> */}
      <Route exact path="/bannerdetails"> <BannerDetail /></Route>
      <Route exact path='/productdetails/:name'><ProductDetail /></Route>
      <Route exact path='/about'><AboutUs /> </Route>
       <Route exact path='/cart' > <Cart /></Route>
      <Route exact path='/stripe-success' > <StripeSuccess /></Route>
      <Route exact path='/cancel' > <UseproductFect /></Route>
      <Route exact path='/searchfound/found' > <FoundSearch /></Route>
      <Route exact path='/contact' ><Contact /></Route>
      <Route exact path='/fail' ><Contactfailed /></Route>
      <Route exact path='/contactsubmitted'><Contactsuccess /></Route>
      <Route exact path='/failed'><Failed /></Route>
      <Route exact path='/register'> <Register /></Route>
      <Route exact path='/userfound'><DescriptionAlerts /></Route>
      <Route exact path='/login' > <Login /></Route>
      <Route exact path='/adminsection' > <AdminSection /></Route>
      <Route exact path='/allorders' > <AllOrders /></Route>
      <Route exact path='/newnav'> <NewNav /> </Route>

      
      </Switch>
      <Copyright />
      
      {/* <Forms /> */}
      {/* <Test /> */}
      
    
      </Router>
     
    </div>
  );
}

export default App;
