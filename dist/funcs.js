import { Color, Mark } from "./enums";
export function createDeck() {
    const deck = [];
    const colors = Object.values(Color);
    const mark = Object.values(Mark);
    for (const m of mark) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m
            });
        }
    }
    return deck;
}
export function printCards(deck) {
    let result = '\n';
    deck.forEach((card, i) => {
        let str = card.color + card.mark;
        result += str + '\t';
        if ((i + 1) % 4 === 0) {
            result += '\n';
        }
    });
    console.log(result);
}
