import styles from './footer.module.css'
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'
export const Footer = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada/>
            Desenvolvido por Nikolas Prudente Guedes
        </footer>
    )
}