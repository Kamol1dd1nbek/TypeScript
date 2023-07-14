//BOOLEAN
const isActive: boolean = true;
const isMale: boolean = false;
const isBool = true; //literal
let isNumber = true;
let isNumber1: boolean;

// isNumber = 7 //xato

//Number

const num: number = 5;
const PI: number = 3.4;
let bir = 1;
let ikki: number = 2;

//String

const lang :string = "TypeScript";
let str = "Salom";
let str1: string;

// ConCat

let num2 = "7";
let c = num + num2;
let summa = num + Number(num2);

console.log(typeof c);
console.log(c);

console.log(typeof summa);
console.log(summa);

// Any 
let myVar: any = 5;
// mayVar = "sds";
myVar = "sds";
myVar = true;

let myVar2 = myVar as number;
let myVar3 = <number>myVar;

myVar2 = 7;

console.log(myVar2);
console.log(typeof myVar2);

//Array
const numArray: number[] = [1, 2, 3, 4, 5, 6];
const numArray1: Array<number> = [1, 2, 3,4];

const numArray2 = [1, 2, 3, 4];
let numArray3 = [1, 2, 3, 4];

const strArray: string[] = ["Salom", "Xayr"];
const strArray2: Array<string> = ["Salom", "Xayr"]

// Tuple
const host: [string, number] = ["localhost", 3000];
console.log(host);

const address: [string, number, ...boolean[]] = [
    "Tashkent",
    12,
    false,
    true,
    true
];

// Alias

type Son = number;
let son1: Son = 2; // str olmaydi

type Login = string;
const login: Login = "sumermarket";

// Union

type StrNum = string | number;

const strNumArray: StrNum[] = [1, 2, "uch", 4, "besh"];

let sdArray = [1, 2, "uch", 4, "besh"];
let sdArray1: any = [1, 2, "uch", 4, "besh"];

// sdArray.push(true); Xato
sdArray1.push(true);

type MyType = string | null | undefined;

let my1: MyType;
my1 = undefined;

let userId: StrNum = 5;

function printId(id: StrNum) {
    if (typeof id == "number") {
        console.log(id * 2);
    } else {
        console.log(id.toLowerCase());
    }
}

function getUser(user: string | string[]): string[] | string {
    if (Array.isArray(user)) {
        console.log(user.join(", "));
        return user;
    } else {
        console.log(user);
        return user;
    }
}

getUser(["admin", "creator", "user"]);
getUser("Salom");
// getUser(123); //Xato


//function return type
//void

function salomlash(name: string) {
    console.log("Salom", name);
}

salomlash("Karim");

// number

function sum(a: number, b:number): number {
    return a + b;
}

//never
function myError(message: string): never {
    throw new Error(message);
}

function cheksiz():never {
    while(true) {
        console.log("Salom");
    }
}

//literal type

const a2 = "ikki";
let a1: "bir" = "bir";
a1 = "bir";

type AdminAction = "CREATE" | "ACTIVATE" | "DEACTIVATE";

function doActivate(action:AdminAction) {
    switch (action) {
        case "ACTIVATE":
            return 1;
        case "CREATE":
            return 2;
        case "DEACTIVATE":
            return 1;
    
        // default:
        //     throw new Error("Bu bajarilmasligi kerak"); //ishlamaydi
    }
}

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
function move(direction: Direction) {
    return direction;
}
move("DOWN");
move("LEFT");
// move("jnknm"); // xato

//object types
type LatLon = { lat: number; lon: number };

const myCoordinate: LatLon = {lat: 4, lon: 7};

console.log("Coor: ", myCoordinate);

//intereface

interface ICoord {
    lat: number;
    lon: number;
}

function check(coord: ICoord) {}

interface IMushuksimon {
    name: string;
    age?: number;
}

interface IPishak extends IMushuksimon {
    color: string;
    isTail?: boolean;
}

interface IPishak {
    isHomeAnima: boolean;
}

const myPishak: IPishak = {
    name: "Kesha",
    color: "Oq",
    isTail: true,
    isHomeAnima: true,
}

myPishak.age = 2;
myPishak.color = "Qora";
console.log(myPishak);


type Animal = {
    name: string;
    age?: number
}

type Cat = Animal & {
    color: string;
    tail?: boolean
}

const myCat: Cat = {
    name: "Qoravoy",
    color: "Malla",
    age: 3
}

interface IRect {
    readonly lineWidth: number;
    color?: string;
    size: {
        width: number;
        height: number;
    };
}

const rect1: IRect ={
    lineWidth: 2,
    size: {
        width: 30,
        height: 20,
    },
}

rect1.color = "Blue";
// rect1.lineWidth = 3;
rect1.size.width = 50;

interface IRectArea extends IRect {
    getArea: () => number;
}

const rect2: IRectArea = {
    lineWidth: 2,
    size: {
        width: 30,
        height: 20,
    },
    getArea():number {
        return this.size.width * this.size.height;
    },
}

console.log(rect2.getArea());


interface IStyle {
    [key: string]: string | number;
}

const css: IStyle = {
    border: "3px solid #000",
    borderRadius: "5px",
    backGroundColor: "blue",
    color: "yellow",
    line: 2
}

interface IConnection {
    host: string;
    port: number;
}

function connect(connection: IConnection | "default") {
    if (connection == "default") {
        console.log("default ma'lumotlar yuklandi");
    } else {
        console.log(connection);
    }
}

connect({ host: "localhost", port: 223 });
connect("default");


//ENUM

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

Direction1.Right;
console.log(Direction1.Right);

Direction2.Left;
// ===

enum Users {
    user,
    admin,
    superuser
}

console.log(Users.admin);
console.log(Users[1]);

// ========== function ===========

interface IPosition {
    x: number;
    y: number;
}

function position() : IPosition;
function position(a: number): IPosition;
function position(a: number, b:number): IPosition;

function position(a?:number, b?:number) {
    if (!a && !b) {
        console.log("Salom");
        return {x: undefined, y: undefined};
    }
    if (a && !b) {
        return {x : a, y: undefined};
    }

    return { x : a, y: b };
}
console.log(position(1));


// =========== Genirics ========

function myLog(mes: string | number) : string | number {
    console.log(mes);
    return mes;
}

myLog(3);
myLog("Start");
// myLog(true); // xato

function myLog1<T>(mes: T): T {
    console.log(mes);
    return mes;
}

myLog1<number>(12);
myLog1<string>("besh");
myLog1<boolean>(true);



// ////// -------

function myLog2<T, K>(mes: T, arr: K[]): K[] {
    console.log(mes);
    return arr;
}

myLog2(true, ["12", 121]);
console.log(myLog2<string, number>("1", [12, 121]));


// ==============Amalda ============


interface ILength {
    length: number;
}
function myLog3<T extends ILength, K>(password: T, arr: K[]): K[] {
    if (password.length < 10) console.log(password.length);
    return arr;
}

myLog3<string, number>("Salomlar", [1, 2, 3]);
// myLog3(true, [1, 2]);

myLog3([1, 2, 3], [1, 2]);
// myLog3(2, [1, 2]); // xato

// ============Amalda =================

const Numbers: Array<number> = [1, 2, 3];
const Numbers1: number[] = [1, 2, 3];
const Strings: Array<string> = ["1", "2", '3'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(reverse(Numbers));
console.log(reverse(Numbers1));
console.log(reverse(Strings));


// ========= Amalda =========

const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Ok");
    }, 2000);
});

promise.then(data => {
    console.log(data.toLowerCase());
});

// ================ Amalda =================

// function mergeObj(obj1: object, obj2: object) {  //1
//     return Object.assign({}, obj1, obj2);
// }

// function mergeObj<T, K>(obj1: T, obj2: K) {     //2
//     return Object.assign({}, obj1, obj2);
// }

function mergeObj<T extends object, K extends object>(obj1: T, obj2: K) {
    return Object.assign({}, obj1, obj2);
}

const mergeObj1 = mergeObj({user: "admin"}, {password: "qwerty"});
const mergeObj2 = mergeObj({type: "rectangle"}, {area: 100});
const mergeObj3 = mergeObj({model: "BMW"}, {speed: 280});
// const mergeObj4 = mergeObj(true, "salom");

console.log(mergeObj1.user);
console.log(mergeObj3.model);


// // // // ------------ type of -----

let s1 = "Salom";

let s2: typeof s1;

// ============== keyof =============

type Coord = {
    lat: number;
    lon: number;
};

type P = keyof Coord;

let a5: P = "lat";
let b5: P = "lon";

console.log(a5);
// -----------

interface ICoord1 {
    lat: number;
    lon: number;
}

type P1 = keyof ICoord1;
let key: P1;

key = "lat";
key = "lon";

// ============== generic keyof amalda ======

type User = {
    _id: number;
    name: string;
    email: string;
    password?: string;
    createdAt: Date;
};

type UserNoMeta1 = Exclude<keyof User, "_id" | "createdAt">;
type UserNoMeta2 = Pick<User, "name" | "email" |"password">;

let user1 : UserNoMeta1 = "name";

let user2 : UserNoMeta2 = {
    name: "Admin",
    email: "admin@gmail.com",
    password: "1234"
};

// ============= generic keyof amalda ========

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


function getObjValue<O extends object, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}

//  // // ==============

function log(a: string | null) {
    // if (a !== null) {
    //     return a.toLowerCase();
    // }
    // return a;

    return a!.toLowerCase(); // anniq a string bo'lishiga ishonilganda
}

console.log(log("null emas"));


// ======== = ===

const big : bigint = BigInt("100");

console.log(big);

const sym1 : symbol = Symbol("Id");
const sym2 : symbol = Symbol("Id");

console.log(sym1);
console.log(sym2);
console.log(sym1 == sym2); 

// ============ Class ============

class Bags {
    readonly name: string;
    color: string;
    readonly material: string;
    price: number;

    constructor (name: string, color: string, material: string, price: number) {
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
// bag1.name = "Ilon"; // xatolik



class NewstyleBags {
    color: string;
    material: string;

    constructor (
        readonly name: string,
        color: string,
        material: string,
        readonly  price: number
        )
        {
        this.color = color;
        this.material = material;
        }
    info() {
        return `${this.name} - ${this.price}`;
    }
}

class NewstyleBags1 {
    constructor (
        readonly name: string,
        public color: string,
        private material: string,
        readonly  price: number
        )
        {}
    info() {
        return `${this.name} - ${this.price}`;
    }
}

const newbag1 = new NewstyleBags("Dracony", "mettalic", "dracon-teri", 9000);

console.log(newbag1);


// ====================

class Millat {
    constructor (public name:string, protected tili: string, private _dini:string, private _age: number)
    {}

    set age(newAge : number) {
        this._age = newAge;
    }

    set dini(religious:string){
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
    constructor (
        name: string, age: number, tili: string, dini: string, public history: string
        ){
        super(name, tili, dini, age);
    }

    public setLang(lang:string) {
        this.tili = lang;
        // this._dini // otasini private xususiyati yopiq
    }

    override about() {
        return `${super.about()}, dini: ${this.dini}, tarixi: ${this.history}`;
    }
}

const uzbek1 = new Uzbek("Uzbek", 23, "uzbek", "Islom", "Buyuk");
uzbek1.setLang("uzbek tili");
uzbek1.dini = "Islom dini";
console.log(uzbek1.dini);
uzbek1.age = 44;

// uzbek1._age = 15; // xato
// console.log(uzbek1._dini); //xato
console.log(uzbek1);


// =================== Abstract ====================