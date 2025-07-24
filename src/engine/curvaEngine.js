import { testSkill } from "../utils/testSkill.js"
import { verifyWinnerBlock } from "../utils/logger.js"
import { getRandomCurvaEvent } from "../utils/randomEvents.js";


export async function playCurvaEngine(player1, player2) {
  const { totalTestSkill1, totalTestSkill2 } = await testSkill(player1, player2, "handling");

  verifyWinnerBlock
    (totalTestSkill1, totalTestSkill2, player1, player2, getRandomCurvaEvent);
}