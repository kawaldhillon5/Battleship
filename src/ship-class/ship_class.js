class Ship {
    constructor(length){
        this.length = length;
        this.no_of_hits = 0;
        this.set_of_coordinates = [];
    }

    hit = function(){

        if(this.no_of_hits < this.length){
            ++this.no_of_hits;
        }
    }

    isSunk = function(){
        return this.no_of_hits >= this.length ? true : false;
    }

    setCoordinates = function([x,y]){
        this.set_of_coordinates.push([x,y]);
    }

}

module.exports = Ship;