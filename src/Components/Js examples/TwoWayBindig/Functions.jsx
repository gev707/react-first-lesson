import React from 'react'

class Functions extends React.Component {
    state = {
        inputValue: ''
    }
    handleChangeValue = (event) => {
        const value = event.target.value;
        this.setState({
            inputValue:value
        });
    }
    handleCard = () => {
        this.props.addCard(this.state.inputValue)
        this.setState({
            inputValue:''
        })
    }
    render() {

        return (
            <div>
                <input
                    type="text"
                    placeholder='add card'
                    onChange={this.handleChangeValue}
                    value={this.state.inputValue}
                />
                <button
                    onClick={this.handleCard}
                >add card</button>
            </div>
        )
    }
}
export default Functions;