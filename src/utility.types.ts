// =========== Readonly ============

// interface IUser {
//     name: string;
//     pass?: string;
// }

// const user: Readonly<IUser> = {
//     name: "Admin",
//     pass: "qwerty"
// };

// user.name = "SuperAdmin";  Xato
// user.pass = "12345"; // Cannot assign to 'pass' because it is a read-only property.


// =============Required=============

// interface IRect {
//     width?: number;
//     height?: number;
// }

// const rect1: IRect = {
//     width: 3,
// }

// const rect2: Required<IRect> = {  // Property 'height' is missing in type '{ width: number; }' but required in type 'Required<IRect>
//     width: 5,
// }

// ============== Partial ========

// interface IRect {
//     width: number;
//     height: number;
// }

// const rect1: IRect = { // Property 'height' is missing in type '{ width: number; }' but required in type 'IRect'
//     width: 3,
// }

// const rect2: Partial<IRect> = {
//     width: 5,
// }


// ================Record<K, T> ============

// type WwwCofig = Record<
//     "port" | "domain" | "root" | "is_active",
//     string | number | boolean
// >;

// // type WwwCofig = Partial<Record<"port" | "domain", string | number>>;

// let wwwConfig: WwwCofig = {
//     domain: "https://domain.com",
//     port: 80,
//     root: "root",
//     is_active: true,
// }
// -----------

type WwwCofig = Partial<Record<
    "port" | "domain" | "root" | "is_active",
    string | number | boolean
>>;

let wwwConfig: WwwCofig = {
    domain: "https://domain.com",
    // port: 80,
    root: "root",
    is_active: true,
}

// ----------------------------------------

interface PageInfo {
    title: string;
}

type Page = "home" | "product" | "about";

const pages: Record<Page, PageInfo> = {
    about: {title: "about"},
    product: {title: "product"},
    home: {title: "home"}
}

// ==================  Exclude & Extract & Pick & Omit

type User = {
    _id: number;
    name: string;
    email: string;
    password?: string;
    createdAt: Date;
}

type UserNoMeta1 = Exclude<keyof User, "_id" | "createdAt">;
type UserNoMeta2 = Extract<keyof User, "name" | "email" | "password">;

type Kerakli = "name" | "email" | "password"; 
type UserNoMeta2_1 = Extract<keyof User, Kerakli> // tepadagi extract b-n bir xil 


type UserNoMeta3 = Pick<User, "name" | "email" | "password">
type UserNoMeta4 = Omit<User, "_id" | "createdAt">

// ===================== NonNullAble =========

type Type1 = NonNullable<string | null | number | undefined>; // string b-n number qoladi 

// ====================== InstanceType =========


// ================Paramatrs<T>========================

function func<T>(p0: T, p1: number, p2: string, p3: boolean, p4: object = {}) {}

type FunctionParams = Parameters<typeof func>;

// ======================// ConstructorParametrs<T> ============

class MyClass<T> {
    constructor(p0: T, p1: number, p2: string, p3: boolean, p4: object = {}) {}
}

type ClassParams = ConstructorParameters<typeof MyClass>

// =============================Awaited<T> ================

// // A = string
type A = Awaited<Promise<string>>;
type A1 = Awaited<Promise<Promise<string>>>;

// C = string | number | null | undefined
type C = Awaited<string | Promise<number> | null | number | undefined | string>;

