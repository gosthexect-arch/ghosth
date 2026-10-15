function gerarEmail(nome, sobrenome) {
  return `${nome}.${sobrenome}@empresa.com`;
}

console.log(gerarEmail("ana", "silva"));
console.log(gerarEmail("bruno", "costa"));
console.log(gerarEmail("carla", "souza"));
