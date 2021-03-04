import React from "react";
import AddTask from "./AddTask/AddTask";
import IdGenerator from "./helpers/IdGenerators";
import Task from './Tasks/Task';
import styles from "./todo.module.css";

class Todo extends React.Component {
    state = {
        tasks: [
            {
                _id: IdGenerator(),
                text: 'task-1'
            },
            {
                _id: IdGenerator(),
                text: 'task-2'
            },
            {
                _id: IdGenerator(),
                text: 'task-3'
            },
        ]
    };
    addTask = (inputValue) => {
        const task = [...this.state.tasks];
        if (inputValue !== '') {
            task.push({text:inputValue,
                _id:IdGenerator()});
            this.setState({
                tasks: task,
            });
        } else {
            alert('Write SomeThing')
        }
    }
    deleteTask=(id)=>{
        let task = [...this.state.tasks];
        task = task.filter(task=>task._id !== id)
        this.setState({
            tasks: task
        })
    }
    render() {
        const tasks = this.state.tasks.map(task=> {
            return <Task
                task={task}
                key={task._id}
                deleteTask = {this.deleteTask}
            />
        });
        return (
            <>
                <AddTask addTask={this.addTask} />
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.textHolder}>
                            {tasks.length ? tasks : <h2>Add Some Task</h2>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Todo