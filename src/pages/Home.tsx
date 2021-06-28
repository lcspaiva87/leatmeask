import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e resposta" />
        <strong>Crie sala de Q&amp; A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencias em tempo-real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask" />
        </div>
        <button>
          Crie sua sala com o Google
        </button>
        <div>ou entre em uma sala</div>
        <form >
          <input type="text" placeholder="Digite o código da sala"
          />
          <button>
            Entrar na sala
          </button>
        </form>
      </main>
    </div>
  )
}