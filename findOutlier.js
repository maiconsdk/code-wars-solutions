/**
 * Você recebe um array (que terá comprimento de pelo menos 3,
 * mas pode ser muito grande) contendo números inteiros.
 * A matriz é composta inteiramente de números inteiros ímpares
 * ou inteiramente composta de números inteiros pares, exceto por
 * um único número inteiro N. Escreva um método que receba a matriz
 * como argumento e retorne esse "valor discrepante" N.
 */

function findOutlier(array) {
    const odd = { indexes: [], length: 0 }
    const even = { indexes: [], length: 0 }

    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            odd.indexes.push(i)
            odd.length++
        } else {
            even.indexes.push(i)
            even.length++
        }
    }

    return odd.length > even.length ? array[even.indexes[0]] : array[odd.indexes[0]]
}

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2,6,8,10,3]))