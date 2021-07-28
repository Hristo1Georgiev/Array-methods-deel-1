
// Deel A
const addTheWordCool = function (array) {
    array.push("cool")
    return array
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// Deel B
const amountOfElementsInArray = (fruit) => {
    return fruit.length;
};
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// 3

//Deel C
const selectBelgiumFromBenelux = (land) => land[0];
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

// Deel D
const lastElementInArray = (dier) => dier[dier.length - 1];
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

// Deel E
const presidents = ["Trump", "Obama", "Bush", "Clinton"];
const impeachTrumpSlice = function (array) {
    return presidents.slice(1);
}
const impeachTrumpSplice = function (array) {
    return presidents.splice(1);
}
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// Deel F
const stringsTogether = strings => strings.join(" ");
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

// Deel G
//combineArrays([1, 2, 3], [4, 5, 6])
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(combineArrays = array1.concat(array2));
  // resultaat: [1,2,3,4,5,6]