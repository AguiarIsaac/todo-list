import style from './NewTask.module.css'
import Plus from '../../Assets/plus.svg'
import { InvalidEvent, useState } from 'react'

export function NewTask() {

    const [tasks, setTasks] = useState([])

    function handleNewTask() {
        window.alert('botão Ok')
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('este campo é obrigatório!')
    }

    return(
        <div className={style.newTask}>
            <form onSubmit={handleNewTask}>
                <textarea 
                    placeholder="Adicione uma nova tarefa"
                    onInvalid={handleNewTaskInvalid}
                />
                <button type="submit">Criar <img src={Plus} alt="Icone de adição" /></button>
            </form>
        </div>
    )
}