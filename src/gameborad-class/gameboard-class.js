const Box = require("../box-class/box-class")

class GameBoard {
    constructor(){
        let array_outside = []
        for(let i = 0; i < 10; i++){
            let array_inside = []
            array_outside.push(array_inside);
            for(let j = 0; j < 10; j++){
                array_inside.push(new Box([i,j]));  
            }
        }
        this.board = array_outside;
    }

    #checkUseability([x,y], ship_length, horizontal_direction){

        if(horizontal_direction){
            for(let i = x; i < x + ship_length; i++){
                if(this.board[i][y].is_useable == false){
                    return false;
                }
            }
            return true
            }  else {
            for(let i = y; i < y + ship_length; i++){
                if(this.board[x][i].is_useable == false) {
                    return false;
                }
            }  
            return true
            }
    }

    placeShip = function([x,y], ship, horizontal_direction){

        const ship_length = ship.length;

        if(((x > 9) || ( y > 9) || ((x + (ship_length -1)) > 9) || ( (y + (ship_length - 1)) > 9))){
            return false;
        }

        
        if(this.#checkUseability([x,y],ship_length,horizontal_direction)){
            if(horizontal_direction){
                for(let j = y - 1; j <= y + 1; j++){
                    for(let i = x - 1; i < x + ship_length + 1; i++){
                        if((i >= 0) && (i <= 9) && (j >=0) && (j <= 9)){
                            this.board[i][j].changeUseability();
                        }
                        if(j === y)  {
                            if((i >= x) && (i < (x + ship_length))){
                                this.board[i][y].addShip();
                                ship.setCoordinates([i,y]);
                            }
                        }
                    }
                }
                return true  
                } else {
                for(let j = x - 1; j <= x + 1; j++){
                    for(let i = y - 1; i < y + ship_length + 1; i++){
                        if((i >= 0) && (i <= 9) && (j >=0) && (j <= 9)){
                            this.board[j][i].changeUseability();
                        }
                        if( j === x){
                            if((i >= y) && (i < (y + ship_length))){
                                this.board[x][i].addShip();
                                ship.setCoordinates([x,i]);
                            }
                        }
                    }
                }
                return true
            }
        } else {
            return false;
        }
    }

}



module.exports = GameBoard;