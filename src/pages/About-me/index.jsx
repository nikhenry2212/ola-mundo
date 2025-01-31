import { PostModel } from "components/PostModel"
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './about.module.css'
import fotoSobreMim from 'assets/MARC0969.jpg'

export const AboutMe = () =>{

    // const fotoSobreMim = "https://drive.google.com/file/d/1N2feOIG-4hw9104mtAvt0j-jfaj_Uu0z/view?usp=sharing"
    return (
       
        //   <PostModel titulo="Blal" />
          <PostModel fotoCapa={fotoCapa} titulo={'Sobre mim'} >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Nikolas!
            </h3>
            <img src={fotoSobreMim} alt="Foto mimnha" className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
            Nikolas Prudente Guedes é um homem de 31 anos com uma vida familiar rica e uma paixão pela tecnologia. Formado em Análise e Desenvolvimento de Sistemas (ADS), Nikolas combina sua expertise em codificação com o amor pela família e diversos hobbies.
            </p>

            <p className={styles.paragrafo}>
            Casado com Priscila há 12 anos, ele é pai orgulhoso de dois filhos: Henry, um baterista de 6 anos que demonstra seu talento musical nas baquetas, e Laura, uma pequena cantora de apenas 1 ano que já encanta a todos com sua doçura. A família é um pilar central na vida de Nikolas, que dedica tempo e carinho aos seus entes queridos.
            </p>

            <p className={styles.paragrafo}>
            Além da vida familiar e profissional, Nikolas encontra tempo para cultivar seus hobbies. Apaixonado por futebol, ele provavelmente aproveita os momentos de lazer para acompanhar partidas ou até mesmo praticar o esporte. O mundo dos videogames também o atrai, oferecendo momentos de diversão e relaxamento. Sua veia musical se manifesta através do teclado, onde Nikolas expressa sua criatividade e sensibilidade.
            </p>

            <p className={styles.paragrafo}>
            A fé também ocupa um espaço importante em sua vida, com a frequência à igreja. E, claro, além de todas essas atividades, Nikolas dedica tempo ao que o move profissionalmente: a codificação. O desenvolvimento de sistemas e a programação fazem parte de sua rotina e demonstram seu interesse contínuo por tecnologia.
            </p>

            <p className={styles.paragrafo}>
            Em resumo, Nikolas Prudente Guedes é um profissional de TI dedicado, um marido apaixonado, um pai presente e um indivíduo que busca equilíbrio entre trabalho, família, fé e seus hobbies.
            </p>
          </PostModel>
     
    )
}