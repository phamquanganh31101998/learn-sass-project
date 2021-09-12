var Mouse = require('./mouse')
var Cat = require('./cat')
var moment = require('moment')


var mickey = new Mouse('black')

var tom = new Cat()
tom.eat(mickey)

var now = moment()
console.log(now)