
function split(wholeArray) {
  let mid = Math.floor(wholeArray.length / 2)
  let firstHalf = wholeArray.slice(0, mid)
  let secondHalf = wholeArray.slice(mid)
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let output = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      output.push(arr1[i])
      i++
    } else {
      output.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length)  {
    output.push(arr1[i])
    i++
  }
  while (j < arr2.length)  {
    output.push(arr2[j])
    j++
  }

  return output
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr
  let [arr1, arr2] = split(arr)

  return merge(mergeSort(arr1), mergeSort(arr2))
}

module.exports = {
  split,
  merge,
  mergeSort
}
