const numbers = [45, 64, 454, 87, 48, 4, 74, 84, 54, 87, 1, 574, 84, 75, 78];

function linear_search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
}

const index = linear_search(numbers, 454);
console.log(index);
