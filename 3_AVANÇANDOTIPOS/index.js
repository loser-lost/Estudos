"use strict";
//Arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
const nomes = ["matheus", "joao"];
// outra sitaxe array
const nums = [100, 200];
const names = ["catum", "saBones"];
// tipo any
const arr1 = [1, "Teste", true, [], { nome: "macos" }];
console.log(arr1);
arr1.push([1, 2, 3]);
//parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
