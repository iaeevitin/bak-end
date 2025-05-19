const strings = ["banana", "maçã", "tomate", "goiaba"]
const numeros = [20, 40, 80, 10]

strings .push("abacate")
console.log(strings)

strings.unshift("jaca")
console.log(strings)

strings.splice(3,1)
console.log(strings)

strings.splice(3,0,"Pêra","uva")
console.log(strings)

strings.pop()
console.log(strings)

