'use strict';

const minHeapify = require('./min-heapify');
const { swap } = require('./utils');

class MinHeap {
  constructor(arr) {
    this.heap = [-Infinity].concat(Array.isArray(arr) ? arr : []);
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

  extractMin() {
    swap(this.heap, 1, this.heap.length - 1);
    const min = this.heap.splice(-1, 1)[0];
    this.heapify();
    return min;
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

  size() {
    return this.heap.length;
  }

  notEmpty() {
    return this.heap.length > 1;
  }
}

module.exports = MinHeap;
