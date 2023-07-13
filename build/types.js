const isActive = true;
const isMale = false;
const isBool = true;
let isNumber = true;
let isNumber1;
const num = 5;
const PI = 3.4;
let bir = 1;
let ikki = 2;
const lang = "TypeScript";
let str = "Salom";
let str1;
let num2 = "7";
let c = num + num2;
let summa = num + Number(num2);
console.log(typeof c);
console.log(c);
console.log(typeof summa);
console.log(summa);
let myVar = 5;
myVar = "sds";
myVar = true;
let myVar2 = myVar;
let myVar3 = myVar;
myVar2 = 7;
console.log(myVar2);
console.log(typeof myVar2);
const numArray = [1, 2, 3, 4, 5, 6];
const numArray1 = [1, 2, 3, 4];
const numArray2 = [1, 2, 3, 4];
let numArray3 = [1, 2, 3, 4];
const strArray = ["Salom", "Xayr"];
const strArray2 = ["Salom", "Xayr"];
const host = ["localhost", 3000];
console.log(host);
const address = [
    "Tashkent",
    12,
    false,
    true,
    true
];
let son1 = 2;
const login = "sumermarket";
const strNumArray = [1, 2, "uch", 4, "besh"];
let sdArray = [1, 2, "uch", 4, "besh"];
let sdArray1 = [1, 2, "uch", 4, "besh"];
sdArray1.push(true);
let my1;
my1 = undefined;
let userId = 5;
function printId(id) {
    if (typeof id == "number") {
        console.log(id * 2);
    }
    else {
        console.log(id.toLowerCase());
    }
}
function getUser(user) {
    if (Array.isArray(user)) {
        console.log(user.join(", "));
        return user;
    }
    else {
        console.log(user);
        return user;
    }
}
getUser(["admin", "creator", "user"]);
getUser("Salom");
function salomlash(name) {
    console.log("Salom", name);
}
salomlash("Karim");
function sum(a, b) {
    return a + b;
}
function myError(message) {
    throw new Error(message);
}
function cheksiz() {
    while (true) {
        console.log("Salom");
    }
}
const a2 = "ikki";
let a1 = "bir";
a1 = "bir";
function doActivate(action) {
    switch (action) {
        case "ACTIVATE":
            return 1;
        case "CREATE":
            return 2;
        case "DEACTIVATE":
            return 1;
    }
}
function move(direction) {
    return direction;
}
move("DOWN");
move("LEFT");
const myCoordinate = { lat: 4, lon: 7 };
console.log("Coor: ", myCoordinate);
function check(coord) { }
const myPishak = {
    name: "Kesha",
    color: "Oq",
    isTail: true,
    isHomeAnima: true,
};
myPishak.age = 2;
myPishak.color = "Qora";
console.log(myPishak);
const myCat = {
    name: "Qoravoy",
    color: "Malla",
    age: 3
};
export {};
//# sourceMappingURL=types.js.map