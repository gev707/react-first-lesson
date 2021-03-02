import React from "react";
import AddTask from "./AddTask";

class Todo extends React.Component {
    state = {
        tasks: ['task 1', 'task 2', 'task 3'],
        inputValue: ''
    };
    addTask = (inputValue) => {
        const task = [...this.state.tasks];
        if (inputValue !== '') {
            task.push(inputValue);
            this.setState({
                tasks: task,
            });
        } else {
            alert('add something')
        }
    }

    render() {
        const tasks = this.state.tasks.map(function (item, index) {
            return <p key={index}>{item}</p>
        })
        return (
            <div>
                <div>
                    <AddTask addTask={this.addTask} />
                    <div className='textHolder d-flex'>
                        {tasks}
                    </div>
                </div>
            </div>
        )
    }
}
export default Todo