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
               
                 
                {   
                    this.props.current_user  && <div id='welcome-user' className='navbar-nav mx-auto'>Welcome, {this.props.current_user.first_name}! </div>  
                }
                     
                    { noUserLoggedIn 
                        ? 
                                <ul className="navbar-nav ml-auto">
                                    <Link to='/' id="about">About</Link>
                                    <Link to='/products' id='shop'> Shop</Link>
                                    <Link to='/signup' id='register'>Register  </Link>
                                    <Link to='/signin' id='login'> Login</Link>
                                </ul>
                         
                        : (
                            isCustomer 
                            ?   
                            
                            <ul className='navbar-nav ml-auto'>
                                  <div className='panel-icon' ref={ref => this.el = ref}>
                                        <i className='fas fa-shopping-basket' onClick={() => this.setState({ isPaneOpen: true })}></i>{itemNumber}
                                        <SlidingPane
                                            className='some-custom-class'
                                            overlayClassName='some-custom-overlay-class'
                                            isOpen={ this.state.isPaneOpen }
                                            width='400px'
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
                                    <Link to='/products' id="shop-2">Shop</Link>
                                    <Link to='/peep-profile' id="profile">My profile</Link> 
                                    <a id='logout' onClick={this.props.signout}>Logout</a>
                                 
                            </ul>

                            :  <ul className='navbar-nav ml-auto'>
                                        <Link to='/farmers' id="sales"><p>Sales</p></Link> 
                                        <Link to='/farmer-profile' id='farmer-profile'><p>My profile</p></Link> 
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