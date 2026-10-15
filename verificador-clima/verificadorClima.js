function analisarTemperatura(temperatura) {
  if (temperatura >= 25) {
    return "Está calor!";
  } else {
    return "Está fresco!";
  }
}

console.log(analisarTemperatura(18));
console.log(analisarTemperatura(25));
console.log(analisarTemperatura(32));
