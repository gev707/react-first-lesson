import './App.css';
import React from 'react';
import Product from './Components/Product/Product';

const menu = {
  capuchino : '2$',
  latte : '3.5$',
  espresso : '1.2$'
}
class App extends React.Component {
  
  render() {
      return (
        <div className='App'>
          <h1>This is Product Component</h1>
          <h2>Menu</h2>
          <Product 
            name='Capuchino'
            description = "Sweet coffee and milk"
            price = {menu.capuchino}
          />
          <Product 
            name='Espresso'
            description = "Dark coffee"
            price = {menu.espresso}
          />
          <Product 
            name='Latte'
            description = "Dream for you "
            price = {menu.latte}
          />
        </div>
      )
  }
  
}


export default App;
