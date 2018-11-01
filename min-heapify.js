'use strict';

function minHeapify(i, arr) {
  if (i < 1) {
    return;
  }

  // initialize min index (mi) to be the input index (i)
  let mi = i;

  // get index of left and right parents
  const li = i * 2;
  const ri = i * 2 + 1;

  const size = arr.length;

  if (li < size && arr[li] < arr[mi]) {
    mi = li;
  }

  if (ri < size && arr[ri] < arr[mi]) {
    mi = ri;
  }

  if (mi !== i) {
    swap(arr, mi, i);
    minHeapify(mi, arr);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = minHeapify;
