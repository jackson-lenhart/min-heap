'use strict';

class MinHeap {
  constructor(arr) {
    this.heap = [-Infinity].concat(arr || []);
  }

  insert(value) {
    this.heap.push(value);
    const index = this.heap.length - 1;
    const parentIndex = Math.floor(index / 2);

    // perform swap if necessary
    if (this.heap[index] < this.heap[parentIndex]) {
      const temp = this.heap[parentIndex];
      this.heap[index] = this.heap[parentIndex];
      this.heap[parentIndex] = value;
    }
  }
}

module.exports = MinHeap;
