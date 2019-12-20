const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, resp) => {
    resp.render('home')
})

app.listen(3000, (err) =>{
    if(err){
        console.log("Não foi possivel rodar o servidor", err)
    }else{
        console.log("Servidor rodando")
    }
})