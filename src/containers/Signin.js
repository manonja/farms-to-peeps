import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import API from '../data/API'

class Signin extends Component {
    state = {
        email: '',
        password: '',
        user_type: ''
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
                    <fieldset>
                        <legend>Check the box below if you are a farmer</legend>
                        <div>
                            <input type="checkbox" id="user_type" name="user_type" value="farmer"/>
                            <label htmlFor="user_type">I am a farmer!</label>
                        </div>
                    </fieldset>
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