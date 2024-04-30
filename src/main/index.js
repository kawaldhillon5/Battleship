import { player } from "../player/player-class";
import "./index.css";
import { domContent, displayGameboard, displayShips} from "../dom-functions/dom-function";


const gameSetUp = function(){
    domContent();
    const player1 = new player("Player");
    const player2 = new player("Computer");

    player1.placeShips();
    player2.placeShips();

    const player1GameboardArray = displayGameboard(player1.gameboard,"#player0Gameboard",0,1,true,player1,player2);
    const player2GameboardArray = displayGameboard(player2.gameboard,"#player1Gameboard",1,0,true,player2,player1);

    displayShips(player1.shipArray,0);

    // displayAttack(gameboard1.recieveAttack([1,1], ship_array1),gameboard1,0);
    // displayAttack(gameboard2.recieveAttack([0,0], ship_array2),gameboard2,1);

    const content = document.getElementById("content");
    const bottomText = document.createElement("div");
    bottomText.setAttribute("id","bottom_text");
    content.appendChild(bottomText);
    bottomText.textContent = `${player1.name}'s turn`;
    document.querySelector("#player0Gameboard").classList.add("inactiveGameboard");

}

gameSetUp();


