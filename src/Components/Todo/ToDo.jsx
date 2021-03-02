import React from "react";
import AddTask from "../AddTask/AddTask";
import Task from '../Tasks/Task';
import styles from "./todo.module.css";
class Todo extends React.Component {
    state = {
        tasks: ['task 1', 'task 2', 'task 3'],
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
        const tasks = this.state.tasks.map(function (task, index) {
            return <Task
                task={task}
                key={index}
                active={index==0}
            />
        })
        return (
            <div>
                <div>
                    <AddTask addTask={this.addTask} />
                    <div className={styles.textHolder} >
                        {tasks}
                    </div>
                </div>
            </div>
        )
    }
}
export default Todo