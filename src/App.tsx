import './Global.module.css'
import styles from './App.module.css'
import Plus from './Assets/plus.svg'
import { Header } from './Components/Header'
import { TaskList } from './Components/TaskList'
import { ChangeEvent, FormEvent, useState } from 'react'


export function App() {

  const [task, setTask] = useState([
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
    },
    {
      id: '4',
      taskContent: 'Usar o stato e deixar a incerção de dados dinamica',
    }
  ])

  function handleNewTask(event: FormEvent) {
    event.target.setCustomValidity('')
    
    const insertNewTask = {
      id: 'task.length + 1',
      taskContent: event.target.value
    }

    setTask([...task, insertNewTask])

  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.newTask}>
          <form onSubmit={handleNewTask}>
              <textarea
                placeholder="Adicione uma nova tarefa"
              />
              <button type="submit">Criar <img src={Plus} alt="Icone de adição"/></button>
          </form>
        </div>

        <div className={styles.tasksInfo}>
          <p>Tarefas criadas <span>{task.length}</span></p>
          <p>Concluídas <span>0 de 0</span></p>
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

