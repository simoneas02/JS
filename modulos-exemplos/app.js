
// importando método da biblioteca ramda
// * --> carrega tudo da lib
// as --> alias para o método (novo nome)
import * as R from 'ramda';

import sum, { sub, multiplicacao, div as dividir, PI } from './utils';

import react from 'react';
import reactDom from 'react-dom';

const arr1 = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 6, 1];

const arr3 = R.union(arr1, arr2);
const arr4 = R.uniq(arr1);

console.log(arr3);
console.log(arr1);

console.log(sum(20, 10))
console.log(sub(20, 10))
console.log(multiplicacao(20, 2))
console.log(dividir(20, 10))
console.log(PI)
