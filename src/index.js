"use strict";
exports.__esModule = true;
var myModule_1 = require("./myModule");
console.log(myModule_1.sum(1, 2));
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
    var deck = [];
    var colors = Object.values(Color);
    var mark = Object.values(Mark);
    for (var _i = 0, mark_1 = mark; _i < mark_1.length; _i++) {
        var m = mark_1[_i];
        for (var _a = 0, colors_1 = colors; _a < colors_1.length; _a++) {
            var c = colors_1[_a];
            deck.push({
                color: c,
                mark: m
            });
        }
    }
    return deck;
}
function printCards(deck) {
    var result = '\n';
    deck.forEach(function (card, i) {
        var str = card.color + card.mark;
        result += str + '\t';
        if ((i + 1) % 4 === 0) {
            result += '\n';
        }
    });
    console.log(result);
}
var deck = createDeck();
printCards(deck);
