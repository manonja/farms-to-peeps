import React, { Component } from 'react';

import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light sticky-top scrolling-navbar">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
                <div className="collapse navbar-collapse" id="basicExampleNav">
    
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="navbar-brand" href="/">Farms To People</a>
                            
                           
                        </li>
                    </ul>
                    <ul className='nav form-inline my-2 my-lg-0 ml-auto '>
                        <Link to='/signin'><li>Login</li></Link>
                        <Link to='/signup'><button className="btn btn-outline-dark btn-lg my-2 my-sm-0 ml-3">REGISTER</button></Link>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;