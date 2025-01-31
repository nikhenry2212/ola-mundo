import { MainButton } from "components/MainButton";
import styles from "./NotFound.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigation = useNavigate()
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Te certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instates e recarregue a página, ou volte para a Home.
        </p>
        <div className={styles.botaoContainer} onClick={() => navigation(-1)}>
          <MainButton tamanho="lg">Voltar</MainButton>
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Cachorro de óculos"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};
