//array

let nilai = [90, 80, 70, 100, 85];
for (let i = 0; i < nilai.length; i++) {
    console.log("Nilai =", nilai[i] + 5);
    
}

console.log(nilai);


//nilai[2] = 90;
//console.log(nilai[nilai.length - 1]);

let john = ["john", "Doe", 33, true];
let miranda = ["miranda", "Doe", 17, true];
let maria = ["maria", "Doe", 18, true];
console.log(john[john.length -1]);
console.log(john);

//toString()
console.log(john.toString());
//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));

//push()
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift()
john.shift()
console.log(john.join(" - "));

//unshift()
john.unshift("john");
john.unshift("Prof");
console.log(john.join(" - "));

//splice()
john.splice("john");
console.log(john.join(" - "));

//concat()
let nama = john.concat("lee","minho");
console.log(nama);

//slice()
let lee = ["josua", "Doe", 18, true];
let minho = ["josua", "Doe", 19, true];
let josua = ["josua", "Doe", 17, true];

console.log(lee);
console.log(minho);

//sort()
let kenzo = ["miranda", "Doe", 18, true];
kenzo.sort();

console.log(kenzo);

let umur = [18, 17, 20, 30, 19];

umur.sort();
console.log(umur);

//reverse()
let seojoon = ["miranda", "Doe", 18, true];

seojoon.reverse();

console.log(seojoon);