import React, { Component } from 'react';

class Price extends Component {
    state = {
            price: this.props.price,
            rate: 520
        }
    
    handleRate = () => {
        
        let { price, rate } = this.state;
        let sign = price[price.length - 1];
        if (sign === '$') {
            let amd = parseFloat(price)*rate + '֏';
            
            this.setState({
                price: amd
            });
            
        }else if (sign === '֏'){
            let usd = parseFloat(price)/rate + '$';
            
            this.setState({
                price: usd
            })
        }
    }
    render() {
        return (
            <>
                <p>Price - {this.state.price}</p>
                <button
                    onClick={this.handleRate}
                    className='btn'>
                    Change current rate
                </button>
            </>
        )
    }
}

export default Price;