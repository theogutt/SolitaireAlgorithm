"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
var readline = require("readline");
var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Card = /** @class */ (function () {
    function Card(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    Card.prototype.toString = function () {
        return "${this.value} of ${this.suit}";
    };
    return Card;
}());
var Game = /** @class */ (function () {
    function Game(deck) {
        this.foundationHearts = [];
        this.foundationSpades = [];
        this.foundationDiamonds = [];
        this.foundationClubs = [];
        this.turnPileIndex = -1;
        this.gameOver = false;
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
    Game.prototype.log = function () {
        var turnPileText = (this.turnPile.length != 0 && this.turnPileIndex !== -1
            ? "Turn Pile: " + this.turnPile[this.turnPileIndex].toString()
            : "The Turn Pile is empty or the top card needs to be turned.") + "\n\n";
        var foundationsText = "Foundations:\tHearts: " + (this.foundationHearts.length != 0
            ? this.foundationHearts[this.foundationHearts.length - 1].toString()
            : "Empty") + "\tSpades: " + (this.foundationSpades.length != 0
            ? this.foundationSpades[this.foundationSpades.length - 1].toString()
            : "Empty") + "\tDiamonds: " + (this.foundationDiamonds.length != 0
            ? this.foundationDiamonds[this.foundationDiamonds.length - 1].toString()
            : "Empty") + "\tClubs: " + (this.foundationClubs.length != 0
            ? this.foundationClubs[this.foundationClubs.length - 1].toString()
            : "Empty") + "\n\n";
        var buildPilesText = "Build Piles:\nOne: " + (this.buildPileOne.length != 0
            ? this.buildPileOne[this.buildPileOne.length - 1].toString() + " with " + (this.buildPileOne.length - 1) + " hidden cards."
            : "Empty.") + "\nTwo: " + (this.buildPileTwo.length != 0
            ? this.buildPileTwo[this.buildPileTwo.length - 1].toString() + " with " + (this.buildPileTwo.length - 1) + " hidden cards."
            : "Empty.") + "\nThree: " + (this.buildPileThree.length != 0
            ? this.buildPileThree[this.buildPileThree.length - 1].toString() + " with " + (this.buildPileThree.length - 1) + " hidden cards."
            : "Empty.") + "\nFour: " + (this.buildPileFour.length != 0
            ? this.buildPileFour[this.buildPileFour.length - 1].toString() + " with " + (this.buildPileFour.length - 1) + " hidden cards."
            : "Empty.") + "\nFive: " + (this.buildPileFive.length != 0
            ? this.buildPileFive[this.buildPileFive.length - 1].toString() + " with " + (this.buildPileFive.length - 1) + " hidden cards."
            : "Empty.") + "\nSix: " + (this.buildPileSix.length != 0
            ? this.buildPileSix[this.buildPileSix.length - 1].toString() + " with " + (this.buildPileSix.length - 1) + " hidden cards."
            : "Empty.") + "\nSeven: " + (this.buildPileSeven.length != 0
            ? this.buildPileSeven[this.buildPileSeven.length - 1].toString() + " with " + (this.buildPileSeven.length - 1) + " hidden cards."
            : "Empty.");
        console.log("\t\t***\n" + turnPileText + foundationsText + buildPilesText + "\n\t\t***");
    };
    return Game;
}());
var values = __spread(Array(13).keys()).map(function (x) { return x++; });
var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
exports.createDeck = function () {
    var e_1, _a, e_2, _b;
    var deck = [];
    try {
        for (var suits_1 = __values(suits), suits_1_1 = suits_1.next(); !suits_1_1.done; suits_1_1 = suits_1.next()) {
            var suit = suits_1_1.value;
            try {
                for (var values_1 = (e_2 = void 0, __values(values)), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    deck.push({ value: value, suit: suit });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_b = values_1["return"])) _b.call(values_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (suits_1_1 && !suits_1_1.done && (_a = suits_1["return"])) _a.call(suits_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return deck;
};
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
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
exports.play = function () {
    var deck = exports.createDeck();
    var game = new Game(deck);
    while (!game.gameOver) {
        game.log();
        read.on("line", function (input) {
            doMove(game, input.split(" "));
            read.close;
        });
    }
};
function doMove(game, move) {
    var moveType = move[0];
    if (moveType === "T") {
        if (game.turnPileIndex + 1 === game.turnPile.length)
            game.turnPileIndex = -1;
        else if (game.turnPileIndex + 1 < game.turnPile.length)
            game.turnPileIndex++;
    }
    else if (moveType === "M") {
        var from = move[1];
        var to = move[2];
        var card = Card;
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
