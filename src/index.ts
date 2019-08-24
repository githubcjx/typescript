
type Deck = NormalCard[]

enum Color {
    hongtao = '♥',
    heitao = '♠',
    fangpian = '♦',
    meihua = '♣'
}
enum Mark {
    A = 'A',
    one = '1',
    two = '2',
    three = '3',
    four = '4',
    five = '5',
    six = '6',
    seven = '7',
    eight = '8',
    nine = '9',
    ten = '10',
    J = 'J',
    Q = 'Q',
    K = 'K'
}
type NormalCard = {
    color: Color
    mark: number
}

function createDeck(): Deck {
    const deck: Deck = [];
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

function printCards(deck: Deck) {
    let result = '\n';
    deck.forEach((card, i) => {
        let str = card.color + card.mark;
        result += str + '\t';
        if ((i + 1) % 4 === 0) {
            result += '\n';
        }
        
    })
    console.log(result)
}

const deck = createDeck();
printCards(deck);