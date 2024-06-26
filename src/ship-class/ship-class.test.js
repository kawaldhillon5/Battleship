const Ship = require("./ship_class")

test("hit", () => {
    const ship1 = new Ship(3);
    ship1.hit();
    expect(ship1.no_of_hits).toBe(1)
});

test("Is Sunk", () => {
    const ship2 = new Ship(2);
    ship2.hit();
    ship2.hit();
    expect(ship2.isSunk()).toBe(true);
});