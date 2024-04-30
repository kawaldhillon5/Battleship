import Ship from "../ship-class/ship_class";
import GameBoard from "../gameborad-class/gameboard-class";
import { getRandomBoolean, getRandomInt } from "../random-number-generator/random-number-generator";
class player{

    constructor(){
        this.shipArray = [new Ship(1), new Ship(1), new Ship(1), new Ship(1), new Ship(2), new Ship(2),new Ship(2), new Ship(3),new Ship(3), new Ship(4)];
        this.gameboard = new GameBoard();
        this.gameboardArray = [];
    }

    playerWon(){
        this.shipArray.forEach(ship => {
            if(ship.is_sunk === false){
                return false
            }
        });
        return true;
    }

    placeShips(){
        this.shipArray.forEach(ship => {
            this.#placeAllShips([getRandomInt(),getRandomInt()],ship,getRandomBoolean(),this.gameboard)
        });
        
    }

    #placeAllShips = function([x,y],ship,horizontal_direction, gameboard){

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

}

export { player };