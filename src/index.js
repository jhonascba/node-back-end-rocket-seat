const { response } = require('express')
const express = require('express')

const app = express()

//projects se refere ao recuso do usuário
app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ])
})

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ])
})



app.listen(3333, () => {
    console.log('🚀 Back-end started!')
}) //definindo a porta e chamando uma função