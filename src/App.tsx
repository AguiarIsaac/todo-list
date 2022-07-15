import './Global.module.css'
import styles from './App.module.css'
import Plus from './Assets/plus.svg'
import { Header } from './Components/Header'
import { TaskList } from './Components/TaskList'
import { ChangeEvent, FormEvent, HtmlHTMLAttributes, useState } from 'react'


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
  ])

  function handleNewTask(event: FormEvent) {
    event.preventDefault()

    const taskInput = event.target.task.value

    setTask([...task, {id: 'task.length + 1', taskContent: taskInput}])
  }

  function handleDeleteTask(taskContent: string) {
    const taskWithoutDeleteOne = task.filter((task) => {
      return task.taskContent != taskContent
    })
    setTask(taskWithoutDeleteOne)
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.newTask}>
          <form onSubmit={handleNewTask}>
              <textarea
                placeholder="Adicione uma nova tarefa"
                name="task"
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
                onDelete={handleDeleteTask}
              />
            )
          })
        }
      </div>
    </>
  )
}

