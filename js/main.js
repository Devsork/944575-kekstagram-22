/**
 * Выбор случайного числа из диапазона
 * Не использовать отрицательные числа
 * @param {number} min Минимальное число
 * @param {number} max Максимальное число
 */
function getRandom(min, max) {
  switch (true) {
    case min < 0:
      return 'Минимальное число должно быть положительным('
    case max < 0:
      return 'Максимальное число должны быть положительным('
    default:
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

getRandom(1, 10)

/**
 * Проверка на максимально допустимое количество символов
 * @param {string} string Текст
 * @param {nubmer} max Максимальная длина
 */
function getMaxLength(string, max) {
  return string.length <= max ? true : false
}

getMaxLength('Кекс', 10)
