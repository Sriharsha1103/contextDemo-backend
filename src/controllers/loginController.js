const User = require('../models/User')

const loginUser = async (req, res) => {
    const { username, password } = req.body || {}

    console.log("Test", username, password)

    if (!username || !password) {
        return res.status(400).json({ message: 'username and password are required' })
    }

    const user = User.findOne({ username, password })
    if(user)
        return res.status(200).json({ message: 'Login successful' })
    else
        return res.status(401).json({ message: 'Invalid username or password' })
}

module.exports = {
    loginUser
}