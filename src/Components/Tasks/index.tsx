import Clipboard from '../../Assets/Clipboard.svg'
import style from './Tasks.module.css'

export function Tasks() {
    return(
        <div className={style.tasksWrapper}>
            <div className={style.tasksInfo}>
                <p>Tarefas criadas <span>0</span></p>
                <p>Concluídas <span>0</span></p>
            </div>

            <div className={style.listTaskEmpty}>
                <img src={Clipboard} alt="Lista de tarefas vazia"/>
                <strong>Você ainda não possui tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}