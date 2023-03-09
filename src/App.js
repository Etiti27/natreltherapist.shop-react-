
// import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';
import "./css/style.css";


import Banner from './component/Banner';
import Products from './component/Products';
import About from './component/About';
import CustomerReview from './component/CustomerReview';
import Footer from './component/Footer';
import Copyright from './component/Copyright';
import CheckLink from './component/Link';
import BannerDetail from './component/BannerDetail';
import ProductDetail from './component/ProductDetail';
// import Button from '@mui/material-next/Button';
import AboutUs from './component/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductFetch from './component/ProductFetch';
import UseproductFect from './component/UseproductFect';
import Cart from './component/Cart';





// import "./css/App.css"

// 


function App() {
  return (
    <div className="App">
   <Router>
      <Nav />
      <Switch>
      <Route exact path="/">
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
      
      
      </Switch>
      <Copyright />
      
      
      
    
      </Router>
     
    </div>
  );
}

export default App;
