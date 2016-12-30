const express = require('express')
const jade = require('jade')
const app = express()
const favicon = require('serve-favicon')

app.set('view engine', 'jade')
app.set('port', process.env.PORT || 3000)

app.use(favicon(__dirname + '/favicon.ico'))
app.use(express.static(__dirname + '/static'))

app.get('/', function(req, res) {
  res.render('help.jade')
})

app.get('/:path', function(req, res) {
  res.render(`${req.params.path}.jade`)
})

app.listen(app.get('port'));
console.log('stuff happening ¯\_(ツ)_/¯ *:', app.get('port'))