import { player } from "../player/player-class";
import "./index.css";
import { domContent, displayGameboard, displayShips, displayAttack } from "../dom-functions/dom-function";


const gameSetUp = function(){
    domContent();
    const player1 = new player("Player 1");
    const player2 = new player("Computer");

    player1.placeShips();
    player2.placeShips();

    const player1GameboardArray = displayGameboard(player1.gameboard,"#player1Gameboard",0,true, player1.gameboard.recieveAttack,player1.shipArray);
    const player2GameboardArray = displayGameboard(player2.gameboard,"#player2Gameboard",1,true,player2.gameboard.recieveAttack,player2.shipArray);

    displayShips(player1.shipArray,0);
    displayShips(player2.shipArray,1)

    // displayAttack(gameboard1.recieveAttack([1,1], ship_array1),gameboard1,0);
    // displayAttack(gameboard2.recieveAttack([0,0], ship_array2),gameboard2,1);

    const content = document.getElementById("content");
    const bottomText = document.createElement("div");
    bottomText.setAttribute("id","bottom_text");
    content.appendChild(bottomText);

}

function gameLoop(player1,player2){
    let gameWon = false;
    while(gameWon){

    }

}

gameSetUp();


