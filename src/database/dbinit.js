var level = require('level')
var db = level('db/')

function dberr(err) {
  if (err) return console.log('Ooops!', err)
}

db.put('testdata', JSON.stringify({msg: 'ok'}), dberr)
db.put('parameters', JSON.stringify(['param1', 'param2']))
