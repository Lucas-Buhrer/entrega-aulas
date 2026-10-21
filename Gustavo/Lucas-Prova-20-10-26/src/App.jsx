import { useState } from "react";
import "./App.css";
import FormularioOrdem from "./components/FormularioOrdem";
import Resumo from "./components/Resumo";
import ListaOrdens from "./components/ListaOrdens";

const ordensIniciais = [
  { idOrdem: crypto.randomUUID(), dsCliente: "Lucas", dsServico: "Troca de pneu", nuValor: 40, fgConcluida: true },
  { idOrdem: crypto.randomUUID(), dsCliente: "Eduardo", dsServico: "Troca de freios", nuValor: 60, fgConcluida: true },
  { idOrdem: crypto.randomUUID(), dsCliente: "Gustavo", dsServico: "Troca de corrente", nuValor: 15, fgConcluida: false },
  { idOrdem: crypto.randomUUID(), dsCliente: "Maiara", dsServico: "Assessorios", nuValor: 25, fgConcluida: false },
];

function App() {
  const [ordens, setOrdens] = useState(ordensIniciais);

  const cadastrar = (dsCliente, dsServico, nuValor) => {
    const nova = {
      idOrdem: crypto.randomUUID(), 
      dsCliente: dsCliente,
      dsServico: dsServico,
      nuValor: nuValor,
      fgConcluida: false,           
    };
    setOrdens([...ordens, nova]);   
  };

  const alternar = (idOrdem) => {
    setOrdens(
      ordens.map((ordem) =>
        ordem.idOrdem === idOrdem
          ? { ...ordem, fgConcluida: !ordem.fgConcluida }
          : ordem
      )
    );
  };

  const remover = (idOrdem) => {
    setOrdens(ordens.filter((ordem) => ordem.idOrdem !== idOrdem));
  };

  return (
    <div className="container">
      <h1>Oficina de Bicicletas</h1>

      <FormularioOrdem onCadastrar={cadastrar} />
      <Resumo ordens={ordens} />
      <ListaOrdens ordens={ordens} onAlternar={alternar} onRemover={remover} />
    </div>
  );
}

export default App;