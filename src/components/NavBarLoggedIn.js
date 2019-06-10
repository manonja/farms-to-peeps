import React, { Component } from 'react';

import {Link} from 'react-router-dom'

class NavBarLoggedIn extends Component {
    state = {
        isLoggedIn: true
    }

  
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
                        <button onClick={this.props.signout} className="btn btn-outline-green btn-md my-2 my-sm-0 ml-3" type="submit">Logout</button>
                        <Link to='/basket'><i className="fas fa-shopping-basket"></i></Link>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default NavBarLoggedIn;