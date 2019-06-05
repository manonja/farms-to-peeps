import React, { Component } from 'react';




class NavbarComponent extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">

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
                        <li><a  href='#about'>About</a></li>
                        <li><a href='#login'>Login</a></li>
                        <button className="btn btn-outline-dark btn-lg my-2 my-sm-0 ml-3" href='#get-started'>GET STARTED</button>

                    </ul>
                    {/* <button  className="btn btn-outline-dark btn-md my-2 my-sm-0 ml-3" type="submit">Dashboard</button>
                    <button className="btn btn-outline-dark btn-md my-2 my-sm-0 ml-3" type="submit">Logout</button> */}
                    
    
                </div>
            </nav>
         );
    }
}
 
export default NavbarComponent;