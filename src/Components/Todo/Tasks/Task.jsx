import styles from "./task.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons'

const Task = ({ task,deleteTask }) => {
    const handleDeleteTask =(e)=>{
        deleteTask(task._id)
    }
    return (
        <div className={styles.taskHolder}>
            <input className={styles.check} type='checkbox' />
            <div className={styles.taskFlex}>
                <p>{task.text}</p>
                <div>
                    <FontAwesomeIcon onClick={handleDeleteTask} icon={faTrashAlt} />
                    <FontAwesomeIcon icon={faEdit} />
                </div>
            </div>
    </div>        
    )
}

export default Task;