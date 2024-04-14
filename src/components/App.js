import React from 'react';
import './App.css';
import Header from './Header/Header';
import ReviewsList from './ReviewsList/ReviewsList';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import CardList from './CardList/CardList';
import PopUp from './PopUp/PopUp';

function App() {
  return (
    <div className='app'>
      <Header />
      <main className="app__main">
        <ReviewsList />
        <ShoppingCart />
        <CardList />
      </main>
      <PopUp />
    </div>
  );
}

export default App;
