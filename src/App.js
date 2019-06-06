import React, {Component} from 'react'
import './App.css';

import { getAll } from './data/produces';

import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';



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
        <NavBar />
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
