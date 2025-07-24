export function randomBonusConfronto() {
    const random = Math.random();

    if (random < 0.5) {
        return { name: "Turbo", value: 1, emoji: "🚀" };
    } else {
        return null;
    }
};

export function getRandomConfrontoEvent() {
    const random = Math.random();

    if (random < 0.7) {
        return { name: "Casco", value: 1, emoji: "🐢" };
    } else {
        return { name: "Bomba", value: 2, emoji: "💣" };
    }
}

export function getRandomRetaEvent() {
    const random = Math.random();

    if (random < 0.9) {
        return { name: "Moeda", value: 1, emoji: "🪙 " };
    } else {
        return { name: "Estrela", value: 2, emoji: "🌟" };
    }
}

export function getRandomCurvaEvent() {
    const random = Math.random();

    if (random < 0.9) {
        return { name: "Cogumelo", value: 1, emoji: "🍄" };
    } else {
        return { name: "Flor de Fogo", value: 2, emoji: "🌻" };
    }
}