import React from "react";

class AddTask extends React.Component {
    state = {
        inputValue: ''
    }
    handleChangeInputvalue = (event) => {
        const { value } = event.target;
        this.setState({
            inputValue: value
        })
    };
     
    handleSubmit = () => {
       const { addTask }  = this.props;
       addTask(this.state.inputValue);
       this.setState({
            inputValue: ''
        })
    };

    render() {
        return(
            <div>
                <div className='inputHolder'>
                        <input
                            type="text"
                            placeholder='Add some text'
                            onChange={this.handleChangeInputvalue}
                            value={this.state.inputValue}
                        />
                        <button
                            className='btn'
                            onClick={this.handleSubmit}>
                            Add Text
                        </button>
                    </div>
            </div>
        )
    }
}
export default AddTask