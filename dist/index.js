import { sum } from "./myModule";
console.log(sum(1, 2));
var Color;
(function (Color) {
    Color["hongtao"] = "\u2665";
    Color["heitao"] = "\u2660";
    Color["fangpian"] = "\u2666";
    Color["meihua"] = "\u2663";
})(Color || (Color = {}));
var Mark;
(function (Mark) {
    Mark["A"] = "A";
    Mark["one"] = "1";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["seven"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["J"] = "J";
    Mark["Q"] = "Q";
    Mark["K"] = "K";
})(Mark || (Mark = {}));
function createDeck() {
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
function printCards(deck) {
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
const deck = createDeck();
printCards(deck);
