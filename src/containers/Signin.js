import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import API from '../data/API'

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        API.signin(this.state)
            .then(data => {
                if (data.error){
                    alert("not working!", console.log(data.error))
                }
                else {
                    // user is authentificated!
                    this.props.signin(this.state.email, data.token)
                    // this.props.history.push('/memes')
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
                <h1>RETURNING USER</h1>
                <form className="text-center border border-light p-5">
                    
                    <p className="h4 mb-4">Sign in</p>
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

                    <button onClick={(e) => this.handleSubmit(e)}> Sign me in! </button>
                </form>

                <h1>NEW USER</h1>
                <h3>By creating an account with us, you will be able to move through the checkout process faster and view your orders.</h3>
                <Link to='/signup'><button>Create an account</button></Link>
            </div>
            );
    }
}
 
export default Signin;