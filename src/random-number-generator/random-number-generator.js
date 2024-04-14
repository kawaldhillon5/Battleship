function getRandomInt() {
    return Math.floor(Math.random() * 10);
}

function getRandomBoolean() {
    const output =  Math.floor(Math.random() * 2);
    if(output === 0){
        return false;
    } else {
        return true;
    }
}

export {getRandomBoolean, getRandomInt};