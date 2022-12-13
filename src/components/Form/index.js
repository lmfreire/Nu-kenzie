import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [descricaoInput, setDescricaoInput] = useState("");
  const [valorInput, setValorInput] = useState("");
  const [tipoInput, setTipoInput] = useState("entrada");

  function handleInput(event) {
    event.preventDefault();
    setDescricaoInput(descricaoInput);
    setValorInput(valorInput);
    setTipoInput(tipoInput);

    const data = {
      description: descricaoInput,
      type: tipoInput,
      value: valorInput,
    };

    setListTransactions([...listTransactions, data]);
  }

  return (
    <form className="Form" onSubmit={handleInput}>
      <div className="DivPrincipal">
        <div>
          <label className="Label">Descrição</label>
          <input
            type="text"
            placeholder="Informe a descrição"
            value={descricaoInput}
            onChange={(event) => setDescricaoInput(event.target.value)}
          ></input>
          <p>Ex: Compra de roupas</p>
        </div>
        <div className="Components">
          <div className="ComponentValor">
            <label>Valor</label>
            <input
              type="text"
              placeholder="Informe o valor"
              value={valorInput}
              onChange={(event) => setValorInput(event.target.value)}
            ></input>
          </div>
          <div className="ComponentSelect">
            <label>Tipo de valor</label>
            <select
              value={tipoInput}
              onChange={(event) => setTipoInput(event.target.value)}
            >
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
          </div>
        </div>
        <button>Inserir valor</button>
      </div>
    </form>
  );
}

export default Form;
