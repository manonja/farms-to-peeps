import React, { Component } from 'react';

import Link from 'react-router-dom'

class CategoriesBar extends Component {
 
    render() { 
        const categories = this.props.productCategories
        return ( 
            <nav id='product-category-navbar' className="navbar navbar-dark navbar-dark orange scrolling-navbar">
                
                { categories.map(category => 
                    <a href='#category' key={category} id='product-category'>{category}</a>)
                }
                   
            </nav>

         );
    }
}
 
export default CategoriesBar;