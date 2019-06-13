import React, { Component } from 'react';

import {Link} from 'react-router-dom'


class Header extends Component {
    
    render() { 

        const noUserLoggedIn = !this.props.current_user
        const isCustomer = this.props.current_user && this.props.user_type === 'customer'
        
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light sticky-top scrolling-navbar">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="basicExampleNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                   <Link to='/'> <p className="navbar-brand">Farms To Peeps</p> </Link>
                    </li>
                </ul>
                <ul className='nav form-inline my-2 my-lg-0 ml-auto '>

                <h5> 
                {   
                    !this.props.current_user  
                    ? 
                        <Link to='/signup'><button className="btn btn-outline-dark btn-lg my-2 my-sm-0 ml-3">REGISTER</button></Link> 
                    : `Welcome back, ${this.props.current_user.first_name}!`}
                </h5>

                <div>
                    { noUserLoggedIn 
                        ?  <Link to='/signin'><li>Login</li></Link>
                        : (
                            isCustomer 
                            ?   <div>
                                    <Link to='/basket'><i className="fas fa-shopping-basket"></i></Link>
                                    <Link to='/profile'><button className="btn btn-outline-dark btn-md my-2 my-sm-0 ml-3">My profile</button></Link> 
                                    <button onClick={this.props.signout} className="btn btn-outline-orange btn-md my-2 my-sm-0 ml-3"          type="submit">Logout
                                    </button>
                                
                                </div>
                            :  <div>
                                    <Link to='/profile'><button className="btn btn-outline-dark btn-lg my-2 my-sm-0 ml-3">My profile</button></Link> 
                                    <button onClick={this.props.signout} className="btn btn-outline-green btn-md my-2 my-sm-0 ml-3"          type="submit">Logout
                                    </button>
                                </div>
                        )
     
                    }
                </div>       

            </ul>
            </div>
            </nav>
         );
    }
}

 
export default Header;