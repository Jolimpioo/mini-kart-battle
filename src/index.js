import selectCharacter from './utils/selectCharacters.js';
import playRaceEngine from './engine/raceEngine.js';
import { declareWinner } from './utils/logger.js';
import sleep from './utils/sleep.js';
import chalk from 'chalk';

async function main() {
  try {
    console.log('--------- 🏁 Bem-vindo à Corrida! 🏎️ 💨 ----------\n');

    // seleção de personagens
    const { player1, player2 } = await selectCharacter();

    console.log('\n🏁 Competidores:');
    console.log(`🚗 ${chalk.red.bold(player1.name)} (Velocidade: ${player1.speed}, Manobrabilidade: ${player1.handling}, Poder: ${player1.power})`);
    console.log(`🚙 ${chalk.blue.bold(player2.name)} (Velocidade: ${player2.speed}, Manobrabilidade: ${player2.handling}, Poder: ${player2.power})\n`);

    // umm segundo para o inicio
    await sleep(1000)

    // incia corrida
    await playRaceEngine(player1, player2);

    // resultado final
    declareWinner(player1, player2);

  } catch (error) {
    console.error('Erro durante o jogo:', error.message);
  }
}

main();