import React from "react";
import styles from '../Todo/todo.module.css'

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
                        onChange={this.handleChangeInputvalue}
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