
const createElementDom = function (type, attribute, attributeName){

    const elmnt = document.createElement(type);
    elmnt.setAttribute(attribute,attributeName);
    
    return elmnt;
}

function insertHtml(targetElm, Elms) {

    const target = document.querySelector(targetElm);
    target.innerHTML += Elms;
    
}

function displayGameboard(gameboard, target){
    let gameboard_array = [];
    const targetDiv = document.querySelector(`${target}`);
    const playerBoard = createElementDom("div","id","board");
    gameboard.board.forEach(row => {
        row.forEach(element => {
            const box = createElementDom("div","id",`${element.coordinates[0]}${element.coordinates[1]}`);
            box.classList.add("gameboard_box");
            if(element.contains_ship) box.classList.add("contains_ship");
            gameboard_array.push(box);
            playerBoard.appendChild(box);
        });
    });
    targetDiv.appendChild(playerBoard);
    return gameboard_array;
}

function displayShips(ship_array){
    ship_array.forEach(ship => {
        for(let i = 0; i < ship.set_of_coordinates.length; i++){
            if(ship.length === 1){
                const box_id = ship.set_of_coordinates[0];
                document.getElementById(`${box_id[0]}${box_id[1]}`).classList.add("single_box_ship");
            } else {
                if(!(ship.is_horizontal)){
                    if(i === 0){
                        const box_id = ship.set_of_coordinates[0];
                        document.getElementById(`${box_id[0]}${box_id[1]}`).classList.add("horizontal_first");
                    } else if((i > 0)&&(i < ship.set_of_coordinates.length - 1)){
                        const box_id = ship.set_of_coordinates[i];
                        document.getElementById(`${box_id[0]}${box_id[1]}`).classList.add("horizontal_middle");
                    } else if(i === ship.set_of_coordinates.length - 1){
                        const box_id = ship.set_of_coordinates[i];
                        document.getElementById(`${box_id[0]}${box_id[1]}`).classList.add("horizontal_last");
                    }
                } else {
                    if(i === 0){
                        const box_id = ship.set_of_coordinates[0];
                        document.getElementById(`${box_id[0]}${box_id[1]}`).classList.add("vertical_first");
                    } else if((i > 0)&&(i < ship.set_of_coordinates.length - 1)){
                        const box_id = ship.set_of_coordinates[i];
                        document.getElementById(`${box_id[0]}${box_id[1]}`).classList.add("vertical_middle");
                    } else if(i === ship.set_of_coordinates.length - 1){
                        const box_id = ship.set_of_coordinates[i];
                        document.getElementById(`${box_id[0]}${box_id[1]}`).classList.add("vertical_last");
                    }
                }
            }
        }
    });
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
    const player1Gameboard = createElementDom("div","id","player1Gameboard");
    player1Div.appendChild(player1Gameboard);
    const player2Gameboard = createElementDom("div","id","player2Gameboard");
    player2Div.appendChild(player2Gameboard);
    contentDiv.appendChild(player1Div);
    contentDiv.appendChild(player2Div);
}

export {domContent, displayGameboard, displayShips};