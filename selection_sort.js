const numbers = [45, 158, 48, 985, 954, 65, 968, 65, 65, 6, 85, 9, -5];

function selection_sort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}

const sorted = selection_sort(numbers);
console.log(sorted);
