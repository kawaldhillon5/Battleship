class Ship {
    constructor(length){
        this.length = length;
        this.no_of_hits = 0;
        this.set_of_coordinates = [];
        this.is_sunk = false;
    }

    hit = function(){

        if(this.no_of_hits < this.length){
            ++this.no_of_hits;
            if(this.no_of_hits >= this.length){
                this.is_sunk = true;
            } else {
                this.is_sunk = false;
            }
        }
    }

    setCoordinates = function([x,y]){
        this.set_of_coordinates.push([x,y]);
    }

}

module.exports = Ship;