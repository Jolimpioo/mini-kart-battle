import { testSkill } from "../utils/testSkill.js"
import { verifyWinnerBlock } from "../utils/logger.js"
import { getRandomRetaEvent } from "../utils/randomEvents.js";


export async function playRetaEngine(player1, player2) {
  const { totalTestSkill1, totalTestSkill2 } = await testSkill(player1, player2, "speed");



  verifyWinnerBlock
    (totalTestSkill1, totalTestSkill2, player1, player2, getRandomRetaEvent);
}