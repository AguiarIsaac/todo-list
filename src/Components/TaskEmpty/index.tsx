import Clipboard from '../../Assets/Clipboard.svg'
import style from './Tasks.module.css'

export function TaskEmpty() {
    return(
        <div className={style.listTaskEmpty}>
            <img src={Clipboard} alt="Lista de tarefas vazia"/>
            <strong>Você ainda não possui tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}