import styles from './TaskList.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    id: string;
    taskContent: string;
}

export function TaskList({id, taskContent}: TaskProps) {
    return(
        <div className={styles.taskList}>
          <div className={styles.task}>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{taskContent}</label>
            <button title="Delete Task">
              <Trash size={22}/>
            </button>
          </div>
        </div>
    )
}