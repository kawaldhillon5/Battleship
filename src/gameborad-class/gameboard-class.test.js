const GameBoard = require("./gameboard-class");
const Box = require("../box-class/box-class");
test("Gameboard creation",() => {
    const gameboard = new GameBoard();
    expect(gameboard.board.length).toBe(10);
});

test("placing a ship of lenght 1 inside board", () => {
    const gameboard = new GameBoard();
    expect(gameboard.placeShip([1,1],1,true)).toBe(true);
});

test("placing a ship of lenght 3 inside board", () => {
    const gameboard = new GameBoard();
    expect(gameboard.placeShip([1,3],3, true)).toBe(true);
});

test("placing a ship fully outside board", () => {
    const gameboard = new GameBoard();    
    expect(gameboard.placeShip([11,1],3, true)).toBe(false);
});

test("placing a ship partially outside board", () => {
    const gameboard = new GameBoard();
    expect(gameboard.placeShip([9,1],3, true)).toBe(false);
});

test("placing a ship on top of another ship", () => {
    const gameboard = new GameBoard();
    gameboard.placeShip([1,1],1);
    expect(gameboard.placeShip([1,1],3, true)).toBe(false);
});

test("placing a ship closeby to another ship", () => {
    const gameboard = new GameBoard();
    gameboard.placeShip([1,1],1,true);
    expect(gameboard.placeShip([1,2],3, true)).toBe(false);
});