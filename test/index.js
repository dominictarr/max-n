
var tape = require('tape')

function random (n) {
  var a = [], l = n
  while(l--)
    a.push(Math.random()*1000)
  return a
}
var max = require('../')

function cmp (a, b) {
  return b - a
}
function _cmp (a, b) {
  return a - b
}

function naive (a, n, cmp) {
  return a.slice().sort(cmp).slice(0, 5)
}

tape('naive vs maxN 100', function (t) {
  var a = random(100)
  t.deepEqual(a.reduce(max(5, cmp)), naive(a, 5, cmp))
  t.deepEqual(a.reduce(max(5, _cmp)), naive(a, 5, _cmp))
  t.end()
})

tape('naive vs maxN 100, default compare', function (t) {
  var a = random(100)
  t.deepEqual(a.reduce(max(5)), naive(a, 5, cmp))
  t.deepEqual(a.reduce(max.min(5)), naive(a, 5, _cmp))
  t.end()
})


function bench (name, run) {
  var start = Date.now(); run();
  var time = Date.now() - start
  console.log('Bench:', name, time)
  return time
}

tape('bench max vs naive, 0.5 million items', function (t) {
  var a = random(500000)
  var act, exp
  var maxnT = bench('maxn', function () { act = a.reduce(max(5, cmp)) })
  var naiveT = bench('naive', function () { exp = naive(a, 5, cmp) })

  t.ok(maxnT < naiveT)

  t.deepEqual(act, exp)

  console.log(a.reduce(max(5)))
  console.log(a.reduce(max.min(5)))

  t.end()
})











