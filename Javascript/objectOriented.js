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

