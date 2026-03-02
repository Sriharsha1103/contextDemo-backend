const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['student', 'admin'],
        default: 'student' // was 'user' (not in enum)
    }
})

module.exports = mongoose.model('User', UserSchema)