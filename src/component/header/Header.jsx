import logo from './assert/logo.svg';
import './Header.scss'

export function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='logo' className='header__logo'/>
            <div className='header__title_container'>
                <h1>Институт искуственного интеллекта</h1>
            </div>
        </header>
    )
}