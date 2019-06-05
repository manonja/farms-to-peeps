import React, {Component} from 'react'
import './App.css';

import { getAll, getByCategory } from './data/produces';


import ProductList from './components/ProductList'
import NavbarComponent from './pages/NavbarComponent';
import HomePage from './pages/HomePage';



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
        <NavbarComponent />
        <HomePage />

        {/* <ProductList 
          produces= {produces} 
        /> */}
       
      </header>
    </div>
     );
  }
}


export default App
