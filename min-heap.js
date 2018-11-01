'use strict';

const { heapify } = require('./utils');

class MinHeap {
  constructor(arr) {
    this.heap = [-Infinity].concat(arr || []);
    heapify(1, this.heap);
  }

  insert(value) {
    this.heap.push(value);
    heapify(1, this.heap);
  }
}

module.exports = MinHeap;
