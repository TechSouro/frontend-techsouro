export async function getLastNumber(texto: string) {
  const numeros = texto.match(/\d+/g);
  if (numeros && numeros.length > 0) {
    return numeros[numeros.length - 1];
  } else {
    return null;
  }
}
