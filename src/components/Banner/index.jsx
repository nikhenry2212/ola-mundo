import styles from './banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
// import minhaFoto from 'assets/minha_foto.png'

export const Banner = () => {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá mundo!</h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu blog pessoal!
                </p>
            </div>


            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="" />
                <img className={styles.minhaFoto} src='https://github.com/nikhenry2212.png' aria-hidden={true} alt="" />
            </div>
        </div>
    )
}