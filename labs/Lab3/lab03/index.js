var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hola mundo! en Express, Atte: los zetas :v')
})

app.post('/', function (req, res){
    res.send('Llamada POST misma url')
})

app.put('/user', function (req, res){
    res.send('Recibimos un PUT en /user')
})
/*
app.detele('/user', function (req, res){
    res.send('Recibimos un DELETE en /user')
})
*/
app.use('/static', express.static('public'))
app.use(express.static('files'))

app.listen(3000, function (){
    console.log('Aplcacionde ejemplo escuchando en el puerto 3000!')
});