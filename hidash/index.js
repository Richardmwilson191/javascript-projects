module.exports = {
  forEach(arr, fn) {
    // for (i = 0; i < arr.length; i++) {
    //   fn(arr[i], i);
    // }

    for (let index in arr) {
      fn(arr[index], index);
    }
  },

  map(arr, fn) {
    for (let index in arr) {
      fn(arr[index], index);
    }
  }
};
