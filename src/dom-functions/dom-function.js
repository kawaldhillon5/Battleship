import game from "../gameLoop/gameloop-function";
const createElementDom = function (type, attribute, attributeName){

    const elmnt = document.createElement(type);
    elmnt.setAttribute(attribute,attributeName);
    
    return elmnt;
}

function insertHtml(targetElm, Elms) {

    const target = document.querySelector(targetElm);
    target.innerHTML += Elms;
    
}

function displayGameboard(gameboard, target, player, otherPlayer, clickableAttack, Player1,Player2){
    let gameboard_array = [];
    const targetDiv = document.querySelector(`${target}`);
    const playerBoard = createElementDom("div","id","board");
    gameboard.board.forEach(row => {
        row.forEach(element => {
            const box = createElementDom("div","id",`${element.coordinates[0]}${element.coordinates[1]}${player}`);
            box.classList.add("gameboard_box","not_contains_ship");
            if(element.contains_ship) box.classList.add("contains_ship");
            gameboard_array.push(box);
            if(clickableAttack){ 
                box.addEventListener("click",(e) => {
                    game(e.target.id.slice(1,2),e.target.id.slice(0,1),gameboard,player,otherPlayer,Player1,Player2)
                });
            }
            playerBoard.appendChild(box);
        });
    });
    targetDiv.appendChild(playerBoard);
    return gameboard_array;
}

function displayShips(ship_array,player){
    ship_array.forEach(ship => {
        for(let i = 0; i < ship.set_of_coordinates.length; i++){
            if(ship.length === 1){
                const box_id = ship.set_of_coordinates[0];
                document.getElementById(`${box_id[0]}${box_id[1]}${player}`).classList.add("single_box_ship");
            } else {
                if(!(ship.is_horizontal)){
                    if(i === 0){
                        const box_id = ship.set_of_coordinates[0];
                        document.getElementById(`${box_id[0]}${box_id[1]}${player}`).classList.add("horizontal_first");
                    } else if((i > 0)&&(i < ship.set_of_coordinates.length - 1)){
                        const box_id = ship.set_of_coordinates[i];
                        document.getElementById(`${box_id[0]}${box_id[1]}${player}`).classList.add("horizontal_middle");
                    } else if(i === ship.set_of_coordinates.length - 1){
                        const box_id = ship.set_of_coordinates[i];
                        document.getElementById(`${box_id[0]}${box_id[1]}${player}`).classList.add("horizontal_last");
                    }
                } else {
                    if(i === 0){
                        const box_id = ship.set_of_coordinates[0];
                        document.getElementById(`${box_id[0]}${box_id[1]}${player}`).classList.add("vertical_first");
                    } else if((i > 0)&&(i < ship.set_of_coordinates.length - 1)){
                        const box_id = ship.set_of_coordinates[i];
                        document.getElementById(`${box_id[0]}${box_id[1]}${player}`).classList.add("vertical_middle");
                    } else if(i === ship.set_of_coordinates.length - 1){
                        const box_id = ship.set_of_coordinates[i];
                        document.getElementById(`${box_id[0]}${box_id[1]}${player}`).classList.add("vertical_last");
                    }
                }
            }
        }
    });
}

function displayAttack([x,y], gameboard,player, Player1, Player2){
    const vertices = [[-1,-1],[-1,1],[1,-1],[1,1]];
    let shipArray = []
    if(player === 0){
        shipArray = Player1.shipArray;
    } else {
        shipArray = Player2.shipArray;
    }
    const box = document.getElementById(`${x}${y}${player}`);
    box.classList.add("hit");
    box.classList.add("inactiveBox");
        if(gameboard.board[x][y].contains_ship){
            box.textContent = "✖";
            vertices.forEach(vertex => {
                const vertexX = x + vertex[0];
                const vertexY = y + vertex[1];
                if((vertexX >= 0) && (vertexX <= 9) && (vertexY >= 0) && (vertexY <= 9)) {
                    const not_attackable_box = document.getElementById(`${vertexX}${vertexY}${player}`);
                    if(!(not_attackable_box.classList.contains("inactiveBox"))){
                        not_attackable_box.classList.add("not_attackable");
                    }
                }
            });
            shipArray.forEach(ship => {
                ship.set_of_coordinates.forEach(coordinates =>{
                    if((coordinates[0] === x) && (coordinates[1] === y)){
                        if(ship.is_sunk){
                            if(!(ship.is_horizontal)){
                                const coordinate0X = ship.set_of_coordinates[0][0];
                                const coordinate0Y = ship.set_of_coordinates[0][1] - 1;
                                const coordinate1X = ship.set_of_coordinates[ship.set_of_coordinates.length -1][0];
                                const coordinate1Y = ship.set_of_coordinates[ship.set_of_coordinates.length -1][1] + 1;
                                if((coordinate0X <= 9 ) && (coordinate0X >= 0) && (coordinate0Y >= 0) && (coordinate0Y <= 9)){
                                    document.getElementById(`${coordinate0X}${coordinate0Y}${player}`).classList.add("not_attackable");
                                }
                                if((coordinate1X <= 9 ) && (coordinate1X >= 0) && (coordinate1Y >= 0) && (coordinate1Y <= 9)){
                                    document.getElementById(`${coordinate1X}${coordinate1Y}${player}`).classList.add("not_attackable");
                                }
                            } else {
                                const coordinate0X = ship.set_of_coordinates[0][0] - 1 ;
                                const coordinate0Y = ship.set_of_coordinates[0][1];
                                const coordinate1X = ship.set_of_coordinates[ship.set_of_coordinates.length -1][0] + 1;
                                const coordinate1Y = ship.set_of_coordinates[ship.set_of_coordinates.length -1][1];
                                if((coordinate0X <= 9 ) && (coordinate0X >= 0) && (coordinate0Y >= 0) && (coordinate0Y <= 9)){
                                    document.getElementById(`${coordinate0X}${coordinate0Y}${player}`).classList.add("not_attackable");
                                }
                                if((coordinate1X <= 9 ) && (coordinate1X >= 0) && (coordinate1Y >= 0) && (coordinate1Y <= 9)){
                                    document.getElementById(`${coordinate1X}${coordinate1Y}${player}`).classList.add("not_attackable");
                                }
                            }
                        }
                    }
                });
            });
            return true;
        } else {
            box.textContent = "•";
            return false;
        }
}

function domContent(){
    const contentDiv = document.querySelector("#content");
    const player1Div = createElementDom("div","id","player1Div");
    const player2Div = createElementDom("div","id","player2Div");
    const player1Name = createElementDom("p","class","playerName");
    player1Name.textContent = "Player 1";
    player1Div.appendChild(player1Name);
    const player2Name = createElementDom("p","class","playerName");
    player2Name.textContent = "Player 2";
    player2Div.appendChild(player2Name);
    const player1Gameboard = createElementDom("div","id","player0Gameboard");
    player1Div.appendChild(player1Gameboard);
    const player2Gameboard = createElementDom("div","id","player1Gameboard");
    player2Div.appendChild(player2Gameboard);
    contentDiv.appendChild(player1Div);
    contentDiv.appendChild(player2Div);
}

export {domContent, displayGameboard, displayShips, displayAttack};