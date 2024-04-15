import GameBoard from "../gameborad-class/gameboard-class";
import { getRandomBoolean, getRandomInt } from "../random-number-generator/random-number-generator";
import Ship from "../ship-class/ship_class";
import "./index.css";
import { domContent, displayGameboard, displayShips, displayAttack } from "../dom-functions/dom-function";
const placeAllShips = function([x,y],ship,horizontal_direction, gameboard){

    while(!(gameboard.placeShip([x,y],ship,horizontal_direction))){
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                if(gameboard.placeShip([i,j],ship, horizontal_direction)){
                    return;
                }
            }
        }
        return;
    }
      
}

const gameSetUp = function(){
    domContent();
    const ship_array = [new Ship(1), new Ship(1), new Ship(1), new Ship(1), new Ship(2), new Ship(2),new Ship(2), new Ship(3),new Ship(3), new Ship(4)];
    const gameboard = new GameBoard();
    ship_array.forEach(ship => {
        placeAllShips([getRandomInt(),getRandomInt()],ship,getRandomBoolean(),gameboard)
    });
    const player1GameboardArray = displayGameboard(gameboard,"#player1Gameboard");
    displayShips(ship_array)
    displayAttack(gameboard.recieveAttack([1,1], ship_array),gameboard);
    displayAttack(gameboard.recieveAttack([1,2], ship_array),gameboard);
    displayAttack(gameboard.recieveAttack([3,2], ship_array),gameboard);

    console.log(gameboard);
    console.log(ship_array);
}

gameSetUp();


