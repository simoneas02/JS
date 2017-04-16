function sum(a, b) {
    return a + b;
}

// método principal
// só pode ter um default por arquivo
// pode ser importado com qualquer nome
// não precisar ser chamado com as chaves
export default sum;

/*--------------------------------*/

export function sub(a, b) {
    return a - b;
}

// named export
// permite ter vários exports dentro de um mesmo arquivo
// só pode chamar com o mesmo nome 
// o import precisa das chaves { sub }

/*--------------------------------*/

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

const PI = 3.14;

export { mult as multiplicacao, div, PI };

// named export
// permite ter vários exports dentro de um mesmo arquivo
// só pode chamar com o mesmo nome 
// o import precisa das chaves { sub }