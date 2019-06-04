import React, {Component} from 'react'
import './App.css';

import { getAll, getByCategory } from './data/produces';


import ProductList from './components/ProductList'


class App extends Component {
  state = { 
    produces: [],
    selectedProduct: false, 
   }

   getProduces = () => {
     getAll()
      .then(produces => this.setState({produces}))
    
   }

   componentDidMount() {
     this.getProduces()
   }


  render() { 
    const {produces} = this.state

    return ( 
      <div className="app-container">
      <header className="App-header">
        <ProductList 
          produces= {produces} 
        />
       
      </header>
    </div>
     );
  }
}


export default App
