import style from './NewTask.module.css'
import Plus from '../../Assets/plus.svg'

export function NewTask() {
    return(
        <div className={style.newTask}>
            <textarea placeholder="Adicione uma nova tarefa"></textarea>
            <button type="submit">Criar <img src={Plus} alt="Icone de adição" /></button>
        </div>
    )
}