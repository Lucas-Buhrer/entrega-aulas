function Resumo({ ordens }) {
  const concluidas = ordens.filter((ordem) => ordem.fgConcluida);
  const pendentes = ordens.filter((ordem) => !ordem.fgConcluida);

  let totalPendente = 0;
  for (const ordem of pendentes) {
    totalPendente = totalPendente + ordem.nuValor;
  }

  return (
    <div className="resumo">
      <p>Total de ordens: {ordens.length}</p>
      <p>Concluídas: {concluidas.length}</p>
      <p>Pendentes: {pendentes.length}</p>
      <p>Valor das ordens abertas: <strong>R$ {totalPendente.toFixed(2)}</strong></p>
    </div>
  );
}

export default Resumo;