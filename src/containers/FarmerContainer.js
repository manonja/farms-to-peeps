import React, { Component } from 'react';

import Modal from 'react-modal'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'

import ProductForm from '../farmerComponents/ProductForm'
import ProductCollection from '../farmerComponents/ProductCollection'


class FarmerContainer extends Component {

    state = {
        isPaneOpen: false
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }
  
    render() { 
        return ( 
            <div>
                {
                    this.props.farmerProducts.length > 0

                    ?

                    <div>
                        <div className='split image-container'>
                        </div>
                        <div className='panel-icon split sale-content' ref={ref => this.el = ref}>
                            <h4>You have {this.props.farmerProducts.length} product(s) on sale</h4>
                                <button className='btn btn-lg btn-outline-black' onClick={() => this.setState({ isPaneOpen: true })}>Add a new product</button>
                                    <SlidingPane
 
                                        className='product-form-panel'
                                        overlayClassName='some-custom-overlay-class'
                                        isOpen={ this.state.isPaneOpen }
                                        from='bottom'
                                        width='100%'
                                        height='100%'
                                        onRequestClose={ () => {
                                            this.setState({ isPaneOpen: false });
                                        } }>
                                        <div id='panel-content'>

                                            <br />
                                            { 
                                                <ProductForm  
                                                    current_user={this.props.current_user} 
                                                    farmerProducts={this.props.farmerProducts} 
                                                    addToFarmerProducts={this.props.addToFarmerProducts}   
                                                />
                                            }
                                            < br />
                                        </div>       
                                    </SlidingPane>
                                    <ProductCollection
                                        farmerProducts={this.props.farmerProducts}
                                        removeProduct={this.props.removeProduct}
                                    />
                        </div>
                                              
                        
                  
                    </div>
                   
                    : <div id='no-product-onsale'>
                        <h1><b>You don't currently have products on sale</b></h1>
                       <div className='panel-icon' ref={ref => this.el = ref}>
                            <button className='btn btn-lg btn-outline-white' onClick={() => this.setState({ isPaneOpen: true })}>Add a new product</button>
                            <SlidingPane

                                className='product-form-panel'
                                overlayClassName='some-custom-overlay-class'
                                isOpen={ this.state.isPaneOpen }
                                from='bottom'
                                width='100%'
                                height='100%'
                                onRequestClose={ () => {
                                    // triggered on "<" on left top click or on outside click
                                    this.setState({ isPaneOpen: false });
                                } }>
                            
                                <div id='panel-content'>
                                    <br />
                                    { 
                                        <ProductForm  
                                            current_user={this.props.current_user} 
                                            farmerProducts={this.props.farmerProducts} 
                                            addToFarmerProducts={this.props.addToFarmerProducts}   
                                        />
                                    }
                                    < br />
                                </div>       
                            </SlidingPane>
                        </div>
                    </div>
                }

             
            </div>
         );
    }
}
 
export default FarmerContainer;