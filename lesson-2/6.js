// Написать код который посчитает сумму всех элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [1, 2, 3, 4];

////////////////// Решение //////////////////

const array = [1, 2, 3, 4];
let sum = null;
for (const value of array) {
  sum += value;
}
console.log(sum);