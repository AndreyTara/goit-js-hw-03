/**
 * функцію filterArray(numbers, value), яка приймає масив чисел
 * (numbers) та значення (value) як параметри. Функція повинна
 * повертати новий масив лише тих чисел із масиву numbers, які
 * більші за значення value.
 * @param {array} numbers - массив, який треба перевірити .
 * @param {number} value - число, значення елементу.
 * @returns {array} -  повертає массив.
 */

function filterArray(numbers, value) {
  const rezultArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (value < numbers[i]) {
      rezultArray.push(numbers[i]);
    }
  }
  return rezultArray;
}

console.log('Задача 3. Фільтрація масиву чисел');
// У консоль будуть виведені результати її роботи.
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
