const Box = require("./box-class")

test("box creation with correct coordinates", () =>{
    const box1 = new Box([1,1]);
    expect(box1.coordinates).toStrictEqual([1,1]);
});

test("add ship", () =>{
    const box1 = new Box([1,1]);
    box1.addShip();
    expect(box1.contains_ship).toBe(true);
});

test("box hit", () =>{
    const box1 = new Box([1,1]);
    box1.hit();
    expect(box1.is_hit).toBe(true);
})