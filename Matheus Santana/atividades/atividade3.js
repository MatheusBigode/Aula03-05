qtdeFuncionarios = 5
totalMedia = 0
for (i = 0; i < qtdeFuncionarios; i ++){
    let salario1 = Math.random() * 3000
    let salario2 = Math.random() * 3000
    let salario3 = Math.random() * 3000
    let salario4 = Math.random() * 3000
    let salario5 = Math.random() * 3000
    let media = (salario1 + salario2 + salario3 + salario4 + salario5) /5
    totalMedia += media
    console.log("salario [",
                salario1.toFixed(2),
                salario2.toFixed(2),
                salario3.toFixed(2),
                salario4.toFixed(2),
                salario5.toFixed(2),
                "], média;[",
                media.toFixed(2),"]"
               )
}
totalMedia = totalMedia /qtdeFuncionarios
console.log("Média salarial", totalMedia.toFixed(2));