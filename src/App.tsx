import './Global.module.css'
import styles from './App.module.css'
import Plus from './Assets/plus.svg'
import { Header } from './Components/Header'
import { TaskList } from './Components/TaskList'
import {  FormEvent, useState } from 'react'
import { TaskEmpty } from './Components/TaskEmpty'

interface FormFields {
  task: HTMLInputElement;
}

interface TaskProps {
  id: string,
  taskContent: string,
  conclued: boolean
}

export function App() {

  const [task, setTask] = useState<TaskProps[]>([])


  function handleNewTask(event: FormEvent) {
    event.preventDefault()

    const formState = (event.target as unknown) as FormFields;

    setTask([...task, {id: formState.task.value,  taskContent: formState.task.value, conclued: false}])
  }

  function handleDeleteTask(taskContent: string) {
    const taskWithoutDeleteOne = task.filter((task) => {
      return task.taskContent != taskContent
    })
    setTask(taskWithoutDeleteOne)
  }

  function handleConlued(taskContent: string, conclued: boolean) {
    const newList = task.map(item => {
      if (item.taskContent == taskContent) {
        return {
          ...item,
          conclued: conclued
        }
      }
    })

    setTask(newList)

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
                required
              />
              <button type="submit">Criar <img src={Plus} alt="Icone de adição"/></button>
          </form>
        </div>

        <div className={styles.tasksInfo}>
          <p>Tarefas criadas <span>{task.length}</span></p>
        </div>


        {task.length == 0 && <TaskEmpty />}

        {task.length > 0 && task.map(task => {
            return (
              <TaskList
                id={task.id}
                taskContent={task.taskContent}
                onDelete={handleDeleteTask}
                onConclued={handleConlued}
                key={task.id}
                conclued={task.conclued}
               />
            )
          })
        }


      </div>
    </>
  )
}

