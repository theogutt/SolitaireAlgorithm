class Card {
    //skelet

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

    gamestate = new Gamestate(this.convertData());
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
            //To implement 
            //check deck
            //aces and deuces to foundation
            //expose hidden cards from column with the most hidden cards
            //The best move provides you opportunity to make other moves or expose hidden cards
            //Don't empty a tableau pile without a King to replace. 
            //Consider carefully whether to fill a space with a  black King or a red King 
        }
        return suggestion;
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