import GameBoard from "../gameborad-class/gameboard-class";

const board = new GameBoard();
board.placeShip([1,1],1,true);
board.placeShip([1,3],3,true);
console.log(board.board);