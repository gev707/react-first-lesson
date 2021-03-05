import React from "react";
import styles from '../todo.module.css'
import {Button} from 'react-bootstrap'
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
        this.handleSubmit = () => {
            this.props.addTask(this.state.inputValue);
            this.setState({
                inputValue: ''
            })
        };
        if (event.key === 'Enter') this.handleSubmit()
    }
    handleDeleteCheckedTasks = () => {
        this.props.deleteCheckedTasks()
    }
    render() {
        const {isChecked} =this.props
        return (
            <div>
                <div className={styles.inputHolder}>
                    <div>
                        <button 
                            onClick={this.handleDeleteCheckedTasks}
                            className={styles.btnDeleteAll}
                            disabled={!!!this.props.checkedTasks.size}
                        >
                            Delete All
                        </button>
                    </div>
                    <div>
                        <input
                            className={styles.inputItem}
                            type="text"
                            placeholder='Add some text'
                            onChange={this.handleChangeInputValue}
                            onKeyPress={this.handleEnter}
                            value={this.state.inputValue}
                            disabled={isChecked}
                        />
                        <button
                            className={styles.btnAdd}
                            onClick={this.handleSubmit}
                            disabled={isChecked}
                        >
                            Add Text
                            
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddTask