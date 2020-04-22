class Card{
    //skelet

}
class Gamestate{
    cardStacks : Card[][];
    constructor(arrayOfCardArrays : Card[][]){
        this.cardStacks = arrayOfCardArrays;
    }
    readonly GAME_OVER_WIN : number = 1;        
    readonly GAME_OVER_LOST : number = -1;        
    readonly GAME_ONGOING : number = 0;

    status(cardStacks : Card[][]):number{
        if(this.gameWon(cardStacks)){
            return this.GAME_OVER_WIN;
        }
        else if(this.gameLost(cardStacks)){
            return this.GAME_OVER_LOST;
        }
        else{
            return this.GAME_ONGOING;
        }
    }
    gameWon(cardStacks : Card[][]):boolean{
        let bool : boolean = false; 
        //insert if condition
        if(false){
            bool = true;
        }
        return bool;
    }
    gameLost(cardStacks : Card[][]):boolean{
        let bool : boolean = false; 
        //insert if condition
        if(false){
            bool = true;
        }
        return bool;
    }
}
class App{
    
    gamestate = new Gamestate(this.convertData());
    //replace later


    convertData():Card[][]{
        //TODO
        //omdan data fra billedgenkendelse til arrays af kort
       let cards : Card[][];
       return cards;
    }
    move():string{
        let suggestion : string ="";
        //giv et forslag baseret på algortime
        return suggestion;
    }

}