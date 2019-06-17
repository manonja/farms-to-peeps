import React, {Component} from 'react';
import API from '../data/API'

class ProductCard extends Component {

    handleSubmit = (id, product) => {
        const {basket_id, customerBasket, addToBasket} = this.props
        const itemAlreadyInBasket = customerBasket.some(el => el.id === id);

        let productForApi = {
            product_id: id,
            basket_id
        }
        
        if (itemAlreadyInBasket){
                alert('You already have this item in your basket!')
        } else {
        API.addToCustomerBasket(productForApi)
        addToBasket(product);   
        }    
    }


    render() {
        const {url_img, name, price, quantity, category, id} = this.props.product
        return (

            <div id='productCard' className="card card-cascade ">
                <div className="card view view-cascade overlay">
                <img className="card-img-top" src={url_img} alt={name}/>

                </div>

                <div className="card-body ">
                    <h5 className="grey-text pb-2 pt-1"> {category.name}</h5>
                    <h4  className="font-weight-bold card-title">{name}</h4>
                    <p className="card-text">£{price}</p>
                    <p className="card-text">{quantity}</p>
                    <p className="card-text">Chalk Farm</p>
                </div>
                <div className="card-footer text-muted text-center"><button onClick={() => this.handleSubmit(id, this.props.product)} id='add-basket-btn' className="btn btn-warning" >ADD TO BASKET</button>
                </div>
            </div>
        )
    }
}

export default ProductCard