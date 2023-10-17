const nomeDoHeroi = "Herói";
const xpDoHeroi = 6000;

if (xpDoHeroi < 1000) {
  console.log( nomeDoHeroi + " é do nível Ferro.");
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
  console.log( nomeDoHeroi + "é do nível Bronze.");
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
  console.log( nomeDoHeroi + "é do nível Prata.");
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
  console.log( nomeDoHeroi + "é do nível Ouro.");
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
  console.log( nomeDoHeroi + "é do nível Platina Diamante.");
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
  console.log( nomeDoHeroi + "é do nível Ascendente.");
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
  console.log( nomeDoHeroi + "é do nível Imortal.");
} else {
  console.log( nomeDoHeroi + "é do nível Radiante.");
} 