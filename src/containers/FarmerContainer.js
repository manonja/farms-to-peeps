import React, { Component } from 'react';

import { Route, Switch, Link, withRouter } from 'react-router-dom'

import API from '../data/API'


class FarmerContainer extends Component {
    state = { 
        email: ''
    }

    signin = (email, token) => {
        localStorage.setItem('token', token)
        this.setState({email}, () => {
          this.props.history.push('/products')
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
        return ( 
            <div>I am the farmer container</div>
         );
    }
}
 
export default FarmerContainer;