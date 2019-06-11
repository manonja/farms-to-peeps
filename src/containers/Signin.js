import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import API from '../data/API'

class Signin extends Component {
    state = {
        email: '',
        password: '', 
        current_user: ''  
    }

    handleSubmit = (e) => {
        e.preventDefault()
        API.signin(this.state)
            .then(data => {
                if (data.error){
                    alert("not working!")
                }
                else {
                    // user is authentificated! 
                    this.setState({current_user: data.user})
                    this.props.signin(this.state.email, this.state.current_user, data.token)
                }
            })
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value})
    }
   
    render() { 
        return ( 
// <!-- Default form login -->
            <div>
                <form className="text-center border border-light p-5">
                <h3>RETURNING USER</h3>

                    
                    <h2 className="h4 mb-4">Sign in</h2>
                    <input 
                        name='email' 
                        id="defaultLoginFormEmail" 
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        className="form-control mb-4" 
                        placeholder="email" 
                    />
                    <input 
                        name='password' 
                        type='password'
                        id="defaultLoginFormPassword" 
                        onChange={this.handleChange} 
                        value={this.state.password} 
                        className="form-control mb-4" 
                        placeholder="Password" 
                    />
                 
                    <button className="btn btn-outline-orange btn-lg " onClick={(e) => this.handleSubmit(e)}> Sign me in! </button>
                </form>
                <form className="text-center border border-light p-5">

                    <h3>NEW USER</h3>
                    <h2 className="h4 mb-4">Register</h2>
                    <h5>By creating an account with us, you will be able to move through the checkout process faster and view your orders.</h5>
                    <Link to='/signup'><button className="btn btn-outline-orange btn-lg ">Create an account</button></Link>
                </form>
            </div>
            );
    }
}
 
export default Signin;