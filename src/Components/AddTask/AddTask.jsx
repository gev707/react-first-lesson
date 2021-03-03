import React from "react";
import styles from '../Todo/todo.module.css'

class AddTask extends React.Component {
    state = {
        inputValue: ''
    }
    handleChangeInputValue = (event) => {
        const { value } = event.target
        this.setState({
            inputValue: value
        })
    };
    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.props.addTask(this.state.inputValue);
            this.setState({
                inputValue: ''
            });
        }
    }
    handleSubmit = () => {
        this.props.addTask(this.state.inputValue);
        this.setState({
            inputValue: ''
        })

    };

    render() {
        return (
            <div>
                <div className={styles.inputHolder}>
                    <input
                        type="text"
                        placeholder='Add some text'
                        onChange={this.handleChangeInputValue}
                        onKeyPress={this.handleEnter}
                        value={this.state.inputValue}
                    />
                    <button
                        onClick={this.handleSubmit}>
                        Add Text
                    </button>
                </div>
            </div>
        )
    }
}
export default AddTask