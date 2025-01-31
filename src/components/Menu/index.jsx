import styles from './menu.module.css'
import { MenuLink } from '../MenuLink'


export const Menu =()=>{


    return (
        <header>
            
        <nav className={styles.navegacao}>
            <MenuLink to={'/'}>
                Home
            </MenuLink>
          <MenuLink to={'/about'}>
            About
          </MenuLink>
        </nav>
        </header>
    )
}