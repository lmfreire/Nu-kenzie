/* eslint-disable jsx-a11y/alt-text */
import Card from "../Card";
import "./style.css";
import imagem from "../img/Rectangle.svg";

function List({ listTransactions, deleteInput }) {
  function comparar() {
    return listTransactions.length === 0;
  }  

  return (
    <>
      <div className="List">
        <h2 className="Resumo">Resumo Financeiro</h2>
        {console.log(comparar())}
        {comparar() ? (
          <div>
            <img src={imagem}></img>   
            <img src={imagem}></img>   
            <img src={imagem}></img>   
          </div>
        ) : (
          listTransactions.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              deleteInput={deleteInput}
            />
          ))
        )}
      </div>
    </>
  );
}

export default List;
