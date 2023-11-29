import express from 'express'
import { signup, login } from './UserOperations.js'

const router = express.Router()

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const response = await login(email, password)
    res.send(JSON.stringify(response));
})

router.post('/signup', async (req, res) => {
    const { email, password } = req.body
    const response = await signup(email, password);
    res.send(JSON.stringify(response));
})

export default router