import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import NavBar from '../components/NavBar'
class HomePage extends Component {

  
    render() { 
        return ( 
        <div >
            <NavBar />
            <div id="intro">
                <div className="mask rgba-light-light">
                    <div className="container d-flex align-items-center justify-content-center h-100">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-md-10">
                                <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">Farm To People</h2>
                                <hr className="hr-light"/>
                                <h4 className="white-text my-4">Get fresh produces from dedicated farmers</h4>
                                <Link to='/signin'><button  id='farmer-btn' type="button" className="btn btn-outline-white">GET STARTED</button></Link>
                                {/* <Link to='/signin'><button  id='customer-btn' type="button" className="btn btn-outline-white">I AM A PEEP</button></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
        </div>

           
           
        </div>
         );
    }
}
 
export default HomePage;