import React, {Component} from 'react'
import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom'

import API from './data/API'

import HomePage from './containers/HomePage';
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import CustomerContainer from './containers/CustomerContainer';
import FarmerContainer from './containers/FarmerContainer';


// import CustomerBasket from './containers/CustomerBasket'


class App extends Component {
  
  state = {
    email: '',
    user_type: '', 
    current_user: '', 
    farmerProducts: [],
    customerBasket: [], 
    farm: ''
  }

  signin = (email, current_user, token) => {
    localStorage.setItem('token', token)
    this.setState({email, current_user}, async () => {
      await this.defUserType()
   
      if (this.state.user_type === 'customer') {
        this.props.history.push('/products')
      } else if ((this.state.user_type === 'farmer')) {
        this.props.history.push('/farmers')
      } else if (this.state.user_type === 'customer'){
        // this.getCustomerData()
        this.props.history.push('/products')
      } else {
        this.props.history.push('/')
      }
    })
    
    }
  
  


  signup = (email, user_type) => {
      this.setState({email, user_type})
    }

  signout = () => {
      this.setState({email: ''})
      localStorage.removeItem('token')
      this.props.history.push('/')
  }

   // def user type 
   defUserType = () => {
    if (this.state.current_user.farmer_id){
      return this.setState({user_type: 'farmer'})
    } else if (this.state.current_user.customer_id){
      return this.setState({user_type: 'customer'})
    } else {
      return this.setState({user_type: ''})
    }
  }

  getFarmerData = async () => {
    const id = this.state.current_user.farmer_id
    console.log(id)
    return fetch(`http://localhost:3001/farmers/${id}`)
        .then(resp => resp.json())
        .then(data => this.setState({farmerProducts: data.products, farm: data.farm}))
  }

  getCustomerData = async () => {
    // get customer basket 
    const id = this.state.current_user.customer_id
    // basket = data.basket.products
    return fetch(`http://localhost:3001/customers/${id}`)
      .then(resp => resp.json())
      .then(data => this.setState({customerBasket: data.basket.products}))
  }

  addToFarmerProducts = (newProduct) => {
    this.setState({farmerProducts: [...this.state.farmerProducts, newProduct]})
  }

  removeProduct = (id) => {
    API.removeProductFromSale(id)
      .then(this.removeFromSale(id))
  }
  
  removeFromSale = (id) => {
    this.setState({farmerProducts: [...this.state.farmerProducts.filter(p => p.id !== id)]})
  }


  componentDidMount() {
        API.validate()
          .then(data => {
              if(data.error){
                  this.props.history.push('/')
              }
              else {
                  this.signin(data.email, data.user, localStorage.getItem('token')) 
                  if (this.state.user_type === 'farmer'){
                    this.getFarmerData()
                  } else if (this.state.user_type === 'customer') {
                    this.getCustomerData()
                  }
              }
          })
    }

  render() { 
    const {signin, signup, signout, addToFarmerProducts, removeProduct} = this
    const {email, current_user, farmerProducts, customerBasket } = this.state
    return ( 
      <div className="app-container">
      <header className="App-header">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={props => <Signin {...props} signin={signin}/>} />
          <Route exact path='/signup' component={props => <Signup {...props} signup={signup}/>} />
          <Route 
            exact path='/products' 
            component={props => <CustomerContainer {...props} 
            customerBasket={customerBasket} 
            email={email} 
            current_user={current_user} 
            signout={signout}/>}/>
          <Route 
            exact path='/farmers' 
            component={props => <FarmerContainer {...props} 
            farmerProducts={farmerProducts} 
            addToFarmerProducts={addToFarmerProducts} 
            removeProduct={removeProduct}
            email={email} 
            current_user={current_user} 
            signout={signout}/>}/>
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>     
      </header>
    </div>
     );
  }
}


export default withRouter(App)
