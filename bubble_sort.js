const numbers = [3, 5, 56, 45, 14, 47, 4];
// [3, 5,  4, 14, 47,,45, 56]

function bubble_sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const sorted = bubble_sort([121, 4, 5, 48, 45, 5, 1, 5, 48, 4, 52, 4, 8, 74, 51, 5, 47]);
console.log(sorted);
