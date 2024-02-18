/**
 * Crie uma função que recebe um número e eleve cada
 * dígito ao quadrado e retorne o novo número.
 * 
 * Exemplo squareDigits(3212) => output: 9414
 * 
 * @param {*} num 
 */
function squareDigits(num) {
    const numToArrayString = num.toString().split('')
    const arrayCalculate = numToArrayString.map((item) => String(Number(item) ** 2))
    const result = Number(arrayCalculate.join(''))
    console.log(result)
}

squareDigits(3212)