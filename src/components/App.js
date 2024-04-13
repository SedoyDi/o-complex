import React from 'react';
import './App.css';
import Header from './Header/Header';
import ReviewsList from './ReviewsList/ReviewsList';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import CardList from './CardList/CardList';

function App() {
  return (
    <>
      <Header />
      <main className="app__main">
        <ReviewsList />
        <ShoppingCart />
        <CardList />
      </main>

    </>
  );
}

export default App;
