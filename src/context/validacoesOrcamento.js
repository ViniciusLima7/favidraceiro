import React from "react";

const ValidacoesOrcamento = React.createContext({
  cpf: semValidacao,
  password: semValidacao,
  nome: semValidacao,
});

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}

export default ValidacoesOrcamento;
