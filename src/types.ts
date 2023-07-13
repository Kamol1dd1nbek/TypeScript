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