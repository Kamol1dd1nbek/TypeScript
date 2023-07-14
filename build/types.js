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
const rect1 = {
    lineWidth: 2,
    size: {
        width: 30,
        height: 20,
    },
};
rect1.color = "Blue";
rect1.size.width = 50;
const rect2 = {
    lineWidth: 2,
    size: {
        width: 30,
        height: 20,
    },
    getArea() {
        return this.size.width * this.size.height;
    },
};
console.log(rect2.getArea());
const css = {
    border: "3px solid #000",
    borderRadius: "5px",
    backGroundColor: "blue",
    color: "yellow",
    line: 2
};
function connect(connection) {
    if (connection == "default") {
        console.log("default ma'lumotlar yuklandi");
    }
    else {
        console.log(connection);
    }
}
connect({ host: "localhost", port: 223 });
connect("default");
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
Direction1.Right;
console.log(Direction1.Right);
Direction2.Left;
var Users;
(function (Users) {
    Users[Users["user"] = 0] = "user";
    Users[Users["admin"] = 1] = "admin";
    Users[Users["superuser"] = 2] = "superuser";
})(Users || (Users = {}));
console.log(Users.admin);
console.log(Users[1]);
function position(a, b) {
    if (!a && !b) {
        console.log("Salom");
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined };
    }
    return { x: a, y: b };
}
console.log(position(1));
function myLog(mes) {
    console.log(mes);
    return mes;
}
myLog(3);
myLog("Start");
function myLog1(mes) {
    console.log(mes);
    return mes;
}
myLog1(12);
myLog1("besh");
myLog1(true);
function myLog2(mes, arr) {
    console.log(mes);
    return arr;
}
myLog2(true, ["12", 121]);
console.log(myLog2("1", [12, 121]));
function myLog3(password, arr) {
    if (password.length < 10)
        console.log(password.length);
    return arr;
}
myLog3("Salomlar", [1, 2, 3]);
myLog3([1, 2, 3], [1, 2]);
const Numbers = [1, 2, 3];
const Numbers1 = [1, 2, 3];
const Strings = ["1", "2", '3'];
function reverse(array) {
    return array.reverse();
}
console.log(reverse(Numbers));
console.log(reverse(Numbers1));
console.log(reverse(Strings));
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Ok");
    }, 2000);
});
promise.then(data => {
    console.log(data.toLowerCase());
});
function mergeObj(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const mergeObj1 = mergeObj({ user: "admin" }, { password: "qwerty" });
const mergeObj2 = mergeObj({ type: "rectangle" }, { area: 100 });
const mergeObj3 = mergeObj({ model: "BMW" }, { speed: 280 });
console.log(mergeObj1.user);
console.log(mergeObj3.model);
let s1 = "Salom";
let s2;
let a5 = "lat";
let b5 = "lon";
console.log(a5);
let key;
key = "lat";
key = "lon";
let user1 = "name";
let user2 = {
    name: "Admin",
    email: "admin@gmail.com",
    password: "1234"
};
const person = {
    name: "Salim",
    age: 33
};
const car = {
    model: "Hundai",
    marka: "Solaris",
    color: "white"
};
console.log(getObjValue(person, "name"));
console.log(getObjValue(person, "age"));
console.log(getObjValue(car, "model"));
console.log(getObjValue(car, "color"));
function getObjValue(obj, key) {
    return obj[key];
}
function log(a) {
    return a.toLowerCase();
}
console.log(log("null emas"));
const big = BigInt("100");
console.log(big);
const sym1 = Symbol("Id");
const sym2 = Symbol("Id");
console.log(sym1);
console.log(sym2);
console.log(sym1 == sym2);
class Bags {
    constructor(name, color, material, price) {
        this.name = name;
        this.color = color;
        this.material = material;
        this.price = price;
    }
    info() {
        return `${this.name} - ${this.price}`;
    }
}
const bag1 = new Bags("Dragon", "metallic", "dracon-teri", 7000);
console.log(bag1.info());
bag1.price = 5000;
class NewstyleBags {
    constructor(name, color, material, price) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.material = material;
    }
    info() {
        return `${this.name} - ${this.price}`;
    }
}
class NewstyleBags1 {
    constructor(name, color, material, price) {
        this.name = name;
        this.color = color;
        this.material = material;
        this.price = price;
    }
    info() {
        return `${this.name} - ${this.price}`;
    }
}
const newbag1 = new NewstyleBags("Dracony", "mettalic", "dracon-teri", 9000);
console.log(newbag1);
class Millat {
    constructor(name, tili, _dini, _age) {
        this.name = name;
        this.tili = tili;
        this._dini = _dini;
        this._age = _age;
    }
    set age(newAge) {
        this._age = newAge;
    }
    set dini(religious) {
        this._dini = religious;
    }
    get age() {
        return this._age;
    }
    get dini() {
        return this._dini;
    }
    about() {
        return `Millati: ${this.name}, tili: ${this.tili}`;
    }
}
class Uzbek extends Millat {
    constructor(name, age, tili, dini, history) {
        super(name, tili, dini, age);
        this.history = history;
    }
    setLang(lang) {
        this.tili = lang;
    }
    about() {
        return `${super.about()}, dini: ${this.dini}, tarixi: ${this.history}`;
    }
}
const uzbek1 = new Uzbek("Uzbek", 23, "uzbek", "Islom", "Buyuk");
uzbek1.setLang("uzbek tili");
uzbek1.dini = "Islom dini";
console.log(uzbek1.dini);
uzbek1.age = 44;
console.log(uzbek1);
export {};
//# sourceMappingURL=types.js.map