import React, { Component } from 'react';

class ProductForm extends Component {
    state = {
        name: '',
        price: 0,
        quantity: '',
        img_url: '',
        category: ''
    }

    handleSubmit = (e) => {
        
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value})
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
               
                    <button className="btn btn-block btn-outline-orange btn-lg" onClick={(e) => this.handleSubmit(e)}  type="submit">Add my product!</button>
    
                </form>
            </div>
          
        );
    }
    
    
}
 
export default ProductForm;