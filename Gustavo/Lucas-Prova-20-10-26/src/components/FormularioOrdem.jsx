import { useState } from "react";

function FormularioOrdem({ onCadastrar }) {
  const [cliente, setCliente] = useState("");
  const [servico, setServico] = useState("");
  const [valor, setValor] = useState("");
  const [erro, setErro] = useState("");

  const enviar = (e) => {
    e.preventDefault();

    const numero = Number(valor); 

    if (
      cliente.trim() === "" ||
      servico.trim() === "" ||
      valor.trim() === "" ||
      Number.isNaN(numero) ||
      numero < 0
    ) {
      setErro("Preencha todos os campos. O valor deve ser maior ou igual a 0.");
      return;
    }

    setErro("");
    onCadastrar(cliente.trim(), servico.trim(), numero);
    setCliente("");
    setServico("");
    setValor("");
  };

  return (
    <form className="formulario" onSubmit={enviar}>
      <input
        placeholder="Cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />
      <input
        placeholder="Serviço"
        value={servico}
        onChange={(e) => setServico(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor (R$)"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button type="submit">Cadastrar</button>

      {erro && <p className="erro">{erro}</p>}
    </form>
  );
}

export default FormularioOrdem;