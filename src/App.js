import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SingleCategory from './components/categories/SingleCategory';
import ProductDetails from './components/products/ProductDetails';
import ProductsList from './components/products/ProductsList';
import About from './pages/About';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/categories' component={Categories} />
        <Route exact path='/products/category/:id' component={SingleCategory} />
        <Route exact path='/all-products' component={ProductsList} />
        <Route exact path='/productDetails/:id' component={ProductDetails} />
        <Route exact path='/wishlist' component={Wishlist} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/contactUs' component={Contact} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
