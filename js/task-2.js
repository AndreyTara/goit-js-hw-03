/**
 * функцію під назвою makeArray, яка приймає три параметри:
 * firstArray (масив), secondArray (масив) і maxLength (число).
 * Функція повинна створювати новий масив, який містить усі елементи
 * з firstArray, а потім усі елементи з secondArray.
 * @param {array} firstArray - массив, який треба об'єднати .
 * @param {array} secondArray - массив, який треба об'єднати.
 * @param {number} maxLength - Число, максимальна довжина масива.
 * @returns {array} -  новий під'энаний firstArray до secondArray але довжине не більше за maxLength.
 */

function makeArray(firstArray, secondArray, maxLength) {
  const rezultArray = firstArray.concat(secondArray);
  if (rezultArray.length >= maxLength) {
    return rezultArray.slice(0, maxLength);
  }
  return rezultArray;
}

console.log('Задача 2. Композиція масивів');
// У консоль будуть виведені результати її роботи.
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
