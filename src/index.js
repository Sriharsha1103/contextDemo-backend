const mongoose = require('mongoose')

const app = require('./app')

// const URL = 'mongodb+srv://sriharsham_db_user:GiRFl0gMN60k6sUg@cluster0.qy6oepx.mongodb.net/StudentDb?retryWrites=true&w=majority'

const URL = 'mongodb://localhost:27017/StudentsDb'

mongoose
    .connect(URL)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(5001, () => {
            console.log('Server is running on port 5001')
        })
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err)
        process.exitCode = 1
    })