import './Global.module.css'
import styles from './App.module.css'
import Plus from './Assets/plus.svg'
import { Header } from './Components/Header'
import { TaskEmpty } from './Components/TaskEmpty'
import { TaskList } from './Components/TaskList'



export function App() {
  const task = [
    {
      id: '1',
      taskContent: 'Terminar estilização da aplicação.',
    },
    {
      id: '2',
      taskContent: 'Terminar Lógica da aplicação.',
    },
    {
      id: '3',
      taskContent: 'Fazer deploy.',
    }
  ]
  
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.newTask}>
          <form>
              <textarea placeholder="Adicione uma nova tarefa"/>
              <button type="submit">Criar <img src={Plus} alt="Icone de adição"/></button>
          </form>
        </div>

        <div className={styles.tasksInfo}>
          <p>Tarefas criadas <span>{task.length}</span></p>
          <p>Concluídas <span>0</span></p>
        </div>

        {
          task.map(task => {
            return (
              <TaskList
                key={task.taskContent}
                id={task.id}
                taskContent={task.taskContent}
              />
            )
          })
        }
      </div>
    </>
  )
}

