
// import './App.css';
import Home from './component/ineffectiveComponents/Home';
import Nav from './component/Nav';
import "./css/style.css";


import Banner from './component/Banner';

import About from './component/About';
import CustomerReview from './component/ineffectiveComponents/CustomerReview';

import Copyright from './component/Copyright';
import CheckLink from './component/ineffectiveComponents/Link';
import BannerDetail from './component/BannerDetail';
import ProductDetail from './component/ProductDetail';
// import Button from '@mui/material-next/Button';
import AboutUs from './component/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductFetch from './component/ProductFetch';
import UseproductFect from './component/UseproductFect';
import Cart from './component/Cart';
import Forms from './component/ineffectiveComponents/Formik';
import Payment from "./component/ineffectiveComponents/Payment"
import StripeSuccess from './component/StripeSuccess';






// import "./css/App.css"

// 


function App() {
  return (
    <div className="App">
   <Router>
      <Nav />
      <Switch>
      <Route  exact path="/">
      <Banner />
      <UseproductFect />
     
      <About />
      </Route>
      
    
      
      
      {/* <CustomerReview /> */}
      {/* <Footer /> */}
      <Route exact path="/bannerdetails"> <BannerDetail /></Route>
      <Route exact path='/productdetails'><ProductDetail /></Route>
      <Route exact path='/aboutus'><AboutUs /> </Route>
      <Route exact path='/cart' > <Cart /></Route>
      <Route exact path='/stripe-success' > <StripeSuccess /></Route>
      
      
      </Switch>
      <Copyright />
      
      {/* <Forms /> */}
      
    
      </Router>
     
    </div>
  );
}

export default App;
