import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [isLogged, setIsLogged] = useState(true);

  function deleteInput(deleteItem) {
    const listTransactionsFiltro = listTransactions.filter((elem) => {
      return elem !== deleteItem;
    });

    setListTransactions(listTransactionsFiltro);
  }

  function desLogar() {
    setIsLogged(true);
  }
  return (
    <div className="App">
      {isLogged ? (
        <HomePage setIsLogged={setIsLogged}/>
      ) : (
        <>
          <header className="Header">
            <h1>
              Nu <span>Kenzie</span>
            </h1>
            <button onClick={(event) => desLogar(event.preventDefault())}>
              Inicio
            </button>
          </header>
          <div className="Body">
            <div className="Aside">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <List
              listTransactions={listTransactions}
              deleteInput={deleteInput}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
