import Logo from '../../Assets/rocket.svg'
import  './Header.module.css'

export function Header() {
    return (
        <header> 
            <img src={Logo} alt="Icone de Foguete" />
            <h1>to<span>do</span></h1>
        </header>
    )
}