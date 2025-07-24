import rollDice from "./dice.js";
import { logRollResult } from "./logger.js";

const translatedSkillNames = {
    power: "Poder",
    handling: "Dirigibilidade",
    speed: "Velocidade",
}

export async function testSkill(player1, player2, skillName) {
    const diceResult1 = await rollDice();
    const diceResult2 = await rollDice();

    const skillValue1 = player1[skillName]; //pega o valor da skill usando o nome da skill 
    const skillValue2 = player2[skillName];

    const totalTestSkill1 = diceResult1 + skillValue1;
    const totalTestSkill2 = diceResult2 + skillValue2;

    const skillNameFormatted = translatedSkillNames[skillName] || skillName; // pega o nome da skill traduzido se nao tiver usa o nome original

    await logRollResult(
        player1.name,
        skillNameFormatted,
        diceResult1,
        skillValue1
    )

    await logRollResult(
        player2.name,
        skillNameFormatted,
        diceResult2,
        skillValue2
    )

    return { totalTestSkill1, totalTestSkill2 };
}