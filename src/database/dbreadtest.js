var level = require('level')
var db = level('db/')

function dberr(err) {
  if (err) return console.log('Ooops!', err)
}

db.get('testdata', function (err, value) {
  if (err) return dberr(err)

  console.log(value)
})
