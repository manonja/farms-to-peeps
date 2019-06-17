import React, { Component } from 'react';

import AccountDetails from '../components/AccountDetails'
import BasketDetails from '../components/BasketDetails'
import ComingSoon from './ComingSoon';


class CustomerProfile extends Component {
    state = {
       option: 'accountDetails'
    }

    handleSelectOption = (e) => {
        this.setState({option: e.target.name })
    }

    render() { 
        const {option} = this.state
        const rendering = (option) => {
            if (option === 'accountDetails'){
                return <AccountDetails current_user={this.props.current_user}/>
             } else if (option === 'basket'){
                return <BasketDetails customerBasket={this.props.customerBasket} deleteProduct={this.props.deleteProduct}/>
             } else if (option === 'deliveries' || option === 'recurringItem'){
                return <ComingSoon />
             }
        }
       
        return ( 
            <main className="mt-5" id='profile-container'>
                <div className="sidebar">
                    <a onClick={this.handleSelectOption}className="active" name='accountDetails'>Account Details</a>
                    <a onClick={this.handleSelectOption} name='basket'>Basket</a>
                    <a onClick={this.handleSelectOption} name='deliveries'>Deliveries</a>
                    <a onClick={this.handleSelectOption} name='recurringItem'>Recurring Items</a>
                </div>
                <div id='profile-components' className="content">
                    {rendering(option)}
                </div>
            </main>
         );
    }
}
 
export default CustomerProfile;