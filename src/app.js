const express = require('express')
const userRoutes = require('./routes/userRoutes')
const loginRoutes = require('./routes/loginRoutes')
const app = express()

const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3001', // Adjust this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', loginRoutes)

module.exports = app