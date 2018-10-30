'use strict';

const assert = require('assert');

const MinHeap = require('./min-heap');

const tests = [
  {
    title: 'Handles the undefined case',
    assertion: function() {
      assert.deepStrictEqual(new MinHeap().heap, [-Infinity])
    }
  },
  {
    title: 'Prepends -Infinity to given array',
    assertion: function() {
      assert.deepStrictEqual(new MinHeap([1, 2, 3]).heap, [-Infinity, 1, 2, 3])
    }
  }
];

let accumulator = 0;

tests.forEach(function(test, index) {
  try {
    test.assertion();
    console.log('\x1b[32m', `${index + 1}. ${test.title}`, '\x1b[0m');
    accumulator++;
  }
  catch (err) {
    console.log('\x1b[31m', `${index + 1}. ${test.title}`, '\x1b[0m');
    console.error(err);
  }
});

console.log(
  '\nTest suite finished.\n'
  + `${accumulator} out of ${tests.length} tests passed`
);
