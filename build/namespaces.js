const SECRET = "12345";
const PI = 3.14;
const getPass = (name, age) => `${name}${age}`;
const isEmpty = (data) => !data;
(function () {
    const SECRET = "12345";
    const PI = 3.14;
    const getPass = (name, age) => `${name}${age}`;
    const isEmpty = (data) => !data;
})();
var Utils;
(function (Utils) {
    const SECRET = "12345";
    const PI = 3.14;
    const getPass = (name, age) => `${name}${age}`;
    const isEmpty = (data) => !data;
})(Utils || (Utils = {}));
(function (Utils) {
    Utils.SECRET = "12345";
    const PI = 3.14;
    Utils.getPass = (name, age) => `${name}${age}`;
    Utils.isEmpty = (data) => !data;
    const user = "Salim";
})(Utils || (Utils = {}));
const myPass = Utils.getPass("Salim", 31);
const isSecret = Utils.isEmpty(Utils.SECRET);
var Aylana;
(function (Aylana) {
    const Pi = 3.14;
    Aylana.getArea = (r) => Pi * r * r;
})(Aylana || (Aylana = {}));
const aylana1 = Aylana.getArea(5);
export {};
//# sourceMappingURL=namespaces.js.map