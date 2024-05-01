import { displayAttack } from "../dom-functions/dom-function";

function game(boxCoordinatesX,boxCoordinatesY,gameboard,player,otherPlayer,Player1,Player2){
    const bottomText = document.getElementById("bottom_text");
    const player1Gameboard = document.getElementById(`player${player}Gameboard`);
    const player2Gameboard = document.getElementById(`player${otherPlayer}Gameboard`);

    if(!displayAttack(gameboard.recieveAttack([Number(boxCoordinatesY),Number(boxCoordinatesX)],Player1.shipArray),gameboard,player, Player1, Player2)){
        bottomText.textContent = `${Player1.name}'s turn`;
        player1Gameboard.classList.toggle("inactiveGameboard");
        player2Gameboard.classList.toggle("inactiveGameboard");
    }
    
    if(Player1.playerLost() === 10){
        bottomText.textContent = `${Player2.name} Won`;
        player1Gameboard.classList.remove("inactiveGameboard");
        player2Gameboard.classList.remove("inactiveGameboard");
        player1Gameboard.classList.add("gameLost");
        player2Gameboard.classList.add("gameWon");
    }
}

export default game;