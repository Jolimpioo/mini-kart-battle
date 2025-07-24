import getRandomBlock from "../utils/blockGenerator.js";
import { playRetaEngine } from "./retaEngine.js"
import { playCurvaEngine } from "./curvaEngine.js"
import { playConfrontoEngine } from "./confrontoEngine.js";
import sleep from "../utils/sleep.js";
import chalk from "chalk";

async function playRaceEngine(player1, player2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);


    let block = await getRandomBlock();
    console.log(`Bloco: ${chalk.magentaBright(block)}`);

    // chamada engine de cada bloco
    switch(block) {
      case "RETA":
        await playRetaEngine(player1, player2);
        break;
      case "CURVA":
        await playCurvaEngine(player1, player2);
        break;
      case "CONFRONTO":
        await playConfrontoEngine(player1, player2);
        break;
    }

    console.log("\n-----------------------------------------------\n");
    
    // espera 2 segundos ate a proxima rodada
    await sleep(2000);
  }
}

export default playRaceEngine;