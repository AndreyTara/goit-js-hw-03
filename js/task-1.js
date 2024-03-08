/**
 * Перетворює заголовок в рядок, придатний для URL.
 * @param {string} title - Заголовок, який треба перетворити.
 * @returns {string} - Рядок, придатний для URL.
 */
function slugify(title) {
  // Заміна послідовностей пробілів на один тире
  return title.toLowerCase().split(' ').join('-');
}

console.log('Задача 1. Генератор slug');
// У консоль будуть виведені результати її роботи.
console.log(slugify('Arrays for begginers')); ///"arrays-for-begginers"
console.log(slugify('English for developer')); ///"english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); ///"ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); //"how-to-become-a-junior-developer-in-two-weeks"
