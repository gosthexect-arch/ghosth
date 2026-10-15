function validarTamanhoSenha(senha) {
  return senha.length >= 8;
}

console.log(validarTamanhoSenha("123"));
console.log(validarTamanhoSenha("senha123"));
console.log(validarTamanhoSenha("minhasenhasegura"));
