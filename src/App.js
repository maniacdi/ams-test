import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/homepage/Home';
import Login from './pages/login/Login';
import ItemList from './pages/itemList/ItemList';
import ItemDetail from './pages/itemDetail/ItemDetail';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  if (isLoggedIn === false) {
    return <Login handleLogin={handleLogin} />;
  }
  return (
    <Router>
      <Header handleLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<ItemList />} />
        <Route path='/item/:id' element={<ItemDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
