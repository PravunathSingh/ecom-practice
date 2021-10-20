import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleCategory from './components/categories/SingleCategory';
import ProductDetails from './components/products/ProductDetails';
import ProductsList from './components/products/ProductsList';
import Categories from './pages/Categories';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/categories' component={Categories} />
        <Route exact path='/products/category/:id' component={SingleCategory} />
        <Route exact path='/all-products' component={ProductsList} />
        <Route exact path='/productDetails/:id' component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export default App;
