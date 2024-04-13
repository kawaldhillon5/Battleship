class Box {
    constructor([x,y]){
        this.coordinates = [x,y];
        this.contains_ship = false;
        this.is_hit = false;
        this.is_useable = true;
    }

    addShip = function(){
        this.contains_ship = true;
    }

    hit = function(){
        this.is_hit = true;
    }

    changeUseability = function(){
        this.is_useable = false;
    }


}

module.exports = Box;