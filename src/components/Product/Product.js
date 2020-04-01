import React, {Component} from 'react';
import './Product.css';

class Product extends Component {
    render() {

        const {name, price, url, article, color} = this.props.product;
        const {productActions} = this.props;


        return (
            <div className={"product"}>
                <div>Name = {name}</div>
                <div>Article = {article}</div>
                <img src = {url} alt="product image"/>
                <div>Price = {price}</div>
                <div>Color = {color}</div>
                {productActions}
            </div>
        );
    }
}

export default Product;