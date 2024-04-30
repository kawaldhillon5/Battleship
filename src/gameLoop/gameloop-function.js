import { displayAttack } from "../dom-functions/dom-function";

function game(boxCoordinatesX,boxCoordinatesY,gameboard,player,otherPlayer,Player1,Player2){
    const bottomText = document.getElementById("bottom_text");
    bottomText.textContent = `${Player1.name}'s turn`;
    const player1Gameboard = document.getElementById(`player${player}Gameboard`);
    player1Gameboard.classList.toggle("inactiveGameboard");
    const player2Gameboard = document.getElementById(`player${otherPlayer}Gameboard`);
    player2Gameboard.classList.toggle("inactiveGameboard");
    displayAttack(gameboard.recieveAttack([Number(boxCoordinatesY),Number(boxCoordinatesX)],Player1.shipArray),gameboard,player);
    if(Player1.playerLost() === 10){
        bottomText.textContent = `${Player2.name} Won`;
        player1Gameboard.classList.remove("inactiveGameboard");
        player2Gameboard.classList.remove("inactiveGameboard");
        player1Gameboard.classList.add("gameLost");
        player2Gameboard.classList.add("gameWon");
    }
}

export default game;