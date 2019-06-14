import React, { Component } from 'react';

class FarmerProfile extends Component {
 
    render() { 
        return ( 
            <main className="mt-5" id='profile-container'>

            <div className="sidebar">
                <a className="active" href="#account-details">Account Details</a>
                <a href="#sale">Products</a>
                <a href="#deliveries">Deliveries</a>
                <a href="#recurring-customer">Recurring Customers</a>
            </div>

            <div className="content">
            ..
            </div>

            </main>
         );
    }
}
 
export default FarmerProfile;