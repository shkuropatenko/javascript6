// Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [1, 2, 3, 4, 5, 6];

////////////////// Решение //////////////////

const array = [1, 2, 3, 4, 5, 6];
let sum = null;
for (const value of array) {
  if (!(value % 2) && value > 3) {
    sum += value;
  }
}
console.log(sum);