import GameBoard from "../gameborad-class/gameboard-class";
import { getRandomBoolean, getRandomInt } from "../random-number-generator/random-number-generator";
import Ship from "../ship-class/ship_class";

const placeAllShips = function([x,y],ship,horizontal_direction, gameboard){

    while(!(gameboard.placeShip([x,y],ship,horizontal_direction))){
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                if(gameboard.placeShip([i,j],ship, horizontal_direction)){
                    return;
                }
            }
        }
        return ;
    }
      
}

const gameSetUp = function(){
    const ship_array = [new Ship(1), new Ship(1), new Ship(1), new Ship(1), new Ship(2), new Ship(2),new Ship(2), new Ship(3),new Ship(3), new Ship(4)];
    const gameboard = new GameBoard();
    ship_array.forEach(ship => {
        placeAllShips([getRandomInt(),getRandomInt()],ship,getRandomBoolean(),gameboard)
    });

    console.log(gameboard);
    console.log(ship_array);
}


