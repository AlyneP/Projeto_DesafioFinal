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

//Buscar desaparecido pelo id 
app.get('/desaparecidos/:id', async (req, res) => {
    const { id } = req.params
    const db = await criarBanco()
    const desaparecido = await db.all( `SELECT * FROM desaparecidos WHERE id = ?`, [id] )
    res.json(desaparecido)
})


//Adicionar uma nova pessoa na lista
app.post('/desaparecidos', async (req, res) => {
    const { nome, idade, cidade, fisionomia, ultima_localizacao, data_desaparecimento} = req.body
    const db = await criarBanco()

    await db.run(`
        INSERT INTO desaparecidos (nome, idade, cidade, fisionomia, ultima_localizacao, data_desaparecimento)
        VALUES (?, ?, ?, ?, ?, ?)`, [nome, idade, cidade, fisionomia, ultima_localizacao, data_desaparecimento])

        res.send(`${nome} registrado.`)
    })


//Atualizar status da pessoa
app.put('/desaparecidos/:id', async (req, res) => {

    const { id } = req.params
    const { status } = req.body

    const db = await criarBanco()

    await db.run(
        `UPDATE desaparecidos 
         SET status = ?
         WHERE id = ?
         `, [status, id])

    res.send(`${id} teve o status atualizado`)
})


//Remover pessoa da lista
app.delete('/desaparecidos/:id', async (req, res) => {
    const { id } = req.params
    const db = await criarBanco()

    await db.run(`DELETE FROM desaparecidos WHERE id = ?`, [id])

    res.send(`O ID ${id} foi removido com sucesso`)
})


//Porta do server

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})