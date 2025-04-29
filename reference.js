let a = 10;
let b = a;
b = 20;
console.log("nilai a:", a);
console.log("nilai b: ", b);

let data = { value: 10 };
let data2 = data;
data2.value = 20;
console.log("nilai data:", data);
console.log("nilai data2:", data2);

console.log([1, 2, 3]);
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse('{"numbers":[4,5,6]}'));

function add(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);