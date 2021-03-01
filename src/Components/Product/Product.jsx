import React , {Component} from 'react';
import ProductName from "./ProductName";
import Price from "./Price";
import Description from "./Description";


class Product extends Component {
    render() {
        return (
            <div className='product'>
                <div className='menu'>
                    <ProductName name={this.props.name}/>
                    <Description description={this.props.description}/>
                    <Price price={this.props.price}/>
                </div>
            </div>
        )
    }
}

export default Product;