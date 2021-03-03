import React from "react";
import AddTask from "../AddTask/AddTask";
import Task from '../Tasks/Task';
import { Container, Row, Col } from 'react-bootstrap';
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
                active={index == 0}
            />
        })
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <AddTask addTask={this.addTask} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={styles.textHolder} >
                                {tasks}
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default Todo