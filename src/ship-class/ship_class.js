class ship {
    constructor(length){
        this.length = length;
        this.no_of_hits = 0;
    }

    hit = function(){

        if(this.no_of_hits < this.length){
            ++this.no_of_hits;
        }
    }

    isSunk = function(){
        return this.no_of_hits >= this.length ? true : false;
    }

}

module.exports = ship;