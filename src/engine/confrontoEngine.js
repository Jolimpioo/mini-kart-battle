import { testSkill } from "../utils/testSkill.js"
import { getRandomConfrontoEvent, randomBonusConfronto } from "../utils/randomEvents.js"
import chalk from "chalk";

export async function playConfrontoEngine(player1, player2) {
  // modo random de quem ataca e defende - um capricho
  let attacker;
  let defender;

  if (Math.random() < 0.5) {
    attacker = player1;
    defender = player2;
  } else {
    attacker = player2;
    defender = player1;
  }

  console.log(`${attacker.name} confrontou com ${defender.name}! 🥊`);

  // teste de skill - objeto desestruturado
  const { totalTestSkill1, totalTestSkill2 } = await testSkill(player1, player2, "power");


  if (totalTestSkill1 > totalTestSkill2) {
    const attack = getRandomConfrontoEvent();

    // diminui pontos mas nao deixa negativo
    player2.points = Math.max(0, player2.points - attack.value);

    console.log(
      `\n${player1.name} venceu o confronto! \n${player2.name} foi atingido por um(a) ${chalk.red(attack.name)} e perdeu ${chalk.red.bold(attack.value)} ponto(s) ${attack.emoji}`
    );

    const randomBonus = randomBonusConfronto();
    if (randomBonus) {
      player1.points++;
      console.log(`\n${player1.name} ativou o ${chalk.green(randomBonus.name)} e marcou ${chalk.green.bold(randomBonus.value)} ponto extra! ${randomBonus.emoji}`);
    }
  }

  if (totalTestSkill2 > totalTestSkill1) {
    const attack = getRandomConfrontoEvent();
    player1.points = Math.max(0, player1.points - attack.value);

    console.log(
      `\n${player2.name} venceu o confronto! \n${player1.name} foi atingido por um(a) ${chalk.red(attack.name)} e perdeu ${chalk.red.bold(attack.value)} ponto(s) ${attack.emoji}`
    );

    const randomBonus = randomBonusConfronto();
    if (randomBonus) {
      player2.points++;
      console.log(`\n${player2.name} ativou o ${chalk.green(randomBonus.name)} e marcou ${chalk.green.bold(randomBonus.value)} ponto extra! ${randomBonus.emoji}`);
    }
  }

  if (
    totalTestSkill2 === totalTestSkill1) {
    console.log("\nConfronto empatado! Nenhum ponto foi perdido 🤝")

  }
}
