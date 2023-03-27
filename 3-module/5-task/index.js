function getMinMax(str) {
  // Разбиваем строку на массив чисел и находим минимальное и максимальное значения
  const nums = str.match(/-?\d+(\.\d+)?/g).map(Number);
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  // Возвращаем объект с минимальным и максимальным значениями
  return { min, max };
}
