const SECRET : string = "12345";
const PI: number = 3.14;
const getPass = (name: string, age: number): string => `${name}${age}`;
const isEmpty = <T>(data: T): boolean => !data;

// ES5 Module

(function () {
    const SECRET : string = "12345";
    const PI: number = 3.14;
    const getPass = (name: string, age: number): string => `${name}${age}`;
    const isEmpty = <T>(data: T): boolean => !data;
})();

// Define namespace

namespace Utils {
    const SECRET : string = "12345";
    const PI: number = 3.14;
    const getPass = (name: string, age: number): string => `${name}${age}`;
    const isEmpty = <T>(data: T): boolean => !data;
}

// Export data from Namespace => bor bulsa ustidan yozib yuboradi
namespace Utils {
    export const SECRET : string = "12345";   // export qiliw kk tawqarida kk  bulsa
           const PI: number = 3.14;
    export const getPass = (name: string, age: number): string => `${name}${age}`;
    export const isEmpty = <T>(data: T): boolean => !data;
    const user = "Salim";
}

const myPass = Utils.getPass("Salim", 31); //Salim31
const isSecret = Utils.isEmpty(Utils.SECRET); // "false"

namespace Aylana {
    const Pi: number = 3.14;
    export const getArea = (r: number) : number => Pi * r * r;
}

const aylana1 = Aylana.getArea(5);

