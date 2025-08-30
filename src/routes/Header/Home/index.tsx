import Catalog from '../../../components/Catalog';
import './styles.css'

export default function Home() {
  return (
    <section id="content">
      <div className="rm-home-title">
        <h1>Olá! Seja bem-vindo!</h1>
        <p>Selecione o seu personagem favorito para saber um pouco mais sobre ele!</p>
      </div>
      <Catalog/>
      <div>
      </div>
    </section>
  );
}
