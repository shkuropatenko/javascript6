// С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [2, 5, 9, 15, 0, 4];

////////////////// Решение //////////////////

const array = [2, 5, 9, 15, 0, 4];
for (const value of array) {
  if (value > 3 && value < 10) {
    console.log(value);
  }
}