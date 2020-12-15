//  Object oriented programming JS notes
// Js is prototyped based

// constructor function example
// function NBAPlayer(name, team, pos){
//     this.name = name,
//     this.team = team,
//     this.pos = pos
// }

// const curry = new NBAPlayer()

// NBAPlayer.prototype.dunk = function(){}

// curry.dunk()
// curry__protoype__ === NBAPlayer.prototype

// // ^^ This is not DRY

// function nbaPlayers(name, team, position) {
//     this.name = name;
//     this.team = team;
//     this.position = position;
// };

// let chefCurry = new nbaPlayers("Steph Curry", "GS Warrios", "Point Guard");

// chefCurry:
// nbaPlayers {
//     name: 'Steph Curry'
//     team: 'GS Warriors'
//     position: 'Point Guard'
// }

// chefCurry.__protoype__
// nbaPlayers: {}
// nbaPlayers.prototype
// nbaPlayers: {}
// nbaPlayers.prototype.dunk = function() {
//     console.log(`${this.name} dunks!`) 
// }

// chefCurry.dunk();

// Do this is Terminal node
// js notes

function summation(arr) {
    let sum = 1;

    // closure
    function summer() {
        for(let i= 0; i < arr.length; i++) {
            sum *= arr[i]
        }
    }

    summer();

    return sum;
}

console.log(summation([1, 2, 3, 4]))



let callback = function() {
    console.log("It has been 7 seconds!")
}
let timeToWait = 7000;

global.setTimeout(callback, timeToWait);

// more likely to see:
global.setTimeout(function() {
    console.log("It has been 7 seconds")
}, 7000);



function soundMaker(sound, times) {

    //closure
    function makeSound() {
        console.log(`${sound}`)
    }

    for(let i = 0; i < times; i++) {
        makeSound();
    }
}

soundMaker("woof", 5)

