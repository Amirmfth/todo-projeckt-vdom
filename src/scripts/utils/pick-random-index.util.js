export function pickRandomIndex(arr) {
  var item = arr[Math.floor(Math.random() * arr.length)];

  return item;
}