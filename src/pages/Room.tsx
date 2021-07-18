
import logoImg from '../assets/images/logo.svg'

export function Room() {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Leatmeask" />
          <div> codigo</div>
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Sala React</h1>
        </div>
        <form action="">
          <textarea
            placeholder="O que VOce que perguntar"
          />
          <div className="form-footer">
            <span>Para enviar uma pergunta, button faça seu login.</span>
          </div>
        </form>

      </main>
    </div>
  );
}