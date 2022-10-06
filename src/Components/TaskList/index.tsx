import styles from './TaskList.module.css'
import { Trash } from 'phosphor-react'


interface TaskProps {
    id: string;
    taskContent: string;
    conclued: boolean;
    onDelete:  (id: string) => void;
    onConclued: (taskContent: string, conclued: boolean) => void;
}

export function TaskList({id, taskContent, conclued, onDelete, onConclued}: TaskProps) {
    
  function deleteTask() {
    onDelete(taskContent)
  }

  function concluedTask() {
    if(conclued === false) {
      conclued = true
      onConclued(taskContent, conclued)
    } else {
      conclued = false
      onConclued(taskContent, conclued)
    }
  }

    return(
        <div className={styles.taskList}>
          <div className={styles.task}>
            
            <input type="checkbox" id={id}/>
            <label onClick={concluedTask}
              htmlFor={id}
            >{taskContent}</label>
            <button type="button" title="Delete Task" onClick={deleteTask}>
              <Trash size={22}/>
            </button>
          </div>
        </div>
    )
}