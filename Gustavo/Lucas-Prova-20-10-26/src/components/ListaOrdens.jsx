import Ordem from "./Ordem";

function ListaOrdens({ ordens, onAlternar, onRemover }) {
  if (ordens.length === 0) {
    return <p className="vazio">Nenhuma ordem de serviço.</p>;
  }

  return (
    <ul className="lista">
      {ordens.map((ordem) => (
        <Ordem
          key={ordem.idOrdem}
          ordem={ordem}
          onAlternar={onAlternar}
          onRemover={onRemover}
        />
      ))}
    </ul>
  );
}

export default ListaOrdens;