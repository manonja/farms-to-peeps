import React, {Component} from 'react';

class BasketCard extends Component {


    render() {
        const {url_img, name, price, quantity} = this.props.product
        return (

            <div id='productCard' className="card card-cascade narrower">
                <div className="view view-cascade overlay">
                    <img className="img card-img-top" src={url_img} alt={name}/>
                    <a><div className="mask rgba-white-slight"></div></a>
                </div>
                <div className="card-body card-body-cascade">
                    <h5 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i> Organic</h5>
                    <h4 className="font-weight-bold card-title">{name}</h4>
                    <p className="card-text">£{price}</p>
                    <p className="card-text">{quantity}</p>
                    <button onClick={() => this.props.removeFromBasket(this.props.product)} className="btn btn-unique" >REMOVE FROM BASKET</button>
                </div>
                <div className="card-footer text-muted text-center">Chalk Farm</div>
            </div>
        )
    }
}

export default BasketCard