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
    const ship_array1 = [new Ship(1), new Ship(1), new Ship(1), new Ship(1), new Ship(2), new Ship(2),new Ship(2), new Ship(3),new Ship(3), new Ship(4)];
    const ship_array2 = [new Ship(1), new Ship(1), new Ship(1), new Ship(1), new Ship(2), new Ship(2),new Ship(2), new Ship(3),new Ship(3), new Ship(4)];

    const gameboard1 = new GameBoard();
    const gameboard2 = new GameBoard();

    ship_array1.forEach(ship => {
        placeAllShips([getRandomInt(),getRandomInt()],ship,getRandomBoolean(),gameboard1)
    });
    ship_array2.forEach(ship => {
        placeAllShips([getRandomInt(),getRandomInt()],ship,getRandomBoolean(),gameboard2)
    });
    const player1GameboardArray = displayGameboard(gameboard1,"#player1Gameboard",0,false);
    const player2GameboardArray = displayGameboard(gameboard2,"#player2Gameboard",1,true,gameboard2.recieveAttack,ship_array2);
    displayShips(ship_array1,0);
    displayShips(ship_array2,1)

    displayAttack(gameboard1.recieveAttack([1,1], ship_array1),gameboard1,0);
    // displayAttack(gameboard1.recieveAttack([0,0], ship_array2),gameboard2,1);

    console.log(gameboard1);
    console.log(ship_array1);
}

gameSetUp();


