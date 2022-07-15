import styles from './TaskList.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    id: string;
    taskContent: string;
    onDelete:  (id: string) => void
}

export function TaskList({id, taskContent, onDelete}: TaskProps) {

    function deleteTask() {
      onDelete(taskContent)
    }
    return(
        <div className={styles.taskList}>
          <div className={styles.task}>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{taskContent}</label>
            <button title="Delete Task" onClick={deleteTask}>
              <Trash size={22}/>
            </button>
          </div>
        </div>
    )
}