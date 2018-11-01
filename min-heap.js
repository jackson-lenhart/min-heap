'use strict';

const minHeapify = require('./min-heapify');

class MinHeap {
  constructor(arr) {
    this.heap = [-Infinity].concat(arr || []);
    this.heapify();
  }

  heapify() {
    const n = this.heap.length;
    for (let i = Math.floor(n / 2); i >= 1; i--) {
      minHeapify(i, this.heap);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapify();
  }

  remove(index) {
    this.heap.splice(index, 1);
    this.heapify();
  }

  update(index, value) {
    if (this.heap[index] !== undefined)  {
      this.heap[index] = value;
      this.heapify();
    }
  }
}

module.exports = MinHeap;
