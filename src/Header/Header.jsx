import './Header.css'
import { useState } from 'react'

export function Header() {
    return(
            <nav>
                <ul className='aList'>
                    <li>Жидкости</li>
                    <li>Расходники</li>
                    <li>Электронки</li>
                    <li>Одноразки</li>
                    <li>Предзаказ</li>
                </ul>
                <form action="">Поиск</form>
                <a href="">Корзина</a>
            </nav>
    )
}