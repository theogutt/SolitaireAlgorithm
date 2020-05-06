class Card {
    constructor(public value: number, public suit: string) { }
    toString(): string {
        return "${this.value} of ${this.suit}";
    }
}
class Gamestate {
    cardStacks: Card[][];
    constructor(arrayOfCardArrays: Card[][]) {
        this.cardStacks = arrayOfCardArrays;
    }
    readonly GAME_OVER_WIN: number = 1;
    readonly GAME_OVER_LOST: number = -1;
    readonly GAME_ONGOING: number = 0;

    status(cardStacks: Card[][]): number {
        if (this.gameWon(cardStacks)) {
            return this.GAME_OVER_WIN;
        }
        else if (this.gameLost(cardStacks)) {
            return this.GAME_OVER_LOST;
        }
        else {
            return this.GAME_ONGOING;
        }
    }
    gameWon(cardStacks: Card[][]): boolean {
        let bool: boolean = false;
        //insert if condition
        if (false) {
            bool = true;
        }
        return bool;
    }
    gameLost(cardStacks: Card[][]): boolean {
        let bool: boolean = false;
        //insert if condition
        if (false) {
            bool = true;
        }
        return bool;
    }
}
class App {
    readonly aces = [new Card(1, "clubs"), new Card(1, "hearts"), new Card(1, "diamonds"), new Card(1, "spades")];
    readonly deuces = [new Card(2, "clubs"), new Card(2, "hearts"), new Card(2, "diamonds"), new Card(2, "spades")];
    readonly acesdeuces = this.aces.concat(this.deuces);

    gamestate = new Gamestate(this.convertData());
    cards = this.convertData();
    //replace later
    convertData(): Card[][] {
        //TODO
        //omdan data fra billedgenkendelse til arrays af kort
        let cards: Card[][] = [];
        return cards;
    }
    move(): string {
        let suggestion: string = "";
        //giv et forslag baseret på algortime
        if (this.gamestate.GAME_OVER_LOST) {
            suggestion = "GAME LOST";
        }
        else if (this.gamestate.GAME_OVER_WIN) {
            suggestion = "GAME WON";
        }
        else {
            //1 check deck (size check?)
            let deck = this.arrayFromMultiArray(this.cards, 0);
            if (false) {
                return "check deck";
            }
            //2 aces and deuces to foundation
            //mangler stadig at tjekke om der er et es i foundation i tilfælde af 2'ere
            let acedeuce = this.containsOne(this.acesdeuces, deck);
            if (acedeuce != new Card(0, "")) {
                return "move " + acedeuce.toString + " to " + acedeuce.suit + " foundation";
            }
            //3 expose hidden cards from column with the most hidden cards
            //4 The best move provides you opportunity to make other moves or expose hidden cards
            //5 Don't empty a tableau pile without a King to replace. 
            //6 Consider carefully whether to fill a space with a  black King or a red King 
        }
        return suggestion;
    }
    containsOne(referenceArray: Card[], column: Card[]): Card {
        for (var i: number = 0; i < column.length; i++) {
            for (var j: number = 0; j < referenceArray.length; j++) {
                if (column[i] == referenceArray[j]) {
                    return referenceArray[j];
                }
            }
        }
        return new Card(0, "");
    }
    contains(card: Card, column: Card[]): boolean {
        let bool: boolean = false;
        for (var i: number = 0; i < column.length; i++) {
            if (column[i] == card) {
                bool = true;
                break;
            }
        }
        return bool;
    }
    arrayFromMultiArray(multiArray: Card[][], column: number): Card[] {
        //for at få en bunke
        let simpleArray: Card[] = [];
        for (var i: number = 0; i < multiArray[column].length; i++) {
            simpleArray[i] = multiArray[column][i];
        }
        return simpleArray;
    }

}