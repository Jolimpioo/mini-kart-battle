async function getRandomBlock() {
  let random = Math.random();
  
  if (random < 0.33) return "RETA";
  if (random < 0.66) return "CURVA";
  return "CONFRONTO";
}

export default getRandomBlock;