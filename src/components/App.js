import React from 'react';
import './App.css';
import Header from './Header/Header';
import ReviewsList from './ReviewsList/ReviewsList';
import ShoppingCart from './ShoppingCart/ShoppingCart';

function App() {
  return (
    <>
      <Header />
      <main className="app__main">
        <ReviewsList />
        <ShoppingCart />
      </main>

    </>
  );
}

export default App;
