# max-n

construct a reduce function that returns the maximum (or minimum) N values in a dataset.

## example

``` js
var maxN = require('max-n')

//get the top 5 items in an un ordered array
var top5 = arrayOfRandomNumbers.reduce(maxN(5))

//find the bottom 5 elements
var bottom5 = arrayOfRandomNumbers.reduce(maxN.min(5))
```

# api

# max(integer: n, compare(a, b) => {1,0,-1}?) => reduce (ary, item)

take an integer and an optional compare function, return a reduce
function that will compute the top N items in it's input.

# max.min (n, compare) => reduce

same as above, but compare function will be flipped around,
using the lowest values instead of the highest.

## License

MIT

