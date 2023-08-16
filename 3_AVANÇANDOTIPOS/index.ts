//Arrays
let numbers: number[] = [1, 2, 3]
numbers.push(5)

console.log(numbers[2])

const nomes: string[] = ["matheus", "joao"]
// outra sitaxe array
const nums: Array<number> = [100,200]

const names: Array<string> = ["catum","saBones"]

// tipo any

const arr1: any = [1, "Teste", true, [], {nome:"macos"}]
console.log(arr1)
arr1.push([1,2,3])
//parametros tipados

function soma(a:number, b:number){
    console.log(a+b)
}

soma(4,5)