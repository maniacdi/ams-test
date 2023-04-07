import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/homepage/Home';
import Login from './pages/login/Login';
import ItemList from './pages/itemList/ItemList';
import ItemDetail from './pages/itemDetail/ItemDetail';
import Footer from './components/footer/Footer';
import useCart from './hooks/useCart';
import './App.scss';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const [addToCart, getCartCountFromCache, cartCount] = useCart();
  useEffect(() => {
    console.log(getCartCountFromCache(), cartCount);
  });

  if (isLoggedIn === false) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <Router>
      <Header handleLogout={handleLogout} cartCount={getCartCountFromCache()} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ItemList addToCart={addToCart} />} />
        <Route
          path='/item/:id'
          element={<ItemDetail addToCart={addToCart} />}
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
