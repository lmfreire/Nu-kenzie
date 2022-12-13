import imagem from "../img/Group.svg";
import "./style.css";

function HomePage({ setIsLogged }) {
  function logar() {
    setIsLogged(false);
  }

  return (
    <div className="Home">
      <div className="Texto">
        <h2>
          Nu <span>Kenzie</span>
        </h2>
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={(event) => logar(event.preventDefault())}>
          Iniciar
        </button>
      </div>
      <img src={imagem} />
    </div>
  );
}

export default HomePage;
