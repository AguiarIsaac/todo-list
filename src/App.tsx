import styles from './Global.module.css'
import Logo from './Assets/rocket.svg'
import Clipboard from './Assets/Clipboard.svg'
import { NewTask } from './Components/NewTask'

export function App() {
  return (
    <div>
      <header> 
        <img src={Logo} alt="Icone de Foguete" />
        <h1>to<span>do</span></h1>
      </header>

      <div className={styles.wrapper}>
        <NewTask />

        <div className={styles.tasks}>
          <div className="tasksInformations">
            <p>Tarefas criadas <span>0</span></p>
            <p>Concluidas <span>0</span></p>
          </div>

        <div className="taskList">
          <img src={Clipboard} alt="icone de lista de tarefas"/>

          <p>Você ainda não possui tarefas cadastradas</p><br />
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        </div>        
      </div>
    </div>

  )
}

