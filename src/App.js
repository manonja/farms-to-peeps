import React, {Component} from 'react'
import './App.css';

import ProductList from './components/ProductList'

class App extends Component {
  state = { 
    products: [],
    selectedProduct: false
   }


  render() { 
    const {products} = this.state

    return ( 
      <div className="app-container">
      <header className="App-header">
        <ProductList products= {products} />
       
      </header>
    </div>
     );
  }
}


export default App
