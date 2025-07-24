import inquirer from "inquirer";
import characters from "../characters/charactersList.js";

async function selectCharacter() {
    const { character1 } = await inquirer.prompt([
        {
            type: "list",
            name: "character1",
            message: "Player 1, escolha seu personagem: 🚗 ",
            choices: characters.map(character => character.name)
        }
    ]);

    const remainingCharacters = characters.filter(character => character.name !== character1);

    const { character2 } = await inquirer.prompt([
        {
            type: "list",
            name: "character2",
            message: "Player 2, escolha seu personagem: 🚙 ",
            choices: remainingCharacters.map(character => character.name)
        }
    ]);

    const player1 = characters.find(character => character.name === character1);
    const player2 = characters.find(character => character.name === character2);

    return { player1, player2 };
}

export default selectCharacter;
