import './Global.module.css'
import styles from './App.module.css'
import Logo from './Assets/rocket.svg'
import { NewTask } from './Components/NewTask'
import { Tasks } from './Components/Tasks'

export function App() {
  return (
    <div>
      <header> 
        <img src={Logo} alt="Icone de Foguete" />
        <h1>to<span>do</span></h1>
      </header>

      <div className={styles.wrapper}>
        <NewTask />
        <Tasks />
      </div>
    </div>
  )
}

