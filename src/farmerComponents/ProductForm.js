import React, { Component } from 'react';
import axios from 'axios'

import API from '../data/API'

class ProductForm extends Component {
    state = {
        name: '',
        price: 0,
        quantity: '',
        url_img: '',
        category: '', 
        farm: ''    
    }

  

    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        const {name, price, quantity, url_img, farm, category} = this.state
        const id = this.props.current_user.farmer_id
        
        let product = {
            name: name,
            price: price, 
            quantity: quantity,
            url_img: url_img, 
            farmer_id: id
        }

       

        API.createProduct(product)
            .then(product => this.props.addToFarmerProducts(product));    
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
                        placeholder="What product would you like to add?" 
                    />

                    <input 
                        name='price' 
                        onChange={this.handleChange} 
                        value={this.state.price} 
                        className="form-control mb-4" 
                        placeholder="£" 
                    />
                    <input 
                        name='quantity' 
                        onChange={this.handleChange} 
                        value={this.state.quantity} 
                        className="form-control mb-4" 
                        placeholder="500g? 4 pieces? 1 bunch?" 
                    />
                    <input 
                        name='url_img' 
                        onChange={this.handleChange} 
                        value={this.state.url_img} 
                        className="form-control mb-4" 
                        placeholder="paste your image url here!" 
                    />
                 
                    <input 
                        name='category' 
                        onChange={this.handleChange} 
                        value={this.state.category} 
                        className="form-control mb-4" 
                        placeholder="category" 
                    />

                    <input 
                        name='farm' 
                        onChange={this.handleChange} 
                        value={this.state.farm} 
                        className="form-control mb-4" 
                        placeholder="farm" 
                    />


                    
               
                    <button className="btn btn-block btn-outline-orange btn-lg" onClick={this.handleSubmit}  type="submit">Add my product!</button>
    
                </form>
            </div>
          
        );
    }
    
    
}
 
export default ProductForm;