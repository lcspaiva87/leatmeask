import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg';



import '../styled/auth.scss'
import { Button } from '../components/Button/Button';
export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração sikmbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room">
            <img src={googleImg} alt="Logo da Google" />
            Crie sua sala com Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form >
            <input
              type="text"
              placeholder="Digite o código da sala"


            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}