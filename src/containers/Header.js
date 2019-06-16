import React, { Component } from 'react';

import {Link} from 'react-router-dom'


class Header extends Component {
    
    render() { 

        const noUserLoggedIn = !this.props.current_user
        const isCustomer = this.props.current_user && this.props.user_type === 'customer'
        
        return ( 
            <nav className="navbar navbar-expand-lg sticky-top scrolling-navbar ">
         
            <Link to='/'> <p className="navbar-brand">Farms To Peeps</p> </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbar-header">
                <ul className="navbar-nav mr-auto shop">
                        <Link to='/products'><p className="shop">Shop</p></Link>
                        <Link to='/'><p className="shop">About</p></Link>

                </ul>
            
                                         
                <ul className='navbar-nav mx-auto'>
                
                {   
                    !this.props.current_user  
                    ?       
                        <Link to='/signup'>REGISTER</Link> 
                    : `Welcome (back), ${this.props.current_user.first_name}!`
                }
                </ul>
                    
                    { noUserLoggedIn 
                        ?  
                            <Link to='/signin'>Login</Link>
                         
                        : (
                            isCustomer 
                            ?   <ul className='navbar-nav ml-auto'>
                                    <Link to='/peep-profile'><p className="my-2 my-sm-0 ml-3">My profile</p></Link> 
                                    <li></li><Link to='/basket'><i className="fas fa-shopping-basket"></i></Link>
                                    <button onClick={this.props.signout} className="btn btn-outline-orange btn-md my-2 my-sm-0 ml-3"          
                                    type="submit">Logout
                                    </button>
                                </ul>
                            :  <ul className='navbar-nav ml-auto'>
                                    <li>
                                        <Link to='/farmer-profile'><button className="btn btn-outline-dark btn-md my-2 my-sm-0 ml-3">My profile</button></Link> 
                                    </li>
                                    <li> <button onClick={this.props.signout} className="btn btn-outline-green btn-md my-2 my-sm-0 ml-3"          type="submit">Logout
                                        </button>
                                    </li>
                                </ul>
                        )
     
                    }

            </div>
            </nav>
         );
    }
}

 
export default Header;