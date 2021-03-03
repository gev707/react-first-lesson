import styles from "./task.module.css";


const Task = ({ task, active }) => {
    return (
        <div>
            <div
                className={`${styles.taskHolder} ${active ? styles.active : ''}`}>
                <p>{task}</p>
            </div>
        </div>
    )
}

export default Task;