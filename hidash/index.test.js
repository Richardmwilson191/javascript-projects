const assert = require('assert');

const { forEach, map } = require('./index');

it('The forEach function', () => {
  let sum = 0;
  forEach([1, 2, 3], value => {
    sum += value;
  });

  assert.strictEqual(sum, 6);
});

it('The map function', () => {
  const oldArr = [1, 2, 3];
  let newArr = [];
  map(oldArr, value => {
    newArr.push(value * value);
  });

  assert.deepStrictEqual(newArr, [1, 4, 8]);
  // for (let index in newArr) {
  //   assert.strictEqual(newArr[index], oldArr[index] * oldArr[index]);
  // }
});
