// ----------function multipli-----------
//the first argument (num1) gets multiplied with the second (num2)
//gives back the sum

let multipli = (num1, num2) => {
    let sum = num1
    for (let i = 1; i < num2 ; i++) sum += num1
    return sum}


// ----------function modulo-----------
// the first argument(num1) gets devided by the second(num2) 
// gives back the rest

let modulo = (num1, num2) => {
    let sum = num1
    while (sum > 0){sum -= num2}
    if (sum < 0){sum += num2}
    return sum}

// ----------function devide-----------
//the first argument(num1) gets devided by the second(num2)
//gives back ceiled values

let devide = (num1, num2) => {
    let i = 0
    while(num1 > 0){
        num1 -= num2
        i++}
    return i}


// ----------testarea-----------

let erste = 16      //num1
let zweite = 7      //num2

console.log("ergebnis multipli" , multipli(erste,zweite))
console.log("ergebnis modulo" ,modulo(erste,zweite))
console.log("ergebnis devide" ,devide(erste,zweite))