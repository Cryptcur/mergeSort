const { expect } = require('chai')

const {split, merge, mergeSort} = require('./mergesort')

const notSplit = [1, 2, 3, 4, 5, 6]


describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split(notSplit)).to.eql([[1, 2, 3], [4, 5, 6]])
  });
});

const notMerged1 = [1, 2, 3]
const notMerged2 = [4, 5, 6]

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge(notMerged1, notMerged2)).to.eql([1, 2, 3, 4, 5, 6])
  })
})

const notSorted = [3, 7, 1, 2, 4, 8, 9, 5]

  describe('MergeSort function', function(){
    it('is able to recursively call merge and split', function(){
      expect(mergeSort(notSorted)).to.eql([1, 2, 3, 4, 5, 7, 8, 9])
    });
  })
