const server = require('express')
const app = new server()

app.listen(6000, function(err){
    console.log('res method')
})

app.get('/', (req, res) => {
    res.send('hell o')
})
