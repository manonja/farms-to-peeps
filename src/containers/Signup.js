import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import API from '../data/API'


class Signup extends Component {
    state = {
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        phone: '',
        password: '', 
        user_type: '' 
    }

    handleSubmit = (e) => {
        // API.signin(this.state)
        e.preventDefault()
        API.signup(this.state)
            .then(data => {
                if (data.error){
                    alert('not working!')
                }
                else {
                    // user is authentificated!
                    this.props.signup(this.state.email)
                    this.props.history.push('/signin')
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
    
                    <p className="h4 mb-4">Sign up</p>
    
                    <input 
                        name='first_name' 
                        id="defaultSignup" 
                        onChange={this.handleChange} 
                        value={this.state.first_name} 
                        className="form-control mb-4" 
                        placeholder="first name" 
                    />

                    <input 
                        name='last_name' 
                        id="defaultSignup" 
                        onChange={this.handleChange} 
                        value={this.state.last_name} 
                        className="form-control mb-4" 
                        placeholder="last name" 
                    />
                    <input 
                        name='address' 
                        id="defaultSignup" 
                        onChange={this.handleChange} 
                        value={this.state.address} 
                        className="form-control mb-4" 
                        placeholder="address" 
                    />
                    <input 
                        name='email' 
                        id="defaultSignup" 
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        className="form-control mb-4" 
                        placeholder="email" 
                    />
                    <input 
                        name='phone' 
                        id="defaultSignup" 
                        onChange={this.handleChange} 
                        value={this.state.phone} 
                        className="form-control mb-4" 
                        placeholder="phone" 
                    />
                    <input 
                        name='password' 
                        type='password'
                        id="defaultSignupPassword" 
                        onChange={this.handleChange} 
                        value={this.state.password} 
                        className="form-control mb-4" 
                        placeholder="Password" 
                    />

                    <fieldset>
                        <legend>Check the box below if you are a farmer</legend>
                        <div>
                            <input type="checkbox" id="user_type" name="user_type" value="farmer"/>
                            <label htmlFor="user_type">I am a farmer!</label>
                        </div>
                    </fieldset>
                
    
                    <Link to='/signin'><button className="btn btn-block btn-outline-orange btn-lg" onClick={(e) => this.handleSubmit(e)}  type="submit">Sign me up!</button></Link>
    
                    </form>
            </div>
          
        );
    }
    
} 
      

export default Signup;