import React , {Component} from 'react';


class ProductName extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default ProductName;