'use strict';

class MinHeap {
  constructor(arr) {
    this.heap = [-Infinity].concat(arr || []);
  }
}

module.exports = MinHeap;
