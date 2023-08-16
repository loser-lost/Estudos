//Nubers aula 1
let x: number = 10
console.log(x)
// let x define a variavel
// console log imprime no console.
x = 16
// pode atribuir a um valor de forma "solta"

console.log(typeof x)
// verifica no console o tipo da variavel

const y: number = 15.00
// numeros quebrados tambem sao number
console.log(typeof y)
console.log(y)

console.log(y.toPrecision(3))

// 2 - String
const firstname: string = "matheus"
console.log(firstname.toUpperCase())

let fullname: string

const lastname: string = "silva"

fullname = firstname +""+lastname

console.log(fullname)
console.log(typeof fullname)

//3- boolean

let a:boolean = false
 
console.log(a)
console.log(typeof a)

a = true
console.log(a)

// inference e anotation
const aan:string = "teste"

let inf = "teste"
console.log("testando")
 