import React, { Component } from 'react';


import AccountDetails from '../components/AccountDetails'
import ComingSoon from './ComingSoon';
import ProductDetails from '../components/ProductDetails'

class FarmerProfile extends Component {
    state = {
        option: 'accountDetails'
     }
 
     handleSelectOption = (e) => {
         this.setState({option: e.target.name })
     }
 
     render() { 
         const rendering = (option) => {
             if (option === 'accountDetails'){
                 return <AccountDetails current_user={this.props.current_user}/>
              } else if (option === 'products'){
                 return <ProductDetails farmerProducts={this.props.farmerProducts}/>
              } else if (option === 'deliveries' || option === 'recurringItem'){
                 return <ComingSoon />
              }
         }
        
         return ( 
             <main className="mt-5" id='profile-container'>
                 <div className="sidebar">
                     <a onClick={this.handleSelectOption}className="active" name='accountDetails'>Account Details</a>
                     <a onClick={this.handleSelectOption} name='products'>Products</a>
                     <a onClick={this.handleSelectOption} name='deliveries'>Deliveries</a>
                     <a onClick={this.handleSelectOption} name='recurringCustomer'>Recurring Customer</a>
                 </div>
                 <div id='profile-components' className="content">
                     {rendering(this.state.option)}
                 </div>
             </main>
          );
     }
}
 
export default FarmerProfile;