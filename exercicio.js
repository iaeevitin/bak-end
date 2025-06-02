const furiaCS = ["FalleN","chelo","skullz","yuurih","KSCERATO"];
// Exercícios de fixação
// Resolva cada questão e imprima a resposta no terminal usando "console.log()"
// 1) Use a função .indexOf para armazenar o índice do jogador "chelo"
const ind=furiaCS.indexOf("chelo")

// 2) Usando a função .splice, substitua "chelo" e "skullz" por "molodoy" e "YEKINDAR"
// ** Use o índice encontrado na questão 1
furiaCS.splice(ind,2,"molodoy","YEKINDAR")
console.log(furiaCS)
// 3) Usando a função .map, crie uma lista com os caracteres maiúsculos (usar .toUpperCase)
const maiúsculos=furiaCS.map((jog) => jog.toUpperCase())
console.log(maiúsculos)
// 4) Usando a função .sort, ordene a lista com os nomes maiúsculos
const ordenada=maiúsculos.sort()
console.log(ordenada)
// 5) Usando a função .filter, filtre apenas os nomes que começam com "y"
const filtro=ordenada.filter((jog) => jog[0]=="Y")
console.log(filtro)