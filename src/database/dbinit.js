var level = require('level')
var db = level('db/')

function dberr(err) {
  if (err) return console.log('Ooops!', err)
}

db.put('testdata', JSON.stringify({ msg: 'ok' }), dberr)

db.put('simulationStatus', JSON.stringify({
  1: 'Pending',
  2: 'Started',
  3: 'Finished'
}))
