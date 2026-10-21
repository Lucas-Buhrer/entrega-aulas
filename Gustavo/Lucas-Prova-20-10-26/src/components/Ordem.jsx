function Ordem({ ordem, onAlternar, onRemover }) {
  return (
    <li className={ordem.fgConcluida ? "ordem ordem-concluida" : "ordem"}>
      <div className="info">
        <strong>{ordem.dsCliente}</strong>
        <span>{ordem.dsServico}</span>
        <span>R$ {ordem.nuValor.toFixed(2)}</span>
        {ordem.fgConcluida && <span className="selo">Concluída</span>}
      </div>

      <div className="acoes">        
        <button onClick={() => onAlternar(ordem.idOrdem)}>
          {ordem.fgConcluida ? "Reabrir" : "Concluir"}
        </button>
        <button onClick={() => onRemover(ordem.idOrdem)}>
          Remover
        </button>
      </div>
    </li>
  );
}

export default Ordem;