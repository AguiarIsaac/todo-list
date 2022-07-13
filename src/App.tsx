import './Global.module.css'
import styles from './App.module.css'
import Plus from './Assets/plus.svg'
import { Header } from './Components/Header'
import { TaskEmpty } from './Components/TaskEmpty'


export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.newTask}>
          <form>
              <textarea placeholder="Adicione uma nova tarefa"/>
              <button type="submit">Criar <img src={Plus} alt="Icone de adição" /></button>
          </form>
        </div>

        <div className={styles.tasksInfo}>
          <p>Tarefas criadas <span>0</span></p>
          <p>Concluídas <span>0</span></p>
        </div>

        <TaskEmpty/>
      </div>
    </>
  )
}

