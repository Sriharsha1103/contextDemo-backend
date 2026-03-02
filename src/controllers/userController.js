const User = require('../models/User')

// Add a new user

const addUser = async (req, res) => {
    // Accept both {username,...} and legacy {email,...}
    const username = req.body?.username ?? req.body?.email
    const { password } = req.body || {}

    if (!username || !password) {
        return res.status(400).json({ message: 'username (or email) and password are required' })
    }

    try {
        const user = new User({ username, password })
        await user.save()
        res.status(201).json({ message: 'User registered successfully' })
    } catch (err) {
        if (err && err.code === 11000) {
            return res.status(409).json({ message: 'Username already exists' })
        }
        if (err && err.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation error', error: err.message })
        }
        res.status(500).json({ message: 'Error registering user', error: err.message })
    }
}

const getUser = async (req, res) => {
    console.log("Fetching all users")
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message })
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user', error: err.message })
    }
}

module.exports = {
    addUser,
    getUser,
    getUserById
}