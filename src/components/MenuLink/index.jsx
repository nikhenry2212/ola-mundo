import { Link, useLocation } from 'react-router-dom'
import styles from'./menu.module.css'

export const MenuLink = ({children, to}) => {
    const location = useLocation()
    console.log(styles);
    

    return (
    <>
    
    <Link className={`
                ${styles.link}
                ${location.pathname === to ? styles.linkDestacado : "" }`}
                to={to}>{children}</Link>

    </>
    )
}