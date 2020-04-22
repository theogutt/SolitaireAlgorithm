import * as readline from "readline";

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Card {
    constructor(public value: number, public suit: string) {}

    toString(): string {
        return "${this.value} of ${this.suit}";
    }
}

class Game {
    buildPileOne: Card[];
    buildPileTwo: Card[];
    buildPileThree: Card[];
    buildPileFour: Card[];
    buildPileFive: Card[];
    buildPileSix: Card[];
    buildPileSeven: Card[];
    foundationHearts: Card[] = [];
    foundationSpades: Card[] = [];
    foundationDiamonds: Card[] = [];
    foundationClubs: Card[] = [];
    turnPile: Card[];
    turnPileIndex: number = -1;
    gameOver: boolean = false;

    constructor(deck: Card[]) {
        shuffle(deck);
        this.buildPileOne = deck.slice(0, 1);
        this.buildPileTwo = deck.slice(1, 3);
        this.buildPileThree = deck.slice(3, 6);
        this.buildPileFour = deck.slice(6, 10);
        this.buildPileFive = deck.slice(10, 15);
        this.buildPileSix = deck.slice(15, 21);
        this.buildPileSeven = deck.slice(21, 28);
        this.turnPile = deck.slice(28);
    }

    log() {
        let turnPileText = `${
            this.turnPile.length != 0 && this.turnPileIndex !== -1
                ? `Turn Pile: ${this.turnPile[this.turnPileIndex].toString()}`
                : `The Turn Pile is empty or the top card needs to be turned.`
        }\n\n`;
        let foundationsText = `Foundations:\tHearts: ${
            this.foundationHearts.length != 0
                ? this.foundationHearts[
                      this.foundationHearts.length - 1
                  ].toString()
                : `Empty`
        }\tSpades: ${
            this.foundationSpades.length != 0
                ? this.foundationSpades[
                      this.foundationSpades.length - 1
                  ].toString()
                : `Empty`
        }\tDiamonds: ${
            this.foundationDiamonds.length != 0
                ? this.foundationDiamonds[
                      this.foundationDiamonds.length - 1
                  ].toString()
                : `Empty`
        }\tClubs: ${
            this.foundationClubs.length != 0
                ? this.foundationClubs[
                      this.foundationClubs.length - 1
                  ].toString()
                : `Empty`
        }\n\n`;
        let buildPilesText = `Build Piles:\nOne: ${
            this.buildPileOne.length != 0
                ? `${this.buildPileOne[
                      this.buildPileOne.length - 1
                  ].toString()} with ${
                      this.buildPileOne.length - 1
                  } hidden cards.`
                : `Empty.`
        }\nTwo: ${
            this.buildPileTwo.length != 0
                ? `${this.buildPileTwo[
                      this.buildPileTwo.length - 1
                  ].toString()} with ${
                      this.buildPileTwo.length - 1
                  } hidden cards.`
                : `Empty.`
        }\nThree: ${
            this.buildPileThree.length != 0
                ? `${this.buildPileThree[
                      this.buildPileThree.length - 1
                  ].toString()} with ${
                      this.buildPileThree.length - 1
                  } hidden cards.`
                : `Empty.`
        }\nFour: ${
            this.buildPileFour.length != 0
                ? `${this.buildPileFour[
                      this.buildPileFour.length - 1
                  ].toString()} with ${
                      this.buildPileFour.length - 1
                  } hidden cards.`
                : `Empty.`
        }\nFive: ${
            this.buildPileFive.length != 0
                ? `${this.buildPileFive[
                      this.buildPileFive.length - 1
                  ].toString()} with ${
                      this.buildPileFive.length - 1
                  } hidden cards.`
                : `Empty.`
        }\nSix: ${
            this.buildPileSix.length != 0
                ? `${this.buildPileSix[
                      this.buildPileSix.length - 1
                  ].toString()} with ${
                      this.buildPileSix.length - 1
                  } hidden cards.`
                : `Empty.`
        }\nSeven: ${
            this.buildPileSeven.length != 0
                ? `${this.buildPileSeven[
                      this.buildPileSeven.length - 1
                  ].toString()} with ${
                      this.buildPileSeven.length - 1
                  } hidden cards.`
                : `Empty.`
        }`;
        console.log(
            `\t\t***\n${turnPileText}${foundationsText}${buildPilesText}\n\t\t***`
        );
    }
}

const values: number[] = [...Array(13).keys()].map((x) => x++);
const suits: string[] = ["Hearts", "Spades", "Diamonds", "Clubs"];

export const createDeck = (): Card[] => {
    let deck: Card[] = [];

    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }

    return deck;
};

function shuffle(array: any[]) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export const play = () => {
    let deck: Card[] = createDeck();
    let game = new Game(deck);

    while (!game.gameOver) {
        game.log();
        read.on("line", (input) => {
            doMove(game, input.split(" "));
            read.close;
        });
    }
};

function doMove(game: Game, move: string[]) {
    const moveType = move[0];
    if (moveType === "T") {
        if (game.turnPileIndex + 1 === game.turnPile.length)
            game.turnPileIndex = -1;
        else if (game.turnPileIndex + 1 < game.turnPile.length)
            game.turnPileIndex++;
    } else if (moveType === "M") {
        const from = move[1];
        const to = move[2];
        let card = Card;

        switch (from) {
            case "1": {
                break;
            }
            case "2": {
                break;
            }
            case "3": {
                break;
            }
            case "4": {
                break;
            }
            case "5": {
                break;
            }
            case "6": {
                break;
            }
            case "7": {
                break;
            }
            case "H": {
                break;
            }
            case "S": {
                break;
            }
            case "D": {
                break;
            }
            case "C": {
                break;
            }
        }
    }
}
