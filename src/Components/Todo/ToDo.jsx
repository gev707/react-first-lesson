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
        ],
        checkedTasks: new Set(),
    };
    addTask = (inputValue) => {
        const task = [...this.state.tasks];
        if (inputValue !== '') {
            task.push({
                text: inputValue,
                _id: IdGenerator()
            });
            this.setState({
                tasks: task,
            });
        } else {
            alert('Write SomeThing')
        }
    }
    deleteTask = (id) => {
        let task = [...this.state.tasks];
        task = task.filter(task=>task._id !==id)
        this.setState({
            tasks: task
        })
    }
    handleToggleCheckTasks = (id) => {
        let checked = new Set(this.state.checkedTasks)
        if (!checked.has(id)) {
            checked.add(id)
            this.setState({
                checkedTasks: checked,
            })
        }else{
            this.setState({
                checkedTasks:new Set()
            })
        }
    }
    deleteCheckedTasks = () => {
        const { checkedTasks } = this.state
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => !checkedTasks.has(task._id));
        this.setState({
            tasks,
            checkedTasks: new Set()
        })
    }
    render() {
        const {tasks,checkedTasks}=this.state;
        const task = tasks.map(task => {
            return <Task
                task={task}
                key={task._id}
                deleteTask={this.deleteTask}
                handleToggleCheckTasks={this.handleToggleCheckTasks}
                isChecked={!!checkedTasks.size}
            />
        });
        return (
            <>
                <AddTask
                    checkedTasks={checkedTasks}
                    deleteCheckedTasks={this.deleteCheckedTasks}
                    addTask={this.addTask}
                    isChecked={!!checkedTasks.size}
                />
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.textHolder}>
                            {task.length ? task : <h2>Add Some Task</h2>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Todo