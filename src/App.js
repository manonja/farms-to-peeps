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
    first_name: '',
    user_type: ''
  }

  signin = (email, token) => {
    localStorage.setItem('token', token)

    this.setState({email}, () => {
      if (this.state.user_type === 'customer') {
        this.props.history.push('/products')
      } else if ((this.state.user_type === 'farmer')) {
        this.props.history.push('/farmers')
      } else {
        this.props.history.push('/')
      }
    })
  }

  signup = (email, user_type, first_name) => {
      this.setState({email, user_type, first_name})
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
    const {signin, signup, signout} = this
    const {email, first_name, userType} = this.state
    return ( 
      <div className="app-container">
      <header className="App-header">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={props => <Signin {...props} signin={signin}/>} />
          <Route exact path='/signup' component={props => <Signup {...props} signup={signup}/>} />
          <Route exact path='/products' component={props => <CustomerContainer {...props} email={email} first_name={first_name} userType={userType} signout={signout}/>}/>
          <Route exact path='/farmers' component={props => <FarmerContainer {...props} email={email} first_name={first_name} userType={userType} signout={signout}/>}/>
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>     
      </header>
    </div>
     );
  }
}


export default withRouter(App)
