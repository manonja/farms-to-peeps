import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'

import Basket from '../customerComponents/Basket'


class Header extends Component {

    state = {
        isPaneOpen: false
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }
    
    render() { 
        const itemNumber = this.props.customerBasket.length
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
                <ul className="navbar-nav mr-auto about">
                        <Link to='/'><p className="about">About</p></Link>
                </ul>
                                   
                
                {   
                    this.props.current_user  && <ul className='navbar-nav mx-auto'>Welcome (back), {this.props.current_user.first_name}! </ul>  
                }
                    
                    { noUserLoggedIn 
                        ?  
                        <ul className="navbar-nav ml-auto">
                            <Link to='/signup'>Register | </Link>
                            <Link to='/signin'> | Login</Link>
                        </ul>
                         
                        : (
                            isCustomer 
                            ?   <ul className='navbar-nav ml-auto'>
                                    <Link to='/products'><p className="shop">Shop</p></Link>
                                    <Link to='/peep-profile'><p className="my-2 my-sm-0 ml-3">My profile</p></Link> 
                                    <div className='panel-icon' ref={ref => this.el = ref}>
                                        <i className='fas fa-shopping-basket' onClick={() => this.setState({ isPaneOpen: true })}></i>{itemNumber}
                                        <SlidingPane

                                            className='some-custom-class'
                                            overlayClassName='some-custom-overlay-class'
                                            isOpen={ this.state.isPaneOpen }
                                            title='Hey, it is optional pane title.  I can be React component too.'
                                            width='400px'
                                            subtitle='Basket'
                                            onRequestClose={ () => {
                                                // triggered on "<" on left top click or on outside click
                                                this.setState({ isPaneOpen: false });
                                            } }>
                                            <div id='panel-title'>
                                                <h5>My basket</h5>
                                            </div>
                                            <div id='panel-content'>
                                                <br />
                                                { !this.props.customerBasket 
                                                    ? `Your basket is currently empty`
                                                    :   <Basket 
                                                            current_user={this.props.current_user}
                                                            basket_id={this.props.basket_id}
                                                            customerBasket={this.props.customerBasket}
                                                            deleteProduct={this.props.deleteProduct}
                                                        />
                                                }
                                                < br />
                                            </div>       
                                        </SlidingPane>
                                    </div>
                                    <button onClick={this.props.signout} className="btn btn-outline-orange btn-sm my-2 my-sm-0 ml-3"          
                                    type="submit">Logout
                                    </button>
                                </ul>
                            :  <ul className='navbar-nav ml-auto'>
                                        <Link to='/farmer-profile'><p>My profile</p></Link> 
                                    <button onClick={this.props.signout} className="btn btn-outline-orange btn-sm my-6 my-sm-2 ml-3"          
                                    type="submit">Logout
                                    </button>
                                    
                                </ul>
                        )
     
                    }

            </div>
            </nav>
         );
    }
}

 
export default Header;