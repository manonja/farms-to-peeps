import React, { Component } from 'react';

import API from '../data/API'

class ProductForm extends Component {
    state = {
        name: '',
        price: 0,
        quantity: '',
        url_img: '',
        category: ''
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        let product = {
            name: this.state.name,
            price: this.state.price, 
            quantity: this.state.quantity,
            url_img: this.state.img_url
        }

        // API.createProduct(product)
        //     .then(product => this.props.addToFarmerProducts(product));    

        // add product to fetch 
        this.props.addToFarmerProducts(product)

    }



    render() {
        return (  
            // <!-- Default form login -->
            <div>
                  <form className="text-center border border-light p-5">
    
                    <p className="h4 mb-4">Enter a new product below</p>
    
                    <input 
                        name='name' 
                        onChange={this.handleChange} 
                        value={this.state.name} 
                        className="form-control mb-4" 
                        placeholder="name" 
                    />

                    <input 
                        name='price' 
                        onChange={this.handleChange} 
                        value={this.state.price} 
                        className="form-control mb-4" 
                        placeholder="price" 
                    />
                    <input 
                        name='quantity' 
                        onChange={this.handleChange} 
                        value={this.state.quantity} 
                        className="form-control mb-4" 
                        placeholder="quantity" 
                    />
                    <input 
                        name='img_url' 
                        onChange={this.handleChange} 
                        value={this.state.img_url} 
                        className="form-control mb-4" 
                        placeholder="img_url" 
                    />
                    <input 
                        name='category' 
                        onChange={this.handleChange} 
                        value={this.state.category} 
                        className="form-control mb-4" 
                        placeholder="category" 
                    />
               
                    <button className="btn btn-block btn-outline-orange btn-lg" onClick={this.handleSubmit}  type="submit">Add my product!</button>
    
                </form>
            </div>
          
        );
    }
    
    
}
 
export default ProductForm;