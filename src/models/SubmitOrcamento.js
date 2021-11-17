function validarNome(nome) {
  if (nome.length < 3) {
    return { valido: false, texto: "Nome deve ser maior que 2 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarNome };
