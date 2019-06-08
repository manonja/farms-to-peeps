import React, {Component} from 'react'
import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom'

import API from './data/API'

import HomePage from './containers/HomePage';
// import NavBar from './components/NavBar'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
// import CustomerBasket from './containers/CustomerBasket'



class App extends Component {
  
  state = {
    email: '',
    first_name: '',
    userType: '' //farmer or customer
  }

  signin = (email, token) => {
    localStorage.setItem('token', token)
    this.setState({email}, () => {
      if (this.state.userType === 'customer') {
        this.props.history.push('/products')
      } else if ((this.state.userType === 'farmer')) {
        this.props.history.push('/product-form')
      } else {
        this.props.history.push('/')
      }
    })
  }

  signup = (email) => {
      this.setState({email})
    }

  signout = () => {
      this.setState({email: ''})
      localStorage.removeItem('token')
      this.props.history.push('/')
    }

  componentDidMount() {
        API.validate()
          .then(data => {
              if(data.error){
                  this.props.history.push('/')
              }
              else {
                  this.signin(data.email, localStorage.getItem('token'))
              }
          })
    }

  render() { 
    const {signin, signup} = this
    return ( 
      <div className="app-container">
      <header className="App-header">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={props => <Signin {...props} signin={signin}/>} />
          <Route exact path='/signup' component={props => <Signup {...props} signup={signup}/>} />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>     
      </header>
    </div>
     );
  }
}


export default withRouter(App)
