import "./style.css"

function TotalMoney({ listTransactions }) {
  function valorTotal() {
    const value = listTransactions.map((elem) => {
      return elem.type === "entrada" ? elem.value : 0;
    });

    const total = value.reduce((acumulador, valorAtual) => {
      return acumulador + Number(valorAtual);
    }, 0);

    const valueSub = listTransactions.map((elem) => {
      return elem.type === "saida" ? elem.value : 0;
    });

    const totalSub = valueSub.reduce((acumulador, valorAtual) => {
      return acumulador - Number(valorAtual);
    }, 0);

    return total + totalSub;
  }

  return (
    <div className="Financeiro">
      <h1>
        Valor total: <span>${valorTotal()}</span>
      </h1>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
