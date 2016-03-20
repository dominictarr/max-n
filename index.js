
function cmp (a, b) {
  return a < b ? 1 : a > b ? -1 : 0
}

module.exports = function (n, compare) {
  compare = compare || cmp
  return function reduce (ary, item) {
    if(!Array.isArray(ary))
      ary = reduce([], ary)
    if(ary.length < n) {
      ary.push(item)
      ary.sort(compare)
    }
    else if(compare(item, ary[n-1]) < 0) {
      ary.push(item)
      ary.sort(compare)
    }

    if(ary.length > n) ary.pop()

    return ary
  }

}

module.exports.min = function (n, compare) {
  compare = compare || cmp
  return module.exports (n, function (a, b) { return compare(a, b)*-1 })
}







