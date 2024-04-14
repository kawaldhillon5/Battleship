import GameBoard from "../gameborad-class/gameboard-class";

const board = new GameBoard();
board.placeShip([0,0],1,true);
board.placeShip([7,0],3,true);
console.log(board.board);