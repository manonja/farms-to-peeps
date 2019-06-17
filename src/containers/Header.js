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
                <ul className="navbar-nav mr-auto shop">
                        <Link to='/products'><p className="shop">Shop</p></Link>
                        <Link to='/'><p className="shop">About</p></Link>
                </ul>
                                   
                
                {   
                    !this.props.current_user  
                    ?    
                    <ul className='navbar-nav mr-auto'><Link to='/signup'>REGISTER</Link> 
                    </ul> 
                        
                    : 
                    <ul className='navbar-nav mx-auto'>Welcome (back), {this.props.current_user.first_name}! 
                    </ul>  
                }
                    
                    { noUserLoggedIn 
                        ?  
                        <ul className="navbar-nav ml-auto">
                            <Link to='/signin'>Login</Link>
                        </ul>
                         
                        : (
                            isCustomer 
                            ?   <ul className='navbar-nav ml-auto'>
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
                                    {/* <div className>{itemNumber}</div> */}
                                    <button onClick={this.props.signout} className="btn btn-outline-orange btn-md my-2 my-sm-0 ml-3"          
                                    type="submit">Logout
                                    </button>
                                </ul>
                            :  <ul className='navbar-nav ml-auto'>
                                    <li>
                                        <Link to='/farmer-profile'><button className="btn btn-outline-dark btn-md my-2 my-sm-0 ml-3">My profile</button></Link> 
                                    </li>
                                    <li> <button onClick={this.props.signout} className="btn btn-outline-green btn-md my-2 my-sm-0 ml-3"          type="submit">Logout
                                        </button>
                                    </li>
                                </ul>
                        )
     
                    }

            </div>
            </nav>
         );
    }
}

 
export default Header;