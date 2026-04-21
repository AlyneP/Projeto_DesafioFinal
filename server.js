const express = require('express')

const { criarBanco } = require('./database')

const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors()) 

//Rota principal
app.get('/', (req, res) => {
    res.send(`
        <body>
            <h1>Rio Alerta</h1>
            <h3>Lista de pessoas desaparecidas após enchente</h3>
            <p>Endpoint que leva as informações: /desaparecidos</p>
        </body>
        `)
})

// Rota da lista:
app.get('/desaparecidos', async (req, res) => {
    const db = await criarBanco()
    const listaDesaparecidos = await db.all(`SELECT * FROM desaparecidos`)
    res.json(listaDesaparecidos)
})




//Porta do server

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})