import "./style.css";

function Card({ transaction, index, deleteInput }) {
  function verificarTipo() {
    return transaction.type === "entrada";
  }

  return (
    <div>
      {verificarTipo() ? (
        <div key={index} className="Card TypeEntrada">
          <div className="TypeValues">
            <h1>{transaction.description}</h1>
            <p>{transaction.type}</p>
          </div>
          <div className="TypeButton">
            <p>{transaction.value}</p>
            <button onClick={() => deleteInput(transaction)}>Excluir</button>
          </div>
        </div>
      ) : (
        <div key={index} className="Card TypeSaida">
          <div className="TypeValues">
            <h1>{transaction.description}</h1>
            <p>{transaction.type}</p>
          </div>
          <div className="TypeButton">
            <p>{transaction.value}</p>
            <button onClick={() => deleteInput(transaction)}>Excluir</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
