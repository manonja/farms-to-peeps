import React, { Component } from 'react';


import AccountDetails from '../components/AccountDetails'
import ComingSoon from './ComingSoon';
import ProductDetails from '../components/ProductDetails'

class FarmerProfile extends Component {
    state = {
        option: ''
     }
 
     handleSelectOption = (e) => {
         this.setState({option: e.target.name })
     }
 
     render() { 
         console.log(this.state.option)
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
                     <p onClick={this.handleSelectOption}className="profile-link" name='accountDetails'>Account Details</p>
                     <p onClick={this.handleSelectOption} className='profile-link' name='products'>Products</p>
                     <p onClick={this.handleSelectOption} className='profile-link' name='deliveries'>Deliveries</p>
                     <p onClick={this.handleSelectOption} className='profile-link' name='recurringCustomer'>Recurring Customer</p>
                 </div>
                 <div id='profile-components' className="content">
                     {rendering(this.state.option)}
                 </div>
             </main>
          );
     }
}
 
export default FarmerProfile;