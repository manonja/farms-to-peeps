import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar">
                <a href="#" className="logo">Farms To Peeps</a>
                
                <ul className='nav'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#login/register">Login</a></li>
                    <li><a href="#login/register">Get Started</a></li>
                </ul>
            </div>
         );
    }
}
 
export default Navbar;