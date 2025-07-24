import chalk from "chalk";

export async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${chalk.yellow(diceResult + attribute)
    }`
  );
}

export function verifyWinnerBlock(totalTestSkill1, totalTestSkill2, player1, player2, getRandomEvent) {
  if (totalTestSkill1 > totalTestSkill2) {
    const event = getRandomEvent()
    console.log(`\n${player1.name} se destacou, pegou ${chalk.green(event.name)} ${event.emoji} e marcou ${chalk.green.bold(event.value)} ponto(s)!`);
    player1.points += event.value;
  } else if (totalTestSkill2 > totalTestSkill1) {
    const event = getRandomEvent()
    console.log(`\n${player2.name} se saiu melhor, ganhou ${chalk.green(event.name)} ${event.emoji} e marcou ${chalk.green.bold(event.value)} ponto(s)!`);
    player2.points += event.value;
  } else {
    console.log("\nA disputa segue acirrada! ⚔️");
  }
}

export function declareWinner(player1, player2) {
  console.log("🎉 Resultado Final:");
  console.log(`${player1.name}: ${chalk.yellow.bold(player1.points)} ponto(s)`);
  console.log(`${player2.name}: ${chalk.yellow.bold(player2.points)} ponto(s)`);

  if (player1.points > player2.points)
    console.log(chalk.bold(`\n🎉 ${chalk.red.bold(player1.name)} venceu a corrida! Parabéns! 🏆\n`));
  else if (player2.points > player1.points)
    console.log(chalk.bold(`\n🎉 ${chalk.blue.bold(player2.name)} venceu a corrida! Parabéns! 🏆\n`));
  else console.log(chalk.bold("\nA corrida terminou em empate! 🤝\n"));
}